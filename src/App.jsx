import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DeveloperProfile from './pages/DeveloperProfile.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developer/:id" element={<DeveloperProfile />} />
      </Routes>
    </Router>
  );
}

export default App;