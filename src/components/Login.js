import React from 'react';

class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
    	userName: "",
        userPassword: ""，
      	loginstate:"false"
    }
  }
  
  handleClick(){
		if(this.state.userName=="admin"&&this.state.userPassword=="admin"){
			
			//client page
			this.setStatue({
			loginstate:"true"
        	})
		}else{
			alert("password is not match with this account");
		}
    this.props.login(this.state.userName,this.state.userPassword);
    console.log(this.state);
	}
		
    render() {
		if(this.status.loginstate){
			return <Redirect to="/"/>
		}
		else{
		}

        return (
		<div className="login-box">
          <div className="login-title">Login</div>
          <form action="" className="form-horizontal">
          <div className="form-group input-text">
          <label htmlFor="uname">account</label>
			<input type="text" ref="username"/>
          </div>
          
          <div className="form-group input-text">
          <label htmlFor="upwd">password</label>
			<input type="password" ref="password"/>
          </div>
          
          <div className="form-group">
			<button type="button" onClick={this.handleClick.bind(this,this.state.userName,this.state.userPassword)}>submit</button>
      	  </div>
      
		</form>
      
      </div>
	)};
}
	
	
