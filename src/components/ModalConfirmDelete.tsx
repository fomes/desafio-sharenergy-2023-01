import styles from "../styles/modalConfirmDelete.module.css";

export default function ModalConfirmDelete({
  show = false,
  handleConfirmDelete,
  handleCloseDeleteModal,
}: any) {
  return (
    <>
      {show && (
        <div className={styles.container}>
          <h2>Tem certeza?</h2>

          <div>
            <button onClick={handleCloseDeleteModal}>Cancelar</button>
            <button onClick={handleConfirmDelete}>Deletar</button>
          </div>
        </div>
      )}
    </>
  );
}
