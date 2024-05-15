import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"


import Register from "./components/Register";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Username from "./components/Username";
import Reset from "./components/Reset";
import Password from "./components/Password";
import PageNotFound from "./components/PageNotFound";

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register></Register>
  },  
  {
    path: '/profile',
    element: <Profile></Profile>
  },  
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },  
  {
    path: '/',
    element: <Username></Username>
  },  
  {
    path: '/reset',
    element: <Reset></Reset>
  },  
  {
    path: '/password',
    element: <Password></Password>
  },  
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }  
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
