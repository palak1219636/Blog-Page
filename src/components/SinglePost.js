import React, { useRef, useState } from "react";
import styled from "styled-components";
import PostDetail from "./PostDetail";
import icon from "../icons/Vector.png";
export default function SinglePost({
  id,
  image,
  text,
  tags,
  index,
  likes,
  owner,
  publishDate,
}) {
  const postRef = useRef();
  const [PostDiv, setPostDiv] = useState(false);
  const handleClick = () => {
    console.log(postRef.current.id, "post");
    setPostDiv((p) => !p);
    console.log(owner);
  };

  return (
    <Container>
      <ListItem key={id} id={index} ref={postRef}>
        <UserId>
          <UserImg src={owner.picture} />
          <a onClick={handleClick}>
            {owner.firstName} {owner.lastName}
          </a>
        </UserId>
        <PostImage src={image} alt="posts" />
        <PostText>
          <p>@{owner.firstName}</p>
          {text}
        </PostText>
        <Horizon />
        <TagContain>
          {tags && tags.map((i, index) => <Tags key={index}>#{i}</Tags>)}
        </TagContain>
        <LikeContainer>
          <Like>
            {likes}
            <LikeImg src={icon} alt="" />
          </Like>
          <Anchor onClick={handleClick}>read more...</Anchor>
        </LikeContainer>
      </ListItem>
      {PostDiv && (
        <PostDetail
          image={image}
          text={text}
          tags={tags}
          setPostDiv={setPostDiv}
          likes={likes}
          owner={owner}
          publishDate={publishDate}
        />
      )}
    </Container>
  );
}
const Container = styled.div``;
const ListItem = styled.li`
  padding: 15px;
  list-style: none;
  height: 300px;
  width: 330px;
  border: 1px solid #9c9c9c;
  margin: 10px;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  box-shadow: 1px 1px #9c9c9c;
  :hover {
    box-shadow: 2px 0px 2px #b6b5b5;
  }
`;
const UserId = styled.div`
  padding: 0;
  margin: 0;
  font-size: 12px;
  display: flex;
  gap: 10px;
  padding: 0;
  padding-bottom: 6px;
  a {
    padding-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border: 0.5px solid black;
  border-radius: 25px;
`;
const Anchor = styled.a`
  color: blue;
  :hover {
    cursor: pointer;
    color: #5aa7bf;
  }
`;
const PostText = styled.div`
  margin: 0;
  padding: 0;
  min-width: 240px;
  max-width: 300px;
  min-height: 25px;
  max-height: 34px;
  overflow: hidden;
  font-size: 12px;
  text-align: left;
  display: flex;
  margin-top: 10px;
  p {
    text-align: center;
    font-size: 11px;
    max-width: 80px;
    min-width: 70px;
    margin-top: 0;
    font-weight: 700;
  }
`;
const Horizon = styled.hr`
  margin-top: 3px;
  margin-bottom: 0;
  width: 100%;
  border-top: 0.5px dashed #8a8787;
  line-break: loose;
`;
const TagContain = styled.div`
  margin: 0;
  display: flex;
  min-width: 150px;
  max-width: 200px;
  gap: 0;
`;
const Tags = styled.p`
  gap: 2px;
  color: #787777;
  padding-left: 4px;
  float: right;
  font-size: 12px;
  margin: 0;
`;
const PostImage = styled.img`
  height: 150px;
  width: 180px;
  text-align: center;
`;
const Like = styled.p`
  font-size: 14px;
  width: 50px;
  height: 20px;
  margin-top: 3px;
  text-align: center;
`;
const LikeContainer = styled.div`
  margin-top: 5px;
  display: flex;
  padding: 0;
  height: 30px;
  gap: 170px;
`;
const LikeImg = styled.img`
  width: 16px;
  height: 16px;
  padding-left: 2px;
  margin-top: 3px;
  margin-left: 6px;
  float: left;
`;
