import React from "react";
import Navigation from "../Navigation";
import styles from "./Header.module.scss";
import Logo from "../Logo";

const Header = () => {
  const menu = [
    { label: "Home", url: "/" },
    { label: "Profile", url: "/" },
    { label: "Portfolio", url: "/" },
    { label: "Contact", url: "/" }
  ];
  return (
    <div className={styles.headerContainer}>
      <div className="container">
        <div className="row">
          <div className="col col-md-4">
            <Logo />
          </div>
          <div className="col col-md-8">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
