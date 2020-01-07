import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {modalOpen, closeModal, login} = value
                    const {img,title,price} = value.modalProduct

                    console.log(`login: `,login)
                    if(!modalOpen){
                        return null
                    }
                    else if(!login){
                        console.log("masuk login")
                        return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h3>you need to login first</h3>
                                            <Link to="/login">
                                                <ButtonContainer onClick = {() => closeModal()}>
                                                    Go to Login Page
                                                </ButtonContainer>
                                            </Link>

                                            <ButtonContainer onClick = {() => closeModal()}>
                                                Later
                                            </ButtonContainer>

                                            
                                        </div>
                                    </div>
                                </div>

                            </ModalContainer>
                        )
                    }
                    
                    else{
                        return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal"  className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>item added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="product"></img>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick = {() => closeModal()}>
                                                    store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick = {() => closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>

                            </ModalContainer>
                        )
                    }
                }
                }
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    justify-content:center;
    align-items:center;
    #modal{
        background: var(--mainWhite);
    }
`