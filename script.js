// =============================================
//  MOTOR — NÃO PRECISA ALTERAR
//  Lê o APP_CONFIG e monta a página.
// =============================================

const ICONS = {
  fallback: "🔗",
};

function makeAvatar(profile) {
  if (profile.avatar) {
    return `<img class="avatar" src="${profile.avatar}" alt="Foto de ${profile.name}" />`;
  }
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return `<div class="avatar avatar--initials" aria-label="Iniciais de ${profile.name}">${initials}</div>`;
}

function renderLink(link) {
  const cls = link.highlight ? "link-card link-card--highlight" : "link-card";
  const icon = link.icon || ICONS.fallback;
  return `
    <a class="${cls}" href="${link.url}" target="_blank" rel="noopener noreferrer">
      <span class="link-icon">${icon}</span>
      <span class="link-label">${link.label}</span>
      <span class="link-arrow">→</span>
    </a>`;
}

function renderSocial(social) {
  return `
    <a class="social" href="${social.url}" target="_blank" rel="noopener noreferrer"
       aria-label="${social.label}" title="${social.label}">
      ${social.icon || "🔗"}
    </a>`;
}

function render() {
  const { profile, links, socials, footer, theme } = APP_CONFIG;
  document.documentElement.setAttribute("data-theme", theme);
  document.title = `${profile.name} | Links`;

  const badge = profile.verified
    ? `<span class="badge" title="Conta verificada">✔</span>`
    : "";

  document.getElementById("app").innerHTML = `
    <header class="profile">
      ${makeAvatar(profile)}
      <h1 class="name">${profile.name} ${badge}</h1>
      ${profile.handle ? `<p class="handle">${profile.handle}</p>` : ""}
      ${profile.bio ? `<p class="bio">${profile.bio}</p>` : ""}
    </header>

    <section class="links">
      ${links.map(renderLink).join("")}
    </section>

    ${socials.length ? `<section class="socials">${socials.map(renderSocial).join("")}</section>` : ""}

    ${footer.text
      ? `<footer class="footer">
           <a href="${footer.url}" target="_blank" rel="noopener noreferrer">${footer.text}</a>
         </footer>`
      : ""}
  `;
}

// ---- Troca de tema (demo) ----
const THEMES = ["midnight", "light", "ocean", "sunset", "forest"];

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("preview-theme", next);
});

const saved = localStorage.getItem("preview-theme");
if (saved && THEMES.includes(saved)) {
  APP_CONFIG.theme = saved;
}

render();
