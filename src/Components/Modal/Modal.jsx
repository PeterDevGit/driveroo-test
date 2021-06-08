import React from "react";
import './Modal.scss';

const Modal = ({open,children,closeHandler}) => {

    const closeModal = () => {
        closeHandler(false);
    }

    return(
        <>
            {open ? (
                <div className="modal-window">
                    <div className="modal-content">
                        <span
                            className="close-btn"
                            onClick={closeModal}
                        >X</span>
                        {children}
                    </div>
                    <div className="modal-bg" />
                </div>
            ) : null }
        </>
    );

}

export default Modal;