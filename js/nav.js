(function () {
  const path = window.location.pathname;
  const isInner = path !== '/' && !path.endsWith('/index.html');

  const navItems = [
    { label: '員工福利',       href: '/page/welfare.html' },
    { label: '旅遊活動',       href: '/page/travel.html' },
    { label: '社團與競賽',     href: '/page/club.html' },
    { label: '關於聯合福委會', href: '/page/about.html' },
  ];

  const desktopLinks = navItems.map(item => {
    const active = path === item.href || path.endsWith(item.href) ? ' class="active"' : '';
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join('\n            ');

  const mobileLinks = navItems.map(item => {
    const active = path === item.href || path.endsWith(item.href) ? ' class="active"' : '';
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join('\n        ');

  const html = `
  <header class="header${isInner ? ' header--inner' : ''}">
    <div class="header-main">
      <div class="container d-flex justify-content-between align-items-center">
        <a href="/" class="logo">
          <img src="/images/logo.svg" alt="聯合福委會">
        </a>
        <div class="header-right">
          <nav class="utility-nav d-flex justify-content-end align-items-center gap-2">
            <a href="https://empfinder.itri.org.tw/WebPage/ED_QueryIndex.aspx">尋找工研人</a>
            <span class="divider">|</span>
            <a href="https://flow.itri.org.tw/ecpweb/FramePro/MainFrame.aspx?SSOToken=ITRI&UserID=B10523&VerifySite=itri.org.tw">電子簽核系統</a>
            <span class="divider">|</span>
            <a href="https://itriweb.itri.org.tw/">ITRIWeb</a>
          </nav>
          <nav class="main-nav d-flex gap-4">
            ${desktopLinks}
          </nav>
        </div>
        <button class="nav-toggle" id="nav-toggle" aria-label="開啟選單" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-hidden="true">
        ${mobileLinks}
      </nav>
    </div>
  </header>`;

  document.getElementById('site-nav').outerHTML = html;

  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }
})();
