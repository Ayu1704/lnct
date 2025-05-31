// Smooth Scroll Navigation
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Typing Effect for Hero Heading
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("hero-heading");
  const text = "Welcome to LNCT Group of Colleges";
  let index = 0;

  function type() {
    if (index < text.length) {
      heading.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }

  type();
});

// Animate On Scroll using IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".course, .college, .animate-on-scroll").forEach(elem => {
  observer.observe(elem);
});

// News Fetch with fallback (commented out for sandbox-safe usage)
document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("newsScroller");

  // Placeholder fallback if fetch fails or is disabled
  const placeholderNews = [
    { title: "AI Seminar 2025", desc: "Experts discussed future tech trends.", link: "#" },
    { title: "Annual Sports Meet", desc: "Students shone in athletics.", link: "#" },
    { title: "LNCT Tech Fest", desc: "Innovation at its peak.", link: "#" }
  ];

  function loadFallbackNews() {
    placeholderNews.forEach(item => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="${item.link}" target="_blank" rel="noopener">Read more</a>
      `;
      scroller.appendChild(card);
    });
  }

  try {
    // Disable fetch in secure/sandboxed environment
    loadFallbackNews();
  } catch (err) {
    console.error("News loading failed:", err);
    scroller.innerHTML = '<p class="text-red-500">Unable to load news currently.</p>';
  }

  // Auto-scroll News
  setInterval(() => {
    scroller.scrollLeft = (scroller.scrollLeft + 1) % scroller.scrollWidth;
  }, 40);
});
fetch("http://localhost:3000/api/news")
    .then(response => response.json())
    .then(newsList => {
      const container = document.getElementById("newsContainer");
      newsList.forEach(item => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
          <h3>${Hearty congratulations to the brilliant achievers of VIII-Semester (Batch 2021–25)}</h3>
          <a href="https://lnct.ac.in/hearty-congratulations-to-the-brilliant-achievers-of-viii-semester-batch-2021-25/" target="_blank">Read More</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Failed to fetch news:", err);
    });