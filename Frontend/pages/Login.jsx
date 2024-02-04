import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Bottomwarning } from "../components/Bottomwarning";
import { useState } from "react";


export function Login(){

    const [username,setusername] = useState('');
    const [password,setPassword] = useState('');

    return(
        <div className="bg-white h-screen flex justify-center">
        <div className="flex flex-col justify-center">
         <div className="rounded-lg  w-80 grid border-2 border-slate-800 bg-slate-50 px-2 py-2 pt-30 pb-30">
            <Heading label={"Sign-in here!"} />
            <Subheading label={"Enter details here to login"} />
            <Input onChange={(e)=>{
                setusername(e.target.value);
            }} label={"Username"} placeholder={"Enter Username"} />
            <Input onChange={(e)=>{
                setPassword(e.target.value);
            }} label={"Password"} placeholder={"Enter Password"} />
            <Button  onClick={()=>{
                axios.post('http://localhost:3000/api/v1/user/login', {username,firstname,lastname,password})
                 .then(response => {
                   localStorage.setItem("token",response.data.token) 
                  console.log('Response:', response.data.token);})
                  .catch(error => {
                console.error('Error:', error); });
            }} label={"Submit"} />
         </div>   
         <Bottomwarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
         </div>
         </div>
    );
}