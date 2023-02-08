import React, { useState,createContext } from 'react';

    export const AppContext=createContext(null);
    export const Context=({children})=>{

        const [menuOpen,setMenuOpen]=useState(false)
        return (
            <div>
                <AppContext.Provider value={{menuOpen,setMenuOpen}}>
                   {children}
                    
                </AppContext.Provider>
                
            </div>
        );


    }
    

export default AppContext;
