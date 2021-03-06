import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block mt-5">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold text-white">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold text-white">name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold text-white">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold text-white">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold text-white">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold text-white">total</p>
                </div>
            </div>
        </div>
        
    )
}
