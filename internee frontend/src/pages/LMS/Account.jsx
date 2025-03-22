import { useState, useEffect } from "react";
import { Bold, Italic, Save } from "lucide-react";
import { usestore } from "../../Store/ContextStore";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

export const Account = () => {
  const { user, url, jwtToken, setUser, isLoading, setisLoading } = usestore();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    NewPassword: "",
    ConfirmNewPassword: ""
  });

  // ✅ Ensure email is updated when user is available
  useEffect(() => {
    if (user?.email) {
      setformdata((prev) => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const onchange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setisLoading(true);

    fetch(`${url}/api/user/UpdateUserPassword`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      
        if(data.SuccessMessage){
          toast.success(data.SuccessMessage)
          setUser(data.updateddata);
        }
        if(data.FailureMessage){
          toast.error(data.FailureMessage)
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Account</h1>
        <p className="text-gray-600 mb-4">
          Add information about yourself to share on your profile.
        </p>
      </div>

      <form onSubmit={onsubmit}>
        <div className="flex flex-col gap-4">
          <input
            name="email"
            value={formdata.email}
            type="email"
            onChange={onchange}
            placeholder="Email"
            className="p-2 border rounded-md w-full"
          />
          <input
            name="password"
            value={formdata.password}
            onChange={onchange}
            type="password"
            placeholder="Enter your Old Password"
            className="p-2 border rounded-md w-full"
          />
          <input
            name="NewPassword"
            type="password"
            value={formdata.NewPassword}
            onChange={onchange}
            placeholder="Type New Password"
            className="p-2 border rounded-md w-full md:col-span-2"
          />
          <input
            name="ConfirmNewPassword"
            value={formdata.ConfirmNewPassword}
            onChange={onchange}
            type="password"
            placeholder="Re-Type New Password"
            className="p-2 border rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-md flex items-center justify-center"
        >
          {isLoading ? (
            <ClipLoader size={25} color="white" loading={isLoading} />
          ) : (
            <Save className="mr-2" size={18} />
          )}
          Save
        </button>
      </form>
    </div>
  );
};

export default Account;
