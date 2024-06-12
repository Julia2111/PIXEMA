// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@mantine/core";
// import classes from "./NavLink.module.scss";

// type NavLinkProps = React.PropsWithChildren<{
//   to: string;
//   // Другие пропсы Button, если нужно
// }>;

// const NavLink = ({ to, children, ...buttonProps }: NavLinkProps) => {
//   // Используйте useLocation для определения активной ссылки
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <Button
//       component={Link}
//       to={to}
//       {...buttonProps}
//       variant="subtle"
//       className={`${classes.navLink} ${isActive ? classes.active : ""}`}
//     >
//       {children}
//     </Button>
//   );
// };

// export default NavLink;
