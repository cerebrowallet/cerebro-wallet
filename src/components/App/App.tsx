import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { UserSession, AppConfig } from 'blockstack';

import Home from '../Home/Home';
import Features from '../Features/Features';
import Account from '../Account/Account';
import MyAccounts from '../MyAccounts/MyAccounts';

import './App.scss';

const appConfig = new AppConfig();
const userSession = new UserSession({ appConfig: appConfig });

const App: React.FC = () => {
  const [userData, setUserData] = useState<null | any>(null);

  // TODO enable authorization
  // useEffect(() => {
  //   if (userSession.isSignInPending()) {
  //     userSession.handlePendingSignIn().then((response) => {
  //       window.history.replaceState({}, document.title, "/");
  //       setUserData(response)
  //     });
  //   }
  // }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
      <Route path="/account/:accountId">
        <Account />
      </Route>
      <Route path="/my-accounts">
        <MyAccounts />
      </Route>
    </Switch>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {!userSession.isUserSignedIn() ? (
  //           <button type="button" onClick={() => userSession.redirectToSignIn()}>
  //             Sign In
  //           </button>
  //       ) : (
  //           <>
  //             {!userSession.isSignInPending() && userData && (
  //                 <p>
  //                   {userData.username}
  //                 </p>
  //             )}
  //             <button type="button" onClick={() => userSession.signUserOut(window.location.origin)}>
  //               Sign Out
  //             </button>
  //           </>
  //       )}
  //     </header>
  //   </div>
  // );
};

export default App;
