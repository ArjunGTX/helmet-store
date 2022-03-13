import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="full-width py-md fr-sb-ct shadow-light sticky-top">
      <div className="fr-fs-ct pl-xl">
        <Button variant={"icon"} className="mr-md">
          <FiMenu className="txt-xl" />
        </Button>
        <Link to={"/"}>
          <h1 className="txt-xl txt-primary font-medium">Helmet Store</h1>
        </Link>
      </div>
      <div className="fr-fs-ct pr-xl">
        <Link to="/login">
          <Button size="sm">Login</Button>
        </Link>
        <Link to="/cart" className="mx-xs">
          <Button variant={"icon"}>
            <AiOutlineHeart className="txt-lg" />
          </Button>
        </Link>
        <Link to="/wishlist" className="mx-xs">
          <Button variant={"icon"}>
            <BsCart3 className="txt-lg" />
          </Button>
        </Link>
        <Link to="/profile" className="mx-xs">
          <Button variant={"icon"}>
            <CgProfile className="txt-lg" />
          </Button>
        </Link>
      </div>
    </header>
  );
};
