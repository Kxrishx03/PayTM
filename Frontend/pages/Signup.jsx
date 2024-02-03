import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Bottomwarning } from "../components/Bottomwarning";
import { useState } from "react";
import axios from "axios";

export function Signup(){

    //States
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [username,setusername] = useState('');
    const [password,setPassword] = useState('');



    return(  <div className="bg-white h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-80 flex flex-col justify-center border-2 border-slate-800 bg-slate-50 px-2 pt-30 pb-30">
            <Heading label={"Sign up here!"} />
            <Subheading label={"Enter details here to create an account"} />
            <Input  label={"Firstname"} placeholder={"Enter Firstname"} onChange={(e)=>{
                setFirstname(e.target.value);
            }} />
            <Input  label={"Lastname"} placeholder={"Enter Lastname"} onChange={(e)=>{
                setLastname(e.target.value);
            }}/>
            <Input  label={"Username"} placeholder={"Enter Username"} onChange={(e)=>{
                setusername(e.target.value);
            }}/>
            <Input  label={"Password"} placeholder={"Enter Password"} onChange={(e)=>{
                setPassword(e.target.value);
            }} />
            <Button label={"Submit"} onClick={()=>{
                axios.post("http://localhost:3000/api/v1/user/signup",{
                    username,firstname,lastname,password
                });
            }} />
            </div>
            <Bottomwarning label={"Already have an account?"} buttonText={"Sign in"} to={"/login"} />
         </div>
         </div>
    );
}