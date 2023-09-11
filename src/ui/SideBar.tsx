import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
          <li>Collections</li>
        </ul>
        <div className={"grow"} />
        <ul className={"flex flex-col gap-4"}>
          <li>
            <AiOutlineHeart size={30} />
          </li>
          <li>
            <MdShoppingCartCheckout size={30} />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
