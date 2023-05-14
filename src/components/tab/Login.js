import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  const goAbout = () => {
    // navigate("/about?id=100", { replace: true });
    navigate("/about/100", { replace: true });
  };
  return (
    <div>
      Login
      <button onClick={goAbout}>跳转</button>
    </div>
  );
}
