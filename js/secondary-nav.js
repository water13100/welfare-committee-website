(function () {
  const header  = document.querySelector('.header');
  const navWrap = document.querySelector('.secondary-nav-wrap');
  if (!navWrap) return;

  // 動態對齊 header 高度
  function setHeaderVar() {
    const h = header ? header.offsetHeight : 89;
    document.documentElement.style.setProperty('--header-h', h + 'px');
    navWrap.style.top = h + 'px';
  }
  setHeaderVar();
  window.addEventListener('resize', setHeaderVar);

  // 在 navWrap 前插入零高度哨兵，觀察它何時捲過 header 底部
  // 使用哨兵而非 banner，避免 is-sticky 切換改變 navWrap 高度後
  // 觸發回饋迴圈（banner 忽進忽出）造成抖動
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'height:1px;pointer-events:none;visibility:hidden;';
  navWrap.parentNode.insertBefore(sentinel, navWrap);

  function createObserver() {
    const headerH = header ? header.offsetHeight : 89;
    return new IntersectionObserver(
      ([entry]) => navWrap.classList.toggle('is-sticky', !entry.isIntersecting),
      { rootMargin: `-${headerH}px 0px 0px 0px`, threshold: 0 }
    );
  }
  let observer = createObserver();
  observer.observe(sentinel);

  // header 高度改變時重建 observer（避免 rootMargin 失準）
  window.addEventListener('resize', () => {
    observer.disconnect();
    observer = createObserver();
    observer.observe(sentinel);
  });

  // 計算需要偏移的捲動距離（header + 次選單高度）
  const tabs = document.querySelectorAll('.sec-nav-tab');
  function getOffset() {
    return (header ? header.offsetHeight : 0) + navWrap.offsetHeight;
  }

  // 從外部頁面帶 hash 進來時，補偏移量
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        const top = target.getBoundingClientRect().top + window.scrollY - getOffset();
        window.scrollTo({ top, behavior: 'smooth' });
        tabs.forEach(t => t.classList.remove('active'));
        const matchTab = document.querySelector(`.sec-nav-tab[href="${window.location.hash}"]`);
        if (matchTab) matchTab.classList.add('active');
      }, 100);
    }
  }

  // 點擊 tab 平滑捲動
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const target = document.querySelector(tab.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - getOffset();
      window.scrollTo({ top, behavior: 'smooth' });
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
})();
