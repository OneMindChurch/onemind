import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Ul } from "../../styles/Intro";
import NotFound from "../Layout/NotFound";

export const SidebarBox = styled.div`
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  height: 890px;
  flex-flow: column wrap;
  gap: 30px;
  flex: 2;
  padding: 16px 0 30px 30px;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
export const H2 = styled.h2`
  height: 45px;
  border-bottom: 1px solid lightgrey;
  text-align: center;
`;
export const Lihover = styled.li`
  width: 100%;
  height: 32px;
  list-style: none;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid ${theme.mainColor};
  border-radius: 8px;
  text-align: center;
  padding: 10px 0 6px 0;
  &:hover {
    font-size: 18px;
    background-color: ${theme.mainColor};
    color: ${theme.subColor};
  }
`;

interface prop {
  title: string;
}
interface SideItem {
  name: string;
  path: string;
  id: string;
}
interface E {
  target: any;
}

function Sidebar(prop: prop) {
  const pathName = useLocation().pathname; // url path 값을 받아옴
  const intro_menus: SideItem[] = [
    { name: "인사말", path: "/greeting", id: "greeting" },
    { name: "교회 소개", path: "/introduction", id: "introduction" },
    { name: "목사 소개", path: "/pastor", id: "pastor" },
    { name: "설교 말씀", path: "/sermon", id: "sermon" },
    { name: "교회 소식", path: "/news", id: "news" },
    { name: "교회 앨범", path: "/album", id: "album" },
    { name: "교회 연혁", path: "/history", id: "history" },
    { name: "예배 시간", path: "/worship", id: "worship" },
    { name: "온라인 헌금", path: "/contribution", id: "contribution" },
    { name: "교회 오시는 길", path: "/location", id: "location" },
  ];
  const GetClick = (e: E) => {
    window.scroll({
      top: 0,
    });
  };
  return (
    <SidebarBox>
      <H2>{prop.title}</H2>
      <Ul>
        {pathName === "/greeting" ||
        "/introduction" ||
        "/pastor" ||
        "/sermon" ||
        "/news" ||
        "/album" ||
        "/location" ||
        "/worship" ||
        "/contribution" ? (
          intro_menus.map((menu, index) => {
            return (
              <Link
                to={menu.path}
                key={index}
                style={{
                  textDecoration: "none",
                }}
              >
                <Lihover id={menu.id} onClick={GetClick}>
                  {menu.name}
                </Lihover>
              </Link>
            );
          })
        ) : (
          <NotFound />
        )}
      </Ul>
    </SidebarBox>
  );
}

export default Sidebar;
