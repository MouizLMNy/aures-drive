/**
 * Internationalisation (FR / EN / ZH).
 *
 * Seul le TEXTE est traduit ici. Les données structurelles (icônes, images,
 * prix, adresses, messages WhatsApp) restent dans lib/content.ts et sont
 * associées par INDEX (même ordre que les tableaux ci-dessous).
 *
 * ⚠️ Le message WhatsApp envoyé reste en français (choix volontaire).
 */

export type Lang = "fr" | "en" | "zh";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中文" },
];

type TextItem = { title: string; description: string };

export type Dict = {
  switchAria: string;
  availability: string;
  nav: {
    accueil: string;
    services: string;
    pourquoi: string;
    tarifs: string;
    auresTour: string;
    avis: string;
    contact: string;
    reserver: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    subtitle: string;
    cta: string;
    badges: string[];
  };
  form: {
    name: string;
    phone: string;
    depart: string;
    arrivee: string;
    passengers: (n: number) => string;
    infos: string;
    submit: string;
    note: string;
  };
  services: { eyebrow: string; title: string; subtitle: string; reserve: string; items: TextItem[] };
  why: { eyebrow: string; title: string; subtitle: string; items: TextItem[] };
  destinations: { title: string; subtitle: string; served: string; names: string[] };
  tarifs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    colRoute: string;
    colFrom: string;
    note: string;
    cta: string;
    rows: { from: string; to: string }[];
  };
  tour: {
    eyebrow: string;
    title: string;
    intro: string;
    duration: string;
    capacity: string;
    custom: string;
    itineraryTitle: string;
    fromLabel: string;
    cta: string;
    note: string;
    stops: string[];
  };
  reviews: { eyebrow: string; title: string; subtitle: string; texts: string[] };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    phone: string;
    email: string;
    zone: string;
    zoneValue: string;
    formTitle: string;
    formSubtitle: string;
  };
  formCard: { title: string; subtitle: string };
  footer: {
    tagline: string;
    whatsappBtn: string;
    navTitle: string;
    contactTitle: string;
    infoTitle: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    avis: string;
  };
  places: string[];
};

