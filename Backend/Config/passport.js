const passport=require('passport')
const {Strategy,ExtractJwt}=require('passport-jwt')
const LocalStrategy=require('passport-local')
const googleStrategy=require('passport-google-oauth20').Strategy
const User=require('../Model/UserModal')
require('dotenv').config();

passport.use
(new LocalStrategy(
    {
        usernameField:'email',
        passwordField:'password'
    },
    async (email,password,done)=>{
        try {
            const user=await User.findOne({email});

            if(!user){
                return done(null,false,{message:'User not Exists!'})
            }
            const isMatch=await user.comparePassword(password);
            if(!isMatch){
                return done(null,false,{message:'Invalid Credentials!'})
            }
            return done(null,user)
        } catch (error) {
            console.log(error);
            
            return done(error)
            
        }
    }
))

const opts={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET_KEY
}

passport.use(
    new Strategy(opts,async(jwt_payload,done)=>{
        try {
            const user=await User.findById(jwt_payload.user_id)
            if(!user){
                return done(null,false)
            }
            return done(null,user)
        } catch (error) {
            return done(error,false)
            
        }
    })
)


passport.use(new googleStrategy(
    {  
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL, // ✅ Use environment variable
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                user = await User.create({
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    profilePicture: profile.photos[0].value,
                    role: 'User'
                });
            }
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    }
));

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser(async(id,done)=>{
    try {
        const user=await User.findById(id)
        done(null,user)
    } catch (error) {
        done(error,null)
    }
})
module.exports=passport
