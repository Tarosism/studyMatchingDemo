import React, { useState } from "react";
import Survey from "./Survey";
import axios from "axios";
import classnames from "classnames";
import "../styles/style.css";

export default function MatchingSystem() {
  const [name, setName] = useState("양승준");
  const [surveyCheck1, setSurveyCheck] = useState("");
  const [surveyCheck2, setSurveyCheck2] = useState("");
  const [surveyCheck3, setSurveyCheck3] = useState("");
  const [surveyCheck4, setSurveyCheck4] = useState("");
  const [endSuervey, setEndSuervey] = useState(false);
  const [result, setResult] = useState("");
  const [me, setMe] = useState("");
  const [noFull, setNoFull] = useState(false);

  const fistSurvey = [
    "모각코처럼 개인공부를 중시하는 스터디면 좋겠어요",
    "정해진 과제를 함께 풀어요",
    "정해진 과제를 풀어오고 리뷰해요",
  ];
  const secondSurvey = ["알고리즘", "면접대비", "프론트엔드", "백엔드"];
  const thirdSurvey = ["주 1~2회", "주 3~4회", "주 5회 이상"];
  const lastSurvey = ["2시간", "3시간", "4시간 이상"];

  const nameHandle = (e) => setName(e.target.value);

  const handleCheck = (e) => {
    setSurveyCheck(e.target.value);
  };
  const handleCheck2 = (e) => {
    setSurveyCheck2(e.target.value);
  };
  const handleCheck3 = (e) => {
    setSurveyCheck3(e.target.value);
  };
  const handleCheck4 = (e) => {
    setSurveyCheck4(e.target.value);
  };
  const submitHandle = () => {
    if (
      !surveyCheck1 ||
      !surveyCheck2 ||
      !surveyCheck3 ||
      !surveyCheck4 ||
      !name
    )
      return setNoFull(true);
    axios
      .post(
        "http://localhost:8080",
        {
          name,
          surveyCheck1,
          surveyCheck2,
          surveyCheck3,
          surveyCheck4,
        },
        { withCredentials: true, "Content-Type": "application/josn" }
      )
      .then(() => {
        axios
          .get(
            `http://localhost:8080/${name}/${surveyCheck1}/${surveyCheck2}/${surveyCheck3}/${surveyCheck4}`,
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            setResult(res.data.threeMatch);
            setMe(res.data.findAlready);
            setEndSuervey(true);
          });
      });
  };

  return (
    <>
      <div
        style={{
          width: "70%",
          height: "100%",
          border: "1px solid #333",
          padding: "15px 20px",
        }}
      >
        {endSuervey ? (
          result.length === 0 ? (
            <>
              <h2>
                앗, {name}님과 3개 이상 동일한 스터디 항목을 가진 동기를 찾지
                못했어요
              </h2>
              <br />
              <div>
                아직 동기들이 많이 등록하지 않았을 수 있어요. DM이 오길
                기다려보거나 조금 시간이 지난 뒤 다시 제출해보세요
              </div>
            </>
          ) : (
            <>
              <h2>
                {name}님과 스터디 조건이 3개 이상 일치하는 동기들을 불러왔어요
              </h2>
              <br />
              <div>이 분들께 DM으로 스터디 권유를 해보는 건 어떨까요?</div>
              {result.map((fill) => {
                return (
                  <>
                    <div
                      style={{
                        height: "16px",
                        marginTop: "15px",
                        marginBottom: "25px",
                        paddingBottom: "15px",
                        height: "100%",
                        border: "1px solid #333",
                        padding: "15px",
                      }}
                    >
                      <h3 style={{ fontWeight: "700", paddingBottom: "5px" }}>
                        {fill.name} 님
                      </h3>
                      <span
                        style={
                          me.surveyCheck1 === fill.surveyCheck1
                            ? { color: "#3f729b", fontWeight: "700" }
                            : { color: "#898989" }
                        }
                      >
                        #{fill.surveyCheck1}{" "}
                      </span>
                      <span
                        style={
                          me.surveyCheck2 === fill.surveyCheck2
                            ? { color: "#3f729b", fontWeight: "700" }
                            : { color: "#898989" }
                        }
                      >
                        #{fill.surveyCheck2}{" "}
                      </span>
                      <span
                        style={
                          me.surveyCheck3 === fill.surveyCheck3
                            ? { color: "#3f729b", fontWeight: "700" }
                            : { color: "#898989" }
                        }
                      >
                        #{fill.surveyCheck3}{" "}
                      </span>
                      <span
                        style={
                          me.surveyCheck4 === fill.surveyCheck4
                            ? { color: "#3f729b", fontWeight: "700" }
                            : { color: "#898989" }
                        }
                      >
                        #{fill.surveyCheck4}{" "}
                      </span>
                    </div>
                  </>
                );
              })}
            </>
          )
        ) : (
          <>
            <div className="title">
              스터디 매칭 도우미에 오신 여러분을 환영합니다 👋
            </div>
            <div className="subTitle">
              스터디 매칭 도우미는 이제 막 코딩공부에 발을 들여 놓으신 수강생
              여러분이 원활한 스터디 모집, 참여가 가능하도록 <br />
              스터디 성향 관련 수강생 정보를 제공해드리는 컨텐츠입니다. (항목을
              제출한다고 해서 스터디가 실제로 매칭되는 것이 아닙니다!) <br />
              설문을 완료해 자신이 구하고 싶은 스터디의 성향을 등록하고 비슷한
              성향을 가진 동기 수강생들을 찾아보세요 <br />
              정말 잘 맞는 동기 수강생이 있다면 DM으로 스터디 권유를 할 수
              있겠죠?
              <br />
              <span style={{ color: "#ff4242" }}>
                ❗항목을 제출하면 수정할 수 없습니다. 다른 사람과 함께 하는
                스터디인 만큼 신중하게 학습량과 스케쥴을 고려해서 제출해주세요
                <br />
                입력 후의 변동 사항은 수강생들끼리의 합의로 풀어나가야 합니다
              </span>
            </div>
            <div className="info">
              <form onSubmit={(e) => e.preventDefault()}>
                <h2>수강생 이름</h2>
                <br />
                <input
                  type="text"
                  placeholder="수강생의 이름을 입력하세요"
                  value={name}
                  onChange={nameHandle}
                  style={{
                    outline: "0",
                    border: "none",
                    borderBottom: ".3px solid #333",
                    fontSize: `20px`,
                    padding: "5px 0",
                  }}
                />
                <br />
                <br />
                <h2>스터디 방향성</h2>
                {fistSurvey.map((fill) => (
                  <Survey
                    survey={fill}
                    surveyCheck={surveyCheck1}
                    handleCheck={handleCheck}
                  />
                ))}
                <br />

                <h2>스터디 주제</h2>
                {secondSurvey.map((fill) => (
                  <Survey
                    survey={fill}
                    surveyCheck={surveyCheck2}
                    handleCheck={handleCheck2}
                  />
                ))}
                <br />

                <h2>주 참여 횟수</h2>
                {thirdSurvey.map((fill) => (
                  <Survey
                    survey={fill}
                    surveyCheck={surveyCheck3}
                    handleCheck={handleCheck3}
                  />
                ))}
                <br />

                <h2>스터디 시간</h2>
                {lastSurvey.map((fill) => (
                  <Survey
                    survey={fill}
                    surveyCheck={surveyCheck4}
                    handleCheck={handleCheck4}
                  />
                ))}
              </form>
            </div>
            <br />

            {noFull && (
              <div style={{ color: "#ff4242" }}>모든 항목을 입력해주세요</div>
            )}
            <button
              type="submit"
              onClick={submitHandle}
              style={{
                width: "88px",
                height: "40px",
                border: "none",
                backgroundColor: "rgb(203, 115, 43)",
                color: "white",
                borderRadius: "12px",
                fontSize: "18px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              제출
            </button>
          </>
        )}
      </div>
    </>
  );
}
