(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;

  try {
    preference = localStorage.getItem('jay-theme');
  } catch {
    /* 浏览器禁用存储时，切换仍在本页有效 */
  }

  window.updateThemeToggle = () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const isDark = root.dataset.theme === 'dark';
    button.setAttribute('aria-pressed', String(isDark));
    button.textContent = isDark ? '昼' : '夜';
    button.setAttribute('aria-label', isDark ? '切换到日间模式' : '切换到夜间模式');
  };

  function applyTheme() {
    const theme =
      preference === 'dark' || preference === 'light'
        ? preference
        : systemTheme.matches
          ? 'dark'
          : 'light';
    root.dataset.theme = theme;
    window.updateThemeToggle();
  }

  applyTheme();
  systemTheme.addEventListener('change', applyTheme);

  document.addEventListener('click', event => {
    if (!event.target.closest('.theme-toggle')) return;
    preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    try {
      localStorage.setItem('jay-theme', preference);
    } catch {
      /* 存储不可用时只影响下次访问的默认主题 */
    }
  });
})();
