window.addEventListener("load", () => {
  const animations = [
    { selector: ".top-tags", class: "from-top", delay: 0 },
    { selector: ".left h1", class: "from-left", delay: 0.3 },
    { selector: ".desc", class: "from-left", delay: 0.6 },
    { selector: ".live-line", class: "from-bottom", delay: 0.9 },
    { selector: ".buttons", class: "zoom-in", delay: 1.2 },
    { selector: ".site-link", class: "from-bottom", delay: 1.5 },
    { selector: ".right", class: "from-right", delay: 0.6 },
    { selector: ".stats", class: "from-bottom", delay: 1.8 },
  ];

  animations.forEach((item) => {
    const el = document.querySelector(item.selector);
    if (el) {
      el.style.animationDelay = `${item.delay}s`;
      el.classList.add(item.class);
    }
  });

  // ===== HIDE INTRO =====
  setTimeout(() => {
    const intro = document.getElementById("intro");
    const site = document.getElementById("real-site");

    intro.classList.add("smooth-out");

    setTimeout(() => {
      intro.style.display = "none";
      site.style.display = "block";
      // slight delay to let the browser render before triggering observer
      setTimeout(initScrollAnimations, 100);
    }, 800); // 800ms fade out
  }, 2200); // 2.2 seconds intro (snappier)
});

// ===============================
// SCROLL REVEAL (SECTIONS)
// ===============================
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    ".slide-in-left, .slide-in-right, .slide-in-up, .reveal, .service-card, .project-card, .bento-card",
  );

  elements.forEach((el) => {
    el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
    el.style.opacity = "0";
    if (el.classList.contains("slide-in-left")) {
      el.style.transform = "translateX(-50px)";
    } else if (el.classList.contains("slide-in-right")) {
      el.style.transform = "translateX(50px)";
    } else {
      el.style.transform = "translateY(50px)";
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translate(0)";
        } else {
          // Reverse animation when scrolled out of view
          entry.target.style.opacity = "0";
          if (entry.target.classList.contains("slide-in-left")) {
            entry.target.style.transform = "translateX(-50px)";
          } else if (entry.target.classList.contains("slide-in-right")) {
            entry.target.style.transform = "translateX(50px)";
          } else {
            entry.target.style.transform = "translateY(50px)";
          }
        }
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((el) => observer.observe(el));
}

// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".ul-list li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");

    const link = item.querySelector("a");
    if (link && link.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// ===============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 120,
        behavior: "smooth",
      });
    }
  });
});
// ===============================
// CONTACT FORM SUBMISSION (FORMSPREE AJAX)
// ===============================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = document.createElement("div");
    status.className = "form-status";
    status.style.marginTop = "20px";
    status.style.fontSize = "14px";
    status.style.fontFamily = "var(--font-ui)";
    
    // Remove old status if exists
    const oldStatus = contactForm.querySelector('.form-status');
    if (oldStatus) oldStatus.remove();
    
    contactForm.appendChild(status);

    const formData = new FormData(e.target);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = "SENDING...";
    status.innerHTML = "Establishing link...";
    status.style.color = "var(--accent-secondary)";

    try {
      const response = await fetch(e.target.action, {
        method: "POST",
        body: new URLSearchParams(formData).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        status.innerHTML = "MESSAGE RECEIVED. SECURE CONNECTION CLOSED.";
        status.style.color = "var(--accent-primary)";
        contactForm.reset();
        setTimeout(() => {
          status.remove();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error("Formspree Error:", errorData);
        throw new Error(errorData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Contact Form Failure:", error);
      status.innerHTML = `LINK FAILURE: ${error.message || "PLEASE TRY AGAIN LATER."}`;
      status.style.color = "#ff4444";
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      setTimeout(() => status.remove(), 5000);
    }
  });
}
