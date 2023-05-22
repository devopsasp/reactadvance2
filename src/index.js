import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import AboutUs from './components/about';

import ContactUs from './components/contactus';
import Todotask from './components/todotask';
import ParentComp from './components/parentchildcomp/example1/parent';
import MessageReceiver from './components/parentchildcomp/example2/parent1';
import TaskStatus from './components/parentchildcomp/example3/taskstatus';
import CounterComp from './components/ErrorBoundaryDemo/countercomp';
import ErrorBoundary from './components/ErrorBoundaryDemo/ErrorBoundaryDemo';
import DisplayComp from './components/ErrorBoundaryDemo/parentcomp';
import ParentFunc from './components/parentchildcomp/example4/parentfunc';
const LazyAbout=React.lazy(()=>import('./components/about'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<App/>}>

   <Route path="/about" element={<React.Suspense  fallback='Loading text...'>
    <LazyAbout/>
    </React.Suspense>}/>
   <Route path="/contact" element={<ContactUs/>}/>
   <Route path="/todotask" element= {<Todotask/>}/>
   <Route path="/parentcomp" element={<ParentComp/>}/>
   <Route path="/messagereciever" element={<MessageReceiver/>}/>
   <Route path="/parentfunc" element={<ParentFunc/>}/>
   <Route path="/taskstatus" element={<TaskStatus/>}/>
   <Route path="/errorcomp" element={<ErrorBoundary><CounterComp/></ErrorBoundary>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
