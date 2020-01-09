import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function CartTotals({value,history}) {

    const{cartSubTotal,cartTax,cartTotal,clearCart,buy,openModal} = value

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right text-white">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>{clearCart()}}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-white">subtotal : </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-white">tax : </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-white">total : </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <ButtonContainer className="mb-5 mt-3" onClick={
                            ()=>{
                                buy()
                                openModal(1)
                            }
                        }>Check Out
                        </ButtonContainer>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.8rem;
    background: transparent;
    border: 0.05rem solid var(--mainWhite);
    border-color: var(--mainWhite);
    color: var(--mainWhite);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--mainWhite);
        color: var(--mainDark);
    }
    &:focus{
        outline: none;
    }
`;
