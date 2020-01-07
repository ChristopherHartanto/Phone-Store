import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { ProductProvider, ProductConsumer } from '../context'

export default class ProductList extends Component {

    render() {
        
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="gadget" title="me"/>
                        <div className="mt-3 mb-3">
                            <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=E9ydQoi2VbA' controls/>
                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                   return value.products.map( product =>{
                                    return <Product key={product.id} product={product}/>
                                   })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
