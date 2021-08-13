import React from 'react';
import HomeDarshBoard from './component/home'
import CertificationContainer from './component/pages/certificate'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <main className="App">
          <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomeDarshBoard}/>
          <Route exact path='/certifications' component={CertificationContainer}/>
        </Switch>
    </BrowserRouter>
    </main>
  );
}

export default App;
