import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { SideBarNavLink } from "./side-bar-nav-link.tsx";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export function SideBar() {
  return (
    <aside className={"bg-white p-10"}>
      <nav
        className={"flex flex-col justify-between h-full items-center gap-4"}
      >
        <div>
          <CgMenuRightAlt size={36} />
        </div>
        <div className={"grow"} />
        <ul className={"vertical flex gap-3 pointer items-center"}>
          <li>
            <SideBarNavLink to="/">Home</SideBarNavLink>
          </li>
          <li>
            <SideBarNavLink to="/items">Items</SideBarNavLink>
          </li>
          <li>
            <SideBarNavLink to="/collections">Collections</SideBarNavLink>
          </li>
        </ul>
        <div className={"grow bg-gray-300 w-0.5"} />
        <ul className={"flex flex-col gap-4"}>
          <li>
            <NavLink to="/wishlist">
              {({ isActive }) => (
                <AiOutlineHeart
                  size={36}
                  className={isActive && "text-red-500"}
                />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              {({ isActive }) => (
                <PiShoppingCartSimpleLight
                  size={36}
                  className={isActive && "text-green-500"}
                />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
