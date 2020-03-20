import styled from 'styled-components';

const CartIconContainer = styled.div `
    display: flex;
    width: 45px;
    height: 45px;
    cursor: pointer;
    position: relative;
    align-items: center;
    justify-content: center;


    .button{
        .shop-icon{
            width: 30px;
            height: 30px;
        }

        .item-count{
            position: absolute;
            font-size: 10px;
            font-weight: bold;
            bottom: 12px;
            ${'' /* left: 15px; */}
            left: 17px;

            &:hover{
                color: var(--offWhite);
                background: var(--richBlack);
            }
        }
    }
`

export default CartIconContainer ;