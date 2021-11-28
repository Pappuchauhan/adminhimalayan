import logo from './logo.svg';
import { Switch, Route } from "react-router-dom";
import { HOME_PAGE_LINK, CREATE_PACKAGE, VIEW_PACKAGE, CREATE_DESTINATION, VIEW_DESTINATION } from './components/Constants/Constants';
import AppSidebarNav from './components/AppSidebarNav';
import AppTopNav from './components/AppTopNav';
import HomeTemp from './components/HomeTemp';
import CreateDestination from './components/CreateDestination';
import CreatePackage from './components/CreatePackage';
import ViewPackage from './components/ViewPackage';
import ViewDestination from './components/ViewDestination';
import Error from './components/Error';
import './assets/css/master.css';
import './App.css'; 
 

function App() {
  return (     
    <div className="wrapper"> 
     <AppSidebarNav/>
      <div id="body" className="active">
        <AppTopNav/>
        <Switch>
          <Route exact path={HOME_PAGE_LINK}>
            <HomeTemp/>
          </Route>
          <Route exact path={CREATE_PACKAGE}>
            <CreatePackage/>
          </Route>
          <Route exact path={CREATE_DESTINATION}>
            <CreateDestination/>
          </Route>
          <Route exact path={VIEW_PACKAGE}>
            <ViewPackage/>
          </Route>
          <Route exact path={VIEW_DESTINATION}>
            <ViewDestination/>
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        
      </div>
    </div>
  );
}

export default App;
