"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegClock } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
    const pathName = usePathname()
    console.log("Path Name", pathName)
  const links = (
    <>
      <li> <Link className={pathName === '/' ? 'text-white bg-[#244D3F]' : ''} href={"/"}><IoMdHome size={20} />Home</Link> </li>
      <li> <Link className={pathName === '/timeline' ? 'text-white bg-[#244D3F]' : ''} href={"/timeline"}><FaRegClock />Timeline</Link> </li>
      <li> <Link className={pathName === '/stats' ? 'text-white bg-[#244D3F]': ''} href={"/stats"}><ImStatsDots />Stats</Link> </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar  w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
          <Link
            href={"/"}
            className="cursor-pointer text-2xl text-[#1F2937] font-extrabold"
          >
            Keen<span className="text-[#244D3F]">Keeper</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
