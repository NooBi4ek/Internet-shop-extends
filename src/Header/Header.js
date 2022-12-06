import {
  UpperHeader_div_normal,
  UpperHeader_div_small,
  UpperHeader_list,
  UpperHeader_list_item,
  UpperHeader_Wrapper,
  Upper_Header_button,
  Upper_Header_input,
} from '../styled/styled-header/SHeader';

const Header = ({ Setmodal }) => {
  return (
    <>
      <UpperHeader_Wrapper>
        <UpperHeader_list>
          <UpperHeader_list_item>+38012345678</UpperHeader_list_item>
          <UpperHeader_list_item>mail@gmail.com</UpperHeader_list_item>
        </UpperHeader_list>
        <UpperHeader_div_normal>Name Company</UpperHeader_div_normal>
        <Upper_Header_button onClick={() => Setmodal(true)}>
          Busket
        </Upper_Header_button>
        <UpperHeader_div_small>Profile</UpperHeader_div_small>
      </UpperHeader_Wrapper>
      <UpperHeader_Wrapper>
        <UpperHeader_div_normal>Catalog</UpperHeader_div_normal>
        <Upper_Header_input />
        <UpperHeader_div_small>About us</UpperHeader_div_small>
      </UpperHeader_Wrapper>
    </>
  );
};
export default Header;
