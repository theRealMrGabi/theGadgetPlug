import styled from 'styled-components';

const CartDropdownContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 25rem;
    background-color: var(--offWhite);
    border: 1px solid black;
    top: 3.45rem;
    right: 0;
    z-index: 5;
    position: absolute;

    .empty-message{
        font-size: 2rem;
        margin: 5rem auto;
    }
    .cart-items{
        height: 30rem;
        overflow: scroll;
        display: flex;
        flex-direction: column;
    }

    .button{
        width: 90%;
        padding: 0.5rem 0.5rem;
        margin: 1rem 1rem;
    }
`

export default CartDropdownContainer ;