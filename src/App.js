import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css'
import Homepage from './pages/Homepage'
import SignIn from './pages/Signin'

function App() {

  const user = null

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={user ? <Homepage /> : <Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
