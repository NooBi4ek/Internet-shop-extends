import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Modalcontent } from '../styled/styled-modal/SModal';
import '../styled/styled-header/SHeader.css';
import {
  SearchWrapper,
  Upper_Header_input,
  WrapperResult,
} from '../styled/styled-header/SHeader';
const Header = ({ Setmodal }) => {
  const phones = useSelector((state) => state.shop.phones);
  const [search, SetSearch] = useState('');
  const [searchModal, SetSearchModal] = useState(false);
  const filter = phones.filter((phones) => {
    return search !== ''
      ? phones.name.toLowerCase().startsWith(search.toLowerCase())
      : null;
  });
  return (
    <header className="wrapper">
      <div>mail@gmail.com</div>
      <div className="search_and_name">
        <div className="name_company">Name company</div>
        <SearchWrapper
          searchModal={searchModal}
          onClick={() => SetSearchModal(false)}
        >
          <Modalcontent onClick={(e) => e.stopPropagation()}>
            <WrapperResult>
              {filter.map((el) => (
                <div key={el.id} className="search_result">
                  {el.name}
                </div>
              ))}
            </WrapperResult>
          </Modalcontent>
        </SearchWrapper>
        <Upper_Header_input
          placeholder="please,seach..."
          value={search}
          searchModal={searchModal}
          onChange={(e) => SetSearch(e.target.value)}
          onClick={() => SetSearchModal(true)}
        />
      </div>
      <button className="busket" onClick={() => Setmodal(true)}>
        Busket
      </button>
    </header>
  );
};
export default Header;
