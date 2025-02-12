<template>
  <section class="project-section" id="projects">
    <h2>PROJECT</h2>
    <div class="project-card" v-for="project in projects" :key="project.title">
      <!-- 제목 및 기간 -->
      <div class="project-header">
        <h3>{{ project.title }}</h3>
        <span class="date">{{ project.period }}</span>
      </div>

      <!-- 내용 -->
      <div class="project-content">
        <!-- 이미지 슬라이더 -->
        <div class="project-images">
          <img
            v-for="(image, index) in project.images"
            :key="index"
            :src="image"
            alt="Project Image"
          />
        </div>

        <!-- 텍스트 설명 -->
        <div class="project-details">
          <p>{{ project.description }}</p>
          <div class="info">
            <p><strong>주요 기능:</strong> {{ project.features }}</p>
            <p>
              <strong>URL:</strong>
              <a :href="project.url" target="_blank">{{ project.url }}</a>
            </p>
            <p>
              <strong>기술 스택:</strong> {{ project.techStack.join(", ") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectSection",
  data() {
    return {
      projects: [
        {
          title: "jobprep (진행중)",
          period: "2024.12 ~ 진행중 (개발자 3人)",
          description: "취업 관련 커뮤니티",
          features: "취업 관련 커뮤니티, 스터디 모임 게시판",
          url: "https://fe.jobprep.site",
          techStack: [
            "Vite",
            "Vue3",
            "SpringBoot",
            "SpringSecurity",
            "MySql",
            "MongoDB",
            "Redis",
            "GitAction",
            "Jenkins",
            "EC2",
            "Docker",
          ],
          images: [
            "/images/jobprep.png", // Replace with real image URLs
          ],
        },
        {
          title: "vstime (VsCode Extension)",
          period: "2025.01.26 (1人)",
          description: "vscode extension 개발",
          features: "포트폴리오",
          url: "https://github.com/walterkor/vstime",
          techStack: ["TypeScript"],
          images: [
            "/images/vstime.png", // Replace with real image URLs
          ],
        },
        {
          title: "wachacha",
          period: "2021.07.12 ~ 2021.08.13 (4人)",
          description: "영화추천기능 개발",
          features: "watch 플랫폼 기반의 커뮤니티 사이트",
          url: "https://github.com/walterkor/WACHACHA-1",
          techStack: ["JSP", "SpringBoot", "SpringSecurity", "MySql"],
          images: ["/images/watchacha.png"],
        },
      ],
    };
  },
});
</script>

<style scoped>
.project-section {
  padding: 2rem;
  font-family: "Roboto", Arial, sans-serif;
  background-color: #1e1e1e;
  color: white;
  line-height: 1.8;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: white;
  padding-top: 25px;
}

.project-card {
  background: #ffffff;
  color: #333;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.5rem;
  margin: 0;
}

.date {
  font-size: 0.9rem;
  color: #555;
}

.project-content {
  display: flex;
  gap: 1rem;
}

.project-images img {
  max-width: 150px;
  border-radius: 8px;
  object-fit: cover;
}

.project-details {
  flex: 1;
}

.project-details p {
  margin: 0.5rem 0;
}

a {
  color: #1e1eeb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
