import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import { TiTicket } from "react-icons/ti";
import { NavLink } from "react-router-dom";

import {
    Navbar,
    Collapse ,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  
  // useEffect propio del codigo proveido por material tailwind
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  let cssDefault = 'flex items-center font-bold text-lg hover:text-green-800';
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/category/deportes' 
          className={({isActive}) => isActive ? `${cssDefault} text-green-800`: cssDefault}
          >
          Deportes
        </NavLink>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/category/conciertos" 
          className={({isActive}) => isActive ? `${cssDefault} text-green-800`: cssDefault}>
          Conciertos
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/category/teatros" 
          className={({isActive}) => isActive ? `${cssDefault} text-green-800`: cssDefault}>
          Teatro
        </NavLink>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/category/entretenimientos' 
          className={({isActive}) => isActive ? `${cssDefault} text-green-800`: cssDefault}>
          Entretenimiento
        </NavLink>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] mt-0">
      <Navbar className="navbar-container sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-cyan-100">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            className="mr-4 cursor-pointer py-1.5 font-extrabold text-2xl flex items-center"
            as={NavLink}
            to="/"
          >
            <span className="text-green-800 flex items-center"><TiTicket />TICKET</span>POINT
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <NavLink to='/cart'>
                  <CartWidget/>
              </NavLink>
            </div>

            {/* icono de hamburguesa */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;