import React from "react";
import styles from "./SinglePostCard.module.css";
import { BsBookmark } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const SinglePostCard = ({ post }) => {
  const totalVotes = post?.upvotes - post?.downvotes;
  <div className={styles.mainContainer}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AiFillCaretUp />
      {totalVotes}
      <AiFillCaretDown />
    </div>
    <div>
      <p>posted by {post?.username}</p>
      <h3>{post?.post}</h3>
      {post?.tags?.map((tag) => (
        <span style={{ marginRight: "15px" }}>{tag}</span>
      ))}
      <p>{post.postDescription}</p>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BiComment onClick={<SinglePostCard post={post} />} />
        <BiShareAlt />
        <BsBookmark />
      </div>
    </div>
  </div>;
};

export default SinglePostCard;
