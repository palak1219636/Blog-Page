import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SinglePost from "../components/SinglePost";
// import axios from "axios";
// import dataItem from "../data";
export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   const postRef = useRef();
  useEffect(() => {
    console.log("fetch");

    let myHeaders = new Headers();
    myHeaders.append("app-id", "636cf9c663e7a02a0a25e935");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://dummyapi.io/data/v1/post?limit=10", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setError(null);
        console.log(result.data, "res");
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <FrameContainer>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {/*
       */}
      {data && console.log(data, "data")}
      <Post>
        {data &&
          data.data.map(
            ({ id, image, text, tags, likes, owner, publishDate }, index) => (
              <SinglePost
                id={id}
                image={image}
                text={text}
                tags={tags}
                index={index}
                key={index}
                likes={likes}
                owner={owner}
                publishDate={publishDate}
              />
            )
          )}
      </Post>
    </FrameContainer>
  );
}
const FrameContainer = styled.div`
  background-color: #ece8e8;
`;
const Post = styled.ul`
  margin-top: 100px;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  overflow-x: auto;
`;
