import ReactDOM from 'react-dom';

import { useEffect, useState } from 'react';
import css from './ModalContainer.module.css';
import { closeModal, selectOpenModal } from '../../../redux/modals/modalsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Modal = ({ modalName, children, align = 'center' }) => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => selectOpenModal(state, modalName));

    const [modalElement, setModalElement] = useState();

    const handleCloseModal = () => {
        dispatch(closeModal(modalName));
    };

    useEffect(() => {
        if (isOpen) {
            const modalRoot = document.getElementById('modal-root');
            const element = document.createElement('div');
            modalRoot.appendChild(element);
            setModalElement(element);

            return () => {
                modalRoot.removeChild(element);
            };
        }
    }, [isOpen]);

    if (!isOpen || !modalElement) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={css.modalWindow} onClick={handleCloseModal}>
            <div className={`${css.modalContainer} ${css[align]}`} onClick={(e) => e.stopPropagation()}>
                <button className={css.closeButton} onClick={handleCloseModal}>&#10005;</button>
                {children}
            </div>
        </div>,
        modalElement 
    );
};
