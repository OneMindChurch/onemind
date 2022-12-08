import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { H2, Lihover, SidebarBox, Ul } from "../../styles/Intro";
import NotFound from "../NotFound";

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
  const [currentClick, setCurrentClick] = useState(""); // 현재 클릭

  const pathName = useLocation().pathname; // url path 값을 받아옴
  const intro_menus: SideItem[] = [
    { name: "교회 소개", path: "/introduction", id: "introduction" },
    { name: "목사 소개", path: "/pastor", id: "pastor" },
    { name: "교회 소식", path: "/news", id: "news" },
    { name: "교회 앨범", path: "/album", id: "album" },
    { name: "예배 시간", path: "/worship", id: "worship" },
    { name: "교회 오시는 길", path: "/location", id: "location" },
  ];
  const GetClick = (e: E) => {
    setCurrentClick(() => e.target.id);
    window.scroll({
      top: 0,
    });
  };

  useEffect(() => {
    console.log("currentClick", currentClick);
  }, [currentClick]);
  return (
    <SidebarBox>
      <H2>{prop.title}</H2>
      <Ul>
        {pathName === "/introduction" ||
        "/news" ||
        "/album" ||
        "/location" ||
        "/worship" ? (
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
