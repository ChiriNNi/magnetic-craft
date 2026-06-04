import { useEffect, useState, type CSSProperties } from 'react'
import './App.css'

const whatsappLink =
  'https://wa.me/77000000000?text=Здравствуйте!%20Хочу%20узнать%20подробнее'
const instagramLink = 'https://www.instagram.com/magneticcraft_kz/'
const mapsForumAlmaty = 'https://2gis.kz/almaty/search/%D0%A2%D0%A0%D0%A6%20FORUM%20Almaty'
const mapsMegaSilkWay = 'https://2gis.kz/astana/search/MEGA%20Silk%20Way'

const navItems = [
  ['О нас', '#about'],
  ['Форматы', '#formats'],
  ['Каталог', '#catalog'],
  ['Филиалы', '#branches'],
  ['Отзывы', '#reviews'],
  ['Контакты', '#contacts'],
]

const features = [
  {
    icon: '🧲',
    title: 'ИГРОВАЯ ЗОНА',
    text: 'Пространство, где дети строят из магнитных кубиков прямо в зале',
    image: '/images/optimized/about-zone.webp',
  },
  {
    icon: '🟫',
    title: 'МАГНИТНЫЕ КУБИКИ',
    text: 'Уникальные наборы в стиле Minecraft — яркие, безопасные, развивающие',
    image: '/images/optimized/about-cubes.webp',
  },
  {
    icon: '🛒',
    title: 'МАГАЗИН НАБОРОВ',
    text: 'Купи любой набор домой и продолжай строить',
    image: '/images/optimized/about-room.webp',
  },
]

const visitPrices = [
  {
    title: 'БУДНИ',
    note: 'Понедельник - пятница',
    accent: 'weekday',
    plans: [
      {
        name: 'ПОЛЧАСА',
        time: '⏱ 30 минут',
        price: '2 900 ₸',
        text: 'Быстрый заход после школы или покупок',
        action: 'Зашли и построили',
      },
      {
        name: '1 ЧАС',
        time: '⏱ 60 минут',
        price: '4 900 ₸',
        text: 'Оптимально для большой постройки',
        action: 'Выбрали время и играете',
        popular: true,
      },
      {
        name: 'БЕЗЛИМИТ',
        time: '☀️ Весь день',
        price: '7 900 ₸',
        text: 'Можно строить, отдыхать и возвращаться',
        action: 'Играйте весь день',
      },
    ],
  },
  {
    title: 'ВЫХОДНЫЕ',
    note: 'Суббота - воскресенье',
    accent: 'weekend',
    plans: [
      {
        name: 'ПОЛЧАСА',
        time: '⏱ 30 минут',
        price: '3 900 ₸',
        text: 'Короткий игровой перерыв в ТЦ',
        action: 'Быстрый крафт-старт',
      },
      {
        name: '1 ЧАС',
        time: '⏱ 60 минут',
        price: '5 900 ₸',
        text: 'Самый удобный формат для выходного дня',
        action: 'Стройте без спешки',
        popular: true,
      },
      {
        name: 'БЕЗЛИМИТ',
        time: '☀️ Весь день',
        price: '9 900 ₸',
        text: 'Полный день пиксельных приключений',
        action: 'Максимум игры',
      },
    ],
  },
]

const kidsBenefits = [
  ['🏗️', 'БОЛЬШИЕ КОНСТРУКЦИИ', 'Строй целые города и замки из магнитных блоков'],
  ['🎮', 'ЗНАКОМАЯ ЭСТЕТИКА', 'Всё выглядит как любимая игра'],
  ['🎨', 'СВОБОДА ТВОРЧЕСТВА', 'Никаких правил — только фантазия'],
  ['👫', 'ОДИН ИЛИ С ДРУЗЬЯМИ', 'Весело в любом составе'],
]

