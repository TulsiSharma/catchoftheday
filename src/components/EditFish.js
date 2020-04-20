import React from "react";


class EditFish extends React.Component{

    handleclick=(event)=>{
        // copy a current fish.
        const Updatefish={...this.props.fish,[event.currentTarget.name]:event.currentTarget.value};
        this.props.updatestate(this.props.index,Updatefish);
        
    }


    render(){
        return(
            <div className="fish-edit">
                <input type="text" name="name" value={this.props.fish.name} onChange={this.handleclick}/>
                <input type="text" name="price" value={this.props.fish.price} onChange={this.handleclick}/>
                <select name="status">
                    <option value="available">
                        Fresh!
                    </option>
                    <option value="unavailable">
                        Sold Out
                    </option>
                </select>
                <textarea name="desc" value={this.props.fish.desc} onChange={this.handleclick}></textarea>
                <input type="text" name="image" value={this.props.fish.image} onChange={this.handleclick}/>
                <button onClick={()=>this.props.Removefish(this.props.index)}>Remove Fish</button>
            </div>
        );
    }
}

export default EditFish;