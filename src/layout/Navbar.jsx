import { useCallback, useEffect, useState } from "react";
import { navItems } from "./NavItems";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          {" "}
          CRUD{" "}
        </Link>

        <div className=" navbar" id="navbarNav">
          <ul className="navbar-nav">
            {navItems?.map((items) => (
              <li className="nav-item">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  to={items?.link}
                >
                  {items?.header}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