const newsPromos = [
  {
    label: 'АКЦИЯ',
    title: 'Будни выгоднее',
    text: 'Приходите с понедельника по пятницу и собирайте большие постройки без очередей.',
    image: '/images/optimized/about-zone.webp',
  },
  {
    label: 'НОВОСТЬ',
    title: 'Новые наборы в зоне',
    text: 'Добавили свежие магнитные сцены, чтобы дети могли строить больше домов, арен и порталов.',
    image: '/images/optimized/catalog-family.webp',
  },
  {
    label: 'СЕМЬЯМ',
    title: 'Набор можно забрать домой',
    text: 'После игры выберите любимый комплект и продолжайте пиксельные приключения дома.',
    image: '/images/optimized/catalog-mini.webp',
  },
  {
    label: 'АНОНС',
    title: 'Выходные в стиле Minecraft',
    text: 'Готовим тематические игровые дни с большими совместными постройками в филиалах.',
    image: '/images/optimized/reviews-bg.webp',
  },
]

const products = [
  {
    badge: '🔥 NETHER',
    name: 'Огненные врата',
    text: 'Портал, лава и мини-сцена для первых приключений',
    description:
      'Набор для яркой постройки в стиле Nether: портал, огненные блоки и детали для сюжетной игры. Хорошо подходит как подарок или стартовая сцена для коллекции.',
    price: '14 930 ₸',
    cubes: '48 кубиков',
    image: '/images/optimized/catalog-start.webp',
    gallery: [
      '/images/optimized/catalog-start.webp',
      '/images/optimized/catalog-limited.webp',
      '/images/optimized/catalog-mini.webp',
    ],
  },
  {
    badge: '⛏️ CAVE',
    name: 'База в пещере',
    text: 'Большая подземная сцена с рудой и тайниками',
    description:
      'Большой набор для детей, которым нравится строить базы, шахты и секретные проходы. Внутри достаточно блоков, чтобы собрать полноценную игровую локацию.',
    price: '33 600 ₸',
    cubes: '128 кубиков',
    image: '/images/optimized/catalog-city.webp',
    gallery: [
      '/images/optimized/catalog-city.webp',
      '/images/optimized/catalog-castle.webp',
      '/images/optimized/about-cubes.webp',
    ],
  },
  {
    badge: '⚔️ TOOL',
    name: 'Меч-кирка',
    text: 'Магнитный набор для ролевой игры и витрины',
    description:
      'Сборный аксессуар в пиксельной стилистике: можно собрать, разобрать и использовать как часть большой Minecraft-сцены.',
    price: '14 000 ₸',
    cubes: 'магнитный набор',
    image: '/images/optimized/catalog-castle.webp',
    gallery: [
      '/images/optimized/catalog-castle.webp',
      '/images/optimized/catalog-limited.webp',
      '/images/optimized/catalog-family.webp',
    ],
  },
  {
    badge: '🏠 HOUSE',
    name: 'Дом у озера',
    text: 'Уютная постройка с водой, деревом и декором',
    description:
      'Спокойный набор для творческой сборки: домик, дворик, дорожки и водные элементы. Отличный вариант для детей, которые любят строить “свой мир”.',
    price: '24 900 ₸',
    cubes: '96 кубиков',
    image: '/images/optimized/catalog-mini.webp',
    gallery: [
      '/images/optimized/catalog-mini.webp',
      '/images/optimized/about-zone.webp',
      '/images/optimized/catalog-start.webp',
    ],
  },
  {
    badge: '💥 TNT',
    name: 'TNT арена',
    text: 'Динамичная сцена для битв и ловушек',
    description:
      'Набор для активной сюжетной игры: арена, блоки TNT, препятствия и пространство для мини-сражений между персонажами.',
    price: '18 900 ₸',
    cubes: '72 кубика',
    image: '/images/optimized/catalog-family.webp',
    gallery: [
      '/images/optimized/catalog-family.webp',
      '/images/optimized/reviews-bg.webp',
      '/images/optimized/catalog-city.webp',
    ],
  },
  {
    badge: '🌲 FOREST',
    name: 'Лесной аванпост',
    text: 'Башня, деревья и территория для большой карты',
    description:
      'Расширенный набор для строительства лесной базы: башня, зелёные блоки, декор и много пространства для фантазии.',
    price: '39 900 ₸',
    cubes: '150 кубиков',
    image: '/images/optimized/catalog-limited.webp',
    gallery: [
      '/images/optimized/catalog-limited.webp',
      '/images/optimized/about-room.webp',
      '/images/optimized/catalog-mini.webp',
    ],
  },
]

