import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainMenu = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Item = styled.li`
  list-style: none;
`;

const ItemName = styled.div`
  font-weight: bold;
  padding: 10px;
  color: black;
  font-size: 1.5vh;
  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
    color: #ffffff;
    border-radius: 6px 6px 0 0;
  }
`;

const ItemCotents = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  display: none;

  &:hover {
    display: block;
  }
`;

const ContentsMenu = styled.div`
  background-color: #2c2a29;
`;
const Inner = styled.ul`
  padding: 20px 0;
  display: flex;
`;

const InnerItem = styled.li`
  width: 220px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default function MainNav() {
  return (
    <MainMenu>
      <Item>
        <StyledLink to={"/introduction"}>
          <ItemName>교회소개</ItemName>
        </StyledLink>
        <ItemCotents>
          <ContentsMenu>
            <Inner>
              <InnerItem></InnerItem>
              <InnerItem></InnerItem>
            </Inner>
          </ContentsMenu>
        </ItemCotents>
      </Item>
      <Item>
        <StyledLink to={"/news"}>
          <ItemName>교회소식</ItemName>
        </StyledLink>
        <ItemCotents>
          <ContentsMenu>
            <Inner>
              <InnerItem></InnerItem>
              <InnerItem></InnerItem>
            </Inner>
          </ContentsMenu>
        </ItemCotents>
      </Item>
      <Item>
        <StyledLink to={"/album"}>
          <ItemName>교회앨범</ItemName>
        </StyledLink>
        <ItemCotents>
          <ContentsMenu>
            <Inner>
              <InnerItem></InnerItem>
              <InnerItem></InnerItem>
            </Inner>
          </ContentsMenu>
        </ItemCotents>
      </Item>
      <Item>
        <StyledLink to={"/location"}>
          <ItemName>오시는길</ItemName>
        </StyledLink>
        <ItemCotents>
          <ContentsMenu>
            <Inner>
              <InnerItem></InnerItem>
              <InnerItem></InnerItem>
            </Inner>
          </ContentsMenu>
        </ItemCotents>
      </Item>
    </MainMenu>
  );
}
