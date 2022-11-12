import React, { useEffect } from "react";
import styled from "styled-components";
import icon from "../icons/Vector.png";

export default function PostDetail({
  image,
  text,
  setPostDiv,
  tags,
  likes,
  owner,
  publishDate,
}) {
  useEffect(() => {
    console.log(date);
  }, []);
  let date = publishDate;
  let givenDate = date.substring(0, 10);

  return (
    <Page>
      <PostContainer>
        <UserId>
          <UserImg src={owner.picture} />
          <UserName>
            {owner.firstName} {owner.lastName}
          </UserName>
          <Cross
            onClick={() => {
              setPostDiv((p) => !p);
            }}
          >
            X
          </Cross>
        </UserId>
        <PostImage src={image} alt="" />
        <Horizon />
        <TextContainer>
          <p>@{owner.firstName}</p>
          {text}
        </TextContainer>
        <Horizon />
        <TagContain>
          {tags && tags.map((i, index) => <Tags key={index}>#{i}</Tags>)}
        </TagContain>
        <LikeContainer>
          <Like>
            {likes}
            <LikeImg src={icon} alt="" />
          </Like>
          <DateText>{givenDate}</DateText>
        </LikeContainer>
        {/*
         */}
      </PostContainer>
    </Page>
  );
}

const Page = styled.div`
  text-align: center;
  position: fixed;
  z-index: 10000;
  width: 82rem;
  height: 38.9rem;
  padding-top: 1px;
  border: 1px solid #a39f9f;
  top: 0;
  left: 0;
  background-color: white;
  min-height: 100px;
  background-image: linear-gradient(to top, #c1c1c1, #ffffff);
`;
const PostContainer = styled.div`
  border: 1px solid;
  height: 38rem;
  width: 36rem;
  border-radius: 20px;
  position: relative;
  top: 0px;
  z-index: 10000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  background-color: white;
  overflow: auto;
`;
const UserId = styled.div`
  display: flex;
  border: 1px solid #d2d0d0;
  margin-left: 0;
  padding-left: 20px;
  padding-bottom: 0.5px;

  border-radius: 20px 20px 0px 0px;
  gap: 10px;
  background-color: #ece8e8;
`;
const UserName = styled.div`
  font-size: 20px;
  color: black;
  max-width: 300px;
  margin-top: 15px;
  padding: 5px;
  margin-right: auto;
`;
const UserImg = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 5px;
  border-radius: 30px;
  border: 0.5px solid;
`;
const Cross = styled.button`
  font-size: 20px;
  background-color: transparent;
  color: #000000;
  border: none;
  float: right;
  padding: 22px;
  margin: 0;
  border-radius: 0px 20px 0px 0px;
  cursor: pointer;
  :hover {
    color: #a1a1a5;
    background-color: #fffdfd;
  }
`;
const PostImage = styled.img`
  width: 96%;
  height: 399px;
  margin-bottom: 0;
  padding: 0;
`;
const TextContainer = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 14px;
  text-align: left;
  display: flex;
  font-style: italic;
  p {
    text-align: center;
    font-size: 14px;
    max-width: 150px;
    min-width: 100px;
    margin-top: 0;
    font-weight: 800;
    font-style: normal;
  }
`;
const TagContain = styled.div`
  margin: 0;
  display: flex;
  min-width: 200px;
  max-width: 250px;
  margin-left: 20px;
  gap: 0;
`;
const Tags = styled.p`
  gap: 2px;
  color: #787777;
  padding-left: 5px;
  float: right;
  font-size: 13px;
  margin: 0;
`;
const Horizon = styled.hr`
  margin-top: 3px;
  margin-bottom: 0;
  width: 99%;
  border-top: 0.5px dashed #8a8787;
  line-break: loose;
`;
const LikeContainer = styled.div`
  margin-top: 10px;
  display: flex;
  padding: 0;
  height: 30px;
  gap: 170px;
`;
const Like = styled.p`
  font-size: 14px;
  border: 1px dotted;
  width: 50px;
  height: 20px;
  margin-top: 3px;
  margin-left: 30px;
  text-align: center;
`;
const LikeImg = styled.img`
  width: 16px;
  height: 16px;
  padding-left: 2px;
  margin-top: 2px;
  margin-left: 6px;
  float: left;
`;
const DateText = styled.div`
  width: 100px;
  font-size: 13px;
  color: #6d6d6d;
  align-items: center;
  text-align: center;
  position: relative;
  left: 180px;
`;
