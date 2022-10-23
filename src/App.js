import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginREactBootstrap from './components/LoginREactBootstrap';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import Main from './layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <RegisterReactBootstrap></RegisterReactBootstrap>
        },
        {
          path: '/register',
          element: <RegisterReactBootstrap></RegisterReactBootstrap>
        },
        {
          path: '/login',
          element: <LoginREactBootstrap></LoginREactBootstrap>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
