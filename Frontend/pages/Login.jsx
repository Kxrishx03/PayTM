import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Bottomwarning } from "../components/Bottomwarning";


export function Login(){
    return(
        <div className="bg-white h-screen flex justify-center">
        <div className="flex flex-col justify-center">
         <div className="rounded-lg  w-80 grid border-2 border-slate-800 bg-slate-50 px-2 py-2 pt-30 pb-30">
            <Heading label={"Sign-in here!"} />
            <Subheading label={"Enter details here to login"} />
            <Input  label={"Username"} placeholder={"Enter Username"} />
            <Input  label={"Password"} placeholder={"Enter Password"} />
            <Button label={"Submit"} />
         </div>   
         <Bottomwarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
         </div>
         </div>
    );
}