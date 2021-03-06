import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()
//provider

class ProductProvider extends Component {

    state = {
        products: [],
        detailProducts: detailProduct,
        carts: [],
        modalOpen:false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        login: false,
        success: false
    }

    componentDidMount(){
        this.setProducts()
    }

    getItem = id =>{
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail = id =>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {detailProducts:product}
        })
    }

    addToCart = id =>{
        let tempProducts = [...this.state.products] 
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.count = 1
        product.inCart = true
        const price = product.price
        product.total = price
        this.setState(
            ()=>{
                return{products:tempProducts, carts:[...this.state.carts,product]}
            },
            ()=>{
                this.addTotals()
            }
        )
    }

    setProducts = () =>{
        let tempProducts = []
        storeProducts.forEach(item =>{
            const singleItem = {...item}
            tempProducts = [...tempProducts,singleItem]
        })
        this.setState(() =>{
            return {products: tempProducts}
        })
    }

    didLogin = () =>{
        this.setState(()=>{
            return{login:true}
        })
    }

    logOut = () =>{
        this.clearCart()  
        this.setState(()=>{
            return{login:false}
        })
    }

    openModal = id =>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true}
        })
    }

    closeModal = () =>{
        this.setState(()=>{
            return{modalOpen:false}
        })
    }

    increment = id =>{
        let tempCart = [...this.state.carts]
        let selectedProduct = tempCart.find(item=>item.id === id)

        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        product.count = product.count + 1
        product.total = product.price * product.count

        this.setState(
            ()=>{
                return{
                    carts:[...tempCart]
                }
            },
            ()=>{
                this.addTotals()
            }
        )
    }

    decrement = id =>{
        let tempCart = [...this.state.carts]
        let selectedProduct = tempCart.find(item=>item.id === id)

        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        if(product.count === 0){
            this.removeItem(id)
        }
        else{
            product.count = product.count - 1
            product.total = product.price * product.count
    
            this.setState(
                ()=>{
                    return{
                        carts:[...tempCart]
                    }
                },
                ()=>{
                    this.addTotals()
                }
            )
        }
    }

    removeItem = id =>{
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.carts]

        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]

        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0

        this.setState(
            ()=>{
                return{
                    carts:[...tempCart],
                    products:[...tempProducts]
                }
            },
            ()=>{
                this.addTotals()
            }
        )

    }

    clearCart = () =>{
        this.setState(
            ()=>{
                return{
                    carts:[],
                    success:false
                }
            },
            ()=>{
                this.setProducts()
                this.addTotals()
            }
        )
    }

    buy = () =>{
        this.setState(()=>{
            return{success:true}
        })
    }

    addTotals = () =>{
        let subTotal =0
        this.state.carts.map(item =>{
            subTotal += item.total
        })
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                handleDetail: this.handleDetail,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                didLogin: this.didLogin,
                logOut: this.logOut,
                buy: this.buy
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider,ProductConsumer }