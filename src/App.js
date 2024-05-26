import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from './components/login/Login';


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/home" element={<Home />} />
            </Routes>
    </Router>
  );
}

export default App;
