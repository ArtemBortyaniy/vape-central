import css from "./MobileMenu.module.css";
import sprite from "../../assets/symbol-defs.svg";

import { useEffect } from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(css.backdrop)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`${css.backdrop} ${isOpen ? css.backdropVisible : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={css.mobileMenuWrap}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-Search--Streamline-Platinum-1`} />
        </svg>
        <ul>
          <li>
            <p>Одноразові POD-системи</p>
          </li>
          <li>
            <p>Рідини</p>
          </li>
          <li>
            <p>Пристрої</p>
          </li>
          <li>
            <p>Комплектуючі</p>
          </li>
          <li>
            <p>Системи нагрівання</p>
          </li>
          <li>
            <p>Снюс</p>
          </li>
        </ul>
        <div>
          <p>Підтримка</p>
          <p>Доставка</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
