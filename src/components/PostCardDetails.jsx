import React from "react";
import { useParams } from "react-router-dom";
import { forumData } from "../data/Data";
import PostCard from "./postcard/PostCard";

const PostCardDetails = () => {
  const { singlepostID } = useParams();

  function getProductDetails(forumData, singlepostID) {
    return forumData?.posts?.find((item) => item.postId === singlepostID);
  }

  const product = getProductDetails(forumData, singlepostID);
  console.log(product);
  return (
    <div>
      <PostCard post={product} boolean />
    </div>
  );
};

export default PostCardDetails;
