import Link from "next/link";
import ModeSwitch from "./ModeSwitch";
import NavMenuItem from "./NavMenuItem";
import SearchBox from "./SearchBox";

const navMenuData = [
  {
    id: 1,
    title: "차트",
    address: "/chart",
  },
  {
    id: 2,
    title: "예매",
    address: "/ticket",
  },
];

export default function NavBar() {
  return (
    <nav className="flex flex-col w-full pt-4">
      <div className="flex justify-between items-center container mx-auto px-2.5">
        <Link href="/">
          <h1 className="text-primary dark:text-primary-dark font-bold text-4xl">
            NEXT MOVIE
          </h1>
        </Link>
        <ModeSwitch />
      </div>
      <div className="w-full border-b-2 border-b-primary border-t-2 border-t-slate-100 mt-4">
        <div className="flex justify-between items-center container mx-auto px-2.5">
          <div className="flex gap-4 py-3">
            {navMenuData.map((menu) => (
              <NavMenuItem
                key={menu.id}
                title={menu.title}
                address={menu.address}
              />
            ))}
          </div>
          <div>
            <SearchBox />
          </div>
        </div>
      </div>
    </nav>
  );
}
