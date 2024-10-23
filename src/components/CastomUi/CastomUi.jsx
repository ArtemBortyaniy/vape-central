import img from '../../assets/Img.jpg';
import lines from '../../assets/Lines.png';
import mark from '../../assets/Mark.png';
import css from './CastomUi.module.css';

const CastomUi = () => {
  return (
    <div className={css.container}>
      <img src={img} alt="Product" className={css.product} />
      <img src={lines} alt="lines" className={css.lines} />
      <img src={mark} alt="mark" className={css.mark} />
      <div className={css.containerText}>
        <p className={css.text}>Твій вейп, твій стиль</p>
      </div>
    </div>
  );
};

export default CastomUi;
