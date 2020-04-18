import React,  {useState, useEffect} from 'react';
// import {storeProducts} from './data';

export const AccountContext = React.createContext();


export const AccountProvider =(props)=>{
    const [showPage,setShowPage] = useState(null);

    const toggle = () => setModal(!modal);

    return (
        <AccountContext.Provider value={{
                                            showPage: showPage,
                                            setShowPage: setShowPage
                                        }}>
            {props.children}
        </AccountContext.Provider>
    );
};

export default AccountProvider;