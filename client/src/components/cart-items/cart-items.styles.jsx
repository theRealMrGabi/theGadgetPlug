import styled from 'styled-components';

const CartItemContainer = styled.div `
    width: 100 %;
    display: flex;
    height: 80px;
    margin-bottom: 15px;

    img{
        width: 7vw;
        height: 5vw;
        margin: 0.5rem 1rem ;
    }

    .item-details{
        width: 70 %;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        ${'' /* padding: 10px 20px; */}

        .title{
            font - size: 16px;
        }
    }

`;

export default CartItemContainer ;