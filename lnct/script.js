// // Hamburger toggle for mobile menu
// const hamburgerBtn = document.getElementById('hamburgerBtn');
// const navLinks = document.querySelector('.nav-links');
// hamburgerBtn.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
// });
// hamburgerBtn.addEventListener('keydown', e => {
//   if (e.key === 'Enter') navLinks.classList.toggle('show');
// });

// // Sample campuses data
// const campuses = [
//   {
//     name: 'LNCT University, Bhopal',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/LNCT_University_logo.png/320px-LNCT_University_logo.png',
//     desc: 'Premier university with top-notch faculties and infrastructure.',
//     tags: ['Engineering', 'Management', 'Research'],
//   },
//   {
//     name: 'LNCT Institute of Technology',
//     img: 'https://incps.in/assets/images/campus/LNCT-Institute-Of-Technology-Bhopal-01.jpg',
//     desc: 'Known for excellence in technical education and placements.',
//     tags: ['Engineering', 'Innovation', 'Placements'],
//   },
//   {
//     name: 'LNCT Medical College',
//     img: 'https://indorelnmc.in/wp-content/uploads/2023/01/campus_building.jpg',
//     desc: 'State-of-the-art medical college with modern labs.',
//     tags: ['Medicine', 'Research', 'Healthcare'],
//   },
//   {
//     name: 'LNCT Pharmacy College',
//     img: 'https://ananjaypharma.co.in/assets/images/campus.jpg',
//     desc: 'Focused on pharmaceutical sciences and research.',
//     tags: ['Pharmacy', 'Research', 'Labs'],
//   },
// ];

// // Render campuses cards
// const campusCardsContainer = document.querySelector('.campus-cards');
// campuses.forEach(campus => {
//   const card = document.createElement('div');
//   card.className = 'campus-card';
//   card.innerHTML = `
//     <img src="${campus.img}" alt="${campus.name}" />
//     <h3>${campus.name}</h3>
//     <p>${campus.desc}</p>
//     <ul>${campus.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
//   `;
//   campusCardsContainer.appendChild(card);
// });

// // News data
// const newsItems = [
//   {
//     title: 'LNCT Bhopal wins AI Innovation Award',
//     desc: 'Our students have secured the first prize in the national AI challenge.',
//   },
//   {
//     title: 'New Research Lab inaugurated',
//     desc: 'LNCT University inaugurated a cutting-edge research lab this week.',
//   },
//   {
//     title: 'Annual Tech Fest coming soon',
//     desc: 'Join us for the grand tech fest with workshops and competitions.',
//   },
//   {
//     title: 'Campus placement season starts',
//     desc: 'Top recruiters have begun visiting LNCT campuses for placements.',
//   },
// ];

// // Render news carousel
// const newsCarousel = document.querySelector('.news-carousel');
// const newsTrack = document.createElement('div');
// newsTrack.className = 'news-track';
// newsCarousel.appendChild(newsTrack);

// newsItems.forEach(item => {
//   const card = document.createElement('div');
//   card.className = 'news-card';
//   card.innerHTML = `
//     <h4>${item.title}</h4>
//     <p>${item.desc}</p>
//   `;
//   newsTrack.appendChild(card);
// });

// let currentSlide = 0;
// const slideCount = newsItems.length;
// const slideWidth = 300; // approx width including margin

// function moveCarousel() {
//   currentSlide++;
//   if (currentSlide >= slideCount) currentSlide = 0;
//   newsTrack.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
// }
// setInterval(moveCarousel, 5000);

// // Event calendar data
// const events = [
//   { date: '2025-06-05', title: 'Orientation Day', desc: 'Welcome event for new students.' },
//   { date: '2025-06-15', title: 'AI Workshop', desc: 'Workshop on AI and Machine Learning.' },
//   { date: '2025-07-01', title: 'Annual Sports Meet', desc: 'Inter-campus sports competition.' },
//   { date: '2025-07-20', title: 'Tech Fest', desc: 'Tech festival with coding and robotics.' },
// ];

