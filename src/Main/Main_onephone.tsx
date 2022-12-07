import React from 'react';
import { useDispatch } from 'react-redux';
import { IPhones } from '../models/models';
import { addToOrder, addItem } from '../store/internet_shop_slice.ts';
import {
  Button_buy,
  Main_onephone_block,
  Main_onephone_img,
} from '../styled/styled-mainphone/SMainphone';

const Main_onephone = ({ phone, id }) => {
  const dispatch = useDispatch();
  return (
    <Main_onephone_block key={phone.id}>
      <Main_onephone_img src={'./img/' + phone.img} alt={phone.name} />
      <div>{phone.name}</div>
      <Button_buy
        key={phone.id}
        onClick={() => {
          dispatch(addToOrder({ phone }));
          dispatch(addItem({ id }));
        }}
        click={phone.click}
        disabled={phone.click ? true : false}
      >
        {phone.click ? 'In the box' : 'Buy'}
      </Button_buy>
    </Main_onephone_block>
  );
};
export default Main_onephone;
