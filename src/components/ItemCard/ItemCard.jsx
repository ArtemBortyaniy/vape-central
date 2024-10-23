import sprite from '../../assets/symbol-defs.svg';
import css from './ItemCard.module.css';
import img from '../../assets/ProductImage.jpg';
import { useState } from 'react';

const ItemCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTaste, setSelectedTaste] = useState('манго');
  const [isRotated, setIsRotated] = useState(false);

  const tastes = ['манго', 'яблоко', 'виноград', 'черника'];

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsRotated(!isRotated); // Для иконки
  };

  const handleSelectTaste = (taste) => {
    setSelectedTaste(taste); // Меняем выбранный вкус
    setIsDropdownOpen(false); // Закрываем выпадающий список
    setIsRotated(false); // Убираем ротацию иконки
  };

  return (
    <div className={css.container}>
      <svg className={css.iconPosition1}>
        <use
          href={`${sprite}#icon-justice-scale-1--office-work-scale-justice-company-arbitration-balance-court`}
        />
      </svg>

      <svg className={css.iconPosition2}>
        <use href={`${sprite}#icon-Hearts-Symbol--Streamline-Plump-1`} />
      </svg>

      <div className={css.imgContainer}>
        <img src={img} alt="product" className={css.imgCard} />
      </div>

      <p className={css.title}>POD-система Suorin Air Hybrid</p>

      <div className={css.dropdownWrapper}>
        <div className={css.containerTaste}>
          <p className={css.taste}>Смак: {selectedTaste}</p>
          <svg
            className={`${css.icon} ${isRotated ? css.rotated : ''}`}
            onClick={handleToggleDropdown}
          >
            <use href={`${sprite}#icon-Chevron-Down`} />
          </svg>
        </div>

        {isDropdownOpen && (
          <ul className={css.dropdown}>
            {tastes.map((taste, index) => (
              <li
                key={index}
                className={css.dropdownItem}
                onClick={() => handleSelectTaste(taste)}
              >
                {taste}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={css.containerPrice}>
        <p className={css.price}>99 грн</p>
        <button className={css.btnBy}>Купити</button>
      </div>
    </div>
  );
};

export default ItemCard;
