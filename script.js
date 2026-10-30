/* NEXORA COMMUNITY SITE SETTINGS
   1) Paste the bot's real Discord OAuth2 invite URL below.
   2) Keep the URL inside the quotation marks.
*/
const BOT_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1536319155974836276";

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const notice = document.getElementById('notice');

document.getElementById('year').textContent = new Date().getFullYear();

menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.textContent = isOpen ? '✕' : '☰';
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    if (menuBtn) menuBtn.textContent = '☰';
  });
});

function showNotice(message) {
  if (!notice) return;
  notice.textContent = message;
  notice.classList.add('show');
  window.setTimeout(() => notice.classList.remove('show'), 3200);
}

document.querySelectorAll('.bot-invite').forEach(button => {
  button.addEventListener('click', event => {
    if (BOT_INVITE_URL && BOT_INVITE_URL !== 'PASTE_BOT_INVITE_LINK_HERE') {
      event.preventDefault();
      window.open(BOT_INVITE_URL, '_blank', 'noopener,noreferrer');
    } else {
      event.preventDefault();
      document.getElementById('bot-invite')?.scrollIntoView({ behavior: 'smooth' });
      showNotice('Dodaj botov OAuth2 invite link u script.js da bi dugme radilo.');
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
