import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AuthProvider, { useAuth } from './contexts/AuthContext'
import Homepage from './pages/Homepage'
import SignIn from './pages/Signin'
import Workoutpage from './pages/Workoutpage'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PageRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

const PageRoutes = () => {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" exact element={user ? <Homepage /> : <Navigate to="/sign-in" />} />
      <Route path="/workout" element={user ? <Workoutpage /> : <Navigate to="/sign-in" />} />
      <Route path="/profile" element={user ? <Profile /> : <Navigate to="/sign-in" />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}

export default App;
