import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import styled from 'styled-components'

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
                                            
                                            <button onClick={()=>didLogin()} className="btn btn-primary btn-block">Login</button>
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
`