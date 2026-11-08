/* 把 nav.html 嵌进每个页面的 <header>，并标出当前页 */
fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;
    markCurrentPage();
    window.updateThemeToggle();
  });

function markCurrentPage() {
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === file) {
      link.setAttribute('aria-current', 'page');
    }
  });
}
