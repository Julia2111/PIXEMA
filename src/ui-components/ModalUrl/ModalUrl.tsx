import React from "react";
import styles from "./ModalUrl.module.scss";
import type { ModalUrl } from "../../Types/Types";
import { ReactComponent as Close } from "../../assets/Icons/IconClose.svg";

const ModalUrl = ({ isOpen, close, children }: ModalUrl) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={close}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={close} className={styles.btn_close}>
          <Close />
        </button>
      </div>
    </div>
  );
};

export default ModalUrl;
