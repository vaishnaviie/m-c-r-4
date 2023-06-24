import React, { useState } from "react";
import styles from "./PostCard.module.css";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import SinglePostCard from "../singlePostCard/SinglePostCard";
import { Link } from "react-router-dom";
import { forumData } from "../../data/Data";

const PostCard = ({ post, boolean }) => {
  const [totalVotes, setTotaVotes] = useState(post?.upvotes - post?.downvotes);
  const [btnToggle, setBtnToggle] = useState(false);

  const Bcolor = btnToggle ? "blue" : "black";

  return (
    <div className={styles.mainContainer}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AiFillCaretUp onClick={() => setTotaVotes(totalVotes + 1)} />
        {totalVotes}
        <AiFillCaretDown onClick={() => setTotaVotes(totalVotes - 1)} />
      </div>
      <div>
        <p>posted by {post.username}</p>
        <h3>{post.post}</h3>
        {post?.tags?.map((tag) => (
          <span style={{ marginRight: "15px" }}>{tag}</span>
        ))}
        <p>{post.postDescription}</p>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <BiComment> */}{" "}
          <Link to={`/singlepost/${post.postId}`}>
            <BiComment />{" "}
          </Link>{" "}
          {/* </BiComment> */}
          <BiShareAlt />
          <BsBookmarkFill
            style={{ color: Bcolor }}
            onClick={() => setBtnToggle(!btnToggle)}
          />
        </div>
        <div>
          {boolean && (
            <div>
              {post?.comments?.map((e) => (
                <li style={{ listStyle: "none" }}>
                  <p>
                    <b>{e?.username}</b>@{e?.username}
                  </p>
                  <p>Replying to {forumData?.username}</p>
                  <p>
                    <b>{e?.comment}</b>
                  </p>
                </li>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <AiOutlineHeart />
                <BiComment />
                <BiShareAlt />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;

// import { BsBookmark } from "react-icons/bs";
//<BsBookmark>

// import { BiShareAlt } from "react-icons/bi";
//<BiShareAlt>

// import { BiComment } from "react-icons/bi";
//<BiComment>

// import { IconName } from "react-icons/ai";
//<AiFillCaretDown>
// <AiFillCaretUp>
