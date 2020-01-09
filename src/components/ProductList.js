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
                        <div className="mt-3 mb-3">
                            <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=W1Tfrr7QGrY' controls/>
                        </div>
                        <Title name="New Products"/>
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