type Product = (typeof products)[number]

const catalogFilters: Array<{
  id: string
  label: string
  match: (product: Product) => boolean
}> = [
  {
    id: 'all',
    label: 'ВСЕ НАБОРЫ',
    match: () => true,
  },
  {
    id: 'starter',
    label: 'СТАРТ',
    match: (product: Product) => /48|72/.test(product.cubes),
  },
  {
    id: 'large',
    label: 'БОЛЬШИЕ',
    match: (product: Product) => /96|128|150/.test(product.cubes),
  },
  {
    id: 'scene',
    label: 'СЦЕНЫ',
    match: (product: Product) => !product.badge.includes('TOOL'),
  },
]

const branches = [
  {
    city: 'Алматы',
    name: 'ТРЦ FORUM',
    address: 'пр. Сейфуллина 617, 4 этаж',
    hours: 'Пн–Вс: 10:00 – 22:00',
    image: '/images/optimized/branch-mega.webp',
    map: mapsForumAlmaty,
    mapX: 27,
    mapY: 70,
  },
  {
    city: 'Астана',
    name: 'ТРЦ MEGA Silk Way',
    address: 'пр. Кабанбай Батыра 62',
    hours: 'Пн–Вс: 10:00 – 22:00',
    image: '/images/optimized/branch-dostyk.webp',
    map: mapsMegaSilkWay,
    mapX: 68,
    mapY: 36,
  },
]

const reviews = [
  {
    avatar: 'https://i.pravatar.cc/60?img=47',
    name: 'Айгуль М., Алматы',
    text: 'Сын сразу побежал строить портал и домик. Очень понравилось, что формат понятный: выбрали время, оплатили и спокойно играем.',
    source: '2GIS',
  },
  {
    avatar: 'https://i.pravatar.cc/60?img=32',
    name: 'Наталья С., Алматы',
    text: 'Зашли после покупок в ТЦ и остались на час. Кубики яркие, зона аккуратная, ребёнок был полностью занят творчеством.',
    source: 'Instagram',
  },
  {
    avatar: 'https://i.pravatar.cc/60?img=12',
    name: 'Ерлан К., Алматы',
    text: 'Удобно, что набор можно купить домой. Дочка выбрала кубики после игры, теперь строим всей семьёй по вечерам.',
    source: '2GIS',
  },
]

function revealStyle(index: number): CSSProperties {
  return { '--delay': `${index * 90}ms` } as CSSProperties
}

function Price({ value }: { value: string }) {
  const match = value.match(/^(.*)\s(₸)$/)

  if (!match) {
    return <span className="price-inline">{value}</span>
  }

  return (
    <span className="price-inline">
      <span>{match[1]}</span>
      <span className="price-currency">{match[2]}</span>
    </span>
  )
}

function PixelCubes() {
  return (
    <div className="floating-cubes" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <span className={`float-cube cube-${index + 1}`} key={index} />
      ))}
    </div>
  )
}

