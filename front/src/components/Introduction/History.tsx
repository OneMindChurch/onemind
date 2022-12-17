import React from "react";
import styled from "styled-components";
import { InfoDiv, IntroTitle } from "../../styles/Intro";
import YearItem from "./YearItem";

const DivideBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  flex: 7;
`;

export default function History() {
  return (
    <InfoDiv>
      <IntroTitle fontsize="20px">교회 연혁</IntroTitle>
      <DivideBox>
        <YearItem year="2022년" />
        <InfoBox>
          10월 중보기도회 수련회 권사 수련회(울릉도)
          <br />
          7월 맥추감사절 맞이 초청 감사예배
          <br />
          6월 주일학교 통합예배
          <br />
          6월 임직식 (안수집사 최성곤 김재은 김요한 권사 안현숙 성순정)
          <br />
          1월 제직 헌신예배
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2021년" />
        <InfoBox>
          12월 권사, 안수집사 선출을 위한 공동의회
          <br />
          11월 다니엘 기도회
          <br />
          7월 주일학교 성경학교
          <br />
          6월 한마음 교회 스타리아 신차 구입
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2020년" />
        <InfoBox>
          10월 주일예배 회복을 위한 전교인 예배
          <br />
          7월 비대면 위미션 유초등부, 중고등부 수련회 참석
          <br />
          2월 코로나로 인한 비대면 예배 시작
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2019년" />
        <InfoBox>
          11월 해피데이 VIP초청
          <br />
          11월 해피데이 목장별 발표회
          <br />
          7월 목장별 초청의 날
          <br />
          4월 영아부 예배 시작
          <br />
          4월 성경대학 개강
          <br />
          1월 임임환 목사 부임
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2018년" />
        <InfoBox>
          11월 해피데이 VIP초청
          <br />
          11월 해피데이 목장별 발표회
          <br />
          10월 목사안수식 김갑수 강도사 목사안수식
          <br />
          5월 한마음교회 야외예배(백두대간 수목원)
          <br />
          4월 한마음 교회 인터넷 카페 개설
          <br />
          4월 2층 유초등부실 수리와 1층 바닥공사
          <br />
          3월 김갑수 강도사 부임
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2017년" />
        <InfoBox>
          12월 김헌주 전도사 사임
          <br />
          12월 김병철 목사 부임
          <br />
          11월 해피데이 VIP초청
          <br />
          10월 해피데이 목장별 발표회가
          <br />
          8월 성가대 세미나
          <br />
          7월 목장별 초청주일
          <br />
          7월 천혜경 전도사 부임
          <br />
          6월 장세진 간사 부임(중등부), 김헌주 전도사 부임(교구관리, 심방)
          <br />
          6월 시냇물가교회 건축헌금
          <br />
          3월 21일 다니엘 기도회
          <br />
          2월 성가대조직
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2016년" />
        <InfoBox>
          12월 남아공 마당교회 건축헌금
          <br />
          10월 청년부 일박 수련회 (청송)
          <br />
          8월 청년수 수련회 (강사: 박창민 목사, 허진경 사모)
          <br />
          7월 중고등부 수련회가 영천 치산 갬핑장
          <br />
          5월 서정현 목사 위임식
          <br />
          5월 전교인 야유회:
          <br />
          3월 서정현 목사 위임목사 청빙을 위한 공동의회
          <br />
          2월 목장별 경퀴즈
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2015년" />
        <InfoBox>
          12월 임직식 (장로:최성철 이강환, 권사:한순남 공영시)
          <br />
          10월 제자로 교회(김선주 목사)와 연합 찬양예배
          <br />
          6월 직분자 선출을 위한 공동의회 (장로:최성철 이강환, 권사:한순남
          <br />
          5월 청년부 1박 수련회 장소: 화원휴양림
          <br />
          5월 교회 시설 보수 공사 공영시)
          <br />
          4월 직분자산상기도회
          <br />
          2월 중보기도팀 수양회 강구
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2014년" />
        <InfoBox>
          10월 전교인 야유회 청도 운문댐
          <br />
          4월 썬 오브 갓 영화 상영 수성동아 프리머스 영화관
          <br />
          3월 임직식: 장지양 최경희 권사취임, 장화자 권사은퇴
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2013년" />
        <InfoBox>
          12월 한마음 작은 도서관 설립
          <br />
          11월 해피데이 초청 직분자 임명을 위한 공동의회
          <br />
          <br />
          8월 한마음 교회 스타렉스 신차구입
          <br />
          7월 선한이웃 바자회 물품을 모집
          <br />
          7월 목장별 태신자 초청
          <br />
          4월 선한이웃 방과후 공부방 운영
          <br />
          3월 두날개 양육반 시작
          <br />
          2월 D12 양육훈련 컨퍼런스가
          <br />
          2월 김요한 간사 부임
          <br />
          2월 매듭청년부 수련회
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2012년" />
        <InfoBox>
          12월 조형래 전도사 사임
          <br />
          12월 성탄절 발표회
          <br />
          11월 해피데이 초청
          <br />
          11월 해피데이 목장별 발표회
          <br />
          10월 전교인 가을 소풍 (주왕산)
          <br />
          10월 해피데이 선포식
          <br />
          알파사역 1기 시작
          <br />
          8월 중, 고등부 수련회 주바라기 캠프 (장소: 김천대학교)
          <br />
          7월 청년부 수련회 (장소: 청송)
          <br />
          7월 유, 초등부 하계행사 꽃동산 성령체험캠프
          <br />
          7월 목장별 전도초청
          <br />
          5월 목장별 성경퀴즈대회
          <br />
          4월 전교인 산상기도회(주암산 기도원)
          <br />
          3월 사순절 특별새벽기도회 - 4월
          <br />
          1월 부흥회 정상교 목사 초청 신년 부흥회
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2011년" />
        <InfoBox>
          12월 새로운 교회명 투표 결과 한마음 교회로 명칭변경
          <br />
          11월 해피데이 초청
          <br />
          10월 무비데이(cgv)
          <br />
          9월 목장별 해피데이 시작
          <br />
          9월 파스토랄 싱어즈 초청 음악회
          <br />
          8월 추수하는 교회 새이름 공모
          <br />
          6월 부흥회
          <br />
          6월 주일하교 야유회 (봉무공원)
          <br />
          5월 전도 특공도(화, 목)
          <br />
          5월 남, 여 양육반 시작
          <br />
          5월 전교인 야유회 남해
          <br />
          3월 대심방
          <br />
          선교사(정기윤, 김은경) 미자립교회(율도교회, 믿음교회) 후원
          <br />
          3월 대심방
          <br />
          3월 교회 100배 성장 세미나 참석 29명
          <br />
          1월 중보기도 모임 시작 매주 화요일 8시 30분
          <br />
          1월 요람제작
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2010년 (50명)" />
        <InfoBox>
          12월 지역민 초청 성탄절 초청의 밤 행사
          <br />
          11월 해피데이 예수사랑 큰잔치 초청(82명 참석)
          <br />
          10월 전교인 무비데이 행사(160명 참석)
          <br />
          10월 목장모임 시작
          <br />
          10월 해피데이 목장별 발표회
          <br />
          10월 해피데이 릴레이 기도 시작
          <br />
          10월 교회 2층 수리
          <br />
          9월 해피데이 예수사랑 큰잔치 50일 선포식
          <br />
          9월 여제자반 시작
          <br />
          8월 여전도회 분리. (에스더, 마리아)
          <br />
          8월 최성철 협동장로 임명, 배성일, 정용득 협동안수집사 임명
          <br />
          7월 주일학교 하계행사
          <br />
          7월 찬양대 시작
          <br />
          6월 해피데이 초청
          <br />
          5월 임직식 (안수집사: 이강환 유천우 임민근, 권사 이갑선 정경란 정수자)
          <br />
          4월 남전도회 주관 야유회 (장소: 감포)
          <br />
          2월 임민근 집사 안수집사 당선 정수자 권사 당선
          <br />
          2월 신년 축복 성회 (강사:조윤희 전도사)-3월
          <br />
          1월 교회강단 부엌 리모델링
          <br />
          1월 21일 다니엘 기도회
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2009년" />
        <InfoBox>
          12월 목회자 수양회(남해)
          <br />
          11월 해피데이 초청
          <br />
          11월 산상기도회
          <br />
          10월 직분자 선출을 위한 공동의회
          <br />
          10월 야외예배(대구수목원)
          <br />
          9월 산상철야기도회
          <br />
          7월 주일학교 하계 성경학교
          <br />
          5월 양육반 시작
          <br />
          4월 청 장년부 친목회(기장)
          <br />
          4월 해피데이 전도초청
          <br />
          3월 해피데이 전도시작
          <br />
          3월 토요전도모임 시작
          <br />
          2월 임인환 전도사 부임
          <br />
          1월 청, 장년부 조직
          <br />
          1월 예배팀 1박 수련회
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2008년" />
        <InfoBox>
          10월 153알파(11명 결신)
          <br />
          8월 어부학교
          <br />
          7월 교회리모델링 공사 시작
          <br />
          6월 153용사 전도팀 운영 매주 월-금요일 오전 10시
          <br />
          6월 김병철 목사 부임
          <br />
          6월 구영생 전도사 사임
          <br />
          6월 153 전략 세미나 (강사: 김대영 목사)
          <br />
          5월 153 비전세미나 (강사: 김대영 목사)
          <br />
          5월 3040파워셀 첫 모임(방명길 집사 가정)
          <br />
          4월 개척 1주년 기념 행사 및 오후 야외예배(영덕)
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2007년" />
        <InfoBox>
          12월 목장모임 시작(범물동, 경산)
          <br />
          11월 야유회 (청송)
          <br />
          10월 4주간 알파 시작(4명 결신)
          <br />
          7월 주일학교 여름성경학교 (22명 참석)
          <br />
          7월 ccc 도시전도팀 도시전도
          <br />
          7월 구영생 전도사 부임
          <br />
          7월 셀가족 모임 시작(주일오후 예배 대체)
          <br />
          6월 교회영상예배 시작(빔프로젝트 설치)
          <br />
          5월 임직식 (장화자, 장영례 권사취임)
          <br />
          4월 추수하는 교회 개척설립예배(120명 참석)
          <br />
        </InfoBox>
      </DivideBox>
      <DivideBox>
        <YearItem year="2006년(추수하는 교회 개척 이전)" />
        <InfoBox>
          11월 현) 대구시 수성구 범물동 소재의 건물을 매입
          <br />
          4월 경산시 옥산동 소재의 예배 처소를 준비함
          <br />
          1월 가정 예배 처소에서 예배를 시작하다.
          <br />
          예배 처소가 없어 피아노학원, 태권도장, 병원에서 예배
          <br />
        </InfoBox>
      </DivideBox>
    </InfoDiv>
  );
}
