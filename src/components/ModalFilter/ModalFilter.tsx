import { ReactElement, useEffect, useState } from "react";
import styles from "./ModalFilter.module.scss";
import { ReactComponent as Close } from "../../assets/Close.svg";
import Sort from "../../ui-components/Sort/Sort";

interface ModalFilterProps {
  visible: boolean;
  title: string;
  content: ReactElement | string;
  footer?: ReactElement | string;
  onClose: () => void;
}
const ModalFilter = (
  {
    visible = false,
    title = "",
    content = "",
    footer = "",
    onClose,
  }: ModalFilterProps,
  searchString: string
) => {
  const onKeyDown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  const [sort, getSort] = useState({ name: "", sort: "" });

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=7a6495f0&s=${searchString}`).then(
      (res) => res.json
    );
    window.scrollTo(0, 0);
  }, [sort]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  if (!visible) return null;
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <span className={styles.modalClose} onClick={onClose}>
            <Close />
          </span>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>
            <button className={styles.sortButton}> Rating</button>
            <button className={styles.sortButton}> Year</button>
            <Sort value={sort.name} onChangeSort={(i) => getSort(i)} />
          </div>
        </div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </div>
  );
};

export default ModalFilter;
