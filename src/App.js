import './App.css'; 
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Main from './components/Main';
import WorkersForm from './components/WorkersForm';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {path:'/', element:<Login></Login>}, 
        {path: 'dashboard', element: <Dashboard></Dashboard>},
        {path: '/', element: <Login></Login>},
        {path: 'register', element: <WorkersForm></WorkersForm>}
    ])

  return (
    <div className='App'>
        <RouterProvider router={router}></RouterProvider>
   
    </div>
  );
}

export default App;