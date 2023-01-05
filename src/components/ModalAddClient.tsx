import React from "react";
import styles from "../styles/modalAddClient.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ModalAddClient({
  show = false,
  handleCloseModal,
  handleConfirmAdd,
  handleName,
  handleEmail,
  handleCpf,
  handleAddress,
  handlePhone,
}: any) {
  return (
    <>
      {show && (
        <div className={styles.container}>
          <h2>New Customer</h2>{" "}
          <span onClick={handleCloseModal}>
            <AiFillCloseCircle />
          </span>
          <input type="text" placeholder="First Name" onChange={handleName} />
          <input type="email" placeholder="Email" onChange={handleEmail} />
          <input
            type="text"
            placeholder="CPF"
            onChange={handleCpf}
            maxLength={11}
          />
          <input type="text" placeholder="Address" onChange={handleAddress} />
          <input
            type="text"
            placeholder="Phone"
            onChange={handlePhone}
            maxLength={11}
          />
          <button onClick={handleConfirmAdd}>Add</button>
        </div>
      )}
    </>
  );
}
