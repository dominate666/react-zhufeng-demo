import React from "react";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";

function Tab() {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/about/10">关于</Link>
      <Link to="/login">登录</Link>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/about/:id" element={<About />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Tab;
