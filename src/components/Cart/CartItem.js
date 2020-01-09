import React from 'react'

export default function CartItem({item,value}) {

    const {id,title,img,price,total,count} = item
    const {increment,decrement,removeItem} = value

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: "5rem",height:"5rem"}} className="img-fluid"></img>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-white">
                <span className="d-lg-none text-white">product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 text-white">
                <span className="d-lg-none text-white">price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 text-white">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1 text-white" onClick={()=>{decrement(id)}}>-</span>
                        <span className="btn btn-black mx-1 text-white">{count}</span>
                        <span className="btn btn-black mx-1 text-white" onClick={()=>{increment(id)}}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>{removeItem(id)}}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong className="text-white"> item total : $ {total}</strong>
            </div>
        </div>
    )
}
