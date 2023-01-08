import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addcount, deleteOrder } from '../../store/internet_shop_slice.ts';
import {
  Basket_button,
  Basket_div,
  Basket_img,
  Basket_wrapper,
} from '../../styled/styled-busket/SBusket';

const ModalBusket = ({ orders, id }) => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.shop.phones);
  return (
    <Basket_wrapper>
      <Basket_img src={'./img/' + orders.img} />
      <Basket_div>
        <div>{orders.name}</div>
        <div>{orders.price * orders.count} UAH</div>
        <div>{orders.count}</div>
        <Basket_button
          onClick={() => {
            dispatch(addcount({ id }));
          }}
        >
          Add count
        </Basket_button>
        <Basket_button
          onClick={() => {
            dispatch(deleteOrder({ orders, phones }));
          }}
        >
          Delete count
        </Basket_button>
      </Basket_div>
    </Basket_wrapper>
  );
};
export default ModalBusket;
