import styled, { keyframes } from 'styled-components';
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

const listanimation = keyframes`
0%{
  opacity:0;
  display:none
  color:#000;
}
100%{
  opacity:1;
  display:contents;
  color:#fff;
}
`;

export const UpperHeader_list = styled.li`
  animation: ${(props) =>
    props.click
      ? `${listanimation} 1000ms`
      : `${listanimation} 1000ms reverse`};
  transition: 0.3s;
  list-style: none;
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
  padding: 5px 0;
  position: ${(props) => (props.searchModal ? 'fixed' : 'none')};
  margin-left: ${(props) => (props.searchModal ? '-9vw' : '0')};
`;
export const Upper_Header_button = styled.button``;

export const SearchWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.searchModal ? '1' : '0')};
  pointer-events: ${(props) => (props.searchModal ? 'all' : 'none')};
  transition: 0.5s;
`;

export const WrapperResult = styled.div`
  margin-top: 10vw;
  color: #000;
`;
