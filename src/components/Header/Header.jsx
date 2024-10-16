//components
import UserMenu from "../UserMenu/UserMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
//svg
import sprite from "../../assets/symbol-defs.svg";
//style
import css from "./Header.module.css";

import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    console.log("Toggle Mobile Menu");
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className="layoutContainer">
      <header>
        <div className={css.container}>
          <div onClick={handleToggleMobileMenu}>
            <svg className={css.iconMenu}>
              <use href={`${sprite}#icon-Subject--Streamline-Unicons`} />
            </svg>
          </div>
          <div className={css.shopName}>Vape Central</div>
          <div>
            <UserMenu></UserMenu>
          </div>
        </div>
        <div className={css.titleContainer}>
          <h1 className={css.title}>Vape Central</h1>
        </div>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
      </header>
    </div>
  );
};

export default Header;
