import React from "react";
import { useParams } from "react-router-dom";

const OnePhone = ({ phones }) => {
  const { id } = useParams();
  return (
    <div>
      {phones.map((phone) => phone.id == id && <div>{phone.name}</div>)}
    </div>
  );
};

export default OnePhone;
