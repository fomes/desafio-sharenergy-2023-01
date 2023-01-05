import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import stylesDefault from "../styles/page.module.css";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import Table from "../components/Table";
import stylesTable from "../styles/tableClients.module.css";
import { getClients } from "../services/getClients";
import ModalConfirmDelete from "../components/ModalConfirmDelete";
import { postClient } from "../services/postClient";
import { putClient } from "../services/putClient";
import { deleteClient } from "../services/deleteClient";
import styles from "../styles/clientsPage.module.css";
import ModalEditClient from "../components/ModalEditClient";
import ModalAddClient from "../components/ModalAddClient";
import { AuthContext } from "../context/auth";
import ErrorPage from "./ErrorPage";

interface ClientProp {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
}

export default function ClientsPage() {
  const [data, setData] = useState<any>([]);
  const [showModalAddPerson, setShowModalAddPerson] = useState(false);
  const [showModalEditPerson, setShowModalEditPerson] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("0");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    setAuth(false);
    navigate("/");
  };

  const handleCloseAddModal = () => {
    setShowModalAddPerson(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleOpenAddModal = () => {
    setShowModalAddPerson(true);
    setShowDeleteModal(false);
    setShowModalEditPerson(false);
  };

  const handleOpenDeleteModal = (id: string) => {
    setShowDeleteModal(true);
    setShowModalEditPerson(false);
    setShowModalAddPerson(false);
    setIdToDelete(id);
  };

  const handleConfirmAdd = () => {
    if (!name || !email || !cpf || !address || !phone) {
      alert("Fill all the fields!");
    } else {
      postClient(name, cpf, email, phone, address);

      setShowModalAddPerson(false);
      setName("");
      setEmail("");
      setCpf("");
      setAddress("");
      setPhone("");

      alert(`${name} successfully added!`);
      getClients(setData);
    }
  };

  const handleConfirmDelete = () => {
    deleteClient(idToDelete);
    handleCloseDeleteModal();
    setIdToDelete("0");

    alert("User successfully deleted!");
    getClients(setData);
  };

  const handleOpenEditModal = (id: string) => {
    setShowModalEditPerson(true);
    setShowModalAddPerson(false);
    setShowDeleteModal(false);
    setIdToDelete(id);

    const filteredPerson = data.filter((item: ClientProp) => item.id === id);
    setName(filteredPerson[0].name);
    setEmail(filteredPerson[0].email);
    setCpf(filteredPerson[0].cpf);
    setPhone(filteredPerson[0].phone);
    setAddress(filteredPerson[0].address);
  };

  const handleConfirmEdit = () => {
    if (!name || !email || !cpf || !address || !phone) {
      alert("Fill all the fields!");
    } else {
      putClient(idToDelete, name, email, cpf, address, phone);

      setName("");
      setEmail("");
      setCpf("");
      setAddress("");
      setPhone("");

      alert(`${name} successfully edited!`);
      setShowModalEditPerson(false);
      setIdToDelete("0");
      getClients(setData);
    }
  };

  const handleCloseEditModal = () => {
    setShowModalEditPerson(false);
  };

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
      sortable: true,
      width: "16.66%",
    },
    {
      name: "CPF",
      selector: (row: any) => row.cpf,
      sortable: true,
      width: "16.66%",
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
      width: "16.66",
    },
    {
      name: "Phone",
      selector: (row: any) => row.phone,
      sortable: true,
      width: "16.66%",
    },
    {
      name: "Address",
      selector: (row: any) => row.address,
      sortable: true,
      width: "16.66%",
    },
    {
      name: "Action",
      width: "16.66%",
      cell: (row: any) => (
        <>
          <div className={styles.containerBtn}>
            <button
              onClick={() => handleOpenEditModal(row.id)}
              className={styles.btnEdit}
            >
              <BsFillPencilFill size={11} />
              Edit
            </button>
            <button
              onClick={() => handleOpenDeleteModal(row.id)}
              className={styles.btnDelete}
            >
              <FaTrashAlt size={11} />
              Delete
            </button>
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    getClients(setData);
  }, []);

  return (
    <>
      {auth ? (
        <div className={stylesDefault.container}>
          <ModalAddClient
            show={showModalAddPerson}
            handleCloseModal={handleCloseAddModal}
            handleConfirmAdd={handleConfirmAdd}
            handleName={(event: any) => setName(event.target.value)}
            handleEmail={(event: any) => setEmail(event.target.value)}
            handleCpf={(event: any) => setCpf(event.target.value)}
            handleAddress={(event: any) => setAddress(event.target.value)}
            handlePhone={(event: any) => setPhone(event.target.value)}
          />

          <ModalEditClient
            show={showModalEditPerson}
            handleCloseEditModal={handleCloseEditModal}
            handleConfirmEdit={handleConfirmEdit}
            name={name}
            email={email}
            cpf={cpf}
            address={address}
            phone={phone}
            handleName={(event: any) => setName(event.target.value)}
            handleEmail={(event: any) => setEmail(event.target.value)}
            handleCpf={(event: any) => setCpf(event.target.value)}
            handleAddress={(event: any) => setAddress(event.target.value)}
            handlePhone={(event: any) => setPhone(event.target.value)}
          />

          <ModalConfirmDelete
            show={showDeleteModal}
            handleCloseDeleteModal={handleCloseDeleteModal}
            handleConfirmDelete={handleConfirmDelete}
          />
          <h1>Clients</h1>
          <button onClick={handleLogOut}>
            <BiLogOutCircle /> Logout
          </button>

          <Navbar />
          <button onClick={handleOpenAddModal}>
            <AiOutlineUserAdd />
            New
          </button>

          <div className={stylesTable.container}>
            <div className={stylesTable.dataTable}>
              <Table dataProps={data} columnProps={columns} />
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
