import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import {
  Wrap,
  ImgBox,
  Img,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  InfoTitleDiv,
  FloatImg,
  TinyTitle,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";
import IntroImg from "../../img/introImg.jpg";

export default function Introduction() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <div style={{ height: "80px" }}></div>
      <ImgBox>
        <Img
          src={Rainbow250}
          alt=""
          width="100%"
          height="100%"
          margin="0 0 -5px 0"
        />
      </ImgBox>
      <DivideBox>
        <Sidebar title="교회 소개" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">교회 소개</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <FloatImg
                src={IntroImg}
                alt=""
                width="350px"
                height="450px"
                float="left"
              />
              <div>
                <TinyTitle fontsize="20px">교회론</TinyTitle>
                <p>
                  느린 심장 박동 너네 진지한 말도 너무 거대한 파도 날 이제 놔줘
                  다 가져 가 싸가지 없게 다 바가지 박아 목요일 밤엔 복을 받아
                  어반자카파 심장 박동 친자 판독해 아빠 잠깐만 힙합 팔던 시장
                  바닥 까무잡잡하지 으으으 하고 넘어졌다가 우우우 너가 너무 좋다
                  누가 음주 단속 똥줄 타 훅 끝나고 바로 벌스 힐끔 바라보고 널
                  후끈 달아오를 거야 허구한 날을 바라봤던 허클베리핀의 모험 Very
                  Very Good 테레비를 보고 난 내 미래를 봤어 랩 하지 말아 달라고
                  방금 왜 아줌마 아들내미를 감금해 백화점에서 산 아들 가방 끈
                  대신 집을 여러 개 사시는 게 like 바둑 느린 심장 박동 느린 박동
                  너네 집 다 왔어 내리실 문은 왼쪽입니다 느린 심장 박동 느린
                  박동 너네 집 다 왔어 내리실 문은 왼쪽입니다 랩퍼란 타이틀 떼고
                  랩 한지가 더 빼곡 우레탄 트랙 같애 이거 납득이 돼 I do that 널
                  또 기대하게 해 나 어떻게 대학에 패스 나 어떻게 대학에 패스
                  납득이 돼 돼 돼 돼 버퍼링 대학교 어떻게 pass 시간은 빠르게
                  pass 고민해 봤자야 그러니 친구야 빠르게 puff puff pass 난
                  오히려 느리게 걸음 걸이 groovy해 생각은 많이 안 해 행동을 빨리
                  하네 인생은 balance 대학교 자퇴 해 버리고 예술가가 되어 버리고
                  뭘 버리고 뭘 얻었게 뭘 더 어떻게 하면 돼 요즘엔 가사에 내용이
                  없는 게 의식의 흐름이 좋은데 대부분 의식도 없는데 근데 또 내가
                  아는 게 다가 아니 라는 게 사실인건 다 아는데 다 아는 사실 나는
                  왜 또 나 혼자만 다르게 생각을 하는 게 아마 난 천재 아마 난
                  바보 아마겟돈 아마 우리 고민은 돈이 다 해결해주겠지 돈이
                  많으면 웃겠지 돈이 많아도 시간은 빠르겠지 심장 박동 느려지고
                  죽겠지 느린 심장 박동 느린 박동 너네 집 다 왔어 내리실 문은
                  왼쪽입니다 느린 심장 박동 느린 박동 너네 집 다 왔어 내리실
                  문은 왼쪽입니다
                </p>
              </div>
            </InfoDiv>
          </ContentsDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <TinyTitle fontsize="20px">교회 연혁</TinyTitle>
              {/* 이미지가 있다면 이미지로 대체 */}
              <p>
                시기 다른 랩퍼들의 반대편을 바라보던 랩퍼들의 배포 그건 백프로
                개뻥 뭐든 개빨어 마치 텐프로 됐어 보인 각본 짜인 대본 텐션을
                up을 해 해야지 제대로 난 이 게임에서 acrobat 내 랩들은 전부 다
                감으로 해 돈 벌어먹지 못해 나를 바라보는 랩퍼들은 말하더군 진짜
                개 좆돼 돈 되는 Song 그 밖에 내가 추는 트위스트 Deep 해진 기운
                탓에 쟤네는 챙겨야 돼 품위를 여긴 힙합 사는 곳이 아냐 거기
                발라드 랩퍼 난 여기에 진짜를 뱉을테니 넌 발라드를 해줘 쟤네는
                얼굴이 먹혔고 돈 벌어 좆된건 나였지 다시금 처음으로 돌아가 내
                음악 취향을 바꾸면 그게 더 멋있어 보일까? 야 그냥 かんぱい yo
                spit it spit it spit it 하던 대로 Fuck 좆까 저기 빙신 븅신 병신
                제대로 된 것들에만 투자 날 깎으려 하는 애들에게 난 장애아 선생의
                마음으로 봐 멋있는 조각가의 꿈을 심어 줬다 난 했던 대로 외줄
                타서 리듬 타지 Fuck up 그때 BB 바른 한 랩퍼가 내게 말을 건다
                요즘 사회는 큰돈 벌어야 해 야 이 새끼야 화장하는 남자 쪽팔리면
                왜 랩퍼했냐 TV 나가려면 파우더 찍어 발라야지 좀이라도 이쁘장하게
                찍어 담아야지 요즘 사횐 큰돈 벌어야 해 야 이 새끼야 화장하는
                남자 쪽팔리면 왜 랩퍼했냐 TV 나가려면 파우더 찍어 발라야지 걍 다
                좆 까고 난 니네 찍어 담아야지 오르내려 내일의 너 그리고 오늘의
                나 이젠 대체 왜 내가 널 부러워해? 더러운 돈벌이 어떻게 더 벌릴
                생각이 주가 돼 랩들이 부업이네 내 올해는 멋지게 만들어 멋지게
                팔아 삐끗은 퍽이나 내 곡예는 정신이상자라 처음부터 이 게임은
                너에겐 부전패 어리바리 깔 시간이 없다 이제 어디까지 갈지 내
                역량인 game 이제 내 앞에 상승곡선은 네 엄마 등골 보다 휘어서
                폭등이 돼 내 혓바닥 현란한 춤사위는 네 멘탈을 가져와 돌려서
                저글링 해 네 형제들 전부 다 데리고 와 시위를 해봐도 폭포 앞
                촛불이네 I don't need a doctor 감성 같은 거 안 팔어 난 원해 파멸
                날 바보로 봤던 애들아 제발 뱁새 눈 크게 떠 봐줘 내 밥벌이는
                창피할 것들이 없게 번다고 지켜내 이 발언 난 내가 탄 밧줄을
                절대로 내려올 일들이 없지 뭘 알어? 내 피땀으로 얻은 자리
                너네들이 무슨 말을 해도 내가 더러워질 기미 따윈 없지 돈을
                바라보는 랩퍼들은 버릇처럼 얼굴들을 팔아먹어 불만들을 가진 내가
                문제아라 치부하는 무리들에 내가 뭐를 하면 될까 그냥 받아버리는
                게 편한 너네 평가 그때 BB 바른 한 랩퍼가 내게 말을 건다 요즘
                사회는 큰돈 벌어야 해 야 이 새끼야 화장하는 남자 쪽팔리면 왜
                랩퍼했냐 TV 나갈려면 파우더 찍어 발라야지 좀이라도 이쁘장하게
                찍어 담아야지 요즘 사횐 큰돈 벌어야 해 야 이 새끼야 화장하는
                남자 쪽팔리면 왜 랩퍼했냐 TV 나갈려면 파우더 찍어 발라야지 걍 다
                좆 까고 난 니네 찍어 담아야지 외설? 예술? 난 몰라 이 세계에서
                만약 사과나무 씨를 준다면 난 됐어 니가 말한 ocean은 최고 아닌
                최선 박을 맛 좀 나게 열어 귓구멍을 알겠어? 외설? 예술? 난 몰라
                이 세계에서 만약 사과나무 씨를 준다면 난 됐어 Rapper? DJ?
                dancer? 뭐 talent? 투명해졌다고 말하는 너에게 말해줄게 야 요즘
                사회는 큰돈 벌어야만 해 근데 새끼야 난 화장하는 네가 쪽팔려서
                랩퍼했다 그래 TV 나갈려면 파우더 찍어 발라야지 여자같이
                이쁘장하게 찍어 담아야지 요즘 사회는 큰돈 벌어야만 해 근데
                새끼야 난 화장하는 네가 쪽팔려서 랩퍼했다 그래 TV 나갈려면
                파우더 찍어 발라야지 걍 다 좆 까고 난 니네 찍어 발라야지
              </p>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
