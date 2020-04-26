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
      height: 30%;
      width: 50%;
    }
  }
  
  .name,
  .quantity,
  .price {
    width: 23%;
  }
  
  .quantity{
    display: flex;

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
`;

export default CheckOutItemContainer