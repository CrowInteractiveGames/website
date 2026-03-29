/**
 * Corner Market Presskit — Localization System
 * Supports: EN (default), KO, ZH, JA
 * Uses navigator.language for auto-detection, localStorage for persistence.
 */

const SUPPORTED_LANGS = ['en', 'ko', 'zh', 'ja'];
const DEFAULT_LANG = 'en';

const LANG_TO_TITLE_FOLDER = {
  en: 'english',
  ko: 'korean',
  zh: 'simplified_chinese',
  ja: 'japanese'
};

const translations = {
  /* ───────── NAV ───────── */
  'nav.presskit':   { en: 'Press Kit', ko: '프레스 키트', zh: '新闻资料', ja: 'プレスキット' },
  'nav.games':      { en: 'Games', ko: '게임', zh: '游戏', ja: 'ゲーム' },

  /* ───────── HERO ───────── */
  'hero.description': {
    en: 'A relaxing idle market simulator that sits at the corner of your screen while you do other things.',
    ko: '다른 일을 하는 동안 화면 한쪽에서 돌아가는 힐링 방치형 마켓 시뮬레이터.',
    zh: '一款轻松的挂机市场模拟游戏，在你做其他事情时待在屏幕角落。',
    ja: '他の作業をしながら画面の片隅で楽しめる、のんびり放置系マーケットシミュレーター。'
  },
  'hero.wishlist':    { en: 'Wishlist on Steam', ko: 'Steam 위시리스트', zh: 'Steam 愿望单', ja: 'Steamウィッシュリスト' },
  'hero.presskit':    { en: 'Download Press Kit', ko: '프레스 키트 다운로드', zh: '下载新闻资料包', ja: 'プレスキットをダウンロード' },

  /* ───────── FACTSHEET ───────── */
  'fact.title':       { en: 'Factsheet', ko: '팩트시트', zh: '概况', ja: 'ファクトシート' },
  'fact.developer':   { en: 'Developer', ko: '개발사', zh: '开发商', ja: '開発元' },
  'fact.publisher':   { en: 'Publisher', ko: '퍼블리셔', zh: '发行商', ja: 'パブリッシャー' },
  'fact.platform':    { en: 'Platform', ko: '플랫폼', zh: '平台', ja: 'プラットフォーム' },
  'fact.genre':       { en: 'Genre', ko: '장르', zh: '类型', ja: 'ジャンル' },
  'fact.genre.val':   { en: 'Idle / Simulation / Management', ko: '방치형 / 시뮬레이션 / 경영', zh: '放置 / 模拟 / 经营', ja: '放置系 / シミュレーション / 経営' },
  'fact.release':     { en: 'Release Date', ko: '출시일', zh: '发售日期', ja: '発売日' },
  'fact.release.val': { en: 'July 2026', ko: '2026년 7월', zh: '2026年7月', ja: '2026年7月' },
  'fact.price':       { en: 'Price', ko: '가격', zh: '价格', ja: '価格' },
  'fact.price.val':   { en: 'TBA', ko: '미정', zh: '待定', ja: '未定' },
  'fact.contact':     { en: 'Contact', ko: '연락처', zh: '联系方式', ja: 'お問い合わせ' },
  'fact.languages':   { en: 'Languages', ko: '지원 언어', zh: '语言支持', ja: '対応言語' },
  'fact.languages.val': {
    en: '17 languages (full text localization)',
    ko: '17개 언어 (전체 텍스트 현지화)',
    zh: '17种语言（全文本本地化）',
    ja: '17言語（フルテキストローカライズ）'
  },
  'fact.sysreq':      { en: 'Minimum System Requirements', ko: '최소 시스템 요구 사양', zh: '最低系统要求', ja: '最低システム要件' },
  'fact.languages.toggle': { en: 'Show all', ko: '모두 보기', zh: '查看全部', ja: 'すべて表示' },

  /* ───────── ABOUT ───────── */
  'about.title': { en: 'About the Game', ko: '게임 소개', zh: '游戏简介', ja: 'ゲーム紹介' },
  'about.text': {
    en: 'Corner Market is a cozy idle simulation game where you run a small corner shop. Stock shelves, serve customers, expand your store, and watch your little market thrive, all while you go about your day. Perfect for multitaskers who love gentle progression.',
    ko: 'Corner Market은 작은 구멍가게를 운영하는 아늑한 방치형 시뮬레이션 게임입니다. 진열대를 채우고, 손님을 맞이하고, 가게를 확장하며 당신의 작은 마켓이 번창하는 모습을 지켜보세요. 일상 속에서 즐기기 완벽한 게임입니다.',
    zh: 'Corner Market 是一款温馨的挂机模拟游戏，你将经营一家小小的街角商店。上架商品、接待顾客、扩展店面，看着你的小市场蓬勃发展，一切都在你忙碌的日常中进行。',
    ja: 'Corner Marketは、小さな角のお店を経営するほのぼの放置系シミュレーションゲームです。棚に商品を並べ、お客さんを迎え、お店を拡大して、あなたの小さなマーケットが繁盛する様子を見守りましょう。'
  },

  /* ───────── FEATURES ───────── */
  'features.title': { en: 'Features', ko: '특징', zh: '特色', ja: '特徴' },
  'feature.1': {
    en: 'Idle gameplay, your shop runs even when minimized',
    ko: '방치형 플레이, 최소화해도 가게가 운영됩니다',
    zh: '挂机玩法，最小化后店铺也在运营',
    ja: '放置プレイ、最小化してもお店は営業中'
  },
  'feature.2': {
    en: 'Stock shelves, manage inventory, and set prices',
    ko: '진열대 관리, 재고 관리, 가격 설정',
    zh: '上架商品、管理库存、设定价格',
    ja: '商品陳列・在庫管理・価格設定'
  },
  'feature.3': {
    en: 'Expand and customize your corner market',
    ko: '구멍가게를 확장하고 꾸미세요',
    zh: '扩展并自定义你的街角商店',
    ja: 'お店を拡張してカスタマイズ'
  },
  'feature.5': {
    en: 'Cozy pixel art aesthetic with relaxing soundtrack',
    ko: '아늑한 픽셀 아트와 편안한 사운드트랙',
    zh: '温馨像素风美术与轻松的背景音乐',
    ja: 'ほのぼのピクセルアートとリラックスBGM'
  },
  'feature.6': {
    en: 'Overlay mode, play while watching videos or working',
    ko: '오버레이 모드, 영상 시청이나 작업 중에도 플레이',
    zh: '悬浮窗模式，边看视频边玩',
    ja: 'オーバーレイモード、動画視聴や作業をしながらプレイ'
  },

  /* ───────── SCREENSHOTS ───────── */
  'screenshots.title': { en: 'Screenshots', ko: '스크린샷', zh: '截图', ja: 'スクリーンショット' },

  /* ───────── GIFS ───────── */
  'gifs.title': { en: 'GIFs', ko: 'GIF', zh: '动图', ja: 'GIF' },

  /* ───────── VIDEO ───────── */
  'video.title': { en: 'Video', ko: '영상', zh: '视频', ja: '動画' },

  /* ───────── BRANDING ───────── */
  'branding.title': { en: 'Logo & Branding', ko: '로고 & 브랜딩', zh: '标志与品牌', ja: 'ロゴ＆ブランド' },
  'branding.download': { en: 'Download all assets (Google Drive)', ko: '모든 에셋 다운로드 (Google Drive)', zh: '下载所有素材（Google Drive）', ja: '全素材をダウンロード（Google Drive）' },
  'branding.game': { en: 'Game Logo', ko: '게임 로고', zh: '游戏标志', ja: 'ゲームロゴ' },
  'branding.studio': { en: 'Studio Logo', ko: '스튜디오 로고', zh: '工作室标志', ja: 'スタジオロゴ' },

  /* ───────── CONTACT ───────── */
  'contact.title':    { en: 'Contact', ko: '연락처', zh: '联系我们', ja: 'お問い合わせ' },
  'contact.text': {
    en: 'For press inquiries, partnership, and support:',
    ko: '언론 문의, 파트너십 및 지원:',
    zh: '媒体咨询、合作与支持：',
    ja: 'プレスのお問い合わせ、提携、サポート：'
  },
  'contact.discord': { en: 'Join Discord', ko: 'Discord 참여', zh: '加入 Discord', ja: 'Discordに参加' },
  'contact.publisher': { en: 'Publisher Page', ko: '퍼블리셔 페이지', zh: '发行商页面', ja: 'パブリッシャーページ' },
  'contact.reviewcopy': {
    en: '🔑 Request a Review Key',
    ko: '🔑 리뷰 키 요청',
    zh: '🔑 申请评测密钥',
    ja: '🔑 レビューキーのリクエスト'
  },
  'contact.reviewcopy.desc': {
    en: 'Members of the press and content creators can request a review key by emailing us. Please include your outlet name, audience size, and any relevant links.',
    ko: '언론 관계자 및 콘텐츠 크리에이터는 이메일로 리뷰 키를 요청할 수 있습니다. 소속 매체명, 구독자 수, 관련 링크를 함께 보내주세요.',
    zh: '媒体记者和内容创作者可通过邮件申请评测密钥。请附上您的媒体名称、受众规模及相关链接。',
    ja: 'プレス関係者やコンテンツクリエイターは、メールでレビューキーをリクエストできます。媒体名、視聴者数、関連リンクをお知らせください。'
  },

  /* ───────── FOOTER ───────── */
  'footer.rights': { en: 'All rights reserved.', ko: 'All rights reserved.', zh: '保留所有权利。', ja: 'All rights reserved.' },

  /* ───────── ABOUT THE DEVELOPER ───────── */
  'dev.title': { en: 'About Crow Interactive', ko: 'Crow Interactive 소개', zh: '关于 Crow Interactive', ja: 'Crow Interactive について' },
  'dev.text': {
    en: 'Crow Interactive is an independent video game studio based in Turkey. After years of developing mobile games, the studio shifted its full focus to PC to pursue a long-held passion for deeper, more personal projects. Corner Market is the latest title from Crow Interactive, alongside Vending Machine Business Simulator and Game Store Simulator, all available on Steam.',
    ko: 'Crow Interactive는 터키에 기반을 둔 독립 비디오 게임 스튜디오입니다. 수년간 모바일 게임을 개발한 뒤, 더 깊이 있고 개인적인 프로젝트를 향한 오랜 열정을 쫓아 PC 개발에 전념하게 되었습니다. Corner Market은 Vending Machine Business Simulator, Game Store Simulator와 함께 Steam에서 만나볼 수 있는 Crow Interactive의 최신 타이틀입니다.',
    zh: 'Crow Interactive 是一家位于土耳其的独立电子游戏工作室。在多年的手游开发经历后，工作室将全部精力转向 PC，追求更深度、更个人化的项目。Corner Market 是 Crow Interactive 的最新作品，此前还有 Vending Machine Business Simulator 和 Game Store Simulator，均已上架 Steam。',
    ja: 'Crow Interactive はトルコを拠点とするインディーゲームスタジオです。長年のモバイルゲーム開発を経て、より深く、よりパーソナルな作品づくりへの情熱を追い求め、PC開発に全力を注いでいます。Corner Market は Vending Machine Business Simulator、Game Store Simulator に続く最新タイトルで、すべて Steam で配信中です。'
  },

  /* ───────── CONTENT CREATOR POLICY ───────── */
  'creator.title': {
    en: '🎬 Content Creator Policy:',
    ko: '🎬 콘텐츠 크리에이터 정책:',
    zh: '🎬 内容创作者政策：',
    ja: '🎬 コンテンツクリエイターポリシー：'
  },
  'creator.text': {
    en: ' Corner Market is fully open for content creators. You are free to stream, record Let\'s Play videos, and monetize your content without any restrictions.',
    ko: ' Corner Market은 콘텐츠 크리에이터에게 완전히 열려 있습니다. 스트리밍, Let\'s Play 영상 녹화, 수익 창출 모두 제한 없이 자유롭게 하실 수 있습니다.',
    zh: ' Corner Market 对内容创作者完全开放。你可以自由直播、录制实况视频并从中获利，没有任何限制。',
    ja: ' Corner Market はコンテンツクリエイターに完全開放されています。配信、実況動画の録画、収益化をいかなる制限もなく自由に行えます。'
  },

  /* ───────── BOILERPLATE ───────── */
  'boilerplate.title': { en: 'Quick Copy Descriptions', ko: '빠른 복사 설명문', zh: '快速复制描述', ja: 'コピー用テキスト' },
  'boilerplate.copy': { en: 'Copy', ko: '복사', zh: '复制', ja: 'コピー' },
  'boilerplate.short': {
    en: 'Corner Market is a cozy idle simulation game where you run a small corner shop at the edge of your screen while you go about your day.',
    ko: 'Corner Market은 일상을 보내면서 화면 한쪽에서 작은 구멍가게를 운영하는 아늑한 방치형 시뮬레이션 게임입니다.',
    zh: 'Corner Market 是一款温馨的挂机模拟游戏，让你在日常生活中于屏幕角落经营一家小小的街角商店。',
    ja: 'Corner Marketは、日常の作業をしながら画面の片隅で小さな角のお店を経営する、ほのぼの放置系シミュレーションゲームです。'
  },
  'boilerplate.long': {
    en: 'Corner Market is a cozy idle simulation game where you run a small corner shop. Stock shelves, serve customers, hire staff, and expand your store while it sits at the corner of your screen. Built for multitaskers, Corner Market lets you grow your business from a tiny shop to a full supermarket, all while you watch videos, work, or browse. With Twitch integration, overlay mode, and support for 17 languages, Corner Market is designed to be your everyday companion. Published by Crow Interactive, coming to Steam in July 2026.',
    ko: 'Corner Market은 작은 구멍가게를 운영하는 아늑한 방치형 시뮬레이션 게임입니다. 진열대를 채우고, 손님을 맞이하고, 직원을 고용하고, 화면 한쪽에서 가게를 확장하세요. 멀티태스커를 위해 만들어진 Corner Market은 영상을 보거나, 일을 하거나, 인터넷을 하면서도 작은 가게에서 대형 슈퍼마켓으로 성장시킬 수 있습니다. Twitch 연동, 오버레이 모드, 17개 언어 지원으로 매일 함께할 수 있는 게임입니다. Crow Interactive 퍼블리싱, 2026년 7월 Steam 출시 예정.',
    zh: 'Corner Market 是一款温馨的挂机模拟游戏，你将经营一家街角小店。上架商品、接待顾客、雇佣员工、扩展店面，所有这些都在屏幕角落进行。专为多任务处理者打造，Corner Market 让你在看视频、工作或浏览网页的同时，将小店发展成大型超市。支持 Twitch 集成、悬浮窗模式和17种语言，Corner Market 是你的日常伴侣。由 Crow Interactive 发行，2026年7月登陆 Steam。',
    ja: 'Corner Marketは、小さな角のお店を経営するほのぼの放置系シミュレーションゲームです。商品を陳列し、お客さんを迎え、スタッフを雇い、画面の片隅でお店を拡大していきます。マルチタスカーのために作られたCorner Marketは、動画視聴や仕事、ブラウジングをしながら、小さなお店をスーパーマーケットに成長させることができます。Twitch連携、オーバーレイモード、17言語対応で、毎日の相棒として設計されています。Crow Interactive より2026年7月Steam配信予定。'
  },

  /* ───────── GAMES PAGE ───────── */
  'games.title':    { en: 'Our Games', ko: '우리의 게임', zh: '我们的游戏', ja: '私たちのゲーム' },
  'games.subtitle': { en: 'Steam links and press kits below', ko: '아래에서 Steam 링크와 프레스 키트를 확인하세요', zh: '以下是 Steam 链接和新闻资料包', ja: '以下にSteamリンクとプレスキットがあります' },

  'game.cm.title': { en: 'Corner Market', ko: 'Corner Market', zh: 'Corner Market', ja: 'Corner Market' },
  'game.cm.desc': {
    en: 'A relaxing idle market simulator that sits at the corner of your screen while you do other things.',
    ko: '다른 일을 하는 동안 화면 한쪽에서 돌아가는 힐링 방치형 마켓 시뮬레이터.',
    zh: '一款轻松的挂机市场模拟游戏，在你做其他事情时待在屏幕角落。',
    ja: '他の作業をしながら画面の片隅で楽しめる、のんびり放置系マーケットシミュレーター。'
  },

  'game.vmbs.title': { en: 'Vending Machine Business Simulator', ko: 'Vending Machine Business Simulator', zh: 'Vending Machine Business Simulator', ja: 'Vending Machine Business Simulator' },
  'game.vmbs.desc': {
    en: 'Build your own vending empire. Buy, place, stock, and expand.',
    ko: '자판기 제국을 건설하세요. 구매, 설치, 재고 관리, 확장까지.',
    zh: '建立你的自动售货机帝国。购买、放置、补货、扩展。',
    ja: '自販機帝国を築こう。購入、設置、補充、拡大。'
  },
  'game.vmbs.desc2': {
    en: 'Rent locations, set up your product supply chain, optimize prices, manage inventory based on demand, and track growth with analytics.',
    ko: '장소를 임대하고, 공급망을 구축하고, 가격을 최적화하고, 수요에 따라 재고를 관리하며 분석으로 성장을 추적하세요.',
    zh: '租赁场地、建立供应链、优化定价、按需管理库存，并通过数据分析追踪增长。',
    ja: '場所を借りて、供給チェーンを構築し、価格を最適化し、需要に応じた在庫管理をして、分析で成長を追跡しましょう。'
  },

  'game.gss.title': { en: 'Game Store Simulator', ko: 'Game Store Simulator', zh: 'Game Store Simulator', ja: 'Game Store Simulator' },
  'game.gss.desc': {
    en: 'Manage your own game store. Buy stock, set prices, and attract customers.',
    ko: '나만의 게임 상점을 운영하세요. 재고를 구매하고, 가격을 설정하고, 고객을 유치하세요.',
    zh: '经营你自己的游戏商店。进货、定价、吸引顾客。',
    ja: '自分だけのゲームショップを経営。仕入れ、価格設定、集客。'
  },
  'game.gss.desc2': {
    en: 'Run your own shop, trade smart, manage stock, and turn your store into a player\'s favorite spot.',
    ko: '직접 가게를 운영하고, 현명하게 거래하고, 재고를 관리하며 플레이어들이 사랑하는 가게로 만들어 보세요.',
    zh: '经营自己的店铺，聪明交易，管理库存，把你的商店变成玩家最爱的地方。',
    ja: '自分の店を経営し、賢く取引し、在庫を管理し、プレイヤーのお気に入りの場所に育てよう。'
  },

  'game.steam':    { en: 'Steam', ko: 'Steam', zh: 'Steam', ja: 'Steam' },
  'game.presskit': { en: 'Press Kit', ko: '프레스 키트', zh: '新闻资料', ja: 'プレスキット' },
  'game.viewpresskit': { en: 'View Press Kit', ko: '프레스 키트 보기', zh: '查看新闻资料', ja: 'プレスキットを見る' },

  /* ───────── STORE DESCRIPTION ───────── */
  'store.intro': {
    en: 'Corner Market is an idle market simulator designed to sit at the corner of your screen.',
    ko: 'Corner Market는 화면 한쪽 구석에 놓고 사용하는 방치형 시장 시뮬레이터입니다.',
    zh: 'Corner Market 是一款挂机市场模拟器，专为放置在屏幕角落而设计。',
    ja: 'Corner Market は、画面の片隅に置いておけるアイドル系マーケット経営シミュレーターです。'
  },
  'store.intro2': {
    en: 'Letting you run your own cozy shop while getting on with your day!',
    ko: '일상을 보내면서 나만의 아늑한 가게를 운영해 보세요!',
    zh: '让你在处理日常事务的同时，经营自己温馨的小店！',
    ja: '日常の作業をこなしながら、自分だけの居心地の良いお店を経営しましょう！'
  },
  'store.stock': {
    en: 'Order products and watch your market come to life as items get restocked, and sold. Unlock new product categories as you grow. Grow your business from small store to supermarket.',
    ko: '상품을 주문하고 물건이 채워지고 팔리면서 마켓이 살아나는 모습을 지켜보세요. 성장하면서 새로운 상품 카테고리를 해금하세요. 작은 가게에서 슈퍼마켓으로 사업을 키워나가세요.',
    zh: '订购商品，看着货架补货、商品售出，见证你的市场逐渐焕发生机。随着发展解锁新的商品类别，将生意从小店铺一步步做成超市。',
    ja: '商品を注文して、商品が補充・販売されていくにつれてマーケットが活気づく様子を見守りましょう。成長するにつれて新しい商品カテゴリーを解放。小さなお店からスーパーマーケットへとビジネスを拡大しましょう。'
  },
  'store.earn': {
    en: 'Every sale fills your register, use your profits to expand your store. Open new aisles and attract more customers to keep the foot traffic flowing.',
    ko: '판매할 때마다 금전 등록기가 채워집니다. 수익을 사용해 가게를 확장하세요. 새로운 통로를 열고 더 많은 고객을 유치해 방문객의 흐름을 이어가세요.',
    zh: '每笔销售都会充实你的收银机，用利润来扩大你的店铺。开辟新通道，吸引更多顾客，让人流源源不断。',
    ja: '売上のたびにレジに売上が積み上がります。利益を使ってお店を拡張しましょう。新しい通路を開放し、より多くのお客様を呼び込んで、お客様の流れを途切れさせないようにしましょう。'
  },
  'store.hire': {
    en: 'Bring on staff to handle restocking, checkout, cleaning, and deliveries. Expand your team to run a smoother, faster, and more profitable corner market.',
    ko: '직원을 고용해 재입고, 계산, 청소, 배달을 맡기세요. 팀을 확장하여 더 원활하고 빠르고 수익성 높은 코너 마켓을 운영하세요.',
    zh: '雇用员工负责补货、收银、清洁和配送。扩充团队，让你的转角超市运转得更顺畅、更高效、更盈利。',
    ja: 'スタッフを雇って、補充・レジ・清掃・配達を任せましょう。チームを拡大して、より円滑で効率的、そして収益性の高いコーナーマーケットを運営しましょう。'
  },
  'store.multi': {
    en: 'Corner Market is built to sit comfortably at the corner of your screen so you can focus on other work while your shop runs itself. Zoom in or out for a less distracting view, or drag it anywhere on your screen when you need it out of the way.',
    ko: 'Corner Market은 화면 한쪽 구석에 편안하게 자리잡도록 설계되어, 가게가 알아서 돌아가는 동안 다른 작업에 집중할 수 있습니다. 덜 방해가 되는 화면 크기로 줌 인·아웃하거나, 필요할 때 화면 어디든 드래그해서 옮길 수 있습니다.',
    zh: 'Corner Market 专为舒适地置于屏幕角落而设计，让你在店铺自动运转的同时专注于其他工作。可随意缩放视图以减少干扰，或在需要时将窗口拖动到屏幕任意位置。',
    ja: 'Corner Market は画面の隅に快適に配置できるよう設計されているため、お店が自動で動いている間も他の作業に集中できます。邪魔にならないようにズームイン・アウトしたり、必要なときは画面上の好きな場所にドラッグしたりできます。'
  },
  'store.twitch.label': {
    en: 'Twitch Integration available:',
    ko: 'Twitch 연동 지원:',
    zh: '支持 Twitch 集成：',
    ja: 'Twitch 連携機能あり：'
  },
  'store.twitch.desc': {
    en: ' Streamers can run their market live while viewers join as customers, showing up in your shop with their own Twitch names.',
    ko: ' 스트리머는 마켓을 라이브로 운영하면서 시청자들이 고객으로 참여해 자신의 Twitch 이름으로 가게에 나타납니다.',
    zh: ' 主播可以在直播中运营自己的市场，观众以顾客身份加入，并以自己的 Twitch 用户名出现在店铺中。',
    ja: ' ストリーマーはマーケットをライブで運営でき、視聴者が自分の Twitch 名でお客様としてお店に登場します。'
  },
};

