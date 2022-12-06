import { useSelector } from 'react-redux';
import React from 'react';
import {
  Main_onephone_block,
  Main_onephone_img,
  Main_phone_wrapper,
} from '../styled/styled-mainphone/SMainphone';
import { IPhones } from '../models/models';
const Main_phone = () => {
  const phone = useSelector((state) => state.shop.phones);
  return (
    <Main_phone_wrapper>
      {phone.map((phone: IPhones) => (
        <Main_onephone_block key={phone.id}>
          <Main_onephone_img src={'./img/' + phone.img} alt={phone.name} />
          <div>{phone.name}</div>
          <button>Buy</button>
        </Main_onephone_block>
      ))}
    </Main_phone_wrapper>
  );
};
export default Main_phone;
