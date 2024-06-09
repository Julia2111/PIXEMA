import { Outlet } from "react-router-dom";
import { useState } from "react";
import AuthProvider from "./HOC/AuthProvider";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import { ActiveContext } from "./Context/Context";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <AuthProvider>
      <ActiveContext.Provider
        value={{ isActive: isActive, setIsActive: setIsActive }}
      >
        <Header />
        <Outlet />
      </ActiveContext.Provider>
    </AuthProvider>
  );
};
export default Layout;
