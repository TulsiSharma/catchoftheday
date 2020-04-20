import React from 'react';

class AddFishform extends React.Component{
    nameRef=React.createRef();
    priceRef=React.createRef();
    statusRef=React.createRef();
    DesRef=React.createRef();
    imageRef=React.createRef();

    handleform = event =>{
    //stop a page from submit
    event.preventDefault();
    const fish={
        name:this.nameRef.current.value,
        price:parseFloat(this.priceRef.current.value),
        status:this.statusRef.current.value,
        Des:this.DesRef.current.value,
        image:this.imageRef.current.value
    };
    event.currentTarget.reset();
    this.props.addfishstate(fish);
        
    }



    render(){
        return(
            <form className="fish-edit" onSubmit={this.handleform}> 
                <input type="text" placeholder="Name" name="name" ref={this.nameRef}/>
                <input type="text" placeholder="Price" name="price" ref={this.priceRef}/>
                <select name="status" ref={this.statusRef}>
                    <option name="available">Fresh</option>
                    <option name="unavailable">Sold Out</option>
                </select>
                <textarea name="Des" placeholder="Des" ref={this.DesRef}></textarea>
                <input name="image" placeholder="Image" type="text" ref={this.imageRef}/>
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishform;