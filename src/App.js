import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Post from "./pages/home/post/Post";
import SinglePostCard from "./components/singlePostCard/SinglePostCard";
import PostCardDetails from "./components/PostCardDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepost/:singlepostID" element={<PostCardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
