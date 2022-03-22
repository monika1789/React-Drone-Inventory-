import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {About, Contact, Home, Car, SignIn} from './components';
import './styles.css';

import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'


const temp_prop = " Welcome to the Car inventory"

ReactDOM.render(
  <React.StrictMode>
     <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}> 
    <Router>
      
      <Switch>
      
       <Route exact  path ='/'>
       <Home  title={temp_prop}/>
       </Route>
       <Route path ='/contact'> 
       <Contact/> 
       </Route>
      <Route  path ='/about'>
       <About/>
       </Route>
       <Route  path ='/car'>
       <Car/>
       </Route> 
       <Route  path ='/signin'>
       <SignIn/>
       </Route>
       
      </Switch>

    </Router>
     </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



