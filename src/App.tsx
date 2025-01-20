import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import Chat from "./pages/chat/Chat"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App