function CatalogPage({
  onOpenProduct,
}: {
  onOpenProduct: (product: Product) => void
}) {
  const [activeFilter, setActiveFilter] = useState(catalogFilters[0].id)
  const filter = catalogFilters.find((item) => item.id === activeFilter) ?? catalogFilters[0]
  const visibleProducts = products.filter(filter.match)

  return (
    <main className="catalog-page">
      <section className="catalog-hero pixel-grid">
        <PixelCubes />
        <div className="catalog-hero-inner reveal">
          <p className="hero-badge pixel-label">SHOP LEVEL</p>
          <h1>КАТАЛОГ НАБОРОВ</h1>
          <p>
            Все магнитные наборы Magnetic Craft в одном месте: выбирайте сцену, размер и формат
            для игры дома или подарка.
          </p>
          <div className="catalog-stats" aria-label="Сводка каталога">
            <span className="pixel-label">{products.length} наборов</span>
            <span className="pixel-label">от 48 до 150 кубиков</span>
            <span className="pixel-label">Minecraft style</span>
          </div>
        </div>
        <div className="grass-divider" aria-hidden="true" />
      </section>

      <section className="section catalog-list-section pixel-grid">
        <div className="catalog-toolbar reveal">
          <div>
            <p className="section-kicker pixel-label">FILTERS</p>
            <h2>Выберите набор</h2>
          </div>
          <div className="catalog-filter-row" aria-label="Фильтр наборов">
            {catalogFilters.map((item) => (
              <button
                className={`catalog-filter pixel-label ${item.id === activeFilter ? 'is-active' : ''}`}
                type="button"
                key={item.id}
                onClick={() => setActiveFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid catalog-page-grid">
          {visibleProducts.map((product, index) => (
            <article className="product-card reveal is-visible" style={revealStyle(index)} key={product.name}>
              <div className="product-media">
                <img
                  src={product.image}
                  alt={product.name}
                  width="600"
                  height="420"
                  loading="lazy"
                />
                <span className="category-badge pixel-label">{product.badge}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.text}</p>
              <span className="product-cubes pixel-label">{product.cubes}</span>
              <strong>
                <Price value={product.price} />
              </strong>
              <button
                className="pixel-button primary small product-details-button"
                type="button"
                aria-label={`Открыть карточку набора ${product.name}`}
                onClick={() => onOpenProduct(product)}
              >
                Подробнее
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activePromoIndex, setActivePromoIndex] = useState(0)
  const isCatalogPage = window.location.pathname.startsWith('/catalog')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedProduct) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null)
      }
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedProduct])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePromoIndex((index) => (index + 1) % newsPromos.length)
    }, 5200)

    return () => window.clearInterval(interval)
  }, [])

  const activePromo = newsPromos[activePromoIndex]
  const nextPromoIndex = (activePromoIndex + 1) % newsPromos.length
  const nextNextPromoIndex = (activePromoIndex + 2) % newsPromos.length
  const visiblePromoCards = [newsPromos[nextPromoIndex], newsPromos[nextNextPromoIndex]]

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <a className="logo" href={isCatalogPage ? '/' : '#hero'} aria-label="Magnetic Craft главная">
          <span className="logo-image-shell" aria-hidden="true">
            <img
              className="logo-image"
              src="/images/magnetic-craft-logo.png"
              alt=""
              width="222"
              height="218"
            />
          </span>
        </a>

        <button
          className="menu-button pixel-label"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Основная навигация">
          {navItems.map(([label, href]) => (
            <a
              className="pixel-link"
              href={href === '#catalog' ? '/catalog' : isCatalogPage ? `/${href}` : href}
              key={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="pixel-button nav-whatsapp"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Написать Magnetic Craft в WhatsApp"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      {isCatalogPage ? (
        <CatalogPage
          onOpenProduct={(product) => {
            setSelectedProduct(product)
            setSelectedImageIndex(0)
          }}
        />
      ) : (
      <main>
        <section className="hero-section" id="hero">
          <img
            className="hero-bg"
            src="/images/optimized/hero.webp"
            width="1800"
            height="1050"
            loading="lazy"
            alt="Игровая зона Magnetic Craft в стиле Minecraft"
          />
          <div className="hero-overlay" />
          <PixelCubes />

          <div className="hero-content reveal">
            <p className="hero-badge pixel-label">🟩 ИГРОВАЯ ЗОНА</p>
            <h1>MAGNETIC CRAFT</h1>
            <p className="hero-subtitle pixel-label">Строй. Твори. Играй.</p>
            <div className="hero-actions">
              <a
                className="pixel-button primary"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Начать играть, написать в WhatsApp"
              >
                ▶ НАЧАТЬ ИГРАТЬ
              </a>
              <a
                className="pixel-button secondary"
                href="#catalog"
                aria-label="Перейти к каталогу наборов"
              >
                📦 СМОТРЕТЬ НАБОРЫ
              </a>
            </div>
          </div>
          <div className="grass-divider" aria-hidden="true" />
        </section>

        <section className="section about-section pixel-grid" id="about">
          <div className="section-heading reveal">
            <p className="section-kicker pixel-label">LEVEL 01</p>
            <h2>ЧТО ТАКОЕ MAGNETIC CRAFT</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card reveal" style={revealStyle(index)} key={feature.title}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  width="900"
                  height="620"
                  loading="lazy"
                />
                <div className="feature-body">
                  <span className="pixel-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section formats-section" id="formats">
          <div className="section-heading dark reveal">
            <p className="section-kicker pixel-label">LEVEL 02</p>
            <h2>ФОРМАТЫ ПОСЕЩЕНИЯ</h2>
          </div>
          <div className="pricing-groups">
            {visitPrices.map((group, groupIndex) => (
              <section
                className={`price-group reveal ${group.accent}`}
                style={revealStyle(groupIndex)}
                key={group.title}
                aria-label={`Прайс на посещение игровой зоны: ${group.title}`}
              >
                <div className="price-group-header">
                  <h3>{group.title}</h3>
                  <span className="pixel-label">{group.note}</span>
                </div>
                <div className="pricing-grid">
                  {group.plans.map((format) => (
                    <article
                      className={`price-card ${format.popular ? 'is-popular' : ''}`}
                      key={`${group.title}-${format.name}`}
                    >
                      <span className="time-badge pixel-label">{format.time}</span>
                      {format.popular && <span className="popular-badge pixel-label">TOP</span>}
                      <h4>{format.name}</h4>
                      <strong>{format.price}</strong>
                      <p>{format.text}</p>
                      <span className="play-hint pixel-label">{format.action}</span>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="visit-note pixel-label reveal">
            *Без предварительной записи. Просто приходите, выбирайте время и стройте свой мир!
          </p>
        </section>

        <section className="section kids-section" id="kids">
          <div className="pixel-decoration" aria-hidden="true" />
          <div className="section-heading reveal">
            <p className="section-kicker pixel-label">LEVEL 03</p>
            <h2>ПОЧЕМУ ДЕТИ В ВОСТОРГЕ</h2>
          </div>
          <div className="benefit-grid">
            {kidsBenefits.map(([icon, title, text], index) => (
              <article className="benefit-card reveal" style={revealStyle(index)} key={title}>
                <span aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section parents-section" id="parents">
          <div className="section-heading dark reveal">
            <p className="section-kicker pixel-label">NEWS FEED</p>
            <h2>НОВОСТИ И АКЦИИ</h2>
            <p>Свежие поводы заглянуть в Magnetic Craft: акции, анонсы и новые игровые сценарии.</p>
          </div>
          <div className="promo-carousel reveal" aria-label="Новости и акции Magnetic Craft">
            <article className="promo-feature" key={activePromo.title}>
              <img src={activePromo.image} alt="" width="900" height="620" loading="lazy" />
              <div className="promo-feature-content">
                <span className="promo-label pixel-label">{activePromo.label}</span>
                <h3>{activePromo.title}</h3>
                <p>{activePromo.text}</p>
                <a className="pixel-button primary small" href="#contacts">
                  Узнать подробнее
                </a>
              </div>
            </article>
            <div className="promo-side-list" aria-label="Следующие новости">
              {visiblePromoCards.map((promo, index) => (
                <button
                  className="promo-mini-card"
                  type="button"
                  key={promo.title}
                  onClick={() => setActivePromoIndex(index === 0 ? nextPromoIndex : nextNextPromoIndex)}
                >
                  <img src={promo.image} alt="" width="260" height="180" loading="lazy" />
                  <span className="promo-label pixel-label">{promo.label}</span>
                  <strong>{promo.title}</strong>
                </button>
              ))}
            </div>
            <div className="promo-controls" aria-label="Переключение новостей">
              <button
                className="promo-arrow pixel-label"
                type="button"
                aria-label="Предыдущая новость"
                onClick={() =>
                  setActivePromoIndex((index) => (index - 1 + newsPromos.length) % newsPromos.length)
                }
              >
                ‹
              </button>
              <div className="promo-dots">
                {newsPromos.map((promo, index) => (
                  <button
                    className={index === activePromoIndex ? 'is-active' : ''}
                    type="button"
                    key={promo.title}
                    aria-label={`Показать новость ${index + 1}`}
                    onClick={() => setActivePromoIndex(index)}
                  />
                ))}
              </div>
              <button
                className="promo-arrow pixel-label"
                type="button"
                aria-label="Следующая новость"
                onClick={() => setActivePromoIndex((index) => (index + 1) % newsPromos.length)}
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <section className="section catalog-section pixel-grid" id="catalog">
          <div className="section-heading reveal">
            <p className="section-kicker pixel-label">SHOP</p>
            <h2>ПОПУЛЯРНЫЕ НАБОРЫ</h2>
            <p>Здесь собраны хиты, а все наборы с фильтрами и карточками уже доступны в отдельном каталоге.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card reveal" style={revealStyle(index)} key={product.name}>
                <div className="product-media">
                  <img
                    src={product.image}
                    alt={product.name}
                    width="600"
                    height="420"
                    loading="lazy"
                  />
                  <span className="category-badge pixel-label">{product.badge}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.text}</p>
                <span className="product-cubes pixel-label">{product.cubes}</span>
                <strong>
                  <Price value={product.price} />
                </strong>
                <button
                  className="pixel-button primary small product-details-button"
                  type="button"
                  aria-label={`Открыть карточку набора ${product.name}`}
                  onClick={() => {
                    setSelectedProduct(product)
                    setSelectedImageIndex(0)
                  }}
                >
                  🔍 Подробнее
                </button>
              </article>
            ))}
          </div>
          <div className="catalog-more reveal">
            <a
              className="pixel-button secondary"
              href="/catalog"
              aria-label="Перейти на страницу полного каталога наборов"
            >
              🧱 Смотреть все наборы
            </a>
            <p>Откройте полный каталог, чтобы посмотреть все комплекты, фото и варианты по размеру набора.</p>
          </div>
        </section>

        <section className="section branches-section" id="branches">
          <div className="section-heading dark reveal">
            <p className="section-kicker pixel-label">MAP</p>
            <h2>НАШИ ФИЛИАЛЫ</h2>
            <p>Две игровые зоны в разных городах: выбирайте ближайший ТРЦ и приходите строить.</p>
          </div>
          <div className="branch-map reveal" aria-label="Карта филиалов Алматы и Астана">
            <div className="branch-map-canvas" role="img" aria-label="Схема расположения филиалов Magnetic Craft">
              <span className="map-region north pixel-label">ASTANA</span>
              <span className="map-region south pixel-label">ALMATY</span>
              <span className="map-route" aria-hidden="true" />
              {branches.map((branch, index) => (
                <a
                  className={`map-pin ${index === 1 ? 'is-east' : ''}`}
                  href={branch.map}
                  target="_blank"
                  rel="noreferrer"
                  style={
                    {
                      '--pin-x': `${branch.mapX}%`,
                      '--pin-y': `${branch.mapY}%`,
                    } as CSSProperties
                  }
                  aria-label={`Открыть маршрут до ${branch.name}, ${branch.city}`}
                  key={branch.name}
                >
                  <span className="pin-dot" aria-hidden="true">{index + 1}</span>
                  <span className="pin-card">
                    <strong>{branch.city}</strong>
                    {branch.name}
                  </span>
                </a>
              ))}
            </div>
            <div className="branch-map-list">
              {branches.map((branch, index) => (
                <article className="map-branch-card" key={branch.name}>
                  <span className="map-branch-number pixel-label">#{index + 1}</span>
                  <div>
                    <h3>{branch.city}</h3>
                    <strong>{branch.name}</strong>
                    <p>📍 {branch.address}</p>
                    <p>🕘 {branch.hours}</p>
                  </div>
                  <a
                    className="pixel-button secondary dark-text small"
                    href={branch.map}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Открыть маршрут 2ГИС до ${branch.name}, ${branch.city}`}
                  >
                    2ГИС маршрут
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <img
            className="reviews-bg"
            src="/images/optimized/reviews-bg.webp"
            alt=""
            width="1200"
            height="700"
            loading="lazy"
            aria-hidden="true"
          />
          <div className="star-field" aria-hidden="true" />
          <div className="section-heading reveal">
            <p className="section-kicker pixel-label">5 STARS</p>
            <h2>ЧТО ГОВОРЯТ РОДИТЕЛИ</h2>
          </div>
          <div className="review-row" aria-label="Отзывы родителей">
            {reviews.map((review, index) => (
              <article className="review-card reveal" style={revealStyle(index)} key={review.name}>
                <div className="review-top">
                  <img src={review.avatar} alt={review.name} width="60" height="60" loading="lazy" />
                  <div>
                    <h3>{review.name}</h3>
                    <p aria-label="Оценка 5 из 5">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p>{review.text}</p>
                <span className="source-badge pixel-label">{review.source}</span>
              </article>
            ))}
          </div>
          <div className="instagram-cta reveal">
            <span aria-hidden="true">📸</span>
            <p className="pixel-label">Отмечайте нас @magneticcraft_kz</p>
          </div>
        </section>

        <section className="section contacts-section pixel-grid" id="contacts">
          <div className="section-heading reveal">
            <p className="section-kicker pixel-label">FINAL LEVEL</p>
            <h2>СВЯЗАТЬСЯ С НАМИ</h2>
          </div>
          <div className="contact-grid reveal">
            <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp Magnetic Craft">
              <span>💬</span>
              <strong>WhatsApp</strong>
              +7 (700) 000-00-00
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Magnetic Craft"
            >
              <span>📸</span>
              <strong>Instagram</strong>
              @magneticcraft_kz
            </a>
            <a href="tel:+77000000001" aria-label="Позвонить Magnetic Craft">
              <span>📞</span>
              <strong>Телефон</strong>
              +7 (700) 000-00-01
            </a>
            <div>
              <span>🕐</span>
              <strong>Режим работы</strong>
              Ежедневно 10:00 – 22:00
            </div>
          </div>
          <a
            className="pixel-button final-cta"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Написать в WhatsApp"
          >
            НАПИСАТЬ В WHATSAPP
          </a>
        </section>
      </main>
      )}

      {selectedProduct && (
        <div
          className="product-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <button
            className="modal-backdrop"
            type="button"
            aria-label="Закрыть карточку набора"
            onClick={() => setSelectedProduct(null)}
          />
          <article className="product-modal-card">
            <button
              className="modal-close pixel-label"
              type="button"
              aria-label="Закрыть карточку набора"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div className="modal-gallery">
              <img
                className="modal-main-image"
                src={selectedProduct.gallery[selectedImageIndex]}
                alt={selectedProduct.name}
                width="900"
                height="620"
                loading="lazy"
              />
              <div className="modal-thumbs" aria-label="Фотографии набора">
                {selectedProduct.gallery.map((image, index) => (
                  <button
                    className={index === selectedImageIndex ? 'is-active' : ''}
                    type="button"
                    key={image}
                    aria-label={`Показать фото ${index + 1} набора ${selectedProduct.name}`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img src={image} alt="" width="120" height="84" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-info">
              <span className="category-badge modal-badge pixel-label">{selectedProduct.badge}</span>
              <h2 id="product-modal-title">{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <dl className="product-specs">
                <div>
                  <dt>Кубики</dt>
                  <dd>{selectedProduct.cubes}</dd>
                </div>
                <div>
                  <dt>Цена</dt>
                  <dd>
                    <Price value={selectedProduct.price} />
                  </dd>
                </div>
              </dl>
              <a
                className="pixel-button primary modal-order"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Заказать набор ${selectedProduct.name} в WhatsApp`}
              >
                📩 Заказать набор
              </a>
            </div>
          </article>
        </div>
      )}

      <footer className="site-footer">
        <div className="cube-row" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <p className="footer-logo pixel-label">MAGNETIC CRAFT</p>
        <p>© 2025 Magnetic Craft. Все права защищены.</p>
        <div className="footer-links">
          <a href="#contacts">Политика конфиденциальности</a>
          <a href="#contacts">Условия использования</a>
        </div>
      </footer>
    </>
  )
}

export default App
