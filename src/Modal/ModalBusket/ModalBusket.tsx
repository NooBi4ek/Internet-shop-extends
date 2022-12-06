import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addcount,
  deletecount,
  deleteOrder,
} from '../../store/internet_shop_slice.ts';
import {
  Basket_button,
  Basket_div,
  Basket_img,
  Basket_wrapper,
} from '../../styled/styled-busket/SBusket';

const ModalBusket = ({ orders, id }) => {
  const dispatch = useDispatch();
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
            orders.count > 1
              ? dispatch(deletecount({ id }))
              : dispatch(deleteOrder({ id }));
          }}
        >
          Delete count
        </Basket_button>
      </Basket_div>
    </Basket_wrapper>
  );
};
export default ModalBusket;
