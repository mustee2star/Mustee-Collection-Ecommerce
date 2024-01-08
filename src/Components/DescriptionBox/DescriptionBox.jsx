import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An ecommerce website is an online platform that facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.</p>
                <p>E-commerce websites typically display products or services and detailed decriptions, images, prices and any available variations (e.g, sizes, colors). Each products usually has its own dedications with relevant information</p>
            </div>
        </div>
    )
}

export default DescriptionBox