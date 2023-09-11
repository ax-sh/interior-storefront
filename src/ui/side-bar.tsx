import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { SideBarNavLink } from "./side-bar-nav-link.tsx";

export function SideBar() {
  return (
    <aside className={"bg-white p-10"}>
      <nav className={"flex flex-col justify-between h-full"}>
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
        <div className={"grow"} />
        <ul className={"flex flex-col gap-4"}>
          <li>
            <AiOutlineHeart size={30} />
          </li>
          <li>
            <NavLink to="/cart">
              <MdShoppingCartCheckout size={30} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
