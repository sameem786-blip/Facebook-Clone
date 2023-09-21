import './style.scss';
import Leftbar from './components/leftbar/Leftbar';
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'



function App() {

  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display:"flex"}}>
          <Leftbar />
          <div style={{flex:6}}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
        </div>
        </QueryClientProvider>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children;
  }
  return (
     <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
