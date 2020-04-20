import React from 'react';
import {formatPrice} from "../helpers";

class Fish extends React.Component{

    handleclick=()=>{
        this.props.addtoorder(this.props.index);
    }

    render(){
        const isAvailable=this.props.details.status==="available";
        return(
            <li className="menu-fish">
                <img src={this.props.details.image} alt={this.props.details.image}/>
                <h4 className="fish-name">
                    {this.props.details.name}
                    <span className="price">
                        {formatPrice(this.props.details.price)}
                    </span>
                </h4>
                <p>
                    {this.props.details.desc}
                </p>
                <button disabled={!isAvailable} onClick={this.handleclick}>
                    {isAvailable?'Add To Cart':'Sold Out'}
                </button>


            </li>
        );
    }
}
export default Fish;