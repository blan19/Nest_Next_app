import WishListProduct from '@/components/WishList/WishListProduct';
import Responsive from '@/utils/styles/Responsive';
import Layouts from 'Layouts';
import styled from 'styled-components';

const WishList = () => {
  return (
    <Layouts>
      <WishListResponsive>
        <div className="wish-info">
          <h1>위시리스트</h1>
        </div>
        <WishListProduct />
      </WishListResponsive>
    </Layouts>
  );
};

export default WishList;

const WishListResponsive = styled(Responsive)`
  margin-top: 3rem;
  .wish-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 3rem;
    h1 {
      position: relative;
      font-size: 4rem;
      color: var(--color-primaryText);
    }
    h1:after {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      position: absolute;
      left: 0.1rem;
      top: 5rem;
      background: var(--color-mainColor);
    }
  }
`;
