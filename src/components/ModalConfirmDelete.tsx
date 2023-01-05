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
          <h2>Are you sure?</h2>

          <div>
            <button onClick={handleConfirmDelete}>Delete</button>
            <button onClick={handleCloseDeleteModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
