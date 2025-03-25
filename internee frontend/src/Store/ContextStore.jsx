import { useContext, createContext, useEffect, useState, useCallback } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const url = "https://backendproj-five.vercel.app";

  const [AdminLoginOpen, setAdminLoginOpen] = useState(false);
  const [AdminSignupOpen, setAdminSignupOpen] = useState(false);
  const [InterneeLoginOpen, setInterneeLoginOpen] = useState(false);
  const [InterneeSignupOpen, setInterneeSignupOpen] = useState(false);
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("Jwt Token"));
  const [AdminKey, setAdminKey] = useState(localStorage.getItem("Admin Key"));
  const [UserSignupOpen, setUserSignupOpen] = useState(false);
  const [UserLoginOpen, setUserLoginOpen] = useState(false);
  const [JobsCategories, setJobsCategories] = useState([]);
  const [jobbyquery, setjobbyquery] = useState([]);
  const [jobresponse, setjobresponse] = useState({});
  const [SuccessMessage, setSuccessMessage] = useState(null);
  const [selecteditem, setselecteditem] = useState("");
  const [categoryitem, setcategoryitem] = useState("");
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState({ profilePicture: "", name: "", email: "" });
  const [filtercourse, setfiltercourse] = useState([]);
  const [Instructors, setInstructors] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [forgetpasswordmodalopen, setforgetpasswordmodalopen] = useState(false);
  const [otpmodalopen, setotpmodalopen] = useState(false);
  const [updatepasswordmodalopen, setupdatepasswordmodalopen] = useState(false);

  const SaveTokenToLs = (token) => {
    localStorage.setItem("Jwt Token", token);
    setJwtToken(token); // Sync state with localStorage
  };

  const SaveAdminKeyToLs = (adminKey) => {
    localStorage.setItem("Admin Key", adminKey);
    setAdminKey(adminKey); // Sync state with localStorage
  };

  const isLoggedIn = !!jwtToken;

  const logouttrue = () => {
    localStorage.removeItem("Jwt Token");
    localStorage.removeItem("Admin Key");
    setJwtToken(null);
    setAdminKey(null);
  };

  // Fetch internships
  const fetchInternships = useCallback(() => {
    setisLoading(true);
    fetch(`${url}/api/jobs/Internships`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setJobsCategories(data))
      .catch((err) => console.error(err))
      .finally(() => setisLoading(false));
  }, [url]);

  // Fetch user profile
  const fetchUser = useCallback(() => {
    if (!jwtToken) return;
    fetch(`${url}/api/user/userprofile`, {
      method: "GET",
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("instructor", data.Instructor);
        setUser(data);
      })
      .catch((err) => console.error(err));
  }, [jwtToken, url]);

  // Fetch instructors
  const getInstructors = useCallback(() => {
    if (!jwtToken) return;
    fetch(`${url}/api/instructor/getApplies`, {
      method: "GET",
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
      .then((res) => res.json())
      .then((data) => setInstructors(data.length > 0 ? data : []))
      .catch((err) => console.error(err));
  }, [jwtToken, url]);

  // Fetch courses on mount
  useEffect(() => {
    fetch(`${url}/api/courses/CourseContent`)
      .then((res) => res.json())
      .then((data) => setCourses(data.length > 0 ? data : []))
      .catch((err) => console.error(err));
  }, [url]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    getInstructors();
  }, [getInstructors]);

  useEffect(() => {
    fetchInternships();
  }, [fetchInternships]);

  const fetchCourseByName = (CourseName) => {
    fetch(`${url}/api/courses/CourseNameCount?CourseName=${CourseName}`)
      .then((res) => res.json())
      .then((data) => setCourses(data.length > 0 ? data : []))
      .catch((err) => console.error(err));
  };

  const fetchCourseByCategory = (CourseCategory) => {
    fetch(`${url}/api/courses/CourseCategoryCount?CourseCategory=${CourseCategory}`)
      .then((res) => res.json())
      .then((data) => setCourses(data.length > 0 ? data : []))
      .catch((err) => console.error(err));
  };

  return (
    <StoreContext.Provider
      value={{
        isFavorite,
        setIsFavorite,
        SuccessMessage,
        setSuccessMessage,
        setUser,
        JobsCategories,
        logouttrue,
        isLoggedIn,
        url,
        AdminLoginOpen,
        setAdminLoginOpen,
        AdminSignupOpen,
        setAdminSignupOpen,
        InterneeLoginOpen,
        setInterneeLoginOpen,
        InterneeSignupOpen,
        setInterneeSignupOpen,
        jwtToken,
        AdminKey,
        SaveTokenToLs,
        SaveAdminKeyToLs,
        UserLoginOpen,
        UserSignupOpen,
        setUserSignupOpen,
        setUserLoginOpen,
        jobbyquery,
        setjobbyquery,
        jobresponse,
        setjobresponse,
        user,
        selecteditem,
        setselecteditem,
        courses,
        setCourses,
        filtercourse,
        setfiltercourse,
        fetchCourseByName,
        fetchCourseByCategory,
        categoryitem,
        setcategoryitem,
        Instructors,
        setInstructors,
        isLoading,
        setisLoading,
        forgetpasswordmodalopen,
        setforgetpasswordmodalopen,
        otpmodalopen,
        setotpmodalopen,
        updatepasswordmodalopen,
        setupdatepasswordmodalopen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const usestore = () => {
  const contextvalue = useContext(StoreContext);
  if (!contextvalue) {
    throw new Error("useStore must be inside StoreContextProvider");
  }
  return contextvalue;
};
