import sprite from "../../assets/symbol-defs.svg";
import { Link } from "react-router-dom";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <Link>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-Search--Streamline-Platinum-1`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link>
            <svg className={css.iconUser}>
              <use href={`${sprite}#icon-ph_user`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-Shopping-Cart-1--Streamline-Plump`} />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
