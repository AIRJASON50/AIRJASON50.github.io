function setLanguage(language) {
  const lang = language === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
  document.querySelectorAll('[data-cv-link]').forEach((link) => {
    link.href = `cv.html?lang=${lang}`;
  });
  try {
    localStorage.setItem('homepage-language', lang);
  } catch {
    // Language switching also works when browser storage is unavailable.
  }
}

let preferredLanguage = new URLSearchParams(location.search).get('lang');
if (preferredLanguage !== 'en' && preferredLanguage !== 'zh') {
  try {
    preferredLanguage = localStorage.getItem('homepage-language');
  } catch {
    preferredLanguage = 'en';
  }
}
setLanguage(preferredLanguage);
document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
    try {
      const url = new URL(location.href);
      url.searchParams.set('lang', document.documentElement.lang);
      history.replaceState(null, '', url);
    } catch {
      // Language switching also works without history access.
    }
  });
});
