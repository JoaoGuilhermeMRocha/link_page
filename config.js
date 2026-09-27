// =============================================
//  ARQUIVO DE CONFIGURAÇÃO DO CLIENTE
//  Troque os dados abaixo a cada novo cliente.
// =============================================

const APP_CONFIG = {
  profile: {
    name: "Maria Souza",
    handle: "@mariasouza",
    bio: "Nutricionista 🥗 | Transformo sua relação com a comida",
    // Deixe "" (vazio) para gerar um avatar com as iniciais
    avatar: "",
    verified: true,
  },

  // ---- TEMA: nome de um dos presets em styles.css ----
  theme: "midnight", // midnight | light | ocean | sunset | forest

  // ---- LINKS PRINCIPAIS (os botões) ----
  links: [
    {
      label: "Agende sua consulta",
      url: "https://calendly.com/seu-link",
      icon: "📅",
      highlight: true,   // destaca como CTA principal
    },
    {
      label: "E-book: Guia da Alimentação",
      url: "https://pay.kiwify.com.br/seu-ebook",
      icon: "📘",
      highlight: false,
    },
    {
      label: "Meu site",
      url: "https://www.seusite.com.br",
      icon: "🌐",
      highlight: false,
    },
    {
      label: "Podcast Semana Saudável",
      url: "https://open.spotify.com/seu-podcast",
      icon: "🎙️",
      highlight: false,
    },
  ],

  // ---- REDES SOCIAIS (os ícones circulares) ----
  socials: [
    { label: "Instagram", url: "https://instagram.com/", icon: "📸" },
    { label: "YouTube",   url: "https://youtube.com/",    icon: "▶️" },
    { label: "TikTok",    url: "https://tiktok.com/",     icon: "🎵" },
    { label: "WhatsApp",  url: "https://wa.me/5511999999999", icon: "💬" },
  ],

  // ---- RODAPÉ ----
  footer: {
    // Para vender versão white-label, troque por "Powered by SuaMarca"
    text: "Feito com ❤️ por SuaMarca",
    url: "https://www.suamarca.com.br",
  },
};
