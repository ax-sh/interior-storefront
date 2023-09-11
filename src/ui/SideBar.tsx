import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { NavLink, NavLinkProps } from "react-router-dom";
function activeClassName({
  isActive,
}: Extract<NavLinkProps["className"], { isActive: boolean }>) {
  return isActive ? "text-blue-400 font-bold" : "";
}

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
            <NavLink
              to="/"
              className={activeClassName as NavLinkProps["className"]}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/items">Items</NavLink>
          </li>
          <li>
            <NavLink to="/collections">Collections</NavLink>
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
