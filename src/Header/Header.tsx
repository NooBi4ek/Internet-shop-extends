import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Modalcontent } from '../styled/styled-modal/SModal';
import '../styled/styled-header/SHeader.css';
import {
  Searching_phone,
  SearchWrapper,
  Upper_Header_input,
  WrapperResult,
} from '../styled/styled-header/SHeader';
import { useNavigate } from 'react-router-dom';
const Header = ({ Setmodal }) => {
  const phones = useSelector((state) => state.shop.phones);
  const [search, SetSearch] = useState('');
  const [searchModal, SetSearchModal] = useState(false);
  const navigate = useNavigate();
  const filter = phones.filter((phones) => {
    return search !== ''
      ? phones.name.toLowerCase().startsWith(search.toLowerCase())
      : null;
  });
  return (
    <header className="wrapper">
      <div>mail@gmail.com</div>
      <div className="search_and_name">
        <div className="name_company" onClick={() => navigate('/')}>
          Name company
        </div>
        <SearchWrapper
          searchModal={searchModal}
          onClick={() => SetSearchModal(false)}
        >
          <Modalcontent onClick={(e) => e.stopPropagation()}>
            <WrapperResult>
              {filter.map((phone) => (
                <Searching_phone
                  key={phone.id}
                  onClick={() => {
                    navigate(`${phone.id}`);
                    SetSearchModal(false);
                  }}
                >
                  {phone.name}
                </Searching_phone>
              ))}
            </WrapperResult>
          </Modalcontent>
        </SearchWrapper>
        <Upper_Header_input
          type="search"
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
      <button className="busket" onClick={() => navigate('/versus')}>
        Check versus
      </button>
    </header>
  );
};
export default Header;
