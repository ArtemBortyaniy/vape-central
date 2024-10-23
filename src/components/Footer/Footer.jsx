import css from './Fotter.module.css';
//svg
import sprite from '../../assets/symbol-defs.svg';

const Footer = () => {
  return (
    <div className={css.container}>
      <div className={`${css.containerText}`}>
        <div className={`${css.containerSchedule} layoutContainer`}>
          <p className={css.phone}>067 777 77 55</p>
          <p className={css.text}>Графік роботи</p>
          <p className={css.schedule}>Пн-Нд 9:00-20:00</p>

          <ul className={css.svgList}>
            <li>
              <svg className={css.iconInst}>
                <use href={`${sprite}#icon-instagram`} />
              </svg>
            </li>
            <li>
              <svg className={css.iconTg}>
                <use href={`${sprite}#icon-ri_telegram-line`} />
              </svg>
            </li>
            <li>
              <svg className={css.iconFc}>
                <use href={`${sprite}#icon-jam_facebook-square`} />
              </svg>
            </li>
          </ul>
        </div>

        <div className={`${css.category} layoutContainer`}>
          <p className={css.title}>Категорії</p>
          <ul className={css.categoryList}>
            <li>
              <p className={css.categoryLink}>Одноразові</p>
            </li>
            <li>
              <p className={css.categoryLink}>Електронні сигарети</p>
            </li>
            <li>
              <p className={css.categoryLink}>Рідини</p>
            </li>
            <li>
              <p className={css.categoryLink}>Комплектуючі</p>
            </li>
            <li>
              <p className={css.categoryLink}>Системи нагрівання тютюну</p>
            </li>
          </ul>
        </div>
        <div className={`${css.info} layoutContainer`}>
          <p className={css.title}>Інформація</p>
          <ul className={css.categoryList}>
            <li>
              <p className={css.categoryLink}>Про нас</p>
            </li>
            <li>
              <p className={css.categoryLink}>Контаки</p>
            </li>
            <li>
              <p className={css.categoryLink}>Особистий кабінет</p>
            </li>
            <li>
              <p className={css.categoryLink}>Оплата і доставка</p>
            </li>
            <li>
              <p className={css.categoryLink}>Політика конфіденційності</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.footer}>
        <svg className={css.iconC}>
          <use href={`${sprite}#icon-icon-park-outline_handle-c`} />
        </svg>
        <p className={css.textT}>VapeCentral 2024</p>
      </div>
    </div>
  );
};

export default Footer;
