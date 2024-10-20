import css from "./MobileMenu.module.css";


const MobileMenu = () => {


  return (

      <div className={css.container}>

        <ul className={css.list}>
          <li className={css.item}>
            Одноразові POD-системи
          </li>
          <li className={css.item}>
            Рідини
          </li>
          <li className={css.item}>
            Пристрої
          </li>
          <li className={css.item}>
            Комплектуючі
          </li>
          <li className={css.item}>
            Системи нагрівання
          </li>
          <li className={css.item}>
            Снюс
          </li>
        </ul>
        <div className={css.box}>
          <p className={css.item1}>Підтримка</p>
          <p className={css.item1}>Доставка</p>
        </div>
      </div>

  );
};

export default MobileMenu;
