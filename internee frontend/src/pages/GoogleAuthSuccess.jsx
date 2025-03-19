import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usestore } from "../Store/ContextStore";
import { toast } from "react-toastify";

const GoogleAuthSuccess = () => {
  const navigate = useNavigate();
  const { SaveTokenToLs } = usestore();
  const { setUserLoginOpen } = usestore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const message = urlParams.get("SuccessMessage");

    if (token) {
      SaveTokenToLs(token);
    }

    if (message) {  // ✅ Only show alert if message exists
      toast.success(message);
    }

    const previousPage = localStorage.getItem("prevpath") ;
    localStorage.removeItem("prevpath");
    navigate(previousPage);
    window.location.reload();
  }, []);

  return <div className="w-[100%] h-[100vw] flex justify-center items Center">
    <h1 className="font-bold text-3xl ">
    Logging you in...
    </h1>
   </div>;
};

export default GoogleAuthSuccess;
