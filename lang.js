/* ─────────────────────────────────────────────────────────────
   Crow Interactive :: i18n
   Elements opt in with  data-i18n="key".
   setLanguage(code) swaps every string and stores the choice.
   ───────────────────────────────────────────────────────────── */

const LANGS = ['en', 'ko', 'zh', 'ja'];

const translations = {

  /* ══════════════════ ENGLISH ══════════════════ */
  en: {
    'nav.games': 'Games',
    'nav.studio': 'Studio',
    'nav.community': 'Community',
    'nav.contact': 'Contact',

    'hero.tag': 'Independent game studio · Turkey',
    'hero.sub': 'Compact simulation and idle games, built to sit alongside your day instead of taking it over.',
    'hero.cta.games': 'View the games',
    'hero.cta.steam': 'Steam page',
    'hero.scroll': 'Scroll',

    'games.eyebrow': 'Catalogue',
    'games.title': 'Games',
    'games.sub': 'Five titles on Steam. Shops, machines, boats, and the numbers behind them.',

    'game.corner-market.desc': 'A relaxing idle market simulator that sits in the corner of your screen. Stock the shelves, serve customers, hire staff, and grow a tiny shop into a full supermarket while you get on with your day.',
    'game.fisher-idle.desc': 'You start with one small boat in the middle of the ocean. Fish, upgrade, and buy more hulls until you are running a whole fleet, because more fish means more gold.',
    'game.game-store-sim.desc': 'Run your own game store. Buy stock, haul the cargo in yourself, set the prices, and turn a cramped little shop into the best place in town to buy games.',
    'game.vending-machine.desc': 'Build a vending empire one machine at a time. Rent locations, manage the supply chain, tune your prices to demand, and watch the routes turn profitable.',
    'game.homeless-life.desc': 'You have lost everything. Survive on the streets, rebuild piece by piece, and find out how far back up you can climb.',

    'tag.idle': 'Idle',
    'tag.simulation': 'Simulation',
    'tag.casual': 'Casual',
    'tag.adventure': 'Adventure',
    'tag.management': 'Management',
    'tag.indie': 'Indie',
    'tag.survival': 'Survival',

    'game.steam': 'View on Steam',
    'game.presskit': 'Press kit',
    'meta.platform': 'Windows · Steam',

    'studio.eyebrow': 'The Studio',
    'studio.title': 'We make small games that are hard to put down.',
    'studio.stat.games': 'Titles shipped',
    'studio.stat.langs': 'Languages',
    'studio.stat.platform': 'Steam / Windows',
    'studio.p1': 'Crow Interactive is an independent game studio based in Turkey. We build compact simulation and idle games: corner shops, vending routes, fishing fleets, game stores. Systems you can read at a glance, and numbers you keep wanting to push a little higher.',
    'studio.p2': 'After years of making mobile games, the studio moved its full focus to PC to work on deeper, more personal projects. Everything we ship lands on Steam, aimed at players who keep a second window open while they work, watch, or wind down.',
    'studio.p3': 'Small team, short cycles, direct contact. If you have found a bug or want to cover one of our games, get in touch.',

    'creator.title': 'Content creator policy',
    'creator.text': 'All of our games are fully open for content creators. Stream them, record Let’s Plays, and monetise your content freely. No permission needed, no strings attached.',

    'community.eyebrow': 'Community',
    'community.title': 'Feature requests, bug reports, early builds.',
    'community.sub': 'Our Discord is where updates get announced first, and where most of the good ideas come from.',
    'community.cta': 'Join the Discord',

    'contact.eyebrow': 'Get in touch',
    'contact.title': 'Contact',
    'contact.sub': 'Press, partnerships, publishing, support. One inbox, and we read all of it.',
    'contact.press.title': 'Review keys & press',
    'contact.press.text': 'Press and content creators can request a key by email. Include your outlet or channel, your audience size, and a link or two.',
    'contact.press.cta': 'Request a key',
    'contact.kits.title': 'Press kits',
    'contact.kits.text': 'Logos, screenshots and key art for Corner Market and Vending Machine Business Simulator.',

    'footer.rights': 'All rights reserved.'
  },

  /* ══════════════════ KOREAN ══════════════════ */
  ko: {
    'nav.games': '게임',
    'nav.studio': '스튜디오',
    'nav.community': '커뮤니티',
    'nav.contact': '문의',

    'hero.tag': '인디 게임 스튜디오 · 튀르키예',
    'hero.sub': '하루를 통째로 빼앗지 않고 일상 옆에 조용히 놓이도록 만든, 간결한 시뮬레이션·방치형 게임.',
    'hero.cta.games': '게임 보기',
    'hero.cta.steam': 'Steam 페이지',
    'hero.scroll': '스크롤',

    'games.eyebrow': '카탈로그',
    'games.title': '게임',
    'games.sub': 'Steam에 출시된 다섯 작품. 가게, 자판기, 배, 그리고 그 뒤의 숫자들.',

    'game.corner-market.desc': '화면 한구석에서 돌아가는 편안한 방치형 마켓 시뮬레이터. 진열대를 채우고, 손님을 응대하고, 직원을 고용하며 작은 가게를 대형 마트로 키워보세요. 그동안 당신은 하던 일을 계속하면 됩니다.',
    'game.fisher-idle.desc': '망망대해 한가운데, 작은 배 한 척으로 시작합니다. 물고기를 낚고, 배를 업그레이드하고, 선단을 늘려 어엿한 선단주가 되어보세요. 물고기가 많을수록 금화도 늘어납니다.',
    'game.game-store-sim.desc': '나만의 게임 가게를 운영하세요. 재고를 사들이고, 직접 화물을 실어 나르고, 가격을 정해 좁은 가게를 동네 최고의 게임 매장으로 키웁니다.',
    'game.vending-machine.desc': '자판기 한 대에서 시작하는 유통 사업. 자리를 임대하고, 공급망을 관리하고, 수요에 맞춰 가격을 조정하며 수익이 나는 노선을 만들어 가세요.',
    'game.homeless-life.desc': '모든 것을 잃었습니다. 거리에서 살아남고, 하나씩 다시 쌓아 올리며 어디까지 올라갈 수 있는지 확인하세요.',

    'tag.idle': '방치형',
    'tag.simulation': '시뮬레이션',
    'tag.casual': '캐주얼',
    'tag.adventure': '어드벤처',
    'tag.management': '경영',
    'tag.indie': '인디',
    'tag.survival': '생존',

    'game.steam': 'Steam에서 보기',
    'game.presskit': '프레스킷',
    'meta.platform': 'Windows · Steam',

    'studio.eyebrow': '스튜디오',
    'studio.title': '손에서 놓기 어려운 작은 게임을 만듭니다.',
    'studio.stat.games': '출시작',
    'studio.stat.langs': '지원 언어',
    'studio.stat.platform': 'Steam / Windows',
    'studio.p1': 'Crow Interactive는 튀르키예에 기반을 둔 인디 게임 스튜디오입니다. 동네 가게, 자판기 노선, 어선단, 게임 매장 같은 간결한 시뮬레이션·방치형 게임을 만듭니다. 한눈에 읽히는 시스템과, 자꾸 조금 더 올리고 싶어지는 숫자가 저희가 신경 쓰는 부분입니다.',
    'studio.p2': '수년간 모바일 게임을 만든 뒤, 스튜디오는 더 깊고 개인적인 프로젝트를 위해 PC로 완전히 방향을 옮겼습니다. 저희가 내놓는 모든 작품은 Steam에 출시되며, 일하거나 영상을 보거나 쉬는 동안 창 하나를 더 띄워 두는 플레이어를 향합니다.',
    'studio.p3': '작은 팀, 짧은 개발 주기, 직접적인 소통. 버그를 발견하셨거나 저희 게임을 다루고 싶으시다면 언제든 연락 주세요.',

    'creator.title': '콘텐츠 크리에이터 정책',
    'creator.text': '저희의 모든 게임은 콘텐츠 크리에이터에게 완전히 열려 있습니다. 방송하고, 플레이 영상을 찍고, 자유롭게 수익을 창출하세요. 별도의 허가나 조건은 없습니다.',

    'community.eyebrow': '커뮤니티',
    'community.title': '기능 제안, 버그 제보, 얼리 빌드.',
    'community.sub': '업데이트 소식이 가장 먼저 올라오고, 좋은 아이디어 대부분이 나오는 곳이 저희 Discord입니다.',
    'community.cta': 'Discord 참여하기',

    'contact.eyebrow': '연락하기',
    'contact.title': '문의',
    'contact.sub': '언론, 협업, 퍼블리싱, 지원. 메일함은 하나이고, 전부 읽습니다.',
    'contact.press.title': '리뷰 키 & 언론',
    'contact.press.text': '언론 관계자와 콘텐츠 크리에이터는 이메일로 리뷰 키를 요청할 수 있습니다. 매체 또는 채널명, 구독자 규모, 관련 링크를 함께 보내주세요.',
    'contact.press.cta': '리뷰 키 요청',
    'contact.kits.title': '프레스킷',
    'contact.kits.text': 'Corner Market과 Vending Machine Business Simulator의 로고, 스크린샷, 키 아트.',

    'footer.rights': '모든 권리 보유.'
  },

  /* ══════════════════ SIMPLIFIED CHINESE ══════════════════ */
  zh: {
    'nav.games': '游戏',
    'nav.studio': '工作室',
    'nav.community': '社区',
    'nav.contact': '联系',

    'hero.tag': '独立游戏工作室 · 土耳其',
    'hero.sub': '小体量的模拟与放置类游戏，陪着你的一天，而不是占满它。',
    'hero.cta.games': '查看游戏',
    'hero.cta.steam': 'Steam 页面',
    'hero.scroll': '向下滚动',

    'games.eyebrow': '作品目录',
    'games.title': '游戏',
    'games.sub': '五款 Steam 作品。商店、自动售货机、渔船，以及它们背后的数字。',

    'game.corner-market.desc': '一款轻松的放置类商店经营模拟游戏，就待在屏幕角落里。补货、招待顾客、雇佣员工，把小小的便利店一路做成大型超市，而你照常忙自己的事。',
    'game.fisher-idle.desc': '一开始，你在大海中央只有一条小船。撒网、升级、添置新船，直到你手下有了一整支船队。鱼越多，金币越多。',
    'game.game-store-sim.desc': '经营属于你的游戏商店。进货、亲自把货拉回来、定价，把一间狭小的店铺变成全城最好的游戏卖场。',
    'game.vending-machine.desc': '从一台机器开始，做起你的自动售货生意。租下点位、管理供应链、按需求调整价格，看着一条条线路变得有利可图。',
    'game.homeless-life.desc': '你失去了一切。在街头活下去，一点一点重建生活，看看自己能爬回多高。',

    'tag.idle': '放置',
    'tag.simulation': '模拟',
    'tag.casual': '休闲',
    'tag.adventure': '冒险',
    'tag.management': '经营',
    'tag.indie': '独立',
    'tag.survival': '生存',

    'game.steam': '在 Steam 查看',
    'game.presskit': '媒体资料包',
    'meta.platform': 'Windows · Steam',

    'studio.eyebrow': '关于工作室',
    'studio.title': '我们做的是让人放不下的小游戏。',
    'studio.stat.games': '已发行作品',
    'studio.stat.langs': '支持语言',
    'studio.stat.platform': 'Steam / Windows',
    'studio.p1': 'Crow Interactive 是一家位于土耳其的独立游戏工作室。我们制作小体量的模拟与放置类游戏：街角小店、售货机线路、渔船队、游戏商店。系统一眼就能看懂，数字则让人忍不住想再往上推一点。',
    'studio.p2': '在做了多年手机游戏之后，工作室把全部精力转向 PC，去做更深入、更个人化的项目。我们的每一款作品都在 Steam 上发行，面向那些在工作、看视频或放松时会多开一个窗口的玩家。',
    'studio.p3': '小团队、短周期、直接沟通。如果你发现了 bug，或者想报道我们的游戏，随时欢迎联系。',

    'creator.title': '内容创作者政策',
    'creator.text': '我们所有的游戏都对内容创作者完全开放。可以直播、录制实况视频，并自由地进行内容变现。无需申请，也没有附加条件。',

    'community.eyebrow': '社区',
    'community.title': '功能建议、bug 反馈、抢先体验版本。',
    'community.sub': '更新会最先在我们的 Discord 公布，大部分好点子也来自那里。',
    'community.cta': '加入 Discord',

    'contact.eyebrow': '联系我们',
    'contact.title': '联系',
    'contact.sub': '媒体、合作、发行、支持，都在同一个信箱，而且我们全都会看。',
    'contact.press.title': '评测密钥与媒体',
    'contact.press.text': '媒体与内容创作者可通过邮件申请评测密钥。请附上媒体或频道名称、受众规模，以及一两个相关链接。',
    'contact.press.cta': '申请密钥',
    'contact.kits.title': '媒体资料包',
    'contact.kits.text': 'Corner Market 与 Vending Machine Business Simulator 的标志、截图与主视觉素材。',

    'footer.rights': '保留所有权利。'
  },

  /* ══════════════════ JAPANESE ══════════════════ */
  ja: {
    'nav.games': 'ゲーム',
    'nav.studio': 'スタジオ',
    'nav.community': 'コミュニティ',
    'nav.contact': 'お問い合わせ',

    'hero.tag': 'インディーゲームスタジオ · トルコ',
    'hero.sub': '一日を丸ごと奪うのではなく、日常のかたわらに置いておける。そんな小さなシミュレーション＆放置系ゲームを作っています。',
    'hero.cta.games': 'ゲームを見る',
    'hero.cta.steam': 'Steam ページ',
    'hero.scroll': 'スクロール',

    'games.eyebrow': 'カタログ',
    'games.title': 'ゲーム',
    'games.sub': 'Steam で配信中の 5 タイトル。店、自販機、船、そしてその裏側の数字たち。',

    'game.corner-market.desc': '画面の隅で動きつづける、のんびり遊べる放置型マーケットシミュレーター。棚を補充し、お客を迎え、スタッフを雇って、小さな店を大型スーパーへと育てていきます。その間、あなたは自分の作業を続けるだけ。',
    'game.fisher-idle.desc': '大海原のまん中、小さな船一隻からのスタート。釣って、強化して、船を買い足していけば、やがて一つの船団が動きはじめます。魚が増えれば、その分だけ金貨も増えていきます。',
    'game.game-store-sim.desc': '自分だけのゲームショップを経営しよう。仕入れて、荷物を自分で運び込み、値段を決めて、手狭な店を街いちばんのゲームショップに育て上げます。',
    'game.vending-machine.desc': '自販機 1 台から始める自動販売ビジネス。設置場所を借り、供給を管理し、需要に合わせて価格を調整して、ルートが利益を生むまで育てていきます。',
    'game.homeless-life.desc': 'すべてを失いました。路上で生き延び、少しずつ立て直しながら、どこまで這い上がれるかを確かめてください。',

    'tag.idle': '放置',
    'tag.simulation': 'シミュレーション',
    'tag.casual': 'カジュアル',
    'tag.adventure': 'アドベンチャー',
    'tag.management': '経営',
    'tag.indie': 'インディー',
    'tag.survival': 'サバイバル',

    'game.steam': 'Steam で見る',
    'game.presskit': 'プレスキット',
    'meta.platform': 'Windows · Steam',

    'studio.eyebrow': 'スタジオについて',
    'studio.title': '手放しにくい、小さなゲームを作っています。',
    'studio.stat.games': 'リリース作品',
    'studio.stat.langs': '対応言語',
    'studio.stat.platform': 'Steam / Windows',
    'studio.p1': 'Crow Interactive はトルコを拠点とするインディーゲームスタジオです。街角の店、自販機のルート、漁船団、ゲームショップ。ひと目で理解できるシステムと、もう少し伸ばしたくなる数字でできた、小さなシミュレーション＆放置系ゲームを作っています。',
    'studio.p2': '長年モバイルゲームを作ったのち、スタジオはより深く、より個人的なプロジェクトを追うために PC へ完全に軸足を移しました。リリースはすべて Steam。仕事や動画視聴、休憩のかたわらでもう一つウィンドウを開いておくプレイヤーに向けて作っています。',
    'studio.p3': '少人数、短いサイクル、直接のやり取り。バグを見つけた方、作品を取り上げたい方は、いつでもご連絡ください。',

    'creator.title': 'コンテンツクリエイター向けポリシー',
    'creator.text': '当スタジオのゲームはすべて、コンテンツクリエイターに完全開放されています。配信も実況動画の投稿も収益化も自由です。許可も条件も必要ありません。',

    'community.eyebrow': 'コミュニティ',
    'community.title': '要望も、バグ報告も、先行ビルドも。',
    'community.sub': 'アップデートが最初に告知される場所であり、良いアイデアの多くが生まれる場所でもあります。',
    'community.cta': 'Discord に参加',

    'contact.eyebrow': 'ご連絡',
    'contact.title': 'お問い合わせ',
    'contact.sub': 'メディア、協業、パブリッシング、サポート。窓口はひとつ、すべて目を通しています。',
    'contact.press.title': 'レビューキー＆プレス',
    'contact.press.text': 'メディア関係者とコンテンツクリエイターの方はメールでレビューキーをご請求いただけます。媒体名またはチャンネル名、視聴者規模、参考リンクを添えてお送りください。',
    'contact.press.cta': 'キーを請求する',
    'contact.kits.title': 'プレスキット',
    'contact.kits.text': 'Corner Market と Vending Machine Business Simulator のロゴ、スクリーンショット、キーアート。',

    'footer.rights': 'All rights reserved.'
  }
};

/* HTML lang attribute per locale, for correct font fallback and hyphenation. */
const HTML_LANG = { en: 'en', ko: 'ko', zh: 'zh-Hans', ja: 'ja' };

function t(key, lang) {
  const l = lang || currentLang();
  const table = translations[l] || translations.en;
  return table[key] !== undefined ? table[key] : (translations.en[key] !== undefined ? translations.en[key] : key);
}

function currentLang() {
  try {
    const stored = localStorage.getItem('site-lang');
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
  } catch (e) {}
  return 'en';
}

function setLanguage(lang) {
  if (LANGS.indexOf(lang) === -1) lang = 'en';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const val = t(key, lang);
    if (val !== undefined) el.textContent = val;
  });

  document.documentElement.setAttribute('lang', HTML_LANG[lang] || 'en');

  try { localStorage.setItem('site-lang', lang); } catch (e) {}

  const codeEl = document.getElementById('langCode');
  if (codeEl) codeEl.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    const active = btn.getAttribute('data-lang-btn') === lang;
    btn.classList.toggle('c-text', active);
    btn.classList.toggle('c-dim', !active);
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
}
