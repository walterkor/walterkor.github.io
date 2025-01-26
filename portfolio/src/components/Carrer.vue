<template>
  <section class="experience-section" id="career">
    <h2>Carrer</h2>
    <div
      class="experience-card"
      v-for="item in experienceData"
      :key="item.company"
    >
      <!-- 회사 및 기간 -->
      <div class="header">
        <h3 :style="{ color: item.companyColor }">{{ item.company }}</h3>
        <span class="date">{{ item.period }}</span>
      </div>

      <!-- 프로젝트 제목 -->
      <h4 class="project-title" :style="{ color: item.projectTitleColor }">
        {{ item.projectTitle }}
      </h4>

      <!-- 수행 업무 -->
      <div class="details">
        <p class="details-title">수행 업무</p>
        <ul>
          <li v-for="task in item.tasks" :key="task" v-html="task"></li>
        </ul>
      </div>

      <!-- 주요 성과 -->
      <div class="details">
        <p class="details-title">주요 성과</p>
        <ul>
          <li
            v-for="achievement in item.achievements"
            :key="achievement"
            v-html="achievement"
          ></li>
        </ul>
      </div>

      <!-- Skill -->
      <div class="skills">
        <p class="details-title">Skill</p>
        <div class="skill-list">
          <span
            v-for="skill in item.skills"
            :key="skill"
            class="skill-item"
            v-html="skill"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperienceSection",
  data() {
    return {
      experienceData: [
        {
          company: "디엠아이시스템즈(주)",
          period: "2023.07.01 ~ 2024.07.01",
          projectTitle: "디지털수사 시스템 통합 유지보수 관리 사업",
          projectTitleColor: "#c67833",
          companyColor: "#7a4988",
          tasks: [
            "AS_IS 검찰 수사 시스템 유지보수(dnet, ntdems, ideas)",
            "NDFaaS 시스템 유지보수(DEP, NDEMS, TDMES)",
            "SSO 기능 개발 참여",
          ],
          achievements: [
            "Spring Cloud 기반의 MSA 환경에서 사용자 인증을 위한 SSO(Single Sign-On) 기능 개발에 참여했으며, Redis를 활용하여 인증 정보를 효과적으로 관리했습니다.",
            "디지털 증거 송치서 전송 기능 개발, 디지털 증거팩의 정보를 쿼리로 조회하여 해당 데이터를 XML로 다시 파싱하여 AS-IS 시스템인 KICS에게 전달기능 개발",
            "jQuery DataTable 라이브러리를 활용하여 송치 관리 조회 기능의 UI와 API를 개발했습니다.",
            "TreeView 라이브러리를 사용한 DEP 조직도의 UI 및 API를 유지보수했으며, Oracle 계층형 쿼리를 기반으로 고객의 니즈에 맞게 기능을 개선하고 재개발했습니다.",
          ],
          skills: [
            "Java",
            "Spring Framework",
            "Spring Security",
            "Spring Cloud",
            "Vue2",
            "Oracle",
            "Redis",
            "Jenkins",
            "Docker",
            "Redis",
            "MQ",
            "electron",
            "Thymeleaf",
          ],
        },
        {
          company: "맥스피아(주)",
          period: "2022.06.13 ~ 2023.07.01",
          projectTitle: "빅데이터 기반 지능형 디지털증거 통합 플랫폼(NDFaaS)",
          projectTitleColor: "#d14090",
          companyColor: "#6b4999",
          tasks: [
            "검찰 수사 시스템 고도화",
            "사건관리 시스템 (DEP-CLOUD), 송치관리 시스템(TDEMS), 증거관리 시스템(NDEMS)개발 ",
            "<a href=`https://www.news1.kr/photos/6322964`>해당 기사<a/>",
          ],
          achievements: [
            "Vue2기반으로 DEP-CLOUD, TDEMS, NDEMS 프론트 개발",
            "DEP-CLOUD 게시판, 1:1문의, FAQ관리, 자료실 개발",
            "증거, 채증, 추출 파일 전송 완료 후 파일 상태를 갱신하는 쿼리 개발",
            "파일 전송 전, 전송 가능 여부를 판별하는 검증 기능 개발",
            "사건 요약 정보 보기 오즈 레포트 개발",
            "사건 현황 조회 기능을 개발, 특사경(특별사법경찰관)과 검사에게 각각 다른 사건 정보가 보여지도록 구분하여 구현",
          ],
          skills: [
            "Java",
            "Spring Framework",
            "Spring Security",
            "Spring Cloud",
            "Vue2",
            "Oracle",
            "Jenkins",
            "Docker",
            "Redis",
            "MQ",
            "electron",
          ],
        },
        {
          company: "큐브위즈",
          period: "2022.04.10 ~ 2022.06.03",
          projectTitle: "사내 솔루션 고도화",
          projectTitleColor: "#c67833",
          companyColor: "#7a4988",
          tasks: [
            "사내 솔루션 프론트엔드 & 백엔드 고도화 개발 참여",
            "AS-IS Vue2에서 Vue3로 버전업",
          ],
          achievements: [
            "기존 Vue2에서 사용하는 Optional API를 Composition API로 교체하는 작업을 하였습니다.",
            "관리자 페이지중 조직도 기능을 구현하였습니다. 이를 위해 Oracle의 계층형 쿼리를 활용하여 조직 구조를 계층적으로 표현하고 데이터 조회를 최적화하였습니다.",
          ],
          skills: [
            "Java",
            "JavaScript",
            "Vue.js",
            "Vue3.js",
            "vuetify",
            "TypeScript",
            "Spring Boot",
            "MySQL",
            "Oracle",
            "MyBatis",
            "Jenkins",
            "Docker",
          ],
        },
      ],
    };
  },
});
</script>

<style scoped>
.experience-section {
  padding: 2rem;
  font-family: "Roboto", Arial, sans-serif;
  background-color: #f5f7fa;
  color: #333;
  line-height: 1.8;
  max-width: 100vw;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #4a4a4a;
  padding-top: 25px;
}

.experience-card {
  background-color: #fff;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.date {
  font-size: 0.9rem;
  color: #888;
}

.project-title {
  font-size: 1.25rem;
  margin-top: 1rem;
  font-weight: bold;
}

.details-title {
  font-weight: bold;
  color: #555;
  margin: 1rem 0 0.5rem;
}

ul {
  margin: 0;
  padding-left: 1.5rem;
}

li {
  list-style: disc;
  margin-bottom: 0.5rem;
}

.skills {
  margin-top: 1rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-item {
  background-color: #eaf0f6;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}
.word-block {
  display: inline-block; /* 단어를 블록처럼 보이게 함 */
  background-color: #2a2a2a; /* 배경색 */
  color: orange; /* 글자 색 */
  padding: 5px 10px; /* 텍스트와 블록 사이의 여백 */
  border-radius: 4px; /* 모서리를 둥글게 */
  font-family: "Courier New", Courier, monospace; /* 코딩 스타일 폰트 */
  font-size: 14px; /* 글자 크기 */
}
</style>
