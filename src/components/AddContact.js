import React from 'react';

class AddContact extends React.Component{
    state={
        name:"",
        email:""
    };

    add = (e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("Fields cannot be empty");
        }
        else{
        this.props.AddContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.state);
        return;
        }
    };
    render(){
        return(
            <div  className = "ui main" style={{'margin-top': 50}}>
                <h2>Add Contact</h2>
                <form className = "ui form" onSubmit = {this.add}>
                    <div className = "field">
                        <label>Name</label>
                        <input type = "text" name = "name" placeholder = "Name" value = {this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className = "field">
                        <label>Email</label>
                        <input type = "email" name = "email" placeholder = "Email" value = {this.state.email} onChange={(e)=>{ this.setState({email:e.target.value})}} />
                    </div>
                    <button className = "ui button blue">Add</button>
                </form>
                
            </div>
        )
    }
}

export default AddContact ;