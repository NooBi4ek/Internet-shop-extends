import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addToOrder, addItem } from '../store/internet_shop_slice.ts';
import {
  Button_buy,
  Main_onephone_block,
  Main_onephone_img,
  Main_phone_wrapper,
} from '../styled/styled-mainphone/SMainphone';
import { IPhones } from '../models/models';
import Main_onephone from './Main_onephone.tsx';
const Main_phone = () => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.shop.phones);
  return (
    <Main_phone_wrapper>
      {phones.map((phone: IPhones) => (
        <Main_onephone phone={phone} id={phone.id} key={phone.id} />
      ))}
    </Main_phone_wrapper>
  );
};
export default Main_phone;
