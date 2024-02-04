import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export const Users = () => {
   
    const [users, setUsers] = useState([]);
    const [filter,setFilter]= useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/user/tousers?filter='+ filter)
            .then(response => {
                setUsers(response.data.user);
            })
            .catch(e => {
                console.error('Error:', e);
            });
    }, [filter]);

    console.log(users);

    return (
        <>
            <div className="font-bold mt-6 text-lg mx-2">
                Users
            </div>
            <div className="my-2 mx-2">
                <input onChange={(e)=>{
                    setFilter(e.target.value)
                }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            </div>
            <div className="my-2 mx-2">
                {users.map(user => (
                        <User key={user.id} user={user} />
                   
                ))}
            </div>
        </>
    );
};

function User({ user }) {
    const navigate= useNavigate();
    return (
        <div className="flex justify-between border-b-2">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstname[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstname} {user.lastname}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-ful">
                <Button onClick={(e)=>{
                    navigate("/transaction?id=" + user.user_id + "&name=" +user.firstname)
                    
                }} label={"Send Money"} />
            </div>
        </div>
    );
}
