import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, SignUp, Meeting, Party, Wedding, Error } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/meetingsManager" element={<Meeting />} />
          <Route path="/weddingManager" element={<Wedding />} />
          <Route path="/partyManager" element={<Party />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