/* ── Language detection & switching ── */

function detectLanguage() {
  const stored = localStorage.getItem('site-lang');
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  const short = browserLang.slice(0, 2);
  if (SUPPORTED_LANGS.includes(short)) return short;

  return DEFAULT_LANG;
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  localStorage.setItem('site-lang', lang);
  document.documentElement.lang = lang;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (!entry) return;
    const text = entry[lang] || entry[DEFAULT_LANG];
    // Check for attribute-based translation (alt, placeholder, title, aria-label)
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, text);
    } else {
      el.textContent = text;
    }
  });

  // Update language-specific images (data-i18n-src)
  document.querySelectorAll('[data-i18n-src]').forEach(function (el) {
    const pattern = el.getAttribute('data-i18n-src');
    const folder = LANG_TO_TITLE_FOLDER[lang] || LANG_TO_TITLE_FOLDER[DEFAULT_LANG];
    el.src = pattern.replace('{lang}', lang).replace(/{langFolder}/g, folder);
  });

  // Update active indicator in language selector
  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    const btnLang = btn.getAttribute('data-lang-btn');
    btn.classList.toggle('bg-apricot/20', btnLang === lang);
    btn.classList.toggle('font-bold', btnLang === lang);
  });
}

function initLanguage() {
  const lang = detectLanguage();
  setLanguage(lang);
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
