import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "../styles/modalAddClient.module.css";

export default function ModalEditClient({
  show = false,
  handleCloseEditModal,
  handleConfirmEdit,
  handleName,
  handleEmail,
  handleCpf,
  handleAddress,
  handlePhone,
  name,
  email,
  cpf,
  address,
  phone,
}: any) {
  return (
    <>
      {show && (
        <div className={styles.container}>
          <h2>Edit Customer</h2>{" "}
          <span onClick={handleCloseEditModal}>
            <AiFillCloseCircle />
          </span>
          <input
            value={name}
            type="text"
            placeholder="Name"
            onChange={handleName}
          />
          <input
            value={email}
            type="text"
            placeholder="Email"
            onChange={handleEmail}
          />
          <input
            value={cpf}
            type="text"
            placeholder="CPF"
            onChange={handleCpf}
            maxLength={11}
          />
          <input
            value={address}
            type="text"
            placeholder="Address"
            onChange={handleAddress}
          />
          <input
            value={phone}
            type="text"
            placeholder="Phone"
            onChange={handlePhone}
            maxLength={11}
          />
          <button onClick={handleConfirmEdit}>Save</button>
        </div>
      )}
    </>
  );
}
