import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Login(){
    return(
         <div className="w-80 grid border-2 border-slate-800 bg-slate-50 px-2 py-2 pt-30 pb-30">
            <Heading label={"Sign-in here!"} />
            <Subheading label={"Enter details here to login"} />
            <Input  label={"Username"} placeholder={"Enter Username"} />
            <Input  label={"Password"} placeholder={"Enter Password"} />
            <Button label={"Submit"} />
         </div>
    );
}