export const T: Record<Lang, Dict> = {
  /* ─────────────────────────── FRANÇAIS ─────────────────────────── */
  fr: {
    switchAria: "Changer de langue",
    availability: "24h/24 — 7j/7",
    nav: {
      accueil: "Accueil",
      services: "Services",
      pourquoi: "Pourquoi nous",
      tarifs: "Tarifs",
      auresTour: "Aures Tour",
      avis: "Avis",
      contact: "Contact",
      reserver: "Réserver",
    },
    hero: {
      badge: "Disponible 24h/24 · 7j/7",
      titleLead: "Réservez votre ",
      titleHighlight: "VTC",
      titleTail: " en quelques clics",
      subtitle:
        "Chauffeur privé premium à Marseille et alentours. Transferts aéroport et gare, déplacements pro et longue distance. Devis immédiat sur WhatsApp.",
      cta: "Réserver maintenant",
      badges: ["24h/24", "Mercedes", "8 places", "Agréé"],
    },
    form: {
      name: "Votre nom",
      phone: "Votre téléphone",
      depart: "Adresse de départ",
      arrivee: "Adresse d'arrivée",
      passengers: (n) => `${n} passager${n > 1 ? "s" : ""}`,
      infos: "Informations complémentaires (bagages, vol, siège enfant…)",
      submit: "Envoyer ma réservation sur WhatsApp",
      note: "Réponse rapide · Devis sans engagement · Aucune application à installer",
    },
    services: {
      eyebrow: "Nos services",
      title: "Un service adapté à chaque trajet",
      subtitle:
        "De l'aéroport au déplacement professionnel, Aures Drive répond à tous vos besoins de mobilité premium.",
      reserve: "Réserver",
      items: [
        {
          title: "Transfert aéroport & gare",
          description:
            "Aéroport Marseille-Provence et gare Saint-Charles. Suivi de votre vol ou train en temps réel, accueil personnalisé et ponctualité garantie.",
        },
        {
          title: "Transport d'affaires",
          description:
            "Déplacements de dirigeants et clients VIP. Discrétion et silence garantis, chauffeur en tenue et facturation adaptée aux entreprises.",
        },
        {
          title: "Mise à disposition",
          description:
            "Un chauffeur privatisé à l'heure, à la demi-journée ou à la journée complète, pour tous vos déplacements en toute liberté.",
        },
        {
          title: "Longue distance",
          description:
            "Aix, Avignon, Nice, Lyon, Montpellier et toute la France au départ de Marseille, dans un confort premium et sur devis transparent.",
        },
      ],
    },
    why: {
      eyebrow: "Pourquoi nous choisir",
      title: "L'excellence à chaque kilomètre",
      subtitle: "Quatre bonnes raisons de confier vos trajets à Aures Drive.",
      items: [
        { title: "Chauffeurs professionnels", description: "Chauffeur agréé, expérimenté et courtois, qui connaît parfaitement Marseille et sa région." },
        { title: "Véhicules confortables", description: "Berlines et Mercedes V-Class récentes, propres et spacieuses, jusqu'à 8 passagers." },
        { title: "Prix transparents", description: "Un devis clair et sans surprise avant chaque course. Le prix annoncé est le prix payé." },
        { title: "Disponible 24h/24 et 7j/7", description: "Jour et nuit, week-ends et jours fériés : Aures Drive répond présent pour tous vos trajets." },
      ],
    },
    destinations: {
      title: "Marseille & ses destinations",
      subtitle: "Nous desservons tout le bassin marseillais et les plus belles destinations de la région.",
      served: "Desservi",
      names: ["Notre-Dame de la Garde", "Cathédrale La Major", "Gare Saint-Charles", "Les Calanques", "Cassis", "La Ciotat"],
    },
    tarifs: {
      eyebrow: "Tarifs indicatifs",
      title: "Des prix clairs et transparents",
      subtitle: "Voici quelques exemples de tarifs. Le prix exact de votre trajet vous est confirmé immédiatement sur WhatsApp.",
      colRoute: "Trajet",
      colFrom: "À partir de",
      note: "Tarifs indicatifs TTC, susceptibles de varier selon l'horaire et le trajet exact.",
      cta: "Obtenir mon devis exact",
      rows: [
        { from: "Marseille", to: "Aéroport Marseille-Provence" },
        { from: "Marseille", to: "Aix-en-Provence" },
        { from: "Marseille", to: "Cassis" },
        { from: "Marseille", to: "La Ciotat" },
        { from: "Marseille", to: "Aubagne" },
        { from: "Marseille", to: "Martigues" },
        { from: "Marseille", to: "Salon-de-Provence" },
        { from: "Marseille", to: "Arles" },
        { from: "Marseille", to: "Avignon" },
        { from: "Marseille", to: "Nice / Cannes" },
      ],
    },
    tour: {
      eyebrow: "Aures Tour",
      title: "Visitez Marseille avec votre chauffeur privé",
      intro:
        "Découvrez Marseille autrement. Aures Drive vous propose un circuit touristique premium à bord de notre Mercedes V-Class, avec un chauffeur privé attentionné. Monuments, histoire et panoramas : tout ce que la Cité Phocéenne a de plus beau, à votre rythme.",
      duration: "2 heures de découverte",
      capacity: "Jusqu'à 8 passagers",
      custom: "Itinéraire sur-mesure",
      itineraryTitle: "Votre itinéraire",
      fromLabel: "À partir de",
      cta: "Réserver le Aures Tour",
      note: "Circuit personnalisable selon vos envies",
      stops: [
        "Vieux-Port — point de départ emblématique",
        "Notre-Dame de la Garde — panorama 360° sur la ville",
        "Corniche Kennedy — promenade côtière face aux îles du Frioul",
        "Cathédrale de la Major — architecture romano-byzantine",
        "Palais Longchamp — chef-d'œuvre et jardins",
        "MuCEM & stade Vélodrome — culture et passion marseillaises",
      ],
    },
    reviews: {
      eyebrow: "Avis clients",
      title: "Ils nous font confiance",
      subtitle: "La satisfaction de nos clients est notre meilleure récompense.",
      texts: [
        "Chauffeur ponctuel et très professionnel. Véhicule impeccable pour mon transfert vers l'aéroport. Je recommande vivement !",
        "Réservation ultra simple par WhatsApp, réponse immédiate et trajet très agréable. Exactement ce que je cherchais.",
        "Service haut de gamme pour mes déplacements professionnels à Marseille. Discrétion et ponctualité au rendez-vous.",
      ],
    },
    contact: {
      title: "Réservez votre trajet dès maintenant",
      subtitle: "Contactez Aures Drive en un clic. Réponse rapide, devis transparent et chauffeur premium à votre service 24h/24.",
      whatsapp: "WhatsApp",
      phone: "Téléphone",
      email: "Email",
      zone: "Zone",
      zoneValue: "Marseille & alentours",
      formTitle: "Demandez votre devis",
      formSubtitle: "Réponse en quelques minutes sur WhatsApp.",
    },
    formCard: { title: "Demandez votre devis", subtitle: "Renseignez votre trajet, on s'occupe du reste." },
    footer: {
      tagline: "Chauffeur privé VTC premium à Marseille et alentours. Transferts, déplacements pro et longue distance, 24h/24 et 7j/7.",
      whatsappBtn: "Réserver sur WhatsApp",
      navTitle: "Navigation",
      contactTitle: "Contact",
      infoTitle: "Informations",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      terms: "CGV",
      rights: "Tous droits réservés.",
      avis: "Avis clients",
    },
    places: ["Aéroport", "Gare St-Charles", "Vieux-Port", "Notre-Dame de la Garde", "Les Terrasses du Port", "Grand Littoral"],
  },

  /* ─────────────────────────── ENGLISH ─────────────────────────── */
  en: {
    switchAria: "Change language",
    availability: "24/7",
    nav: {
      accueil: "Home",
      services: "Services",
      pourquoi: "Why us",
      tarifs: "Pricing",
      auresTour: "Aures Tour",
      avis: "Reviews",
      contact: "Contact",
      reserver: "Book",
    },
    hero: {
      badge: "Available 24/7",
      titleLead: "Book your ",
      titleHighlight: "VTC",
      titleTail: " in just a few clicks",
      subtitle:
        "Premium private chauffeur in Marseille and surroundings. Airport and station transfers, business travel and long distance. Instant quote on WhatsApp.",
      cta: "Book now",
      badges: ["24/7", "Mercedes", "8 seats", "Licensed"],
    },
    form: {
      name: "Your name",
      phone: "Your phone",
      depart: "Pickup address",
      arrivee: "Drop-off address",
      passengers: (n) => `${n} passenger${n > 1 ? "s" : ""}`,
      infos: "Additional information (luggage, flight, child seat…)",
      submit: "Send my booking on WhatsApp",
      note: "Fast reply · No-obligation quote · No app to install",
    },
    services: {
      eyebrow: "Our services",
      title: "A service tailored to every trip",
      subtitle: "From the airport to business travel, Aures Drive meets all your premium mobility needs.",
      reserve: "Book",
      items: [
        { title: "Airport & station transfer", description: "Marseille-Provence Airport and Saint-Charles station. Real-time flight or train tracking, personal welcome and guaranteed punctuality." },
        { title: "Business travel", description: "Transport for executives and VIP clients. Guaranteed discretion and quiet, uniformed chauffeur and company billing." },
        { title: "Chauffeur by the hour", description: "A private chauffeur by the hour, half-day or full day, for all your trips in complete freedom." },
        { title: "Long distance", description: "Aix, Avignon, Nice, Lyon, Montpellier and all of France from Marseille, in premium comfort with a transparent quote." },
      ],
    },
    why: {
      eyebrow: "Why choose us",
      title: "Excellence every mile",
      subtitle: "Four good reasons to trust Aures Drive with your trips.",
      items: [
        { title: "Professional chauffeurs", description: "Licensed, experienced and courteous chauffeurs who know Marseille and its region perfectly." },
        { title: "Comfortable vehicles", description: "Recent, clean and spacious sedans and Mercedes V-Class, up to 8 passengers." },
        { title: "Transparent pricing", description: "A clear, no-surprise quote before every ride. The price quoted is the price paid." },
        { title: "Available 24/7", description: "Day and night, weekends and holidays: Aures Drive is there for all your trips." },
      ],
    },
    destinations: {
      title: "Marseille & its destinations",
      subtitle: "We serve the entire Marseille area and the region's most beautiful destinations.",
      served: "Served",
      names: ["Notre-Dame de la Garde", "La Major Cathedral", "Saint-Charles Station", "The Calanques", "Cassis", "La Ciotat"],
    },
    tarifs: {
      eyebrow: "Sample fares",
      title: "Clear and transparent pricing",
      subtitle: "Here are some sample fares. The exact price for your trip is confirmed instantly on WhatsApp.",
      colRoute: "Route",
      colFrom: "From",
      note: "Indicative fares incl. tax, may vary depending on time and exact route.",
      cta: "Get my exact quote",
      rows: [
        { from: "Marseille", to: "Marseille-Provence Airport" },
        { from: "Marseille", to: "Aix-en-Provence" },
        { from: "Marseille", to: "Cassis" },
        { from: "Marseille", to: "La Ciotat" },
        { from: "Marseille", to: "Aubagne" },
        { from: "Marseille", to: "Martigues" },
        { from: "Marseille", to: "Salon-de-Provence" },
        { from: "Marseille", to: "Arles" },
        { from: "Marseille", to: "Avignon" },
        { from: "Marseille", to: "Nice / Cannes" },
      ],
    },
    tour: {
      eyebrow: "Aures Tour",
      title: "Explore Marseille with your private chauffeur",
      intro:
        "Discover Marseille differently. Aures Drive offers a premium sightseeing tour aboard our Mercedes V-Class with an attentive private chauffeur. Monuments, history and panoramas — all the best of the Phocaean City, at your own pace.",
      duration: "2 hours of discovery",
      capacity: "Up to 8 passengers",
      custom: "Tailor-made itinerary",
      itineraryTitle: "Your itinerary",
      fromLabel: "From",
      cta: "Book the Aures Tour",
      note: "Itinerary customizable to your wishes",
      stops: [
        "Old Port — iconic starting point",
        "Notre-Dame de la Garde — 360° view over the city",
        "Corniche Kennedy — coastal drive facing the Frioul islands",
        "La Major Cathedral — Roman-Byzantine architecture",
        "Palais Longchamp — masterpiece and gardens",
        "MuCEM & Vélodrome stadium — Marseille's culture and passion",
      ],
    },
    reviews: {
      eyebrow: "Customer reviews",
      title: "They trust us",
      subtitle: "Our customers' satisfaction is our greatest reward.",
      texts: [
        "Punctual and very professional chauffeur. Impeccable vehicle for my airport transfer. Highly recommend!",
        "Super easy booking via WhatsApp, instant reply and a very pleasant ride. Exactly what I was looking for.",
        "Premium service for my business trips in Marseille. Discretion and punctuality every time.",
      ],
    },
    contact: {
      title: "Book your trip right now",
      subtitle: "Contact Aures Drive in one click. Fast reply, transparent quote and a premium chauffeur at your service 24/7.",
      whatsapp: "WhatsApp",
      phone: "Phone",
      email: "Email",
      zone: "Area",
      zoneValue: "Marseille & surroundings",
      formTitle: "Request your quote",
      formSubtitle: "Reply within minutes on WhatsApp.",
    },
    formCard: { title: "Request your quote", subtitle: "Tell us your trip, we'll handle the rest." },
    footer: {
      tagline: "Premium private VTC chauffeur in Marseille and surroundings. Transfers, business travel and long distance, 24/7.",
      whatsappBtn: "Book on WhatsApp",
      navTitle: "Navigation",
      contactTitle: "Contact",
      infoTitle: "Information",
      legal: "Legal notice",
      privacy: "Privacy policy",
      terms: "Terms",
      rights: "All rights reserved.",
      avis: "Reviews",
    },
    places: ["Airport", "Saint-Charles", "Old Port", "Notre-Dame de la Garde", "Les Terrasses du Port", "Grand Littoral"],
  },

  /* ─────────────────────────── 中文 ─────────────────────────── */
  zh: {
    switchAria: "切换语言",
    availability: "全天候 24/7",
    nav: {
      accueil: "首页",
      services: "服务",
      pourquoi: "为何选择我们",
      tarifs: "价格",
      auresTour: "Aures Tour",
      avis: "评价",
      contact: "联系",
      reserver: "预订",
    },
    hero: {
      badge: "全天候 24/7 服务",
      titleLead: "",
      titleHighlight: "预订专车",
      titleTail: "，只需几次点击",
      subtitle:
        "马赛及周边地区的高端专属司机。机场与车站接送、商务出行及长途服务。WhatsApp 即时报价。",
      cta: "立即预订",
      badges: ["24/7", "奔驰", "8 座", "持证"],
    },
    form: {
      name: "您的姓名",
      phone: "您的电话",
      depart: "出发地址",
      arrivee: "目的地地址",
      passengers: (n) => `${n} 名乘客`,
      infos: "补充信息（行李、航班、儿童座椅……）",
      submit: "通过 WhatsApp 发送预订",
      note: "快速回复 · 无义务报价 · 无需安装应用",
    },
    services: {
      eyebrow: "我们的服务",
      title: "为每段行程量身定制的服务",
      subtitle: "从机场到商务出行，Aures Drive 满足您所有高端出行需求。",
      reserve: "预订",
      items: [
        { title: "机场和车站接送", description: "马赛普罗旺斯机场和圣查尔斯火车站。实时跟踪航班或列车，专人迎接，准时保证。" },
        { title: "商务出行", description: "为高管和贵宾客户提供接送。保证私密与安静，着正装司机，并提供企业发票。" },
        { title: "包车服务", description: "按小时、半天或全天为您配备专属司机，自由安排所有行程。" },
        { title: "长途出行", description: "从马赛出发前往艾克斯、阿维尼翁、尼斯、里昂、蒙彼利埃及法国各地，尊享舒适，报价透明。" },
      ],
    },
    why: {
      eyebrow: "为何选择我们",
      title: "每一公里都追求卓越",
      subtitle: "将出行托付给 Aures Drive 的四大理由。",
      items: [
        { title: "专业司机", description: "持证、经验丰富且彬彬有礼的司机，对马赛及周边地区了如指掌。" },
        { title: "舒适车辆", description: "全新、整洁、宽敞的轿车和奔驰 V-Class，最多可载 8 名乘客。" },
        { title: "价格透明", description: "每次出行前提供清晰无隐藏的报价。报价即最终价格。" },
        { title: "全天候服务", description: "无论白天黑夜、周末或节假日，Aures Drive 随时为您的出行服务。" },
      ],
    },
    destinations: {
      title: "马赛及其周边目的地",
      subtitle: "我们服务整个马赛地区以及该区域最美的目的地。",
      served: "已覆盖",
      names: ["守护圣母圣殿", "马若尔主教座堂", "圣查尔斯火车站", "卡朗格峡湾", "卡西斯", "拉西约塔"],
    },
    tarifs: {
      eyebrow: "参考价格",
      title: "清晰透明的价格",
      subtitle: "以下是部分参考价格。您行程的确切价格将通过 WhatsApp 立即确认。",
      colRoute: "路线",
      colFrom: "起价",
      note: "含税参考价，具体价格视时间和实际路线而定。",
      cta: "获取我的确切报价",
      rows: [
        { from: "马赛", to: "马赛普罗旺斯机场" },
        { from: "马赛", to: "艾克斯普罗旺斯" },
        { from: "马赛", to: "卡西斯" },
        { from: "马赛", to: "拉西约塔" },
        { from: "马赛", to: "欧巴涅" },
        { from: "马赛", to: "马提格" },
        { from: "马赛", to: "萨隆德普罗旺斯" },
        { from: "马赛", to: "阿尔勒" },
        { from: "马赛", to: "阿维尼翁" },
        { from: "马赛", to: "尼斯 / 戛纳" },
      ],
    },
    tour: {
      eyebrow: "Aures Tour",
      title: "与您的专属司机畅游马赛",
      intro:
        "以全新方式发现马赛。Aures Drive 为您提供乘坐奔驰 V-Class 的高端观光之旅，配备贴心的专属司机。古迹、历史与全景——以您自己的节奏，尽览这座福西亚古城最美的一切。",
      duration: "2 小时探索之旅",
      capacity: "最多 8 名乘客",
      custom: "定制行程",
      itineraryTitle: "您的行程",
      fromLabel: "起价",
      cta: "预订 Aures Tour",
      note: "行程可按您的意愿定制",
      stops: [
        "老港——标志性的起点",
        "守护圣母圣殿——360° 俯瞰全城",
        "肯尼迪海滨大道——面朝弗里乌尔群岛的海岸线",
        "马若尔主教座堂——罗马拜占庭式建筑",
        "隆尚宫——杰作与花园",
        "MuCEM 与韦洛德罗姆球场——马赛的文化与热情",
      ],
    },
    reviews: {
      eyebrow: "客户评价",
      title: "他们信赖我们",
      subtitle: "客户的满意是我们最大的回报。",
      texts: [
        "司机准时且非常专业。送我去机场的车辆一尘不染。强烈推荐！",
        "通过 WhatsApp 预订非常简单，回复即时，行程十分愉快。正是我想要的。",
        "为我在马赛的商务出行提供高端服务。私密周到，准时可靠。",
      ],
    },
    contact: {
      title: "立即预订您的行程",
      subtitle: "一键联系 Aures Drive。快速回复、透明报价，高端司机全天候为您服务。",
      whatsapp: "WhatsApp",
      phone: "电话",
      email: "电子邮箱",
      zone: "区域",
      zoneValue: "马赛及周边",
      formTitle: "获取报价",
      formSubtitle: "几分钟内通过 WhatsApp 回复。",
    },
    formCard: { title: "获取报价", subtitle: "填写您的行程，其余交给我们。" },
    footer: {
      tagline: "马赛及周边地区的高端专车司机。接送、商务出行及长途服务，全天候 24/7。",
      whatsappBtn: "通过 WhatsApp 预订",
      navTitle: "导航",
      contactTitle: "联系",
      infoTitle: "信息",
      legal: "法律声明",
      privacy: "隐私政策",
      terms: "条款",
      rights: "保留所有权利。",
      avis: "客户评价",
    },
    places: ["机场", "圣查尔斯站", "老港", "守护圣母圣殿", "港口阳台购物中心", "大滨海购物中心"],
  },
};
