//seeders/안에 파일.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: "0",
        name: "김코딩",
        surveyCheck1: "모각코처럼 개인공부를 중시하는 스터디면 좋겠어요",
        surveyCheck2: "알고리즘",
        surveyCheck3: "주 1~2회",
        surveyCheck4: "2시간",
      },
      {
        id: "1",
        name: "양승준",
        surveyCheck1: "정해진 과제를 함께 풀어요",
        surveyCheck2: "면접대비",
        surveyCheck3: "주 1~2회",
        surveyCheck4: "2시간",
      },
      {
        id: "2",
        name: "원소",
        surveyCheck1: "정해진 과제를 풀어오고 리뷰해요",
        surveyCheck2: "알고리즘",
        surveyCheck3: "주 1~2회",
        surveyCheck4: "3시간",
      },
      {
        id: "3",
        name: "박해커",
        surveyCheck1: "모각코처럼 개인공부를 중시하는 스터디면 좋겠어요",
        surveyCheck2: "프론트엔드",
        surveyCheck3: "주 1~2회",
        surveyCheck4: "2시간",
      },
      {
        id: "4",
        name: "마초",
        surveyCheck1: "정해진 과제를 풀어오고 리뷰해요",
        surveyCheck2: "백엔드",
        surveyCheck3: "주 3~4회",
        surveyCheck4: "3시간",
      },
      {
        id: "5",
        name: "주유",
        surveyCheck1: "정해진 과제를 함께 풀어요",
        surveyCheck2: "백엔드",
        surveyCheck3: "주 5회 이상",
        surveyCheck4: "4시간 이상",
      },
      {
        id: "6",
        name: "등애",
        surveyCheck1: "모각코처럼 개인공부를 중시하는 스터디면 좋겠어요",
        surveyCheck2: "알고리즘",
        surveyCheck3: "주 3~4회",
        surveyCheck4: "3시간",
      },
      {
        id: "7",
        name: "강유",
        surveyCheck1: "정해진 과제를 함께 풀어요",
        surveyCheck2: "면접대비",
        surveyCheck3: "주 1~2회",
        surveyCheck4: "2시간",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
