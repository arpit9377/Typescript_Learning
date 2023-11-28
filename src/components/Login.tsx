import React, { useState, FormEvent} from "react";


interface IState {
  email?:string,
  password?:string,
  message?:string
}

const Login:React.FC<IState>=({email:defaultEmail="",password:defaultPassword ="",message:defaultMessage=""})=> {
    const [email, setEmail] = useState<string>(defaultEmail);
    const [password, setPassword] = useState<string>(defaultPassword);
    const [message, setMessage] = useState<string>(defaultMessage);

  const submitaction = (event:FormEvent) => {
    event.preventDefault();
    setMessage(`Email: ${email}  Password: ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={submitaction}>
     <input type="email" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} />
     <input type='password' placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}/>

     <button type='submit'>Submit</button>

    </form>
    <div>{message}</div>

    </div>
  )
}

export default Login