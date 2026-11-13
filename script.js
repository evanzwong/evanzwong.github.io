"use strict";

// ---- Mobile navigation -----------------------------------------------------
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

// ---- Coursework filter -----------------------------------------------------
const chips = Array.from(document.querySelectorAll(".filter-chip"));
const groups = Array.from(document.querySelectorAll(".course-group"));

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const wanted = chip.dataset.filter;
    chips.forEach((other) => {
      const active = other === chip;
      other.classList.toggle("is-active", active);
      other.setAttribute("aria-pressed", String(active));
    });
    groups.forEach((group) => {
      group.hidden = wanted !== "all" && group.dataset.group !== wanted;
    });
  });
});

// ---- Experience details: expand / collapse all ------------------------------
const experienceToggle = document.getElementById("experience-toggle");
const experienceDetails = Array.from(document.querySelectorAll("#experience details"));

if (experienceToggle && experienceDetails.length) {
  const allOpen = () => experienceDetails.every((item) => item.open);
  const syncLabel = () => {
    experienceToggle.textContent = allOpen() ? "Collapse all" : "Expand all";
    experienceToggle.setAttribute("aria-expanded", String(allOpen()));
  };
  experienceToggle.hidden = false;
  experienceToggle.addEventListener("click", () => {
    const open = !allOpen();
    experienceDetails.forEach((item) => { item.open = open; });
    syncLabel();
  });
  // Keep the label right when entries are opened one at a time.
  experienceDetails.forEach((item) => item.addEventListener("toggle", syncLabel));
  // Paper should show everything.
  window.addEventListener("beforeprint", () => experienceDetails.forEach((item) => { item.open = true; }));
}

// ---- Footer year -----------------------------------------------------------
const year = document.getElementById("copyright-year");
if (year) year.textContent = String(new Date().getFullYear());

// ---- Highlight the nav link for the section being read ---------------------
const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll("#primary-nav a[href^='#']"));

function markActive(id) {
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

// The current section is the last one whose top has passed a line 30% down the
// viewport. The contact bar sits at the very bottom and can never scroll that
// high, so reaching the end of the page counts as being on the last section.
function currentSectionId() {
  if (window.scrollY <= 0) return sections[0].id;
  const pageBottom = document.documentElement.scrollHeight - 2;
  if (window.innerHeight + window.scrollY >= pageBottom) return sections[sections.length - 1].id;
  const line = window.innerHeight * 0.3;
  let current = sections[0].id;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= line) current = section.id;
  });
  return current;
}

if (sections.length) {
  let queued = false;
  const update = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      markActive(currentSectionId());
      queued = false;
    });
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
