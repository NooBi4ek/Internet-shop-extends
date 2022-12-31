import { useState } from 'react';
import Header from './Header/Header.tsx';
import Main from './Main/Main';
import React from 'react';
import Modal from './Modal/Modal.tsx';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import OnePhone from './OnePhone/OnePhone.tsx';
import Versus from './Versus/Versus.tsx';
const App = () => {
  const [modal, Setmodal] = useState<boolean>(false);
  const phones = useSelector((phone) => phone.shop.filter_phone);
  return (
    <>
      <Header Setmodal={Setmodal} />
      <Modal modal={modal} Setmodal={Setmodal} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<OnePhone phones={phones} />} />
        <Route path="/versus" element={<Versus />} />
      </Routes>
    </>
  );
};
export default App;
