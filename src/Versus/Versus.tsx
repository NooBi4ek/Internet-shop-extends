import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPhones } from '../models/models';
import { DeleteInVersus } from '../store/internet_shop_slice.ts';
import { ButtonPhone } from '../styled/styled-onePhone/SOnePhone';
import {
  Fill,
  PhoneChar,
  PhoneInfo,
  PhoneName,
  Wrapper,
} from '../styled/styled-versus/SVersus';
const Versus = () => {
  const versus = useSelector((state) => state.shop.versus_Phone);
  const dispatch = useDispatch();
  return (
    <div>
      {versus.length > 0 ? (
        versus.map((phone: IPhones) => (
          <Wrapper key={phone.id}>
            <PhoneName>{phone.name}</PhoneName>
            <PhoneInfo>
              Price:
              <PhoneChar> {phone.price}</PhoneChar> UAH
            </PhoneInfo>
            <PhoneInfo>
              Quantity threads: <PhoneChar>{phone.quantity_threads} </PhoneChar>
              threads
            </PhoneInfo>
            <PhoneInfo>
              Front camera: <PhoneChar>{phone.front_camera}</PhoneChar>
            </PhoneInfo>
            <PhoneInfo>
              Main camera: <PhoneChar>{phone.main_camera}</PhoneChar>
            </PhoneInfo>
            <PhoneInfo>
              Thread name: <PhoneChar>{phone.threads_name}</PhoneChar>
            </PhoneInfo>
            <PhoneInfo>
              Phone memory: <PhoneChar>{phone.memory} GB</PhoneChar>
            </PhoneInfo>
            <ButtonPhone onClick={() => dispatch(DeleteInVersus({ phone }))}>
              Remove in versus
            </ButtonPhone>
          </Wrapper>
        ))
      ) : (
        <Fill>Versus in fill</Fill>
      )}
    </div>
  );
};
export default Versus;
