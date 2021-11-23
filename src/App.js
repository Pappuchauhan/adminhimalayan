import logo from './logo.svg';
import AppSidebarNav from './components/AppSidebarNav';
import AppTopNav from './components/AppTopNav';
import HomeTemp from './components/HomeTemp';
import './App.css';
 

function App() {
  return (     
    <div className="wrapper"> 
     <AppSidebarNav/>
      <div id="body" className="active">
        <AppTopNav/>
        <HomeTemp/>
      </div>
    </div>
  );
}

export default App;
