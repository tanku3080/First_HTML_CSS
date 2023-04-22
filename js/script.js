// workボタンの動作
const workButton = document.getElementById("work-button");
workButton.addEventListener("click", () => {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project, index) => {
    setTimeout(() => {
      project.classList.add("fade-in");
    }, index * 200);
  });
});

// プロジェクトの詳細を表示する動作
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.addEventListener("click", (event) => {
    const details = event.currentTarget.querySelector(".details");
    const others = document.querySelectorAll(".project:not(:hover)");
    others.forEach((other) => {
      other.classList.add("fade-out");
    });
    setTimeout(() => {
      details.classList.add("fade-in");
    }, 300);
  });
});

// myGithubボタンの動作
const myGithubButton = document.getElementById("my-github-button");
myGithubButton.addEventListener("click", () => {
  window.location.href = "https://github.com/tanku3080";
});
