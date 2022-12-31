import { useDispatch, useSelector } from 'react-redux';
import { filterCategories } from '../store/internet_shop_slice.ts';
import { Main_Wrapper } from '../styled/styled-main/SMain';
import Main_phone from './Main_phone.tsx';

const Main = () => {
  const categories = useSelector((state) => state.shop.categories);
  const dispatch = useDispatch();
  return (
    <>
      {categories.map((el) => (
        <button key={el.id} onClick={() => dispatch(filterCategories({ el }))}>
          {el.namecat}
        </button>
      ))}
      <Main_Wrapper>
        <Main_phone />
      </Main_Wrapper>
    </>
  );
};
export default Main;