// // Render calendar
// const calendarContainer = document.querySelector('.calendar-container');

// function renderCalendar(year, month) {
//   calendarContainer.innerHTML = '';
//   const dt = new Date(year, month);
//   const monthName = dt.toLocaleString('default', { month: 'long' });
//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const table = document.createElement('table');
//   table.className = 'calendar-table';

//   // Header row with month-year and day names
//   const headerRow = document.createElement('tr');
//   headerRow.innerHTML = `<th colspan="7">${monthName} ${year}</th>`;
//   table.appendChild(headerRow);

//   const daysRow = document.createElement('tr');
//   ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(d => {
//     const th = document.createElement('th');
//     th.textContent = d;
//     daysRow.appendChild(th);
//   });
//   table.appendChild(daysRow);

//   let row = document.createElement('tr');
//   // Empty cells for days before month start
//   for (let i = 0; i < firstDay; i++) {
//     row.appendChild(document.createElement('td'));
//   }

//   for (let day = 1; day <= daysInMonth; day++) {
//     const td = document.createElement('td');
//     td.textContent = day;
//     const dateStr = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
//     const event = events.find(ev => ev.date === dateStr);
//     if (event) {
//       td.classList.add('event');
//       td.title = `${event.title}: ${event.desc}`;
//     }
//     row.appendChild(td);
//     if ((day + firstDay) % 7 === 0) {
//       table.appendChild(row);
//       row = document.createElement('tr');
//     }
//   }
//   // Append remaining row
//   if (row.children.length > 0) {
//     for (let i = row.children.length; i < 7; i++) {
//       row.appendChild(document.createElement('td'));
//     }
//     table.appendChild(row);
//   }
//   calendarContainer.appendChild(table);
// }

// const now = new Date();
// renderCalendar(now.getFullYear(), now.getMonth());

// // Chatbot toggle and messages
// const chatToggle = document.getElementById('chatToggle');
// const chatbotModal = document.getElementById('chatbotModal');
// const chatCloseBtn = document.getElementById('chatCloseBtn');
// const chatForm = document.getElementById('chatForm');
// const chatInput = document.getElementById('chatInput');
// const chatbotMessages = document.querySelector('.chatbot-messages');

// chatToggle.addEventListener('click', () => {
//   chatbotModal.classList.add('active');
// });
// chatCloseBtn.addEventListener('click', () => {
//   chatbotModal.classList.remove('active');
// });

// // Simple chatbot logic
// chatForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const userMsg = chatInput.value.trim();
//   if (!userMsg) return;
//   addMessage(userMsg, 'user-msg');
//   chatInput.value = '';
//   setTimeout(() => {
//     const botReply = generateBotReply(userMsg);
//     addMessage(botReply, 'bot-msg');
//   }, 1000);
// });

// function addMessage(text, className) {
//   const msgDiv = document.createElement('div');
//   msgDiv.className = className;
//   msgDiv.textContent = text;
//   chatbotMessages.appendChild(msgDiv);
//   chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
// }

// function generateBotReply(msg) {
//   const lower = msg.toLowerCase();
//   if (lower.includes('hello') || lower.includes('hi')) return 'Hello! How can I help you today?';
//   if (lower.includes('courses')) return 'We offer courses in Engineering, Medicine, Pharmacy, and Management.';
//   if (lower.includes('admission')) return 'Admissions are open for the upcoming session. You can apply online or visit our campus.';
//   if (lower.includes('events')) return 'Upcoming events include Orientation Day on June 5 and Tech Fest on July 20.';
//   return "I'm here to assist you with information about LNCT campuses, courses, admissions, and events.";
// }

// script.js

// Smooth scroll for navigation
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth"
        });
    });
});

  document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('hero-heading');
    const text = 'Welcome to LNCT Group of Colleges';
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
// On scroll animation class toggle
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll(".course, .college").forEach(elem => {
    observer.observe(elem);
});

