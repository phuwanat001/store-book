import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";

import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";

const navigation = [
  { nameb: "Dashboard", href: "/dashboard" },
  { nameb: "Orders", href: "/orders" },
  { nameb: "Cart Page", href: "/cart" },
  { nameb: "Check Out", href: "/checkout" },
];

function Navbar() {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const currentUser = false;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 ">
      <nav className="flex justify-between items-center">
        {/* left side  */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <CgMenuLeftAlt />
          </Link>
          {/* <CgMenuLeftAlt /> */}

          <div className="relative sm:w-72 w-40">
            <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search here .."
              className="bg-[#EAEAEA] w-full py-1 pl-10 pr-4 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* right side  */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div className="">
            {currentUser ? (
              <>
                <button onClick={() => setisDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full cursor-pointer
                        ${currentUser ? `ring-2 ring-blue-500 ` : ""}`}
                  />
                </button>
                {/* show dropdowns */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-40">
                    <ul className="py-2 text-sm text-gray-700">
                      {navigation.map((item) => (
                        <li
                          key={item.nameb}
                          onClick={() => isDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {item.nameb}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                {" "}
                <CiUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <MdFavoriteBorder className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-[var(--primary-green)] p-1 sm:px-6 py-2 flex items-center rounded-sm   "
          >
            <MdOutlineShoppingBag className="size-6 text-white" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1 text-white">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1 text-white">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
