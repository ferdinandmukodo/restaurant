import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<Forgot />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/lecturer" element={<Lecturer />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
