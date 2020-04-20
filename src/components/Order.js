import React from "react";
import {formatPrice} from "../helpers"

class Order extends React.Component{

    renderorder=(key)=>{
        const fish=this.props.fishes[key];
        const count =this.props.order[key];
        const isAvailable= fish && fish.status==="available";
        if(!fish){
            return null;
        }
        if(!isAvailable){
           return( <li key={key}>
                "sorry," {fish?fish.name:"fish"} is no longer available.
            </li>
           );
        }
        return(
            <li key={key}>
                {count} lbs {fish.name} {formatPrice(count*fish.price)}
                <button onClick={()=>this.props.removeorder(key)}>&times;</button>
            </li>
        );
    }
    
    render(){
        const orderid=Object.keys(this.props.order);//convert into array;
        const total = orderid.reduce((prevTotal,key)=>{
            console.log(prevTotal);
            const fish=this.props.fishes[key];
            const count =this.props.order[key];
            const isAvailable= fish && fish.status==="available";
            if(isAvailable){
                return prevTotal+(count*fish.price);
            }
           
            return prevTotal;
        },0);
        
        
        return(
            <div className="order-wrap">
                <h2>Order</h2>

                <ul className="order">
                    {orderid.map(this.renderorder)}
                </ul>
                <div className="total">
                    Total:-
                    <strong>
                        {formatPrice(total)}
                    </strong>
                    
                    
                </div>
            </div>
        );
    }
}
export default Order;