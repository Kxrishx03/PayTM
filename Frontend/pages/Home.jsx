import { Balance } from '../components/Balance';
import {Header} from '../components/Header';


export function Home(){
    return(
       <div>
         <Header />
        <Balance value={"10,0000"} />
        
       </div>
    )
}