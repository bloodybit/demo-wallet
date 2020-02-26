import React, {FunctionComponent, createContext, useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {Account} from '.';
import {Login} from './../../pages'

const AccountContext = createContext(null);

const AccountConsumer = AccountContext.Consumer;

export type AccountProviderProps={
  children: any
}

const AccountProvider: FunctionComponent<AccountProviderProps> = ({children}) => {
  const [account, setAccount]: [Account | null, any] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem("account");
    if(storage) {
      let rawAccount = JSON.parse(storage);
      setAccount(new Account(rawAccount.id, rawAccount.iban));
    }
  },[])

  return <>
    {account ? <AccountContext.Provider value={account}>
        {children}
      </AccountContext.Provider> 
      :
      <Login />}
    } 
  </>
}

export default AccountContext;

export {
  AccountConsumer,
  AccountProvider
}