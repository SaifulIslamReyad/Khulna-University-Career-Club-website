import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import BlogSection from "./components/BlogSection";
import QnaSection from "./components/QnaSection";
import Members from "./components/Members";
import GallerySection from "./components/GallerySection";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Signup /> */}
      {/* <Login /> */}
      <Profile />
      {/* <BlogSection /> */}
      {/* <QnaSection /> */}
      {/* <Members /> */}
      {/* <GallerySection /> */}
      <Footer />
    </div>
  );
}

export default App;
