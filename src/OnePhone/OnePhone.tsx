import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IPhones } from "../models/models";
import { addToVersus, addToOrder } from "../store/internet_shop_slice.ts";
import {
  ButtonPhone,
  ImgPhone,
  PhoneName,
  PhonePrice,
  Phone_Char,
  Wrapper,
} from "../styled/styled-onePhone/SOnePhone";
const OnePhone = ({ phones }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  return (
    <div>
      {phones.map(
        (phone: IPhones) =>
          phone.id == id && (
            <Wrapper key={phone.id}>
              <ImgPhone src={`./img/${phone.img}`} alt={`${phone.name}`} />
              <PhoneName>{phone.name}</PhoneName>
              <PhonePrice>{phone.price} UAH</PhonePrice>
              <ButtonPhone
                key={phone.id}
                onClick={() => {
                  dispatch(addToOrder({ phone }));
                }}
                click={phone.click}
                disabled={phone.click ? true : false}
              >
                {phone.click ? "In the box" : "Buy"}
              </ButtonPhone>
              <ButtonPhone
                onClick={() => {
                  dispatch(addToVersus({ phone }));
                }}
                disabled={phone.click_versus ? true : false}
              >
                {phone.click_versus ? "Added to versus" : "Add to versus"}
              </ButtonPhone>
              <h1>Phone Characteristics</h1>
              <Phone_Char>Front Camera: {phone.front_camera}</Phone_Char>
              <Phone_Char>
                Quantity threads: {phone.quantity_threads} threads
              </Phone_Char>
              <Phone_Char>Main Camera: {phone.main_camera}</Phone_Char>
            </Wrapper>
          )
      )}
    </div>
  );
};

export default OnePhone;
