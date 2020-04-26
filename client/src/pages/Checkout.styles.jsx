import styled from 'styled-components';
import { mediaQueries } from '../AppGlobalStyle';

const CheckoutPageContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      margin: 1rem;
      padding: 1rem;
      font-size: 1.5rem;
      width: 40%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  .test-warning{
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
  }

  ${mediaQueries("mobileLarge")`
      margin: 2rem auto;
      width: 90%;
  `}

   ${mediaQueries("mobileMedium")`
      margin: 2rem auto;
      width: 90%;
  `}

    ${mediaQueries("mobileSmall")`
      margin: 2rem auto;
      width: 95%;
  `}
`

export default CheckoutPageContainer ;