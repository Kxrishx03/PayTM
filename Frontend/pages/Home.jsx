import { Balance } from '../components/Balance';
import {Header} from '../components/Header';
import { Users } from '../components/Users';


export function Home(){
    return(
       <div>
         <Header />
         <Balance value={"10,0000"} />
         <Users />
        
       </div>
    )
}