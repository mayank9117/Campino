import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import DashBoard from './pages/admin/DashBoard';
import AddBlog from './pages/admin/AddBlog';
import ListBlog from './pages/admin/ListBlog';
import Comments from './pages/admin/Comments';
import Layout from './pages/admin/Layout';
import Login from './components/admin/Login';
import 'quill/dist/quill.snow.css'
import { useAppContext } from './context/AppContext';
 
import {Toaster} from 'react-hot-toast'


const App = () => {

  // const isAuthenticated = true; // replace this with real auth check later

  const { token } = useAppContext();
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='admin' element={token ? <Layout /> : <Login />}>
          <Route index element={<DashBoard />} />
          <Route path='addBlog' element={<AddBlog />} />
          <Route path='listBlog' element={<ListBlog />} />
          <Route path='comments' element={<Comments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
