import styled from 'styled-components';

const CheckOutItemContainer = styled.div `
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }
  
  .quantity{
    display: flex;

    .btn-black{
    background: transparent;
    text-transform: capitalize;
    font-size: 0.8rem !important;
    color: var(--richBlack);
    border-radius: 0 !important;
    ${'' /* border: none !important; */}
    border: 0.1rem solid var(--richBlack);
    ${'' /* height: 0.5rem !important; */}
    cursor: pointer;
    width: 1.3rem;
    padding: 0.5rem auto ;
    margin: 0.5rem 0.3rem;
    position: relative;
  }

    .value{
      margin: 0 10px;
    }
  }

  .quantity {
    padding-left: 20px;
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`
export default CheckOutItemContainer