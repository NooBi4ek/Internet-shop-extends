import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IPhones } from "../models/models";
import {
  addToVersus,
  addToOrder,
  addItem,
} from "../store/internet_shop_slice.ts";
import {
  ButtonPhone,
  ImgPhone,
  PhoneName,
  PhonePrice,
  Wrapper,
} from "../styled/styled-onePhone/SOnePhone";
const OnePhone = ({ phones }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [click, Setclick] = useState<boolean>(false);
  const versus = useSelector((state) => state.shop.versus_Phone);
  return (
    <div>
      {phones.map(
        (phone: IPhones) =>
          phone.id == id && (
            <Wrapper>
              <ImgPhone src={`./img/${phone.img}`} alt={`${phone.name}`} />
              <PhoneName>{phone.name}</PhoneName>
              <PhonePrice>{phone.price} UAH</PhonePrice>
              <ButtonPhone
                key={phone.id}
                onClick={() => {
                  dispatch(addToOrder({ phone }));
                  dispatch(addItem({ phone }));
                }}
                click={phone.click}
                disabled={phone.click ? true : false}
              >
                {phone.click ? "In the box" : "Buy"}
              </ButtonPhone>
              <ButtonPhone
                onClick={() => {
                  dispatch(addToVersus({ phone }));
                  Setclick(true);
                  dispatch(ItemToVersus({ phone }));
                }}
                disabled={click ? true : false}
              >
                {click ? "Added to versus" : "Add to versus"}
              </ButtonPhone>
            </Wrapper>
          )
      )}
    </div>
  );
};

export default OnePhone;
