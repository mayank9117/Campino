import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import DashBoard from './pages/admin/DashBoard';
import AddBlog from './pages/admin/AddBlog';
import ListBlog from './pages/admin/ListBlog';
import Comments from './pages/admin/Comments';
import Layout from './pages/admin/Layout';
import Login from './components/admin/Login';

const App = () => {
  const isAuthenticated = true; // replace this with real auth check later

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='admin' element={isAuthenticated ? <Layout /> : <Login />}>
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
