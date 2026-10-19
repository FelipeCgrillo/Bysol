const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Marca el enlace activo según la sección visible
const links = [...menu.querySelectorAll(":scope > li > a")];
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => observer.observe(s));

// WhatsApp: todos los enlaces comparten número y mensaje inicial
const WHATSAPP = "56900000000";
const WA_TEXT = "Hola BYSOL, quiero agendar una hora.";
document.querySelectorAll(".js-wa").forEach((a) => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_TEXT)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
