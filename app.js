/* ─────────────────────────────────────────────────────────────
   Crow Interactive :: site behaviour
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  const games = window.CROW_GAMES || [];
  const shotPath = (slug, n) => 'Images/games/' + slug + '/sc' + n + '.jpg';

  /* ══════════ Theme ══════════ */
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'light' ? '#FFFFFF' : '#050505');
      try { localStorage.setItem('crow-theme', next); } catch (e) {}
    });
  }

  /* ══════════ Mobile nav ══════════ */
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      const open = mobileNav.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mobileNav.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ══════════ Language dropdown ══════════ */
  const langBtn = document.getElementById('langBtn');
  const langDd = document.querySelector('.lang-dropdown');
  if (langBtn && langDd) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = langDd.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function () {
      langDd.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    });
    langDd.addEventListener('click', function (e) { e.stopPropagation(); });
  }

  window.switchLang = function (lang) {
    setLanguage(lang);
    if (langDd) langDd.classList.remove('open');
  };

  /* ══════════ Hero mosaic ══════════ */
  (function buildMosaic() {
    const el = document.getElementById('mosaic');
    if (!el || !games.length) return;

    // One flat pool of every screenshot, shuffled deterministically enough
    // to look scattered but stable between reloads within a session.
    const pool = [];
    games.forEach(function (g) {
      for (let i = 1; i <= g.shots; i++) pool.push(shotPath(g.slug, i));
    });
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const frag = document.createDocumentFragment();
    const total = 36;
    for (let i = 0; i < total; i++) {
      const img = document.createElement('img');
      img.src = pool[i % pool.length];
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      frag.appendChild(img);
    }
    el.appendChild(frag);
  })();

  /* ══════════ Game strips ══════════ */
  const steamIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.98 2C6.5 2 2.01 6.2 1.55 11.55l5.36 2.21a3.06 3.06 0 011.75-.55h.15l2.38-3.45v-.05a4.08 4.08 0 114.08 4.08h-.09l-3.4 2.43v.13a3.07 3.07 0 11-6.1-.5l-3.83-1.59A10.44 10.44 0 1022.42 12 10.43 10.43 0 0011.98 2zm-3.2 15.5l-1.23-.5a2.3 2.3 0 001.18 1.13 2.32 2.32 0 001.79-4.27l1.27.52a1.7 1.7 0 11-1.3 3.13zM18 9.79a2.72 2.72 0 10-2.72 2.72A2.72 2.72 0 0018 9.79zm-4.76 0a2.05 2.05 0 112.05 2.05 2.05 2.05 0 01-2.05-2.05z"/></svg>';
  const kitIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v12M8 11l4 4 4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>';

  function renderGames() {
    const list = document.getElementById('gameList');
    if (!list || !games.length) return;

    list.innerHTML = games.map(function (g, i) {
      const flip = i % 2 === 1;
      const num = String(i + 1).padStart(2, '0');
      const tags = g.tags.map(function (tg) {
        return '<span class="tag" data-i18n="tag.' + tg + '">' + t('tag.' + tg) + '</span>';
      }).join('');

      const thumbs = [2, 3, 4].map(function (n) {
        return '<button type="button" class="shot-thumb" data-game="' + g.slug + '" data-shot="' + n + '" aria-label="' +
          g.title + ' screenshot ' + n + '"><img src="' + shotPath(g.slug, n) + '" alt="' + g.title +
          ' screenshot ' + n + '" loading="lazy" decoding="async" /></button>';
      }).join('');

      const kitBtn = g.presskit
        ? '<a href="' + g.presskit + '" target="_blank" rel="noreferrer" class="btn btn-ghost">' + kitIcon +
          '<span data-i18n="game.presskit">' + t('game.presskit') + '</span></a>'
        : '';

      return '' +
      '<article class="strip grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">' +

        '<div class="reveal ' + (flip ? 'lg:order-2' : '') + '">' +
          '<div class="flex items-baseline gap-5">' +
            '<span class="strip-num">' + num + '</span>' +
            '<span class="wordmark text-[10px] c-dim2" style="letter-spacing:.2em; font-weight:500;">' +
              g.year + ' &nbsp;·&nbsp; <span data-i18n="meta.platform">' + t('meta.platform') + '</span>' +
            '</span>' +
          '</div>' +

          '<h3 class="display mt-5 text-[clamp(1.6rem,4.2vw,2.75rem)] font-bold leading-[1.03] tracking-[-.03em] c-text">' +
            g.title +
          '</h3>' +

          '<div class="mt-5 flex flex-wrap gap-2">' + tags + '</div>' +

          '<p class="mt-6 text-[15px] leading-relaxed c-dim max-w-xl" data-i18n="game.' + g.slug + '.desc">' +
            t('game.' + g.slug + '.desc') +
          '</p>' +

          '<div class="mt-8 flex flex-wrap gap-3">' +
            '<a href="https://store.steampowered.com/app/' + g.appid + '/" target="_blank" rel="noreferrer" class="btn btn-primary">' +
              steamIcon + '<span data-i18n="game.steam">' + t('game.steam') + '</span></a>' +
            kitBtn +
          '</div>' +
        '</div>' +

        '<div class="reveal ' + (flip ? 'lg:order-1' : '') + '" data-d="1">' +
          '<button type="button" class="shot-main w-full" data-game="' + g.slug + '" data-shot="1" aria-label="' + g.title + ' screenshots">' +
            '<img src="' + shotPath(g.slug, 1) + '" alt="' + g.title + ' screenshot" loading="lazy" decoding="async" />' +
          '</button>' +
          '<div class="mt-3 grid grid-cols-3 gap-3">' + thumbs + '</div>' +
        '</div>' +

      '</article>';
    }).join('');
  }

  renderGames();

  /* ══════════ Reveal on scroll ══════════ */
  (function reveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });

    // Safety net: if the observer has not fired once by now (throttled or
    // non-compositing tab, prerender, odd embed) reveal everything rather
    // than leave the page permanently invisible.
    setTimeout(function () {
      if (document.querySelector('.reveal.in')) return;
      io.disconnect();
      items.forEach(function (el) { el.classList.add('in'); });
    }, 2500);
  })();

  /* ══════════ Lightbox ══════════ */
  (function lightbox() {
    const box = document.getElementById('lightbox');
    const img = document.getElementById('lbImg');
    const cap = document.getElementById('lbCap');
    if (!box || !img) return;

    let shots = [];
    let index = 0;
    let title = '';
    let lastFocus = null;

    function show(i) {
      index = (i + shots.length) % shots.length;
      img.src = shots[index];
      img.alt = title + ' screenshot ' + (index + 1);
      if (cap) cap.textContent = title + ' · ' + (index + 1) + ' / ' + shots.length;
    }

    function open(slug, shot) {
      const game = games.filter(function (g) { return g.slug === slug; })[0];
      if (!game) return;
      title = game.title;
      shots = [];
      for (let i = 1; i <= game.shots; i++) shots.push(shotPath(slug, i));
      lastFocus = document.activeElement;
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
      show(shot - 1);
      const close = document.getElementById('lbClose');
      if (close) close.focus();
    }

    function close() {
      box.classList.remove('open');
      document.body.style.overflow = '';
      img.src = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('[data-game][data-shot]');
      if (trigger) {
        e.preventDefault();
        open(trigger.getAttribute('data-game'), parseInt(trigger.getAttribute('data-shot'), 10));
      }
    });

    document.getElementById('lbClose').addEventListener('click', close);
    document.getElementById('lbPrev').addEventListener('click', function (e) { e.stopPropagation(); show(index - 1); });
    document.getElementById('lbNext').addEventListener('click', function (e) { e.stopPropagation(); show(index + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });

    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(index - 1);
      else if (e.key === 'ArrowRight') show(index + 1);
    });
  })();

  /* ══════════ Year + initial language ══════════ */
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  setLanguage(currentLang());
})();
