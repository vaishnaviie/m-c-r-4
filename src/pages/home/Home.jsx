import React, { useState } from "react";
import styles from "./Home.module.css";
import { forumData } from "../../data/Data";
import PostCard from "../../components/postcard/PostCard";

const Home = () => {
  const [selectedTag, setSelectedTag] = useState(" select");
  //   console.log(selectedTag);

  const filteredData =
    selectedTag === "select"
      ? forumData?.posts
      : selectedTag === "latest posts"
      ? forumData?.posts?.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        )
      : forumData?.posts?.sort((a, b) => a.upvotes - b.upvotes);

  console.log(filteredData);

  //   const abc = "2023-06-24T12:01:00Z";
  //   const v = new Date(abc);
  //   console.log(v);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebar}>
        <h3>Home</h3>
        <h3>Explore</h3>
        <h3>Bookmark</h3>
        <h3>Profile</h3>
      </div>

      <div className={styles.mainPage}>
        <h3>Latest Posts</h3>
        {filteredData?.map((data) => (
          <PostCard post={data} />
        ))}
      </div>

      <div className={styles.sortBy}>
        <h3>sort by</h3>
        <select
          id="color-selector"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="select">select</option>
          <option value="latest posts">latest posts</option>
          <option value="most upvoted posts">most upvoted posts</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
