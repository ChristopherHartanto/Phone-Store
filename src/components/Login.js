import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Login extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const{didLogin} = value
                    return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize p-5">
                                    
                                    <form>
                                        <h3 className="text-center mb-5">Sign In</h3>

                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email"/>
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password"/>
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                            </div>
                                        </div>
                                        <Link to="/">
                                            
                                            <button onClick={()=>didLogin()} className="btn-block">Login</button>
                                            {/* <ButtonContainer className="btn btn-primary btn-block" onClick={()=>didLogin()}>
                                                Login
                                            </ButtonContainer> */}
                                        </Link>
                                    </form>
                                                            
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )
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
    align-items:center;
    #modal{
        background: var(--mainWhite);
    }

    button{
        text-transform: capitalize;
        font-size: 1.2rem;
        background: transparent;
        border: 0.05rem solid var(--lightDark);
        border-color: "var(--lightDark)"};
        color:"var(--lightDark)"};
        border-radius: 0.5rem;
        cursor: pointer;
        margin: 0.2rem 0.5rem 0.2rem 0;
        
    }
    button:hover{
        background: "var(--lightDark)"};
        color: var(--mainDark);
    }
    buttons:focus{
        outline: none;
    }

`