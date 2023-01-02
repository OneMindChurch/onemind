import styled from "styled-components";
import { theme } from "./Theme";

const Flex = styled.div`
  display: flex;
`;
// Component 공통
export const Wrap = styled(Flex)`
  width: 100%;
  padding: 0 0 25px 0;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const ImgBox = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.22);
`;
export const Img = styled.img<{ width: any; height: any; margin: any }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  object-fit: cover;
`;

export const DivideBox = styled(Flex)`
  width: 100%;
  max-width: 1280px;
  flex-flow: row wrap;
  gap: 25px;
`;
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
export const Ul = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 5px;
  gap: 30px;
  padding-left: 10px;
`;
export const Li = styled.li`
  list-style: none;
`;
export const ContentsBox = styled(Flex)`
  flex-flow: column wrap;
  gap: 30px;
  flex: 8;
  padding: 20px 0 0 0;
  margin: 0 5px 0 5px;
`;
export const ContentsDiv = styled.div`
  width: 100%;
`;
export const TinyTitle = styled.p<{ fontsize: any }>`
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  text-align: center;
`;
export const TinyTitles = styled.p<{ fontsize: any }>`
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  text-align: start;
  margin-left: 60px;
`;
export const InfoDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
  }
`;
export const InfoTitleDiv = styled(InfoDiv)<{ fontsize: any }>`
  height: 40px;
  text-align: left;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  border-bottom: 1px solid lightgrey;
`;
export const P = styled.p`
  // border-bottom: 1px double ${theme.mainColor};
  border-bottom: 2px double lightgrey;
`;
