import { ComponentProps } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
function activeClassName({
  isActive,
}: Extract<NavLinkProps["className"], { isActive: boolean }>) {
  return isActive ? "text-red-500 font-bold" : "";
}
export function SideBarNavLink({
  children,
  ...props
}: Omit<ComponentProps<typeof NavLink>, "className">) {
  return (
    <NavLink
      {...props}
      className={activeClassName as NavLinkProps["className"]}
    >
      {children}
    </NavLink>
  );
}
