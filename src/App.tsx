import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import React from "react";
import Modal from "./Modal/Modal.tsx";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import OnePhone from "./OnePhone/OnePhone.tsx";
const App = () => {
  const [modal, Setmodal] = useState<boolean>(false);
  const phones = useSelector((phone) => phone.shop.phones);
  return (
    <>
      <Header Setmodal={Setmodal} />
      <Modal modal={modal} Setmodal={Setmodal} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<OnePhone phones={phones} />} />
      </Routes>
    </>
  );
};
export default App;
