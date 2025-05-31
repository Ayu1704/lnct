// Smooth Scroll
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

// Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('hero-heading');
  const text = 'Welcome to LNCT Group of Colleges';
  let index = 0;

  function type() {
    if (index < text.length) {
      heading.textContent += text.charAt(index);
      index++;
      setTimeout(type, 70);
    }
  }
  type();
});

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".course, .college").forEach(elem => observer.observe(elem));

// Fetch News
document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.getElementById('newsScroller');

  async function fetchNews() {
    try {
      const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://lnct.ac.in/recent-events/'));
      const data = await response.json();
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, 'text/html');
      const newsItems = doc.querySelectorAll('.entry');

      newsItems.forEach(item => {
        const title = item.querySelector('.entry-title')?.innerText.trim() || 'No Title';
        const description = item.querySelector('.entry-summary')?.innerText.trim() || '';
        const link = item.querySelector('a')?.href || '#';

        const card = document.createElement('div');
        card.className = 'min-w-[250px] bg-white p-4 rounded shadow snap-start';
        card.innerHTML = `
          <h4 class="font-semibold text-lg mb-2">${title}</h4>
          <p class="text-sm mb-2">${description}</p>
          <a href="${link}" target="_blank" class="text-blue-600 hover:underline">Read more</a>
        `;
        scroller.appendChild(card);
      });
    } catch (error) {
      console.error('Failed to fetch news:', error);
      scroller.innerHTML = '<p class="text-red-500">Unable to load news.</p>';
    }
  }

  fetchNews();

  // Auto-scroll
  setInterval(() => {
    if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth) {
      scroller.scrollLeft = 0;
    } else {
      scroller.scrollLeft += 1;
    }
  }, 30);
});
