import React, { useState, useContext, useEffect } from 'react';


const Login = (props) => {
     const user = [
        {
          username: "priya",
          password: "priya",
        }
    ]
    
    
 console.log(user)
    const [loginUser, setLoginUser] = useState(
        { username: '', password: '' }
      );

    const handleChange = (event) => {
        setLoginUser({ ...loginUser, [event.target.name]: event.target.value })
      }

    const onSubmit=(event)=>{
    event.preventDefault();
    const data = {
        username: loginUser.username,
        password: loginUser.password,   
      }
    
    if(data.username == user[0].username && data.password == user[0].password ){
      props.history.push("/users");

    }
  else{
      alert("username and password is incorrect")
  }
    }

  return (

<div className="main">
<form className="forms">
    <div className="form-group">
        <label>Username</label>
            <input type="text" class="form-control" name="username" placeholder="Enter username" onChange={handleChange}/>

    </div>
    <div className="form-group">
        <label>Password</label>
           <input type="password" class="form-control" name="password" placeholder="Password" onChange={handleChange}/>

    </div>
    <button type="submit" onClick={onSubmit} className="btn btn-primary">Login</button>
</form>
</div>
  );
};

export default Login;
