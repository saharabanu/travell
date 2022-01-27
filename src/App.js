import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import AddBlog from './Pages/Dashboard/AddBlog/AddBlog';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageBlogs from './Pages/Dashboard/ManageBlogs/ManageBlogs';
import Review from './Pages/Dashboard/Review/Review';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import SingleBlog from './Pages/Home/SingleBlog/SingleBlog';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/makeAdmin" element={<MakeAdmin />} />
        <Route path="/manageBlogs" element={<ManageBlogs />} />
        <Route path="/review" element={<Review />} />
        <Route path="/singleBlog/:id" element={<PrivateRoute><SingleBlog/></PrivateRoute>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
                            <Route path="/dashboard" >
                            
                            </Route>
                            
                            
                            <Route path={`/dashboard/review`} element={<Review />}>   
                            </Route>
                            
                            <Route path={`/dashboard/addBlog`} element={<AdminRoute><AddBlog/></AdminRoute>}>
                                
                            </Route>
                            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>
                                
                            </Route>
                            <Route path={`/dashboard/manageBlogs`} element={<AdminRoute><ManageBlogs /></AdminRoute>}>
                                
                            </Route>

       </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
