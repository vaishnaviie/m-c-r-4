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

  const upVoteHander = (ID) => {
    const singlePost = forumData?.posts?.find((post) => post.postId === ID);
    singlePost.upvotes = singlePost.upvotes + 1;
    setTotaVotes(singlePost.upvotes - singlePost.downvotes);
  };

  const downVoteHander = (ID) => {
    const singlePost = forumData?.posts?.find((post) => post.postId === ID);
    singlePost.downvotes = singlePost.downvotes + 1;
    setTotaVotes(singlePost.upvotes - singlePost.downvotes);
  };

  return (
    <>
      {boolean && (
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "blue",
          }}
        >
          {" "}
          Post
        </Link>
      )}

      <div
        style={{ border: boolean && "2px solid blue" }}
        className={styles.mainContainer}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <AiFillCaretUp
            style={{ fontSize: "3rem", color: "blue" }}
            onClick={() => upVoteHander(post?.postId)}
          />
          {/* {totalVotes} */}
          {post.upvotes - post.downvotes}
          <AiFillCaretDown
            style={{ fontSize: "3rem", color: "gray" }}
            onClick={() => downVoteHander(post?.postId)}
          />
        </div>
        <div>
          <div style={{ display: "flex", marginTop: "0.5rem" }}>
            <img
              src={post.picUrl}
              //   style={{ marginTop: "2rem" }}
              alt="pic"
              height="30rem"
              width="30rem"
            />
            <span style={{ marginLeft: "0.5rem" }}>
              {" "}
              <span style={{ color: "gray" }}>posted by</span>
              <span style={{ color: "blue" }}>@{post.username}</span>
            </span>
          </div>
          <h3>{post.post}</h3>
          {post?.tags?.map((tag) => (
            <span
              style={{
                marginRight: "15px",
                //   border: "1px solid blue",
                backgroundColor: "lightblue",
                padding: "0.2rem",
                borderRadius: "10px",
                fontSize: "12px",
                color: "blue",
              }}
            >
              {tag}
            </span>
          ))}
          <p>{post.postDescription}</p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to={`/singlepost/${post.postId}`}>
              <BiComment style={{ fontSize: "1.2rem", color: "black" }} />{" "}
            </Link>{" "}
            <BiShareAlt style={{ fontSize: "1.2rem" }} />
            <BsBookmarkFill
              style={{ color: Bcolor, fontSize: "1.2rem" }}
              onClick={() => setBtnToggle(!btnToggle)}
            />
          </div>
          <div>
            {boolean && (
              <div>
                {post?.comments?.map((e) => (
                  <div
                    style={{ display: "flex", marginTop: "1rem", gap: "1rem" }}
                  >
                    <img
                      src={e.picUrl}
                      alt="pic"
                      height="35rem"
                      width="35rem"
                    />
                    <span>
                      <span>
                        <b>{e?.username}</b>@{e?.username}
                      </span>

                      <p style={{ color: "gray" }}>
                        Replying to
                        <span style={{ color: "blue" }}>
                          @{forumData?.username}
                        </span>
                      </p>
                      <span>
                        <b>{e?.comment}</b>
                      </span>
                    </span>
                  </div>
                ))}

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <AiOutlineHeart style={{ fontSize: "1.2rem" }} />
                  <BiComment style={{ fontSize: "1.2rem" }} />
                  <BiShareAlt style={{ fontSize: "1.2rem" }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
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
