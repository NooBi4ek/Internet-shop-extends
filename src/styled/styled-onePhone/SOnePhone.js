import styled from "styled-components";

export const ImgPhone = styled.img`
  max-width: 100vw;
  max-height: 50vh;
  margin: 0 10vw 0 5vw;
  float: left;
`;

export const Wrapper = styled.div`
  margin-top: 10vh;
`;

export const PhoneName = styled.p`
  font-size: 30px;
`;

export const PhonePrice = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.1em;
`;

export const ButtonPhone = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 60px;
  border-radius: 7px;
  font-weight: 600;
  border: 1px solid ${(props) => (props.click ? "red" : "black")};
  margin: 5vh 1vw;
  font-size: 18px;
  font-style: italic;
  border: none;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: translateY(-0.05in);
    box-shadow: 6px 3px 3px #a5a5a5;
    color: gold;
  }
`;
