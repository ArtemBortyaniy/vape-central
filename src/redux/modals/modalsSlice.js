import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals: {
      menu: { isOpen: false },
      filter: { isOpen: false },
    },
    openModal: false,
    modalContent: '',
  };
  
  const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    selectors: {
      selectOpenModal: state => state.openModal,
      selectModalContent: state => state.modalContent,
    },
    reducers: {
      openModal: (state, action) => {
        const modalName = action.payload;
        if (state.modals[modalName]) {
          state.modals[modalName].isOpen = true;
        }
      },
      closeModal: (state, action) => {
        const modalName = action.payload;
        if (state.modals[modalName]) {
          state.modals[modalName].isOpen = false;
        }
      },
    },
  });
  
  export const { openModal, closeModal } =
    modalsSlice.actions;
  export default modalsSlice.reducer;
  export const selectOpenModal = (state, modalName) => {
    return state.modals.modals[modalName]?.isOpen; 
};
  export { modalsSlice };