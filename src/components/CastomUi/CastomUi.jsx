import img from "../../assets/Img.jpg";

import css from "./CastomUi.module.css";

const CastomUi = () => {
  return (
    <div className={css.container}>
      <img src={img} alt="Product" className={css.product} />
      <div className={css.containerText}>
        <p className={css.text}>Твій вейп, твій стиль</p>
      </div>
    </div>
  );
};

export default CastomUi;
