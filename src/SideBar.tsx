import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";

export function SideBar() {
  return (
    <aside className={"bg-white p-10"}>
      <nav className={"flex flex-col justify-between h-full"}>
        <div>
          <CgMenuRightAlt size={36} />
        </div>
        <div className={"grow"} />
        <ul className={"vertical flex gap-3 pointer items-center"}>
          <li>Masters</li>
          <li>Items</li>
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
