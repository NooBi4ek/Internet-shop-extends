import styled from 'styled-components';
export const UpperHeader_Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background-color: #050402;
  border-bottom: 2px solid #524336;
`;

export const UpperHeader_div = styled.div`
  color: #fff;
  font-weight: 600;
`;

export const UpperHeader_div_small = styled(UpperHeader_div)`
  font-size: 18px;
  letter-spacing: 0.1em;
`;

export const UpperHeader_div_normal = styled(UpperHeader_div)`
  font-size: 24px;
`;

export const UpperHeader_list = styled.li`
  text-decoration: none;
  vertical-align: middle;
`;

export const UpperHeader_list_item = styled.ul`
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.1em;
`;

export const Upper_Header_input = styled.input`
  width: 25vw;
  height: 3vh;
  font-size: 24px;
  outline: none;
  background-color: #050402;
  border: 0px;
  color: #fff;
  border: 1px solid #524336;
`;
export const Upper_Header_button = styled.button``;
