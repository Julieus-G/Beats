import Navbar from "./Components/Navbar/navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Memberships from "./pages/membership";
import Services from "./pages/services";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Tracks from "./pages/tracks";
import SoundKits from "./pages/soundkits";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/sound-kits" element={<SoundKits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
