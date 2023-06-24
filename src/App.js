import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Post from "./pages/home/post/Post";
import SinglePostCard from "./components/singlePostCard/SinglePostCard";
import PostCardDetails from "./components/PostCardDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepost/:singlepostID" element={<PostCardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
