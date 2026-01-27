import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RfreshHandler = ({ setisAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setisAuthenticated(true);

      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
      ) {
        navigate("/home", { replace: true });
      }
    }
  }, [location.pathname, navigate, setisAuthenticated]);

  return null;
};

export default RfreshHandler;
