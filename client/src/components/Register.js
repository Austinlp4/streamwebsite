import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '', 
            repassword: ''
        }
    }

    render(){
        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.username}/>
                    <input type="password" value={this.state.password}/>
                    <input type="password" value={this.state.repassword}/>
                    <button>Register</button>
                </form>
            </div>
        )
    }
}

export default Register;