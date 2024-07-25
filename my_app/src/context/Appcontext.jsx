import React, { useState } from "react";
import All_services from "../components/Assets/All_services";
import { createContext } from "react";



export const Appcontext = createContext(null);
const getDefaultAppcart = ()=>{
    let appcart={};
    for (let index = 0; index < All_services.length+1; index++) {
        appcart[index]= 0;
    }
    return appcart;
}

const Appcontextprovider = (props)=>{
   

    const [appcartServs,setAppcartServ]=useState(getDefaultAppcart());

        const takeApp =(servId)=>{
            setAppcartServ((prev)=>({...prev,[servId]:prev[servId]+1}))
        console.log(appcartServs);

        }
        const cancelApp =(servId)=>{
            setAppcartServ((prev)=>({...prev,[servId]:prev[servId]-1}))
        

        }
        const getTotalAmount = ()=>{
            let totalAmount = 0;
            for (const Serv in appcartServs){
                if(appcartServs[Serv]>0)
                {
                    let servInfo = All_services.find((service)=>service.id===Number(Serv))
                    totalAmount += 150*appcartServs[Serv];
                }
                return totalAmount;
            }
            
        }
        const getTotalAppcart = ()=>{
            let totalserv = 0;
            for(const Serv in appcartServs){
                if(appcartServs[Serv]>0)

{
    totalserv += appcartServs[Serv];
}   

}
return totalserv;
        }

        const contextValue = {getTotalAppcart,getTotalAmount,All_services,appcartServs,takeApp,cancelApp};
    
    return(
        <Appcontext.Provider value={contextValue}>
            {props.children}
        </Appcontext.Provider>
    )

}
export default Appcontextprovider;