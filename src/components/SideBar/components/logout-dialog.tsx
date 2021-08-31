/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState } from 'react';
import ReactModal from 'react-modal';
import { Actions, Spacer } from "../../Actions";
import { AuthContext } from "@/features/auth/contexts/auth";

const LogOutDialog: React.FC = () => {

  const [, { dispatchLogout }] = useContext(AuthContext);
  const [showModal, setState] = useState({ showModal: false });

  const handleOpenModal = () => {
    setState({ showModal: true });
  };

  const handleCloseModal = () => {
    setState({ showModal: false });
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Sair</button>
      <ReactModal
        isOpen={showModal.showModal}
      >
        <h2>Tem certeza que deseja sair? </h2>
        <Actions>
          <button onClick={handleCloseModal}>Cancelar </button>
          <Spacer />
          <button onClick={() => { dispatchLogout(); }}> Sim </button>
        </Actions>
      </ReactModal>
    </div>
  );
};

export default LogOutDialog;
