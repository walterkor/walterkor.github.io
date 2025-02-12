<template>
  <section class="skills" id="skills">
    <h2>Skill</h2>

    <!-- Frontend Section -->
    <div class="skill-category">
      <h3>Frontend</h3>
      <div class="skill-items">
        <span
          class="skill-item"
          v-for="skill in frontendSkills"
          :key="skill.name"
        >
          <img :src="skill.src" />
        </span>
      </div>
    </div>

    <!-- Backend Section -->
    <div class="skill-category">
      <h3>Backend</h3>
      <div class="skill-items">
        <span
          class="skill-item"
          v-for="skill in backendSkills"
          :key="skill.name"
        >
          <img :src="skill.src" />
        </span>
      </div>
    </div>

    <!-- Database Section -->
    <div class="skill-category">
      <h3>Database</h3>
      <div class="skill-items">
        <span
          class="skill-item"
          v-for="skill in databaseSkills"
          :key="skill.name"
        >
          <img :src="skill.src" />
        </span>
      </div>
    </div>

    <!-- CI/CD Section -->
    <div class="skill-category">
      <h3>CI / CD</h3>
      <div class="skill-items">
        <span class="skill-item" v-for="skill in ciCdSkills" :key="skill.name">
          <img :src="skill.src" />
        </span>
      </div>
    </div>

    <!-- tools Section -->
    <div class="skill-category">
      <h3>Tools</h3>
      <div class="skill-items">
        <span class="skill-item" v-for="skill in tools" :key="skill.name">
          <img :src="skill.src" />
        </span>
      </div>
    </div>
    <span class="opacity-50">
      ( 혹시 이미지가 보이지 않으면 새로고침해 주세요. )
    </span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillSection",
  data() {
    return {
      frontendSkills: [
        {
          name: "HTML",
          src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white",
        },
        {
          name: "CSS",
          src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white",
        },
        {
          name: "JavaScript",
          src: "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white",
        },
        {
          name: "Bootstrap",
          src: "https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white",
        },
        {
          name: "jQuery",
          src: "https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
        },
        {
          name: "Vue2",
          src: "https://img.shields.io/badge/vue2-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white",
        },
        {
          name: "Vue3",
          src: "https://img.shields.io/badge/vue3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white",
        },
        {
          name: "thymeleaf",
          src: "https://img.shields.io/badge/thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white",
        },
        {
          name: "Tailwind",
          src: "https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
        },
        {
          name: "TypeScript",
          src: "https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
        },
        {
          name: "Vite",
          src: "https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white",
        },
        {
          name: "NPM",
          src: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
        },
      ],
      backendSkills: [
        {
          name: "Java 11",
          src: "https://img.shields.io/badge/java11-F7DF1E?style=for-the-badge&logo=java11&logoColor=white",
        },
        {
          name: "Maven",
          src: "https://img.shields.io/badge/apachemaven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white",
        },
        {
          name: "Gradle",
          src: "https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle  &logoColor=white",
        },
        {
          name: "SpringBoot",
          src: "https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white",
        },
        {
          name: "Spring MVC",
          src: "https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
        },
        {
          name: "Spring Security",
          src: "https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white",
        },
        {
          name: "JWT",
          src: "https://img.shields.io/badge/jwt-6DB33F?style=for-the-badge&logo=jwt&logoColor=white",
        },
        {
          name: "MYBATIS",
          src: "https://img.shields.io/badge/MYBATIS-0C79CE?style=for-the-badge&logo=MYBATIS&logoColor=white",
        },
      ],
      databaseSkills: [
        {
          name: "Oracle",
          src: "https://img.shields.io/badge/Oracle-9F1D20?style=for-the-badge&logo=Oracle&logoColor=white",
        },
        {
          name: "MySQL",
          src: "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
        },
        {
          name: "Redis",
          src: "https://img.shields.io/badge/redis-FF4438?style=for-the-badge&logo=redis&logoColor=white",
        },
      ],
      ciCdSkills: [
        {
          name: "Git",
          src: "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white",
        },
        {
          name: "Gitlab",
          src: "https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white",
        },
        {
          name: "GitAction",
          src: "https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white",
        },
        {
          name: "Jenkins",
          src: "https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white",
        },
        {
          name: "Docker",
          src: "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
        },
        {
          name: "Aws",
          src: "https://img.shields.io/badge/amazonwebservices-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white",
        },
        {
          name: "AwsEc2",
          src: "https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white",
        },
      ],
      tools: [
        {
          name: "slack",
          src: "https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
        },
        {
          name: "jira",
          src: "https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white",
        },
        {
          name: "notion",
          src: "https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white",
        },
        {
          name: "Figma",
          src: "https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
        },
      ],
    };
  },
});
</script>

<style scoped>
.skills {
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 2rem;
  min-width: 100vw;
  min-height: 100vh;
  margin: auto;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #ffffff;
  padding-top: 25px;
}

.skill-category {
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
