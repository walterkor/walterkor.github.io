<template>
  <div class="profile-card" id="aboutMe">
    <!-- 이미지 섹션 -->
    <div class="profile-image-container">
      <img class="profile-image" src="@/assets/profile.jpg" alt="Profile" />
    </div>

    <!-- 정보 섹션 -->
    <div class="profile-info">
      <h1>CHAN HO <span class="highlight">OK :)</span></h1>
      <div class="contact-info">
        <p>TEL. <span class="highlight">010-7496-0512</span></p>
        <p>E-MAIL. <span class="highlight">j33515@naver.com</span></p>
        <p>
          ADDRESS.
          <span class="highlight"
            >12, Dorimcheon-ro 19-gil, Yeongdeungpo-gu</span
          >
        </p>
      </div>
      <p class="description">
        원활한 협업과 커뮤니케이션을 통해 고객의 니즈를 정확히 파악하고, 오해를
        최소화하는 것을 목표로 합니다.<br />
        일상의 작은 불편함을 해소하기 위해 실용적이고 유용한 개발을 지향합니다.
      </p>
      <div class="social-links">
        <!-- <a href="#" target="_blank" aria-label="Blog">
          <i class="fas fa-pen"></i>          
        </a> -->
        <a
          href="javascript:void(0)"
          aria-label="GitHub"
          onclick="window.open('https://github.com/walterkor')"
        >
          <i class="fab fa-github"></i>
          <!-- GitHub 아이콘 -->
        </a>
        <a
          href="javascript:void(0)"
          onclick="window.open('https://abrasive-keeper-be9.notion.site/2c1b8f8d73e44c57bd06f4a9d054a393?pvs=4')"
        >
          <img
            class="mb-1"
            width="27"
            height="27"
            src="../assets/notion.svg"
            alt="notion.icon"
          />
        </a>
        <!-- 나중에 포트폴리오 pdf 나오면 그때 -->
        <!-- <a href="#" target="_blank" aria-label="PDF"
          ><i class="fas fa-file-pdf"></i
        ></a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProfileCard",
};
</script>

<style scoped>
/* 전체 레이아웃 */
.profile-card {
  display: flex;
  flex-direction: row; /* 가로 정렬 */
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: auto;
  background: white;
}

/* 이미지 섹션 */
.profile-image-container {
  flex: 1; /* 이미지가 차지하는 공간 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 4px solid #7e57c2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 정보 섹션 */
.profile-info {
  flex: 2; /* 정보가 차지하는 공간 */
  text-align: left;
  padding: 1rem 2rem;
}

h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
}

.highlight {
  color: #7e57c2; /* 보라색 강조 색상 */
}

.contact-info p {
  margin: 0.3rem 0;
  font-size: 1rem;
}

.description {
  margin-top: 1.5rem;
  line-height: 1.6;
  color: #666;
}

/* 소셜 링크 */
.social-links {
  margin-top: 1.5rem;
}

.social-links a {
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: #7e57c2;
  text-decoration: none;
}

.social-links a:hover {
  color: #5e35b1;
}
</style>
