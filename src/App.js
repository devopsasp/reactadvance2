import logo from './logo.svg';
import './App.css';
import {Outlet,Link} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundaryDemo/ErrorBoundaryDemo';
function App() {
  return (
    
    <div  className="layout">
      <nav className="Sidebar">
        <div className="SidebarList">
      <div  >
        <Link to="about" className="row">About Us</Link>
      </div>
      <div>
        <Link to="contact" className="row">Contact Us</Link>
      </div>
      <div>
        <Link to="todotask" className="row">To Do Task List</Link>
      </div>
      <div>
        <Link to="parentcomp" className="row">Parent Comp</Link>
      </div>
   <div>
     <Link to="messagereciever" className="row">Child Comp</Link>
   </div>
   <div>
     <Link to="taskstatus" className="row">Task Status</Link>
   </div>
   <div>
     <Link to="errorcomp" className="row">Error Boundary</Link>
   </div>
   <div>
     <Link to="parentfunc" className="row">Parent Child function</Link>
   </div>
      </div>
      </nav>
    
       <Outlet/>
       
    </div>
    
  );
}

export default App;
