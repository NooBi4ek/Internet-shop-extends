import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addToOrder, addItem } from "../store/internet_shop_slice.ts";
import {
  Button_buy,
  Main_onephone_block,
  Main_onephone_img,
  Main_phone_wrapper,
} from "../styled/styled-mainphone/SMainphone";
import "../styled/styled-mainphone/SMainphone.css";
import { IPhones } from "../models/models";
import { useNavigate } from "react-router-dom";
const Main_phone = () => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.shop.phones);
  const navigate = useNavigate();
  return (
    <Main_phone_wrapper>
      {phones.map((phone: IPhones) => (
        <Main_onephone_block key={phone.id}>
          <Main_onephone_img
            src={"./img/" + phone.img}
            alt={phone.name}
            onClick={() => {
              navigate(`${phone.id}`);
            }}
          />
          <div className="phoneName">{phone.name}</div>
          <div className="phoneName">{phone.price} UAH</div>
          <Button_buy
            key={phone.id}
            onClick={() => {
              dispatch(addToOrder({ phone }));
              dispatch(addItem({ phone }));
            }}
            click={phone.click}
            disabled={phone.click ? true : false}
          >
            {phone.click ? "In the box" : "Buy"}
          </Button_buy>
        </Main_onephone_block>
      ))}
    </Main_phone_wrapper>
  );
};
export default Main_phone;
