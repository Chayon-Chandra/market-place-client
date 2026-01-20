import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthConText } from "../../Context/AuthConText";

const Navbar = () => {
  const { user, signOutUser } = use(AuthConText);

  const handleSingOutUser = () => {
    signOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const MenuLinks = (
    <>
      <li>
        <NavLink to="/" className="LatoSemibold text-xl">
          Home
        </NavLink>
      </li>
      <li>
        
        <NavLink to="/all-Jobs" className="LatoSemibold text-xl">
          
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-a-job" className="LatoSemibold text-xl">
          Add a Job
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-accepted-tasks" className="LatoSemibold text-xl">
          My Accepted Tasks
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            {MenuLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl latoBold">SkillNext</Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{MenuLinks}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <a
            onClick={handleSingOutUser}
            className="LatoSemibold text-xl btn btn-outline btn-primary"
          >
            Sign Out
          </a>
        ) : (
          <Link
            to="/login"
            className="btn LatoSemibold text-xl btn btn-outline btn-primary"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
