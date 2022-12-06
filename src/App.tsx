import { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import React from 'react';
import Modal from './Modal/Modal.tsx';
const App = () => {
  const [modal, Setmodal] = useState<boolean>(false);
  return (
    <>
      <Header Setmodal={Setmodal} />
      <Modal modal={modal} Setmodal={Setmodal} />
      <Main />
    </>
  );
};
export default App;
