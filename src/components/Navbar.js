import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import {ProductConsumer} from '../context'

export default class Navbar extends Component{

    state = {
        login: false
    }
    render(){
        return(
            <ProductConsumer>
                {value => (
                    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/">
                        <h1 className="title font-weight-bold">
                            Hype Shoes
                        </h1>
                    </Link>
                    <Link to="/" className="nav-link ml-auto">
                        <div className="mr-2">
                        products
                        </div>
                        
                    </Link>
                    <Link to='/cart'className="nav-link">
                        <div className="mr-2">
                            My Cart
                        </div>
                    </Link>
                    <div className="nav-link" onClick={() =>{
                        if(value.login){
                            value.logOut()
                        }else{
                            value.openModal(1)
                        }
                    }}>
                        {value.login? 'Sign Out':'Sign In'}
                    </div>
                    </NavWrapper>
                )
                }
            </ProductConsumer>
            
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainDark);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }

    .title{
        color: var(--mainWhite) !important;
    }

    button{
        background: transparent;
        border: none;
        border-line: none;
    }
`
