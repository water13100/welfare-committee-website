(function () {
  const path = window.location.pathname;
  const isInner = path !== '/' && !path.endsWith('/index.html');

  const navItems = [
    { label: '員工福利',    href: '/page/welfare.html' },
    { label: '旅遊活動',    href: '/page/travel.html' },
    { label: '社團與競賽',  href: '/page/club.html' },
    { label: '關於聯合福委會', href: '/page/about.html' },
  ];

  const navLinks = navItems.map(item => {
    const active = path === item.href || path.endsWith(item.href) ? ' class="active"' : '';
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join('\n            ');

  const html = `
  <header class="header${isInner ? ' header--inner' : ''}">
    <div class="header-main">
      <div class="container d-flex justify-content-between align-items-center">
        <a href="/" class="logo">
          <img src="/images/logo.svg" alt="聯合福委會">
        </a>
        <div class="header-right">
          <nav class="utility-nav d-flex justify-content-end align-items-center gap-2">
            <a href="#">尋找工研人</a>
            <span class="divider">|</span>
            <a href="#">電子簽核系統</a>
            <span class="divider">|</span>
            <a href="#">ITRIWeb</a>
          </nav>
          <nav class="main-nav d-flex gap-4">
            ${navLinks}
          </nav>
        </div>
      </div>
    </div>
  </header>`;

  document.getElementById('site-nav').outerHTML = html;
})();
