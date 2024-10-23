//components
import UserMenu from '../UserMenu/UserMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
//svg
import sprite from '../../assets/symbol-defs.svg';
//style
import css from './Header.module.css';

import { Modal } from '../Modal/ModalContainer/ModalContainer';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modals/modalsSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleOpenModal = (modalName) => {
    dispatch(openModal(modalName));
  };

  return (
    <div>
      <header>
        <div className={`${css.container} layoutContainer`}>
          <div onClick={() => handleOpenModal('menu')}>
            <svg className={css.iconMenu}>
              <use href={`${sprite}#icon-Subject--Streamline-Unicons`} />
            </svg>
          </div>
          <div className={css.shopName}>Vape Central</div>

          <div>
            <UserMenu></UserMenu>
          </div>
        </div>
        <div className={`${css.titleContainer} layoutContainer`}>
          <h1 className={css.title}>Vape Central</h1>
        </div>
      </header>

      <Modal modalName="menu" align={'centerTop'}>
        <MobileMenu />
      </Modal>
    </div>
  );
};

export default Header;
