/* =========================================================
KHASSIDA — SCRIPT COMPLET
Découvrir · Favoris · Du'a · Zikr · Partage · Multilingue FR/EN
========================================================= */

"use strict";

/* =========================================================
🌍 DICTIONNAIRE i18n — FR / EN
========================================================= */

const TRANSLATIONS = {
  fr: {
    "brand.subtitle": "SERIGNE TOUBA",
    "brand.tagline": "Serigne Touba",
    "home.label": "UN BEYIT POUR VOUS",
    "home.hint": "Touchez n'importe où pour continuer",
    "actions.favorite": "Favori",
    "actions.share": "Partager",
    "actions.copy": "Copier",
    "actions.discover": "DÉCOUVRIR UN BEYIT",
    "nav.home": "Découvrir",
    "nav.favorites": "Favoris",
    "nav.duas": "Du'a",
    "nav.zikr": "Zikr",
    "nav.about": "À propos",
    "nav.settings": "Réglages",
    "menu.home": "Découvrir",
    "menu.home.sub": "Nouveaux beyits",
    "menu.favorites": "Mes favoris",
    "menu.favorites.sub": "Beyits sauvegardés",
    "menu.duas": "Du'a",
    "menu.duas.sub": "Invocations essentielles",
    "menu.zikr": "Compteur Zikr",
    "menu.zikr.sub": "Évoque Allah",
    "menu.about": "À propos",
    "menu.about.sub": "Cheikhoul Khadim",
    "menu.settings": "Paramètres",
    "menu.settings.sub": "Personnaliser",
    "menu.quote": "« Quiconque s'attache à moi, jamais il ne périra. »",
    "favorites.title": "Mes favoris",
    "favorites.empty": "Vos beyits favoris apparaîtront ici.",
    "duas.title": "Invocations",
    "duas.subtitle": "Les 5 du'a essentielles",
    "zikr.title": "Compteur de Zikr",
    "zikr.subtitle": "Évoque Allah",
    "zikr.tap": "TOUCHER POUR COMPTER",
    "zikr.reset": "Réinitialiser",
    "zikr.total": "Total cumulé",
    "share.title": "Partager",
    "share.subtitle": "Choisissez comment partager",
    "share.copy": "Copier",
    "share.copy.sub": "Le texte",
    "share.image": "Image",
    "share.image.sub": "Jolie carte",
    "share.send": "Envoyer",
    "share.native": "Partager",
    "share.native.sub": "Système",
    "share.download": "⬇️ Télécharger",
    "share.shareImage": "↗ Partager l'image",
    "about.title": "Cheikhoul Khadim",
    "about.s1.title": "L'homme de Dieu",
    "about.s1.text": "Cheikh Ahmadou Bamba, surnommé Khadimou Rassoul (le Serviteur du Prophète ﷺ), est le fondateur du mouridisme. Il fut un érudit, un poète, un ascète et un pacificateur.",
    "about.s2.title": "Naissance et origines",
    "about.s2.text": "Né en 1853 à Mbacké-Baol. Son père Cheikh Momar Anta Sali était un juriste respecté, sa mère Mame Diarra Bousso une femme pieuse.",
    "about.s3.title": "La voie spirituelle",
    "about.s3.text": "Trois piliers :",
    "about.s3.li1": "L'amour d'Allah et de Son Prophète ﷺ",
    "about.s3.li2": "Le travail et la dignité par l'effort",
    "about.s3.li3": "Le service (khidma) aux autres",
    "about.quotes.title": "Paroles",
    "about.quote1": "Quiconque s'attache à moi, jamais il ne périra.",
    "about.quote2": "Si vous voulez être aimé d'Allah, aimez Son Prophète ﷺ.",
    "about.note": "Ce récit ne relate qu'une infime partie de la vie du Cheikh.",
    "about.closure": "Qu'Allah l'agrée, et qu'Il nous accorde sa baraka.",
    "settings.title": "Paramètres",
    "settings.subtitle": "Personnalisez votre expérience",
    "settings.theme": "Thème",
    "settings.theme.dark": "Sombre",
    "settings.theme.light": "Clair",
    "settings.theme.auto": "Auto",
    "settings.font": "Taille du texte",
    "settings.font.small": "Petit",
    "settings.font.medium": "Moyen",
    "settings.font.large": "Grand",
    "settings.language": "Langue",
    "settings.display": "Affichage",
    "settings.transcription": "📝 Afficher la transcription phonétique",
    "settings.vibrate": "📳 Vibrer au toucher",
    "settings.reset": "🗑️ Réinitialiser mes favoris",
    "toast.newBeyit": "Nouveau beyit",
    "toast.copied": "Beyit copié",
    "toast.favoriteAdded": "Ajouté aux favoris",
    "toast.favoriteRemoved": "Retiré des favoris",
    "toast.vibrateOn": "Vibration activée",
    "toast.vibrateOff": "Vibration désactivée",
    "toast.transcriptionOn": "Transcription affichée",
    "toast.transcriptionOff": "Transcription masquée",
    "toast.themeDark": "Mode sombre",
    "toast.themeLight": "Mode clair",
    "toast.themeAuto": "Thème automatique",
    "toast.langChanged": "Langue : Français",
    "toast.imageGenerated": "Image générée",
    "toast.imageDownloaded": "Image téléchargée",
    "toast.shared": "Partagé",
    "toast.favoritesReset": "Favoris effacés",
    "toast.zikrReset": "Compteur remis à zéro",
    "toast.goalReached": "Objectif atteint",
    "toast.newCycle": "Nouveau cycle",
    "toast.allSeen": "Tous les beyits ont été vus",
    "toast.audioUnavailable": "Audio non disponible",
    "meta.objective": "Objectif",
    "meta.total": "Total cumulé"
  },
  en: {
    "brand.subtitle": "SERIGNE TOUBA",
    "brand.tagline": "Serigne Touba",
    "home.label": "A BEYIT FOR YOU",
    "home.hint": "Tap anywhere to continue",
    "actions.favorite": "Favorite",
    "actions.share": "Share",
    "actions.copy": "Copy",
    "actions.discover": "DISCOVER A BEYIT",
    "nav.home": "Discover",
    "nav.favorites": "Favorites",
    "nav.duas": "Du'a",
    "nav.zikr": "Zikr",
    "nav.about": "About",
    "nav.settings": "Settings",
    "menu.home": "Discover",
    "menu.home.sub": "New beyits",
    "menu.favorites": "My favorites",
    "menu.favorites.sub": "Saved beyits",
    "menu.duas": "Du'a",
    "menu.duas.sub": "Essential invocations",
    "menu.zikr": "Zikr Counter",
    "menu.zikr.sub": "Remember Allah",
    "menu.about": "About",
    "menu.about.sub": "Cheikhoul Khadim",
    "menu.settings": "Settings",
    "menu.settings.sub": "Customize",
    "menu.quote": "« Whoever holds fast to me shall never perish. »",
    "favorites.title": "My favorites",
    "favorites.empty": "Your favorite beyits will appear here.",
    "duas.title": "Invocations",
    "duas.subtitle": "The 5 essential du'a",
    "zikr.title": "Zikr Counter",
    "zikr.subtitle": "Remember Allah",
    "zikr.tap": "TAP TO COUNT",
    "zikr.reset": "Reset",
    "zikr.total": "Cumulative total",
    "share.title": "Share",
    "share.subtitle": "Choose how to share",
    "share.copy": "Copy",
    "share.copy.sub": "The text",
    "share.image": "Image",
    "share.image.sub": "Nice card",
    "share.send": "Send",
    "share.native": "Share",
    "share.native.sub": "System",
    "share.download": "⬇️ Download",
    "share.shareImage": "↗ Share image",
    "about.title": "Cheikhoul Khadim",
    "about.s1.title": "The man of God",
    "about.s1.text": "Cheikh Ahmadou Bamba, known as Khadimou Rassoul (Servant of the Prophet ﷺ), is the founder of Mouridism. He was a scholar, a poet, an ascetic and a peacemaker.",
    "about.s2.title": "Birth and origins",
    "about.s2.text": "Born in 1853 in Mbacké-Baol. His father Cheikh Momar Anta Sali was a respected jurist, his mother Mame Diarra Bousso a pious woman.",
    "about.s3.title": "The spiritual path",
    "about.s3.text": "Three pillars:",
    "about.s3.li1": "Love of Allah and His Prophet ﷺ",
    "about.s3.li2": "Work and dignity through effort",
    "about.s3.li3": "Service (khidma) to others",
    "about.quotes.title": "Words",
    "about.quote1": "Whoever holds fast to me shall never perish.",
    "about.quote2": "If you want to be loved by Allah, love His Prophet ﷺ.",
    "about.note": "This account relates only a tiny part of the Cheikh's life.",
    "about.closure": "May Allah be pleased with him, and grant us his baraka.",
    "settings.title": "Settings",
    "settings.subtitle": "Customize your experience",
    "settings.theme": "Theme",
    "settings.theme.dark": "Dark",
    "settings.theme.light": "Light",
    "settings.theme.auto": "Auto",
    "settings.font": "Text size",
    "settings.font.small": "Small",
    "settings.font.medium": "Medium",
    "settings.font.large": "Large",
    "settings.language": "Language",
    "settings.display": "Display",
    "settings.transcription": "📝 Show phonetic transcription",
    "settings.vibrate": "📳 Vibrate on tap",
    "settings.reset": "🗑️ Reset my favorites",
    "toast.newBeyit": "New beyit",
    "toast.copied": "Beyit copied",
    "toast.favoriteAdded": "Added to favorites",
    "toast.favoriteRemoved": "Removed from favorites",
    "toast.vibrateOn": "Vibration on",
    "toast.vibrateOff": "Vibration off",
    "toast.transcriptionOn": "Transcription shown",
    "toast.transcriptionOff": "Transcription hidden",
    "toast.themeDark": "Dark mode",
    "toast.themeLight": "Light mode",
    "toast.themeAuto": "Automatic theme",
    "toast.langChanged": "Language: English",
    "toast.imageGenerated": "Image generated",
    "toast.imageDownloaded": "Image downloaded",
    "toast.shared": "Shared",
    "toast.favoritesReset": "Favorites cleared",
    "toast.zikrReset": "Counter reset",
    "toast.goalReached": "Goal reached",
    "toast.newCycle": "New cycle",
    "toast.allSeen": "All beyits have been seen",
    "toast.audioUnavailable": "Audio unavailable",
    "meta.objective": "Objective",
    "meta.total": "Cumulative total"
  }
};

function t(key) {
  return TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS.fr[key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = t(key);
    if (value) el.textContent = value;
  });
  document.documentElement.lang = currentLanguage;
}

/* =========================================================
CONFIGURATION
========================================================= */

const STORAGE_KEYS = {
  favorites: "khassida_favorites",
  seen: "khassida_seen",
  current: "khassida_current",
  theme: "khassida_theme",
  font: "khassida_font",
  vibrate: "khassida_vibrate",
  transcription: "khassida_transcription",
  language: "khassida_language",
  zikrCount: "khassida_zikr_count",
  zikrType: "khassida_zikr_type",
  zikrTotal: "khassida_zikr_total",
  zikrTarget: "khassida_zikr_target"
};

/* =========================================================
30 KHASSIDA
========================================================= */

const KHASSIDA_DATA = [
  {
    id: 1,
    khassida: "Jawartou",
    khassidaArabe: "جوارت",
    traductionTitre: "Je me suis réfugié",
    beyits: [
      { numero: 1, vers1: "فَرَقْتُ إِبْلِيسَ وَجَمِيعَ الْمَفَاسِدِ", vers2: "وَمَا زِلْتُ فِي حِصْنِي الْحَصِينِ الْمُمَجَّدِ", transcription1: "Faraqtou Iblissa wa jami' al mafassidi", transcription2: "Wa ma ziltou fi hisni al-hasin al-mumajjadi", traduction: "J'ai délaissé Satan et toutes les corruptions, et je demeure dans ma forteresse glorifiée.", traductionEn: "I have abandoned Satan and all corruption, and I remain in my glorified fortress." },
      { numero: 2, vers1: "جَوَرْتُ لَهَا بِكِتَابِهِ إِلَى دُخُولِيَا جَنَّتَهُ", vers2: "جَوَرْتُ بِالْفُرْقَانِ رَبِّيَ الْمُهِينَ", transcription1: "Jawartou lahâ bikitabuhî ila doukhouliya jannatahou", transcription2: "Jawartou bil-fourkhani rabiyal mouhine", traduction: "Je me suis réfugié en Lui par Son Livre pour entrer dans Son Paradis. Je me suis réfugié par le Discernement (le Coran), mon Seigneur, l'Incomparable Auxiliaire.", traductionEn: "I took refuge in Him through His Book to enter His Paradise. I took refuge through the Discernment, my Lord, the Incomparable Helper." },
      { numero: 3, vers1: "يَا رَبِّ إِنِّي فِي حِمَاكَ الْوَاسِعِ", vers2: "وَفِي كِتَابِكَ الْحَكِيمِ الْمَانِعِ", transcription1: "Yâ Rabbi innî fî himâka al-wâsi'i", transcription2: "Wa fî kitâbika al-hakîmi al-mâni'i", traduction: "Ô Seigneur, je suis dans Ton vaste sanctuaire, et dans Ton Livre sage et protecteur.", traductionEn: "O Lord, I am in Your vast sanctuary, and in Your wise and protective Book." },
      { numero: 4, vers1: "لَا حَوْلَ لِي وَلَا قُوَّةَ إِلَّا بِهِ", vers2: "هُوَ الْغَنِيُّ وَنَحْنُ الْفُقَرَاءُ إِلَيْهِ", transcription1: "Lâ hawla lî wa lâ qouwata illâ bihi", transcription2: "Houwa al-ghaniyou wa nahnou al-fouqarâ'ou ilayhi", traduction: "Je n'ai ni force ni puissance si ce n'est par Lui. Il est le Riche, et nous sommes dans le besoin de Lui.", traductionEn: "I have no strength or power except through Him. He is the Rich, and we are in need of Him." },
      { numero: 5, vers1: "وَمَنْ يَتَوَكَّلْ عَلَى الرَّحْمَنِ يَكْفِيهِ", vers2: "وَيَحْفَظْهُ مِنْ كُلِّ سُوءٍ يُؤْذِيهِ", transcription1: "Wa man yatawakkal 'alâ ar-Rahmâni yakfîhi", transcription2: "Wa yahfazhou min koulli soû'in you'dzîhi", traduction: "Celui qui place sa confiance en le Miséricordieux, Il lui suffit et le protège de tout mal.", traductionEn: "Whoever places his trust in the Most Merciful, He suffices him and protects him from all harm." }
    ]
  },
  {
    id: 2,
    khassida: "Sindidi",
    khassidaArabe: "الصنديد",
    traductionTitre: "Le Notable",
    beyits: [
      { numero: 1, vers1: "يَا اللَّهُ بِالْمُصْطَفَى يَا اللَّهُ", vers2: "وَبِالْخَلِيلِ إِبْرَاهِيمَ يَا اللَّهُ", transcription1: "Yâ Allahou bil-Mustafâ yâ Allahou", transcription2: "Wa bil-Khalîli Ibrâhîma yâ Allahou", traduction: "Ô mon Dieu ! Je T'invoque par considération pour l'Élu, et par considération pour Ton ami Abraham.", traductionEn: "O Allah! I invoke You through the Chosen One, and through Your friend Abraham." },
      { numero: 2, vers1: "وَبِمُوسَى الْكَلِيمِ وَعِيسَى الْمَسِيحِ", vers2: "وَبِكُلِّ نَبِيٍّ صَادِقٍ وَصَرِيحِ", transcription1: "Wa bi Moûsa al-kalîmi wa 'Îsâ al-Masîhi", transcription2: "Wa bikoulli nabiyyin sâdiqin wa sarîhi", traduction: "Et par Moïse, l'interlocuteur d'Allah, et par Jésus le Messie, et par tout prophète véridique.", traductionEn: "And through Moses and Jesus the Messiah, and through every truthful prophet." },
      { numero: 3, vers1: "أَسْأَلُكَ اللَّهُمَّ بِجَاهِ الْأَوْلِيَاءِ", vers2: "أَنْ تَحْفَظَ لِي دِينِي وَدُنْيَايَ", transcription1: "As'alouka Allâhoumma bijâhi al-awliyâ'i", transcription2: "An tahfaza lî dînî wa dounyâya", traduction: "Je Te demande, ô Allah, par le rang des saints, de me préserver ma religion et ma vie.", traductionEn: "I ask You, O Allah, by the rank of the saints, to preserve my religion and my life." },
      { numero: 4, vers1: "وَأَنْ تَخْتِمَ لِي بِالْحُسْنَى وَالرِّضَا", vers2: "وَأَنْ تَجْعَلَ قَلْبِي بِالْإِيمَانِ مُمْتَلِئًا", transcription1: "Wa an takhtima lî bil-housnâ war-ridâ", transcription2: "Wa an taj'ala qalbî bil-îmâni moumtali'an", traduction: "Et de sceller ma fin par la plus belle des fins, et de remplir mon cœur de foi.", traductionEn: "And to seal my end with the best end, and fill my heart with faith." }
    ]
  },
  {
    id: 3,
    khassida: "Matlaboul Fawzeyni",
    khassidaArabe: "مطلب الفوزين",
    traductionTitre: "La quête du bonheur des deux mondes",
    beyits: [
      { numero: 1, vers1: "الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا", vers2: "لِدِينِ الْإِسْلَامِ وَاجْتَبَانَا", transcription1: "Al-hamdou lillâhi alladzî hadânâ", transcription2: "Li dîni al-islâmi wa ijtabânâ", traduction: "Louange à Allah qui nous a guidés vers l'Islam et nous a élus.", traductionEn: "Praise be to Allah who guided us to Islam and chose us." },
      { numero: 2, vers1: "وَالصَّلَاةُ عَلَى النَّبِيِّ الْمُصْطَفَى", vers2: "خَيْرِ الْوَرَى مَنْ جَاءَ بِالْهُدَى", transcription1: "Wa as-salâtou 'alâ an-nabiyyi al-mustafâ", transcription2: "Khayri al-warâ man jâ'a bil-hudâ", traduction: "Et la prière sur le Prophète élu, celui qui est venu avec la guidée.", traductionEn: "And prayer upon the chosen Prophet, who came with guidance." },
      { numero: 3, vers1: "أَمَّا بَعْدُ فَاسْمَعْ يَا طَالِبَ الْفَوْزَيْنِ", vers2: "مَا يُوصِلُ الْعَبْدَ إِلَى الرِّضَا الْحَسَنِ", transcription1: "Ammâ ba'dou fasma' yâ tâliba al-fawzayni", transcription2: "Mâ yoûsilou al-'abda ilâ ar-ridâ al-hasani", traduction: "Écoute, ô chercheur du bonheur des deux mondes, ce qui conduit le serviteur à la satisfaction.", traductionEn: "Listen, O seeker of happiness in both worlds, to what leads the servant to satisfaction." },
      { numero: 4, vers1: "الْعِلْمُ وَالْعَمَلُ وَالْإِخْلَاصُ أَسَاسُهُ", vers2: "وَالْقَوْلُ وَالنِّيَّةُ الصَّادِقَةُ رَأْسُهُ", transcription1: "Al-'ilmou wal-'amalou wal-ikhlâsou asâsouhou", transcription2: "Wal-qawl wa an-niyyatou as-sâdiqatou ra'souhou", traduction: "La science, l'action et la sincérité en sont les fondations.", traductionEn: "Knowledge, action and sincerity are its foundations." }
    ]
  },
  {
    id: 4,
    khassida: "Mafatihul Bichri",
    khassidaArabe: "مفاتح البشر",
    traductionTitre: "Les clés de la bonne nouvelle",
    beyits: [
      { numero: 1, vers1: "الْحَمْدُ لِلَّهِ الَّذِي أَرْسَلَ رَسُولَهُ", vers2: "بِالْهُدَى وَدِينِ الْحَقِّ لِيُظْهِرَهُ", transcription1: "Al-hamdou lillâhi alladzî arsala rasoûlahou", transcription2: "Bil-hudâ wa dîni al-haqqi li yudz-hirahou", traduction: "Louange à Allah qui a envoyé Son Messager avec la guidée et la religion de vérité.", traductionEn: "Praise be to Allah who sent His Messenger with guidance and the religion of truth." },
      { numero: 2, vers1: "مُحَمَّدٌ سَيِّدُ الْوَلَدِ آدَمَ", vers2: "وَخَيْرُ مَنْ جَاءَ بِالْهُدَى وَالْكَرَمِ", transcription1: "Muhammadun sayyidou al-waladi Âdama", transcription2: "Wa khayrou man jâ'a bil-hudâ wal-karami", traduction: "Muhammad est le maître des enfants d'Adam, et le meilleur de ceux qui sont venus avec la guidée.", traductionEn: "Muhammad is the master of the children of Adam, and the best of those who came with guidance." },
      { numero: 3, vers1: "بُشْرَى لِمَنْ تَبِعَ النَّبِيَّ الْمُخْتَارَ", vers2: "وَسَارَ فِي دَرْبِ الْهُدَى وَالْأَنْوَارِ", transcription1: "Boushrâ liman tabi'a an-nabiyya al-mukhtâra", transcription2: "Wa sâra fî darbi al-hudâ wal-anwâri", traduction: "Bonne nouvelle à celui qui suit le Prophète élu et marche sur le chemin de la guidée.", traductionEn: "Good news to the one who follows the chosen Prophet and walks the path of guidance." },
      { numero: 4, vers1: "يَا فَاتِحَ الْأَبْوَابِ لِلْخَيْرَاتِ", vers2: "افْتَحْ لَنَا أَبْوَابَ الْبَرَكَاتِ", transcription1: "Yâ fâtiha al-abwâbi lil-khayrâti", transcription2: "Iftah lanâ abwâba al-barakâti", traduction: "Ô Toi qui ouvres les portes des biens, ouvre-nous les portes des bénédictions.", traductionEn: "O You who opens the doors of good, open for us the doors of blessings." }
    ]
  },
  {
    id: 5,
    khassida: "Nourou Darayni",
    khassidaArabe: "نور الدارين",
    traductionTitre: "La lumière des deux demeures",
    beyits: [
      { numero: 1, vers1: "نُورُ الدَّارَيْنِ أَحْمَدُ الْمُخْتَارُ", vers2: "خَيْرُ الْبَرِيَّةِ طَاهِرُ الْأَخْبَارِ", transcription1: "Nourou ad-dârayni Ahmadou al-mukhtârou", transcription2: "Khayrou al-bariyyati tâhirou al-akhbâri", traduction: "La lumière des deux demeures est Ahmad l'élu, au passé pur.", traductionEn: "The light of the two abodes is Ahmad the chosen, of pure past." },
      { numero: 2, vers1: "صَلَّى عَلَيْهِ اللَّهُ مَا لَاحَ الضِّيَا", vers2: "وَمَا سَجَعَتْ وَرْقَاءُ فِي الدَّوْحِ عَلَا", transcription1: "Sallâ 'alayhi Allâhou mâ lâha ad-diyâ", transcription2: "Wa mâ saja'at warqâ'ou fi ad-dawhi 'alâ", traduction: "Qu'Allah prie sur lui tant que brille la lumière, et tant que chante la colombe.", traductionEn: "May Allah pray upon him as long as light shines, and the dove sings." },
      { numero: 3, vers1: "هُوَ الشَّفِيعُ الْمُشَفَّعُ فِي الْمَحْشَرِ", vers2: "وَهُوَ الْحَبِيبُ الْمُقَرَّبُ الْمُطَهَّرُ", transcription1: "Houwa ash-shafî'ou al-moushaffa'ou fil-mahshari", transcription2: "Wa houwa al-habîbou al-mouqarrabou al-moutahharou", traduction: "Il est l'intercesseur dont l'intercession sera acceptée au Jour du Rassemblement.", traductionEn: "He is the intercessor whose intercession will be accepted on the Day of Gathering." },
      { numero: 4, vers1: "اللَّهُمَّ احْشُرْنَا فِي زُمْرَةِ الْأَحْبَابِ", vers2: "وَاسْقِنَا مِنْ حَوْضِهِ يَوْمَ الْحِسَابِ", transcription1: "Allâhoumma ahshournâ fî zoumrati al-ahbâbi", transcription2: "Wasqinâ min haw dihi yawma al-hisâbi", traduction: "Ô Allah, rassemble-nous dans le groupe des bien-aimés.", traductionEn: "O Allah, gather us in the group of the beloved." }
    ]
  },
  {
    id: 6,
    khassida: "Mawaahibun Naafih",
    khassidaArabe: "مواهب النافع",
    traductionTitre: "Les dons bienfaisants",
    beyits: [
      { numero: 1, vers1: "مَوَاهِبُ النَّافِعِ فِي كُلِّ حَالِ", vers2: "مِنْ رَبِّنَا الْجَوَادِ ذِي الْجَلَالِ", transcription1: "Mawâhibou an-nâfi'i fî koulli hâli", transcription2: "Min rabbinâ al-jawâdi dzî al-jalâli", traduction: "Les dons bienfaisants en toute situation viennent de notre Seigneur, le Généreux.", traductionEn: "Beneficial gifts in every situation come from our Lord, the Generous." },
      { numero: 2, vers1: "أَسْأَلُهُ الْعَفْوَ وَحُسْنَ الْخِتَامِ", vers2: "وَالْفَوْزَ بِالْجَنَّةِ دَارِ السَّلَامِ", transcription1: "As'alouhou al-'afwa wa housna al-khitâmi", transcription2: "Wal-fawza bil-jannati dâri as-salâmi", traduction: "Je Lui demande le pardon, une belle fin, et la réussite du Paradis.", traductionEn: "I ask Him for forgiveness, a beautiful ending, and success in Paradise." },
      { numero: 3, vers1: "يَا مُنْعِمًا لَا تَنْفَدُ الْعَطَايَا", vers2: "لَا تَحْرِمْنَا مِنْ نِعَمِكَ الْبَاقِيَا", transcription1: "Yâ moun'iman lâ tanfadou al-'atâyâ", transcription2: "Lâ tahrimnâ min ni'amika al-bâqiyâ", traduction: "Ô Toi qui combles de bienfaits sans que Tes dons ne s'épuisent.", traductionEn: "O You who bestows blessings without Your gifts running out." },
      { numero: 4, vers1: "كُلُّ النِّعَمِ مِنْكَ يَا إِلَهَنَا", vers2: "فَلَكَ الْحَمْدُ مَا بَقِينَا وَدُمْنَا", transcription1: "Koullou an-ni'ami minka yâ ilâhanâ", transcription2: "Falak al-hamdou mâ baqînâ wa doumnâ", traduction: "Tous les bienfaits viennent de Toi, ô notre Dieu.", traductionEn: "All blessings come from You, O our God." }
    ]
  },
  {
    id: 7,
    khassida: "Jazbul Qulub",
    khassidaArabe: "جذب القلوب",
    traductionTitre: "L'attraction des cœurs",
    beyits: [
      { numero: 1, vers1: "جَذْبُ الْقُلُوبِ إِلَى الْحَبِيبِ", vers2: "نُورٌ يُضِيءُ دَرْبَ الْغَرِيبِ", transcription1: "Jadzbou al-qouloûbi ilâ al-habîbi", transcription2: "Noûroun youdî'ou darba al-gharîbi", traduction: "L'attraction des cœurs vers le Bien-Aimé est une lumière qui éclaire le chemin.", traductionEn: "Drawing hearts toward the Beloved is a light that illuminates the path." },
      { numero: 2, vers1: "يَا رَبِّ فَاجْذِبْنِي إِلَى رِضَاكَ", vers2: "وَاجْعَلْ فُؤَادِي تَائِهًا فِي هَوَاكَ", transcription1: "Yâ Rabbi fajdzibnî ilâ ridâka", transcription2: "Waj'al fou'âdî tâ'ihan fî hawâka", traduction: "Ô mon Seigneur, attire-moi vers Ta satisfaction.", traductionEn: "O my Lord, draw me toward Your satisfaction." },
      { numero: 3, vers1: "لَا شَيْءَ أَحْلَى مِنْ ذِكْرِ الْحَبِيبِ", vers2: "وَلَا أَشْجَى مِنْ فِرَاقِ الْقَرِيبِ", transcription1: "Lâ shay'a ahlâ min dzikri al-habîbi", transcription2: "Wa lâ ashjâ min firâqi al-qarîbi", traduction: "Rien n'est plus doux que l'évocation du Bien-Aimé.", traductionEn: "Nothing is sweeter than remembering the Beloved." },
      { numero: 4, vers1: "يَا طَالِبَ الْقُرْبِ اسْلُكْ سَبِيلَ الْحُبِّ", vers2: "تَجِدْ رِضَا الْمَوْلَى قَرِيبًا لِلْقَلْبِ", transcription1: "Yâ tâliba al-qurbi oslouk sabîla al-houbbi", transcription2: "Tajid ridâ al-mawlâ qarîban lil-qalbi", traduction: "Ô chercheur de proximité, emprunte le chemin de l'amour.", traductionEn: "O seeker of closeness, take the path of love." }
    ]
  },
  {
    id: 8,
    khassida: "Tazawudu Sighaar",
    khassidaArabe: "تزود الصغار",
    traductionTitre: "Les provisions des jeunes",
    beyits: [
      { numero: 1, vers1: "تَزَوَّدُوا يَا صِغَارُ بِالتَّقْوَى", vers2: "فَإِنَّهَا خَيْرُ زَادٍ لِلْأُخْرَى", transcription1: "Tazawwadou yâ sighârou bit-taqwâ", transcription2: "Fa innahâ khayrou zâdin lil-oukhra", traduction: "Faites provision, ô jeunes, de la piété.", traductionEn: "Take provision, O young ones, of piety." },
      { numero: 2, vers1: "وَاطْلُبُوا الْعِلْمَ فِي الصِّغَرِ", vers2: "فَإِنَّهُ فِي الْكِبَرِ يُثْمِرُ", transcription1: "Watloubou al-'ilma fis-sighari", transcription2: "Fa innahou fil-kibari yudzmira", traduction: "Recherchez la science dans la jeunesse.", traductionEn: "Seek knowledge in youth." },
      { numero: 3, vers1: "يَا صِغَارُ الْيَوْمَ فِي دَارِ الْفَنَاءِ", vers2: "غَدًا تَكُونُونَ كِبَارَ الْعُلَمَاءِ", transcription1: "Yâ sighârou al-yawma fî dâri al-fanâ'i", transcription2: "Ghada takounoûna kibâra al-'oulamâ'i", traduction: "Ô jeunes d'aujourd'hui, demain vous serez de grands savants.", traductionEn: "O young people today, tomorrow you will be great scholars." },
      { numero: 4, vers1: "احْفَظُوا الْقُرْآنَ وَالْأَحَادِيثَ", vers2: "وَاتْرُكُوا اللَّهْوَ وَكُلَّ الْخَبَائِثِ", transcription1: "Ihfazou al-qour'âna wal-ahâdîtsa", transcription2: "Watroukou al-lahwa wa koulla al-khabâ'itsi", traduction: "Mémorisez le Coran et les hadiths.", traductionEn: "Memorize the Quran and the hadiths." }
    ]
  },
  {
    id: 9,
    khassida: "Massalik al-Jinan",
    khassidaArabe: "مسالك الجنان",
    traductionTitre: "Les itinéraires du Paradis",
    beyits: [
      { numero: 1, vers1: "مَسَالِكُ الْجِنَانِ سَبِيلُ الْهُدَى", vers2: "لِمَنْ أَرَادَ الْفَوْزَ وَالرِّضَا", transcription1: "Masâlikou al-jinâni sabîlou al-houdâ", transcription2: "Liman arâda al-fawza war-ridâ", traduction: "Les itinéraires du Paradis sont le chemin de la guidée.", traductionEn: "The paths of Paradise are the path of guidance." },
      { numero: 2, vers1: "أَسْلُكْ سَبِيلَ الْعَارِفِينَ بِاللَّهِ", vers2: "تَجِدْ رِضَا الرَّحْمَنِ فِي مَنْهَاكَ", transcription1: "Oslouk sabîla al-'ârifîna billâhi", transcription2: "Tajid ridâ ar-Rahmâni fî manhâka", traduction: "Emprunte le chemin de ceux qui connaissent Allah.", traductionEn: "Take the path of those who know Allah." },
      { numero: 3, vers1: "الصَّلَاةُ وَالصِّيَامُ وَالزَّكَاةُ", vers2: "وَالْحَجُّ أَبْوَابُ الْجِنَانِ الْعُلْيَا", transcription1: "As-salâtou was-siyâmou waz-zakâtou", transcription2: "Wal-hajjou abwâbou al-jinâni al-'oulyâ", traduction: "La prière, le jeûne, l'aumône et le pèlerinage sont les portes du Paradis.", traductionEn: "Prayer, fasting, almsgiving and pilgrimage are the doors of Paradise." },
      { numero: 4, vers1: "وَمَنْ أَرَادَ الْجَنَّةَ فَلْيَصْبِرْ", vers2: "عَلَى الْمَشَاقِّ وَالْهَوَى فَلْيَهْجُرْ", transcription1: "Wa man arâda al-jannata falyasbir", transcription2: "'Alâ al-mashâqqi wal-hawâ falyahjour", traduction: "Celui qui désire le Paradis doit être patient face aux difficultés.", traductionEn: "Whoever desires Paradise must be patient with difficulties." }
    ]
  },
  {
    id: 10,
    khassida: "Touhfatou",
    khassidaArabe: "تحفة",
    traductionTitre: "Le cadeau spirituel",
    beyits: [
      { numero: 1, vers1: "تُحْفَةُ الْعَبْدِ الْفَقِيرِ", vers2: "إِلَى الرَّحِيمِ الْقَدِيرِ", transcription1: "Touhfatou al-'abdi al-faqîri", transcription2: "Ilâ ar-Rahîmi al-qadîri", traduction: "Cadeau du serviteur pauvre au Miséricordieux Tout-Puissant.", traductionEn: "Gift from the poor servant to the Merciful." },
      { numero: 2, vers1: "يَا رَبِّ تَقَبَّلْ مِنِّي", vers2: "وَاغْفِرْ ذُنُوبِي وَارْحَمْنِي", transcription1: "Yâ Rabbi taqabbal minnî", transcription2: "Waghfir dzounoûbî warhamnî", traduction: "Ô Seigneur, accepte de moi, pardonne mes péchés.", traductionEn: "O Lord, accept from me, forgive my sins." },
      { numero: 3, vers1: "هَذِهِ تُحْفَةُ عَبْدٍ مُذْنِبِ", vers2: "يَرْجُو عَفْوًا مِنْ رَبٍّ وَاهِبِ", transcription1: "Hâdzihi touhfatou 'abdin mudznibi", transcription2: "Yarjoû 'afwan min rabbin wâhibi", traduction: "Voici le cadeau d'un serviteur pécheur.", traductionEn: "Here is the gift of a sinful servant." },
      { numero: 4, vers1: "لَا حَوْلَ لِي فِي تَقْدِيمِ شَيْءٍ", vers2: "إِلَّا اعْتِرَافِي بِالْعَجْزِ وَالْعَيْبِ", transcription1: "Lâ hawla lî fî taqdîmi shay'in", transcription2: "Illâ i'tirâfî bil-'ajzi wal-'aybi", traduction: "Je n'ai aucun moyen d'offrir quoi que ce soit.", traductionEn: "I have no way to offer anything." }
    ]
  },
  {
    id: 11,
    khassida: "Asiiru",
    khassidaArabe: "اسير",
    traductionTitre: "Le prisonnier",
    beyits: [
      { numero: 1, vers1: "أَسِيرُ فِي سِجْنِ الْهَوَى", vers2: "أَسْأَلُكَ اللَّهُمَّ الْعَفْوَ", transcription1: "Asîrou fî sijni al-hawâ", transcription2: "As'alouka Allâhoumma al-'afwa", traduction: "Prisonnier dans la geôle du désir, je Te demande le pardon.", traductionEn: "A prisoner in the dungeon of desire, I ask You for forgiveness." },
      { numero: 2, vers1: "خَلِّصْنِي مِنْ أَسْرِي", vers2: "وَاجْعَلْنِي مِنْ أَحْرَارِكَ", transcription1: "Khallisnî min asrî", transcription2: "Waj'alnî min ahrârika", traduction: "Libère-moi de ma captivité et place-moi parmi Tes affranchis.", traductionEn: "Free me from my captivity and place me among Your freed ones." },
      { numero: 3, vers1: "أَنَا الْعَبْدُ الْمُذْنِبُ الْفَقِيرُ", vers2: "وَأَنْتَ الْغَفَّارُ الْغَنِيُّ الْقَدِيرُ", transcription1: "Anâ al-'abdou al-mudznibou al-faqîrou", transcription2: "Wa anta al-ghaffârou al-ghaniyou al-qadîrou", traduction: "Je suis le serviteur pécheur et pauvre.", traductionEn: "I am the sinful and poor servant." },
      { numero: 4, vers1: "أَسْأَلُكَ بِالْمُصْطَفَى أَنْ تُعْتِقَنِي", vers2: "مِنَ النَّارِ وَمِنْ كُلِّ مَا يُبْعِدُنِي", transcription1: "As'alouka bil-Mustafâ an tou'tiqanî", transcription2: "Mina an-nâri wa min koulli mâ youb'idounî", traduction: "Je Te demande par l'Élu de m'affranchir du Feu.", traductionEn: "I ask You through the Chosen One to free me from the Fire." }
    ]
  },
  {
    id: 12,
    khassida: "Khaloo Liyarkan",
    khassidaArabe: "خلو ليركن",
    traductionTitre: "Ils m'ont laissé",
    beyits: [
      { numero: 1, vers1: "خَلُّوا لِيَرْكَنْ إِلَى اللَّهِ", vers2: "فَإِنَّ اللَّهَ هُوَ الْمَلْجَأُ", transcription1: "Khallou liyarkan ilâ Allâhi", transcription2: "Fa inna Allâha houwa al-malja'ou", traduction: "Ils m'ont laissé me réfugier auprès d'Allah.", traductionEn: "They left me to take refuge with Allah." },
      { numero: 2, vers1: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِهِ", vers2: "هُوَ الْغَنِيُّ وَنَحْنُ الْفُقَرَاءُ", transcription1: "Lâ hawla wa lâ qouwata illâ bihi", transcription2: "Houwa al-ghaniyou wa nahnou al-fouqarâ'ou", traduction: "Il n'y a de force ni de puissance qu'en Lui.", traductionEn: "There is no strength or power except in Him." },
      { numero: 3, vers1: "إِلَيْكَ رَبِّي رَفَعْتُ يَدِي", vers2: "وَبِكَ اسْتَجَرْتُ مِنْ كُلِّ عَادِي", transcription1: "Ilayka Rabbî rafa'tou yadî", transcription2: "Wa bika istajartou min koulli 'âdî", traduction: "Vers Toi, mon Seigneur, j'ai levé ma main.", traductionEn: "To You, my Lord, I raised my hand." },
      { numero: 4, vers1: "أَنْتَ الْحَفِيظُ لِمَنْ يَلُوذُ بِبَابِكَ", vers2: "وَأَنْتَ الْغَنِيُّ عَنْ كُلِّ مَنْ سِوَاكَ", transcription1: "Anta al-hafîzou liman yaloûdzou bibâbika", transcription2: "Wa anta al-ghaniyou 'an koulli man siwâka", traduction: "Tu es le Protecteur de celui qui cherche refuge à Ta porte.", traductionEn: "You are the Protector of the one who seeks refuge at Your door." }
    ]
  },
  {
    id: 13,
    khassida: "Wakana Hakhan",
    khassidaArabe: "وكان حقا",
    traductionTitre: "Et c'était une vérité",
    beyits: [
      { numero: 1, vers1: "وَكَانَ حَقًّا عَلَى اللَّهِ نَصْرُهُ", vers2: "لِمَنْ يَنْصُرُ دِينَهُ وَيَنْصُرُهُ", transcription1: "Wa kâna haqqan 'alâ Allâhi nasrouhou", transcription2: "Liman yansourou dînahou wa yansourouhou", traduction: "Allah accorde Son secours à celui qui secourt Sa religion.", traductionEn: "Allah grants His help to the one who helps His religion." },
      { numero: 2, vers1: "يَا نَاصِرَ الْإِسْلَامِ كُنْ لِي نَاصِرًا", vers2: "وَاجْعَلْ فُؤَادِي بِالْيَقِينِ عَامِرًا", transcription1: "Yâ nâsira al-islâmi koun lî nâsiran", transcription2: "Waj'al fou'âdî bil-yaqîni 'âmmiran", traduction: "Ô Secoureur de l'Islam, sois mon secoureur.", traductionEn: "O Helper of Islam, be my helper." },
      { numero: 3, vers1: "إِنَّ الْعَاقِبَةَ لِلْمُتَّقِينَ", vers2: "وَالْأَرْضُ يَرِثُهَا الصَّالِحُونَ", transcription1: "Inna al-'âqibata lil-mouttaqîna", transcription2: "Wal-ardou yaritsouhâ as-sâlihoûna", traduction: "La bonne fin est pour les pieux.", traductionEn: "Indeed, the good end is for the pious." },
      { numero: 4, vers1: "لَا تَخَفْ فَإِنَّ اللَّهَ مَعَ الصَّابِرِينَ", vers2: "وَالنَّصْرُ قَادِمٌ لِلْمُؤْمِنِينَ", transcription1: "Lâ takhaf fa inna Allâha ma'a as-sâbirîna", transcription2: "Wan-nasrou qâdimoun lil-mou'minîna", traduction: "Ne crains pas, car Allah est avec les patients.", traductionEn: "Do not fear, for Allah is with the patient." }
    ]
  },
  {
    id: 14,
    khassida: "Mafatihul Jinaan",
    khassidaArabe: "مفاتح الجنان",
    traductionTitre: "Les clés du Paradis",
    beyits: [
      { numero: 1, vers1: "مَفَاتِيحُ الْجِنَانِ بِذِكْرِ اللَّهِ", vers2: "وَبِالصَّلَاةِ عَلَى خَيْرِ خَلْقِ اللَّهِ", transcription1: "Mafâtîhou al-jinâni bidzikri Allâhi", transcription2: "Wa bis-salâti 'alâ khayri khalqi Allâhi", traduction: "Les clés du Paradis sont le dhikr et la prière sur le Prophète.", traductionEn: "The keys of Paradise are remembrance and prayer upon the Prophet." },
      { numero: 2, vers1: "أَكْثِرْ مِنَ الذِّكْرِ فِي كُلِّ حِينٍ", vers2: "تَفْتَحْ لَكَ أَبْوَابَ الْجِنَانِ", transcription1: "Akthir mina adz-dzikri fî koulli hînin", transcription2: "Taftah laka abwâba al-jinâni", traduction: "Multiplie l'évocation à tout moment.", traductionEn: "Increase remembrance at all times." },
      { numero: 3, vers1: "الِاسْتِغْفَارُ يَفْتَحُ الْأَقْفَالَ", vers2: "وَيُزِيلُ عَنِ الْقَلْبِ الْأَغْلَالَ", transcription1: "Al-istighfârou yaftahou al-aqfâla", transcription2: "Wa youzîlou 'ani al-qalbi al-aghlâla", traduction: "La demande de pardon ouvre les serrures.", traductionEn: "Seeking forgiveness opens the locks." },
      { numero: 4, vers1: "قُلْ لَا إِلَٰهَ إِلَّا اللَّهُ تَنْجُو", vers2: "وَبِهَا إِلَى دَارِ السَّلَامِ تَلِجُ", transcription1: "Qoul lâ ilâha illâ Allâhou tanjou", transcription2: "Wa bihâ ilâ dâri as-salâmi talij", traduction: "Dis : « Il n'y a de divinité qu'Allah », tu seras sauvé.", traductionEn: "Say: There is no god but Allah, you will be saved." }
    ]
  },
  {
    id: 15,
    khassida: "Mouqaddamatul Amdaah",
    khassidaArabe: "مقدمة المدائح",
    traductionTitre: "Introduction aux louanges",
    beyits: [
      { numero: 1, vers1: "مُقَدِّمَةُ الْمَدَائِحِ فِي حَمْدِ الْإِلَهِ", vers2: "وَمَدْحِ النَّبِيِّ الْمُصْطَفَى ذِي الْجَاهِ", transcription1: "Mouqaddimatou al-madâ'ihi fî hamdi al-ilâhi", transcription2: "Wa madhi an-nabiyyi al-mustafâ dzî al-jâhi", traduction: "Introduction aux louanges envers Allah et le Prophète élu.", traductionEn: "Introduction to praises of Allah and the chosen Prophet." },
      { numero: 2, vers1: "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالِ", vers2: "وَالصَّلَاةُ عَلَى النَّبِيِّ الْغَالِي", transcription1: "Al-hamdou lillâhi 'alâ koulli hâli", transcription2: "Was-salâtou 'alâ an-nabiyyi al-ghâlî", traduction: "Louange à Allah en toute situation.", traductionEn: "Praise be to Allah in every situation." },
      { numero: 3, vers1: "أَحْمَدُ رَبِّي عَلَى نِعَمِهِ الْعِظَامِ", vers2: "وَأَشْكُرُهُ عَلَى دَوَامِ الْإِنْعَامِ", transcription1: "Ahmadou Rabbî 'alâ ni'amihi al-'izâmi", transcription2: "Wa ashkourouhou 'alâ dawâmi al-in'âmi", traduction: "Je loue mon Seigneur pour Ses bienfaits immenses.", traductionEn: "I praise my Lord for His immense blessings." },
      { numero: 4, vers1: "يَا خَيْرَ مَنْ صَلَّى وَصَامَ وَاعْتَكَفْ", vers2: "وَيَا مَنْ لِلْخَلَائِقِ رَحْمَةً قَدْ عُرِفْ", transcription1: "Yâ khayra man sallâ wa sâma wa'takaf", transcription2: "Wa yâ man lil-khalâ'iqi rahmatan qad 'ourif", traduction: "Ô meilleur de ceux qui ont prié et jeûné.", traductionEn: "O best of those who prayed and fasted." }
    ]
  },
  {
    id: 16,
    khassida: "Jaalibatul Maraaghibi",
    khassidaArabe: "جالبية المراغب",
    traductionTitre: "Celle qui attire les désirs",
    beyits: [
      { numero: 1, vers1: "جَالِبَةُ الْمَرَاغِبِ إِلَى الْجَنَّةِ", vers2: "لِمَنْ أَرَادَ الْفَوْزَ بِالْمَغْفِرَةِ", transcription1: "Jâlibatou al-marâghibi ilâ al-jannati", transcription2: "Liman arâda al-fawza bil-maghfirati", traduction: "Celle qui attire les désirs vers le Paradis.", traductionEn: "The one that draws desires to Paradise." },
      { numero: 2, vers1: "يَا طَالِبَ الْخَيْرِ اسْتَمِعْ وَاعْمَلْ", vers2: "فَإِنَّ الْعَمَلَ بِالْعِلْمِ يُكْمِلُ", transcription1: "Yâ tâliba al-khayri istami' wa'mal", transcription2: "Fa inna al-'amala bil-'ilmi youkmilou", traduction: "Ô chercheur de bien, écoute et agis.", traductionEn: "O seeker of good, listen and act." },
      { numero: 3, vers1: "الدُّنْيَا دَارُ مَمَرٍّ لَا دَارُ مَقَرٍّ", vers2: "فَاجْعَلْ زَادَكَ التَّقْوَى وَخَيْرَ الْبِرِّ", transcription1: "Ad-dounyâ dârou mamarrin lâ dârou maqarr", transcription2: "Faj'al zâdaka at-taqwâ wa khayra al-birri", traduction: "Le monde est une demeure de passage.", traductionEn: "The world is a dwelling of passage." },
      { numero: 4, vers1: "سَابِقْ إِلَى الْخَيْرَاتِ لَا تَتَأَخَّرْ", vers2: "وَاذْكُرْ إِلَهَكَ لَا تَكُنْ مُتَكَاسِلًا", transcription1: "Sâbiq ilâ al-khayrâti lâ tata'akhkhar", transcription2: "Wadzkour ilâhaka lâ takoun moutakâsilan", traduction: "Précède vers les bonnes actions.", traductionEn: "Precede toward good deeds." }
    ]
  },
  {
    id: 17,
    khassida: "Fazaat Qilaamii",
    khassidaArabe: "فازات قلامي",
    traductionTitre: "Mes plumes ont triomphé",
    beyits: [
      { numero: 1, vers1: "فَازَتْ قَلَامِي فِي مَدْحِ الْحَبِيبِ", vers2: "وَنَالَتْ شَرَفَ الْقُرْبِ وَالنَّصِيبِ", transcription1: "Fâzat qalâmî fî madhi al-habîbi", transcription2: "Wa nâlat sharafa al-qurbi wan-nasîbi", traduction: "Mes plumes ont triomphé dans la louange du Bien-Aimé.", traductionEn: "My pens have triumphed in praising the Beloved." },
      { numero: 2, vers1: "مُحَمَّدٌ خَيْرُ الْوَرَى وَسَيِّدُهُمْ", vers2: "وَأَكْرَمُ الْخَلْقِ وَأَعْلَاهُمْ", transcription1: "Muhammadun khayrou al-warâ wa sayyidouhoum", transcription2: "Wa akramou al-khalqi wa a'lâhoum", traduction: "Muhammad est le meilleur des hommes et leur maître.", traductionEn: "Muhammad is the best of mankind and their master." },
      { numero: 3, vers1: "لَوْلَاهُ مَا كُنَّا وَلَا كَانَ الْوُجُودُ", vers2: "وَلَا نَعِمْنَا بِالْحَيَاةِ وَالسُّجُودِ", transcription1: "Law lâhou mâ kounnâ wa lâ kâna al-woujoûdou", transcription2: "Wa lâ na'imna bil-hayâti was-soujoûdi", traduction: "Sans lui, nous n'aurions pas existé.", traductionEn: "Without him, we would not exist." },
      { numero: 4, vers1: "صَلَّى عَلَيْهِ اللَّهُ رَبُّ الْعَالَمِينَ", vers2: "وَعَلَى أَصْحَابِهِ وَالتَّابِعِينَ", transcription1: "Sallâ 'alayhi Allâhou Rabbou al-'âlamîna", transcription2: "Wa 'alâ ashâbihi wat-tâbi'îna", traduction: "Qu'Allah prie sur lui, Seigneur de l'univers.", traductionEn: "May Allah pray upon him, Lord of the universe." }
    ]
  },
  {
    id: 18,
    khassida: "Lisaanu Shukrii",
    khassidaArabe: "لسان شكري",
    traductionTitre: "La langue de ma gratitude",
    beyits: [
      { numero: 1, vers1: "لِسَانُ شُكْرِي عَاجِزٌ عَنْ حَمْدِكَ", vers2: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", transcription1: "Lisânu shukrî 'âjizoun 'an hamdika", transcription2: "Yâ dzâ al-jalâli wal-ikrâmi", traduction: "La langue de ma gratitude est incapable de Te louer.", traductionEn: "The tongue of my gratitude is unable to praise You." },
      { numero: 2, vers1: "أَحْمَدُكَ اللَّهُمَّ عَلَى نِعَمِكَ", vers2: "وَأَشْكُرُكَ عَلَى كُلِّ حَالِ", transcription1: "Ahmadouka Allâhoumma 'alâ ni'amika", transcription2: "Wa ashkourouka 'alâ koulli hâli", traduction: "Je Te loue, ô Allah, pour Tes bienfaits.", traductionEn: "I praise You, O Allah, for Your blessings." },
      { numero: 3, vers1: "لَوْ كَانَ لِي أَلْسِنَةٌ بِعَدَدِ الرِّمَالِ", vers2: "مَا وَفَّيْتُ حَقَّكَ يَا ذَا الْجَلَالِ", transcription1: "Law kâna lî alsinatoun bi'idadi ar-rimâli", transcription2: "Mâ waffaytou haqqaka yâ dzâ al-jalâli", traduction: "Si j'avais des langues en nombre de grains de sable.", traductionEn: "If I had tongues as numerous as grains of sand." },
      { numero: 4, vers1: "فَاقْبَلْ إِلَهِي عُذْرَ مَنْ يَعْجِزُ", vers2: "وَاعْفُ عَنْهُ فَإِنَّكَ تَغْفِرُ", transcription1: "Faqbal ilâhî 'oudzra man ya'jizou", transcription2: "Wa'fou 'anhou fa innaka taghfirou", traduction: "Accepte, mon Dieu, l'excuse de celui qui est impuissant.", traductionEn: "Accept, my God, the excuse of the one who is powerless." }
    ]
  },
  {
    id: 19,
    khassida: "Miftaahun Nasri",
    khassidaArabe: "مفتاح النصر",
    traductionTitre: "La clé de la victoire",
    beyits: [
      { numero: 1, vers1: "مِفْتَاحُ النَّصْرِ فِي الصَّبْرِ وَالدُّعَاءِ", vers2: "وَالْيَقِينِ بِاللَّهِ فِي كُلِّ لِقَاءِ", transcription1: "Miftâhou an-nasri fis-sabri wad-dou'â'i", transcription2: "Wal-yaqîni billâhi fî koulli liqâ'i", traduction: "La clé de la victoire est dans la patience et l'invocation.", traductionEn: "The key to victory is in patience and supplication." },
      { numero: 2, vers1: "اصْبِرْ وَصَابِرْ وَرَابِطْ فِي سَبِيلِهِ", vers2: "تَجِدِ النَّصْرَ مِنَ اللَّهِ قَرِيبًا", transcription1: "Isbir wa sâbir wa râbit fî sabîlihi", transcription2: "Tajidi an-nasra mina Allâhi qarîban", traduction: "Sois patient, endure, reste ferme dans Son chemin.", traductionEn: "Be patient, endure, and remain firm in His path." },
      { numero: 3, vers1: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ نَصْرًا", vers2: "وَيُؤَيِّدُ الْمُؤْمِنِينَ صَبْرًا", transcription1: "Inna Allâha ma'a as-sâbirîna nasran", transcription2: "Wa you'ayyidou al-mou'minîna sabran", traduction: "Certes, Allah est avec les patients pour les secourir.", traductionEn: "Indeed, Allah is with the patient to help them." },
      { numero: 4, vers1: "لَا تَيْأَسُوا مِنْ رَوْحِ اللَّهِ إِنَّهُ", vers2: "قَرِيبٌ لِمَنْ يَدْعُوهُ مُخْلِصًا لَهُ", transcription1: "Lâ tay'asoû min raw hi Allâhi innahou", transcription2: "Qarîboun liman yad'oûhou moukhlistan lahou", traduction: "Ne désespérez pas du soulagement d'Allah.", traductionEn: "Do not despair of Allah's relief." }
    ]
  },
  {
    id: 20,
    khassida: "Wajjahtu Lilaahi",
    khassidaArabe: "وجهت لله",
    traductionTitre: "J'ai tourné mon visage vers Allah",
    beyits: [
      { numero: 1, vers1: "وَجَّهْتُ وَجْهِيَ لِلَّهِ الْحَنِيفِ", vers2: "وَدِينِي دِينُ إِبْرَاهِيمَ الْحَنِيفِ", transcription1: "Wajjahtou wajhiya lillâhi al-hanîfi", transcription2: "Wa dînî dînou Ibrâhîma al-hanîfi", traduction: "J'ai tourné mon visage vers Allah, le Pur.", traductionEn: "I have turned my face toward Allah, the Pure." },
      { numero: 2, vers1: "لَا أَخَافُ مِنْ شَيْءٍ إِلَّا مِنْهُ", vers2: "وَهُوَ عَلَى كُلِّ شَيْءٍ وَكِيلٌ", transcription1: "Lâ akhâfou min shay'in illâ minhou", transcription2: "Wa houwa 'alâ koulli shay'in wakîloun", traduction: "Je ne crains rien d'autre que Lui.", traductionEn: "I fear nothing but Him." },
      { numero: 3, vers1: "إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ", vers2: "وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ", transcription1: "Inna salâtî wa nousoukî wa mahyâya", transcription2: "Wa mamâtî lillâhi Rabbi al-'âlamîna", traduction: "Ma prière, ma vie et ma mort sont pour Allah.", traductionEn: "My prayer, my life and my death are for Allah." },
      { numero: 4, vers1: "لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ", vers2: "وَأَنَا أَوَّلُ الْمُسْلِمِينَ", transcription1: "Lâ sharîka lahou wa bidzâlika oumirt", transcription2: "Wa anâ awwalou al-mouslimîna", traduction: "Il n'a pas d'associé.", traductionEn: "He has no partner." }
    ]
  },
  {
    id: 21,
    khassida: "Yaa Rakhmannu",
    khassidaArabe: "يا رخمان",
    traductionTitre: "Ô Miséricordieux",
    beyits: [
      { numero: 1, vers1: "يَا رَخْمَانُ يَا رَحِيمُ", vers2: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", transcription1: "Yâ Rakhmâni yâ Rahîmou", transcription2: "Yâ dzâ al-jalâli wal-ikrâmi", traduction: "Ô Miséricordieux, ô Très Miséricordieux.", traductionEn: "O Most Merciful, O Most Compassionate." },
      { numero: 2, vers1: "ارْحَمْ عِبَادَكَ الْمُؤْمِنِينَ", vers2: "وَاجْعَلْنَا مِنَ الْفَائِزِينَ", transcription1: "Irham 'ibâdaka al-mou'minîna", transcription2: "Waj'alnâ mina al-fâ'izîna", traduction: "Fais miséricorde à Tes serviteurs croyants.", traductionEn: "Have mercy on Your believing servants." },
      { numero: 3, vers1: "أَنْتَ الرَّحْمَنُ وَالرَّحِيمُ دَائِمًا", vers2: "وَأَنَا الْفَقِيرُ إِلَيْكَ فِي كُلِّ حَالٍ", transcription1: "Anta ar-Rahmâni war-Rahîmou dâ'iman", transcription2: "Wa anâ al-faqîrou ilayka fî koulli hâlin", traduction: "Tu es le Miséricordieux pour toujours.", traductionEn: "You are the Most Merciful forever." },
      { numero: 4, vers1: "لَا تُخَيِّبْ رَجَائِي فِيكَ رَبِّي", vers2: "فَإِنِّي مُعْتَمِدٌ عَلَيْكَ حَسْبِي", transcription1: "Lâ toukhayyib rajâ'î fîka Rabbî", transcription2: "Fa innî mou'tamidoun 'alayka hasbî", traduction: "Ne déçois pas mon espoir en Toi.", traductionEn: "Do not disappoint my hope in You." }
    ]
  },
  {
    id: 22,
    khassida: "Yaqiinii",
    khassidaArabe: "يقيني",
    traductionTitre: "Ma certitude",
    beyits: [
      { numero: 1, vers1: "يَقِينِي فِي اللَّهِ لَا يَتَزَعْزَعُ", vers2: "وَلَوْ تَزَلْزَلَتِ الْجِبَالُ وَتَصَدَّعُ", transcription1: "Yaqînî fî Allâhi lâ yataza'za'ou", transcription2: "Wa law tazalzalati al-jibâlou wa tasadda'ou", traduction: "Ma certitude en Allah ne vacille pas.", traductionEn: "My certainty in Allah does not waver." },
      { numero: 2, vers1: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ", vers2: "وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", transcription1: "Ash-hadou an lâ ilâha illâ Allâhou", transcription2: "Wa ash-hadou anna Muhammadan rasoûlou Allâhi", traduction: "Je témoigne qu'il n'y a de divinité qu'Allah.", traductionEn: "I bear witness that there is no god but Allah." },
      { numero: 3, vers1: "إِنَّ اللَّهَ حَيٌّ لَا يَمُوتُ أَبَدًا", vers2: "قَيُّومٌ لَا يَنَامُ وَلَا يَغْفُلُ", transcription1: "Inna Allâha hayyoun lâ yamoûtou abadan", transcription2: "Qayyoûmoun lâ yanâmou wa lâ yaghfoul", traduction: "Certes, Allah est Vivant et ne meurt jamais.", traductionEn: "Indeed, Allah is Living and never dies." },
      { numero: 4, vers1: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ", vers2: "وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ", transcription1: "Houwa al-awwalou wal-âkhirou wadz-dzâhirou", transcription2: "Wal-bâtinou wa houwa bikoulli shay'in 'alîmoun", traduction: "Il est le Premier et le Dernier.", traductionEn: "He is the First and the Last." }
    ]
  },
  {
    id: 23,
    khassida: "Ayyasa Minnal Laahi",
    khassidaArabe: "أيس من الله",
    traductionTitre: "Désespérer d'Allah",
    beyits: [
      { numero: 1, vers1: "أَيَأْسٌ مِنَ اللَّهِ وَهُوَ الْغَفُورُ", vers2: "وَهُوَ الرَّحِيمُ الْوَدُودُ الشَّكُورُ", transcription1: "Aya'soun mina Allâhi wa houwa al-ghafoûrou", transcription2: "Wa houwa ar-Rahîmou al-wadoûdou ash-shakoûrou", traduction: "Désespérer d'Allah alors qu'Il est le Pardonneur ?", traductionEn: "Despair of Allah when He is the Forgiving?" },
      { numero: 2, vers1: "لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ", vers2: "إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", transcription1: "Lâ taqnatoû min rahmati Allâhi", transcription2: "Inna Allâha yaghfirou adz-dzounoûba jamî'an", traduction: "Ne désespérez pas de la miséricorde d'Allah.", traductionEn: "Do not despair of Allah's mercy." },
      { numero: 3, vers1: "إِنَّ اللَّهَ يَبْسُطُ الرِّزْقَ لِمَنْ يَشَاءُ", vers2: "وَيَقْدِرُ وَلَا يُخْلِفُ الْمِيعَادَ", transcription1: "Inna Allâha yabsoutou ar-rizqa liman yashâ'ou", transcription2: "Wa yaqdirou wa lâ youkhlifou al-mî'âda", traduction: "Certes, Allah étend la subsistance à qui Il veut.", traductionEn: "Indeed, Allah extends provision to whom He wills." },
      { numero: 4, vers1: "يَا عَبْدُ عُدْ إِلَى الرَّحْمَنِ إِنَّهُ", vers2: "يَدْعُوكَ لِلتَّوْبَةِ وَالْمَغْفِرَةِ", transcription1: "Yâ 'abdou 'oud ilâ ar-Rahmâni innahou", transcription2: "Yad'oûka lit-tawbati wal-maghfirati", traduction: "Ô serviteur, reviens vers le Miséricordieux.", traductionEn: "O servant, return to the Most Merciful." }
    ]
  },
  {
    id: 24,
    khassida: "Farrij Midaadii",
    khassidaArabe: "فرج مدادي",
    traductionTitre: "Délie mon encre",
    beyits: [
      { numero: 1, vers1: "فَرِّجْ مِدَادِي يَا رَبِّي", vers2: "لِأَكْتُبَ مَدْحَ حَبِيبِي", transcription1: "Farrij midâdî yâ Rabbî", transcription2: "Li aktouba madha habîbî", traduction: "Délie mon encre, ô mon Seigneur.", traductionEn: "Release my ink, O my Lord." },
      { numero: 2, vers1: "مُحَمَّدٌ نُورُ الْهُدَى", vers2: "وَخَيْرُ مَنْ وَطِئَ الثَّرَى", transcription1: "Muhammadun noûrou al-houdâ", transcription2: "Wa khayrou man wati'a ats-tsarâ", traduction: "Muhammad est la lumière de la guidée.", traductionEn: "Muhammad is the light of guidance." },
      { numero: 3, vers1: "أَرِحْ قَلَمِي لِيَكْتُبَ الصَّلَاةَ", vers2: "عَلَى النَّبِيِّ سَيِّدِ الْكَوْنَيْنِ", transcription1: "Arih qalamî li yaktouba as-salâta", transcription2: "'Alâ an-nabiyyi sayyidi al-kawnayni", traduction: "Repose ma plume pour qu'elle écrive la prière sur le Prophète.", traductionEn: "Rest my pen so that it writes the prayer upon the Prophet." },
      { numero: 4, vers1: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", vers2: "وَعَلَى آلِهِ وَكُلِّ صَاحِبٍ أَحْمَدَ", transcription1: "Allâhoumma salli 'alâ Muhammadin", transcription2: "Wa 'alâ âlihi wa koulli sâhibin ahmada", traduction: "Ô Allah, prie sur Muhammad et sa famille.", traductionEn: "O Allah, pray upon Muhammad and his family." }
    ]
  },
  {
    id: 25,
    khassida: "Saana Ilaahi",
    khassidaArabe: "صانع إلهي",
    traductionTitre: "Mon Dieu, protège-moi",
    beyits: [
      { numero: 1, vers1: "صَانِعِي إِلَهِي احْفَظْنِي", vers2: "مِنْ كُلِّ سُوءٍ وَاحْرُسْنِي", transcription1: "Sâni'î ilâhî ihfaznî", transcription2: "Min koulli soû'in wâhrusnî", traduction: "Mon Créateur, protège-moi de tout mal.", traductionEn: "My Creator, protect me from all harm." },
      { numero: 2, vers1: "أَنْتَ الْحَفِيظُ الْعَلِيمُ", vers2: "وَأَنَا الْعَبْدُ الضَّعِيفُ", transcription1: "Anta al-hafîzou al-'alîmou", transcription2: "Wa anâ al-'abdou ad-da'îfou", traduction: "Tu es le Gardien, l'Omniscient.", traductionEn: "You are the Guardian, the All-Knowing." },
      { numero: 3, vers1: "احْفَظْ لِي دِينِي وَإِيمَانِي", vers2: "وَاحْفَظْ لِي أَهْلِي وَإِخْوَانِي", transcription1: "Ihfaz lî dînî wa îmânî", transcription2: "Wahfaz lî ahlî wa ikhwânî", traduction: "Préserve-moi ma religion et ma foi.", traductionEn: "Preserve for me my religion and my faith." },
      { numero: 4, vers1: "وَمَنْ كَانَ فِي حِفْظِكَ لَا يَخَافُ", vers2: "وَلَوْ كَانَ فِي كُلِّ الْخَلْقِ عَدُوٌّ", transcription1: "Wa man kâna fî hifzika lâ yakhâfou", transcription2: "Wa law kâna fî koulli al-khalqi 'adouwwoun", traduction: "Celui qui est sous Ta protection ne craint rien.", traductionEn: "The one under Your protection fears nothing." }
    ]
  },
  {
    id: 26,
    khassida: "Wajjahtu Wajhiya",
    khassidaArabe: "وجهت وجهي",
    traductionTitre: "J'ai tourné mon visage",
    beyits: [
      { numero: 1, vers1: "وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَنِي", vers2: "وَلَنْ أَعْبُدَ إِلَّا إِلَٰهِي", transcription1: "Wajjahtou wajhiya lilladzî fataranî", transcription2: "Wa lan a'bouda illâ ilâhî", traduction: "J'ai tourné mon visage vers Celui qui m'a créé.", traductionEn: "I have turned my face toward the One who created me." },
      { numero: 2, vers1: "هُوَ رَبِّي وَرَبُّ كُلِّ شَيْءٍ", vers2: "لَا شَرِيكَ لَهُ وَلَا نَدِيدَ", transcription1: "Houwa Rabbî wa Rabbou koulli shay'in", transcription2: "Lâ sharîka lahou wa lâ nadîda", traduction: "Il est mon Seigneur et le Seigneur de toute chose.", traductionEn: "He is my Lord and the Lord of all things." },
      { numero: 3, vers1: "لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ", vers2: "عَلَى كُلِّ شَيْءٍ قَدِيرٌ وَحَكِيمٌ", transcription1: "Lahou al-moulkou wa lahou al-hamdou wa houwa", transcription2: "'Alâ koulli shay'in qadîroun wa hakîmoun", traduction: "À Lui la royauté, à Lui la louange.", traductionEn: "To Him belongs the kingdom, to Him belongs praise." },
      { numero: 4, vers1: "يَا مَوْلَايَ لَا تَكِلْنِي إِلَى نَفْسِي", vers2: "وَاجْعَلْنِي مِنْ عِبَادِكَ الصَّالِحِينَ", transcription1: "Yâ mawlâya lâ takilnî ilâ nafsî", transcription2: "Waj'alnî min 'ibâdika as-sâlihîna", traduction: "Ô mon Maître, ne me laisse pas à moi-même.", traductionEn: "O my Master, do not leave me to myself." }
    ]
  },
  {
    id: 27,
    khassida: "Kun Kaatiman",
    khassidaArabe: "كن كاتما",
    traductionTitre: "Sois discret",
    beyits: [
      { numero: 1, vers1: "كُنْ كَاتِمًا لِسِرِّكَ", vers2: "فَإِنَّ الْكِتْمَانَ أَمَانَةٌ", transcription1: "Koun kâtiman li sirrika", transcription2: "Fa inna al-kitmâna amânatoun", traduction: "Sois discret sur ton secret.", traductionEn: "Be discreet with your secret." },
      { numero: 2, vers1: "لَا تُفْشِ سِرًّا لِأَحَدٍ", vers2: "وَلَوْ كَانَ أَقْرَبَ الْقَرِيبِ", transcription1: "Lâ toufshi sirran li ahadin", transcription2: "Wa law kâna aqraba al-qarîbi", traduction: "Ne divulgue pas de secret à quiconque.", traductionEn: "Do not reveal a secret to anyone." },
      { numero: 3, vers1: "السِّرُّ إِنْ ظَهَرَ يُفْسِدُ", vers2: "وَيَجْلِبُ لِلْعَبْدِ الْمَشَاكِلَ", transcription1: "As-sirrou in zahar youfsid", transcription2: "Wa yajloubou lil-'abdi al-mashâkila", traduction: "Le secret, s'il apparaît, attire des problèmes.", traductionEn: "A secret, if it appears, brings problems." },
      { numero: 4, vers1: "فَاسْتُرْ عُيُوبَكَ وَاسْتُرْ عُيُوبَ النَّاسِ", vers2: "يَسْتُرْكَ اللَّهُ فِي الدُّنْيَا وَالنَّاسِ", transcription1: "Fastour 'ouyoûbaka wastour 'ouyoûba an-nâsi", transcription2: "Yastourka Allâhou fid-dounyâ wan-nâsi", traduction: "Couvre tes défauts et les défauts des gens.", traductionEn: "Cover your faults and the faults of people." }
    ]
  },
  {
    id: 28,
    khassida: "Fuzti Halal Muntaqaa",
    khassidaArabe: "فزت حلال منتقى",
    traductionTitre: "Tu as réussi",
    beyits: [
      { numero: 1, vers1: "فُزْتَ حَلَالَ مُنْتَقًى", vers2: "إِذَا كُنْتَ لِلَّهِ تَقِيًّا", transcription1: "Fuzta halâla muntaqan", transcription2: "Idzâ kounta lillâhi taqiyyan", traduction: "Tu as réussi si tu es pieux envers Allah.", traductionEn: "You have succeeded if you are pious toward Allah." },
      { numero: 2, vers1: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ", vers2: "يَكُنْ لَكَ مِنْ كُلِّ خَيْرٍ حَظٌّ", transcription1: "Ittaqi Allâha haythoumâ kounta", transcription2: "Yakoun laka min koulli khayrin hazzoun", traduction: "Crains Allah où que tu sois.", traductionEn: "Fear Allah wherever you are." },
      { numero: 3, vers1: "وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ", vers2: "تَمْحُهَا فَإِنَّ الْحَسَنَاتِ يُذْهِبْنَ", transcription1: "Wa atbi'i as-sayyi'ata al-hasanata", transcription2: "Tamhuhâ fa inna al-hasanâti yudz-hibna", traduction: "Fais suivre la mauvaise action d'une bonne.", traductionEn: "Follow a bad deed with a good one." },
      { numero: 4, vers1: "وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ", vers2: "تَكُنْ مِنَ الْفَائِزِينَ بِالْجَنَّةِ", transcription1: "Wa khâliqi an-nâsa bikhoulouqin hasanin", transcription2: "Takoun mina al-fâ'izîna bil-jannati", traduction: "Côtoie les gens avec un beau caractère.", traductionEn: "Associate with people with good character." }
    ]
  },
  {
    id: 29,
    khassida: "Yasurru Safar",
    khassidaArabe: "يسر سفر",
    traductionTitre: "Le voyage facile",
    beyits: [
      { numero: 1, vers1: "يَسُرُّ سَفَرِي إِلَى اللَّهِ", vers2: "وَإِنْ كَانَ فِي الدُّنْيَا عَنَاءٌ", transcription1: "Yasourrou safarî ilâ Allâhi", transcription2: "Wa in kâna fid-dounyâ 'anâ'oun", traduction: "Mon voyage vers Allah est facilité.", traductionEn: "My journey toward Allah is facilitated." },
      { numero: 2, vers1: "اللَّهُمَّ اجْعَلْ سَفَرِي مَبْرُورًا", vers2: "وَاجْعَلْ مَقَامِي مَقَامًا مَحْمُودًا", transcription1: "Allâhoumma ij'al safarî mabroûran", transcription2: "Waj'al maqâmî maqâman mahmoûdan", traduction: "Ô Allah, fais que mon voyage soit béni.", traductionEn: "O Allah, make my journey blessed." },
      { numero: 3, vers1: "زَادِي التَّقْوَى وَرَاحِلَتِي التَّوَكُّلُ", vers2: "وَدَلِيلِي الْقُرْآنُ وَالْإِخْلَاصُ", transcription1: "Zâdî at-taqwâ wa râhilatî at-tawakkoulou", transcription2: "Wa dalîlî al-qour'âni wal-ikhlâsou", traduction: "Ma provision est la piété, ma monture la confiance.", traductionEn: "My provision is piety, my mount is trust." },
      { numero: 4, vers1: "يَا رَبِّ بَلِّغْنِي الْمَقَامَ الْأَعْلَى", vers2: "وَأَدْخِلْنِي فِي رَحْمَتِكَ الْكُبْرَى", transcription1: "Yâ Rabbi ballighnî al-maqâma al-a'lâ", transcription2: "Wa adkhilnî fî rahmatika al-koubrâ", traduction: "Ô Seigneur, fais-moi atteindre le rang le plus élevé.", traductionEn: "O Lord, let me reach the highest rank." }
    ]
  },
  {
    id: 30,
    khassida: "Khaatimatu Munaajaatii",
    khassidaArabe: "خاتمة مناجاتي",
    traductionTitre: "Couronnement de ma prière",
    beyits: [
      { numero: 1, vers1: "خَاتِمَةُ مُنَاجَاتِي", vers2: "إِلَى الرَّبِّ الْعَلِيِّ", transcription1: "Khâtimatou mounâjâtî", transcription2: "Ilâ ar-Rabbi al-'aliyyi", traduction: "Couronnement de ma prière vers le Seigneur Très-Haut.", traductionEn: "The crowning of my prayer to the Most High Lord." },
      { numero: 2, vers1: "يَا رَبِّ تَقَبَّلْ دُعَائِي", vers2: "وَاغْفِرْ لِي وَارْحَمْنِي", transcription1: "Yâ Rabbi taqabbal dou'â'î", transcription2: "Waghfir lî warhamnî", traduction: "Ô Seigneur, accepte mon invocation.", traductionEn: "O Lord, accept my invocation." },
      { numero: 3, vers1: "وَاخْتِمْ لِي بِالْخَيْرَاتِ أَجْمَعِ", vers2: "وَاجْعَلْ قَلْبِي بِذِكْرِكَ مُتَّسِعَ", transcription1: "Wakhtim lî bil-khayrâti ajma'i", transcription2: "Waj'al qalbî bidzikrika mouttasi'a", traduction: "Scelle ma vie par tous les biens.", traductionEn: "Seal my life with all goods." },
      { numero: 4, vers1: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", vers2: "وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ", transcription1: "Allâhoumma salli 'alâ Muhammadin", transcription2: "Wa 'alâ âlihi wa sahbihi ajma'îna", traduction: "Ô Allah, prie sur Muhammad et ses compagnons.", traductionEn: "O Allah, pray upon Muhammad and his companions." }
    ]
  }
];

/* =========================================================
RAPPELS PAR KHASSIDA
========================================================= */

const KHASSIDA_REMINDERS = {
  "Jawartou": "Ce poème est une demande de protection auprès d'Allah. Serigne Touba y exprime son attachement total au Prophète ﷺ.",
  "Sindidi": "Invocation par l'intermédiaire des prophètes et des saints. Il enseigne l'importance du tawassoul.",
  "Matlaboul Fawzeyni": "La quête du bonheur dans les deux mondes. Un guide vers la réussite ici-bas et dans l'au-delà.",
  "Mafatihul Bichri": "Les clés de la bonne nouvelle : la victoire de la vérité et la lumière du Prophète ﷺ.",
  "Nourou Darayni": "La lumière des deux demeures. Louange au Prophète ﷺ, lumière des cieux et de la terre.",
  "Mawaahibun Naafih": "Les dons bienfaisants. Reconnaissance envers Allah pour Ses grâces.",
  "Jazbul Qulub": "L'attraction des cœurs vers Allah. Un appel à l'amour divin.",
  "Tazawudu Sighaar": "Provisions pour les jeunes. Invitation à la piété dès le plus jeune âge.",
  "Massalik al-Jinan": "Les chemins du Paradis. Guide vers la satisfaction d'Allah.",
  "Touhfatou": "Le cadeau. Un présent spirituel offert avec humilité à Allah.",
  "Asiiru": "Le prisonnier. L'âme captive demande sa libération à Allah.",
  "Khaloo Liyarkan": "Ils m'ont laissé me réfugier en Allah, le seul vrai refuge.",
  "Wakana Hakhan": "Et c'était une vérité : Allah secourt ceux qui Le secourent.",
  "Mafatihul Jinaan": "Les clés du Paradis sont le dhikr et la prière sur le Prophète ﷺ.",
  "Mouqaddamatul Amdaah": "Introduction aux louanges, ouverture à la poésie spirituelle.",
  "Jaalibatul Maraaghibi": "Celle qui attire vers le Paradis et le pardon d'Allah.",
  "Fazaat Qilaamii": "Mes plumes ont triomphé dans la louange du Prophète ﷺ.",
  "Lisaanu Shukrii": "La langue de ma gratitude est incapable de remercier Allah comme Il le mérite.",
  "Miftaahun Nasri": "La clé de la victoire : patience, du'a et certitude en Allah.",
  "Wajjahtu Lilaahi": "J'ai tourné mon visage vers Allah, le Pur, sur le chemin d'Abraham.",
  "Yaa Rakhmannu": "Ô Miséricordieux, invocation à Allah par Ses plus beaux noms.",
  "Yaqiinii": "Ma certitude en Allah ne vacille jamais, même si le monde s'effondre.",
  "Ayyasa Minnal Laahi": "Ne désespère jamais d'Allah, Il pardonne tous les péchés.",
  "Farrij Midaadii": "Délie mon encre, ô Seigneur, pour que je loue le Bien-Aimé.",
  "Saana Ilaahi": "Mon Créateur, protège-moi de tout mal et garde-moi.",
  "Wajjahtu Wajhiya": "J'ai tourné mon visage vers Celui qui m'a créé, sans associé.",
  "Kun Kaatiman": "Sois discret sur ton secret : la discrétion est une confiance sacrée.",
  "Fuzti Halal Muntaqaa": "Tu réussis avec un gain licite si tu es pieux envers Allah.",
  "Yasurru Safar": "Le voyage vers Allah est facilité, même à travers les peines du monde.",
  "Khaatimatu Munaajaatii": "Couronnement de ma prière : accepte mon invocation, pardonne-moi."
};

const THEME_REMINDERS = [
  { keywords: ["protection", "protège", "refuge", "abri", "sécurité"], advice: "Serigne Touba nous enseigne que la vraie protection vient d'Allah seul." },
  { keywords: ["prophète", "muhammad", "messager", "mustafâ"], advice: "L'amour du Prophète ﷺ est la porte de l'amour d'Allah." },
  { keywords: ["miséricorde", "pardon", "pardonner", "clément"], advice: "Cheikh Ahmadou Bamba a toujours pardonné. Le pardon est la marque du vrai croyant." },
  { keywords: ["patience", "endurer", "épreuve", "souffrance", "douleur"], advice: "Serigne Touba a vécu l'exil avec patience. « Celui qui est patient parvient. »" },
  { keywords: ["savoir", "science", "connaissance", "apprendre"], advice: "Le savoir est une lumière. Cherche la science, elle élève." },
  { keywords: ["prière", "salât", "adoration", "invoquer", "du'a"], advice: "La prière est le pilier de la foi. Préserve-la comme la prunelle de tes yeux." },
  { keywords: ["unité", "frère", "communauté", "musulmans"], advice: "La communauté des croyants est un seul corps. Fraternité et service." },
  { keywords: ["coeur", "apaiser", "tranquillité", "paix"], advice: "La paix intérieure vient de l'évocation d'Allah." },
  { keywords: ["gratitude", "remercier", "bienfait"], advice: "La gratitude est la moitié de la foi. Remercie dans l'aisance." },
  { keywords: ["servir", "service", "khidma"], advice: "Le service (khidma) est la voie du mouride." },
  { keywords: ["guide", "chemin", "guidée", "direction"], advice: "Demande toujours la guidée. Le chemin droit est celui des sincères." },
  { keywords: ["mourir", "mort", "tombe", "fin"], advice: "La mort est un rendez-vous inévitable. Prépare-toi, mais n'aie pas peur." }
];

const UNIVERSAL_REMINDERS = [
  "Serigne Touba a écrit ce poème pour éclairer ton cœur.",
  "Chaque beyit est une lumière. Médite-le avant de passer au suivant.",
  "Le mouridisme est un chemin d'amour et de service.",
  "Serigne Touba disait : « Quiconque s'attache à moi, jamais il ne périra. »",
  "La lecture des Khassida purifie le cœur et rapproche d'Allah.",
  "Chaque Khassida est un dialogue entre le serviteur et son Seigneur.",
  "Prends un instant pour ressentir les mots, pas seulement les lire.",
  "Cheikh Ahmadou Bamba a traversé les épreuves avec patience.",
  "Le Khassida est une prière mise en poésie. Récite-le comme un du'a.",
  "Laisse la lumière du Cheikh éclairer ta journée.",
  "Le savoir et la foi sont les deux ailes du croyant.",
  "Serigne Touba a écrit ces vers pour toi, des générations après lui.",
  "Chaque beyit lu avec attention vaut mieux que cent lus distraitement.",
  "Le Khassida est un héritage spirituel. Reçois-le avec gratitude.",
  "Souviens-toi d'Allah en lisant, Il se souviendra de toi.",
  "Le mouride est celui qui chemine vers Allah par l'amour et le service.",
  "Chaque vers est une invitation à méditer.",
  "Serigne Touba nous a laissé un trésor : ses Khassida.",
  "La véritable richesse est celle du cœur.",
  "Continue, ne t'arrête pas. Chaque beyit te rapproche de la lumière."
];

/* =========================================================
☪ DU'A
========================================================= */

const DUAS = [
  { id: 1, arabe: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transcription: "Bismillâhi ar-Rahmâni ar-Rahîm", traduction: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.", usage: "Avant toute action" },
  { id: 2, arabe: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transcription: "Al-hamdou lillâhi Rabbi al-'âlamîn", traduction: "Louange à Allah, Seigneur de l'univers.", usage: "Après un bienfait" },
  { id: 3, arabe: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ", transcription: "Astaghfirou llâha al-'azîm", traduction: "Je demande pardon à Allah, le Très-Grand.", usage: "Pour demander pardon" },
  { id: 4, arabe: "لَا إِلَٰهَ إِلَّا اللَّهُ", transcription: "Lâ ilâha illâ Allâh", traduction: "Il n'y a de divinité qu'Allah.", usage: "Rappel de l'unicité divine" },
  { id: 5, arabe: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ", transcription: "Allâhoumma salli 'alâ Muhammad wa 'alâ âlihi wa sahbihi wa sallim", traduction: "Ô Allah, bénis Muhammad, sa famille et ses compagnons.", usage: "Bénédiction sur le Prophète ﷺ" }
];

/* =========================================================
📿 ZIKR
========================================================= */

const ZIKR_DATA = {
  subhanallah: { ar: "سُبْحَانَ اللَّهِ", label: "SubhanAllah", defaultTarget: 33 },
  alhamdulillah: { ar: "الْحَمْدُ لِلَّهِ", label: "Alhamdulillah", defaultTarget: 33 },
  allahuakbar: { ar: "اللَّهُ أَكْبَرُ", label: "Allahu Akbar", defaultTarget: 34 },
  lailahaillallah: { ar: "لَا إِلَٰهَ إِلَّا اللَّهُ", label: "La ilaha illallah", defaultTarget: 100 },
  astaghfirullah: { ar: "أَسْتَغْفِرُ اللَّهَ", label: "Astaghfirullah", defaultTarget: 100 },
  sallallahou: { ar: "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", label: "Salât", defaultTarget: 100 }
};

const TARGET_OPTIONS = [33, 34, 100, 500, 1000];

/* =========================================================
ÉTAT
========================================================= */

let allBeyits = [];
let currentBeyit = null;
let seenIds = [];
let favorites = [];
let isChanging = false;
let toastTimer = null;
let currentFont = "medium";
let currentLanguage = "fr";
let vibrateEnabled = true;
let transcriptionEnabled = true;

let zikrCount = 0;
let zikrType = "subhanallah";
let zikrTotal = 0;
let zikrTarget = 33;

/* =========================================================
DOM
========================================================= */

const DOM = {};

function cacheDOM() {
  DOM.ayahScreen = document.getElementById("ayahScreen");
  DOM.ayahCard = document.getElementById("ayahCard");
  DOM.arabicLine1 = document.getElementById("arabicLine1");
  DOM.arabicLine2 = document.getElementById("arabicLine2");
  DOM.transcriptionLine1 = document.getElementById("transcriptionLine1");
  DOM.transcriptionLine2 = document.getElementById("transcriptionLine2");
  DOM.transcriptionBlock = document.getElementById("transcriptionBlock");
  DOM.translationText = document.getElementById("translationText");
  DOM.khassidaName = document.getElementById("khassidaName");
  DOM.referenceName = document.getElementById("referenceName");
  DOM.reminderBox = document.getElementById("reminderBox");
  DOM.discoverButton = document.getElementById("discoverButton");
  DOM.favoriteButton = document.getElementById("favoriteButton");
  DOM.shareButton = document.getElementById("shareButton");
  DOM.copyButton = document.getElementById("copyButton");
  DOM.menuButton = document.getElementById("menuButton");
  DOM.closeMenu = document.getElementById("closeMenu");
  DOM.sideMenu = document.getElementById("sideMenu");
  DOM.menuOverlay = document.getElementById("menuOverlay");
  DOM.toast = document.getElementById("toast");
  DOM.toastMessage = document.getElementById("toastMessage");
  DOM.toastIcon = document.getElementById("toastIcon");
  DOM.favoritesModal = document.getElementById("favoritesModal");
  DOM.aboutModal = document.getElementById("aboutModal");
  DOM.duasModal = document.getElementById("duasModal");
  DOM.zikrModal = document.getElementById("zikrModal");
  DOM.shareModal = document.getElementById("shareModal");
  DOM.favoritesList = document.getElementById("favoritesList");
  DOM.favoritesEmpty = document.getElementById("favoritesEmpty");
  DOM.duasList = document.getElementById("duasList");
  DOM.themeButton = document.getElementById("themeButton");
  DOM.settingsModal = document.getElementById("settingsModal");
  DOM.themeOptions = document.getElementById("themeOptions");
  DOM.fontOptions = document.getElementById("fontOptions");
  DOM.languageOptions = document.getElementById("languageOptions");
  DOM.vibrateToggle = document.getElementById("vibrateToggle");
  DOM.transcriptionToggle = document.getElementById("transcriptionToggle");
  DOM.resetButton = document.getElementById("resetButton");

  DOM.zikrSelector = document.getElementById("zikrSelector");
  DOM.zikrCurrentAr = document.getElementById("zikrCurrentAr");
  DOM.zikrCurrentLabel = document.getElementById("zikrCurrentLabel");
  DOM.zikrCounter = document.getElementById("zikrCounter");
  DOM.zikrCount = document.getElementById("zikrCount");
  DOM.zikrTarget = document.getElementById("zikrTarget");
  DOM.zikrProgressBar = document.getElementById("zikrProgressBar");
  DOM.zikrTapButton = document.getElementById("zikrTapButton");
  DOM.zikrResetButton = document.getElementById("zikrResetButton");
  DOM.zikrTargetButton = document.getElementById("zikrTargetButton");
  DOM.zikrTargetLabel = document.getElementById("zikrTargetLabel");
  DOM.zikrTotal = document.getElementById("zikrTotal");

  DOM.sharePreview = document.getElementById("sharePreview");
  DOM.shareCanvas = document.getElementById("shareCanvas");
  DOM.sharePreviewActions = document.getElementById("sharePreviewActions");
  DOM.shareDownloadBtn = document.getElementById("shareDownloadBtn");
  DOM.shareNativeImageBtn = document.getElementById("shareNativeImageBtn");
}

/* =========================================================
INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheDOM();

  allBeyits = buildAllBeyits(KHASSIDA_DATA);
  console.log(`✅ ${allBeyits.length} beyits chargés (${KHASSIDA_DATA.length} Khassida)`);

  loadStorage();

  if (currentBeyit === null || !findBeyitById(currentBeyit.id)) {
    currentBeyit = getRandomNewBeyit();
  }

  if (currentBeyit) renderBeyit(currentBeyit, false);

  renderFavorites();
  renderDuas();
  applySavedTheme();
  applyFont();
  applyTranscriptionPreference();
  applyTranslations();
  renderLanguageOptions();
  updateZikrDisplay();

  bindEvents();

  setTimeout(() => {
    showToast(`${allBeyits.length} beyits prêts`, "✓");
  }, 400);
}

/* =========================================================
STORAGE
========================================================= */

function loadStorage() {
  try {
    const s = localStorage.getItem(STORAGE_KEYS.seen);
    const f = localStorage.getItem(STORAGE_KEYS.favorites);
    const c = localStorage.getItem(STORAGE_KEYS.current);
    const fo = localStorage.getItem(STORAGE_KEYS.font);
    const vb = localStorage.getItem(STORAGE_KEYS.vibrate);
    const tr = localStorage.getItem(STORAGE_KEYS.transcription);

    seenIds = s ? JSON.parse(s) : [];
    favorites = f ? JSON.parse(f) : [];
    currentBeyit = c ? JSON.parse(c) : null;

    if (fo) currentFont = fo;
    if (vb !== null) vibrateEnabled = vb === "true";
    if (tr !== null) transcriptionEnabled = tr === "true";

    const lang = localStorage.getItem(STORAGE_KEYS.language);
    if (lang === "fr" || lang === "en") currentLanguage = lang;

    const zc = localStorage.getItem(STORAGE_KEYS.zikrCount);
    const zt = localStorage.getItem(STORAGE_KEYS.zikrType);
    const ztot = localStorage.getItem(STORAGE_KEYS.zikrTotal);
    const ztg = localStorage.getItem(STORAGE_KEYS.zikrTarget);

    if (zc !== null) zikrCount = Number(zc);
    if (zt && ZIKR_DATA[zt]) zikrType = zt;
    if (ztot !== null) zikrTotal = Number(ztot);
    if (ztg !== null) zikrTarget = Number(ztg);
  } catch (error) {
    console.warn("Storage error", error);
  }
}

function saveStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.seen, JSON.stringify(seenIds));
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites));
    localStorage.setItem(STORAGE_KEYS.font, currentFont);
    localStorage.setItem(STORAGE_KEYS.vibrate, String(vibrateEnabled));
    localStorage.setItem(STORAGE_KEYS.transcription, String(transcriptionEnabled));
    localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
    localStorage.setItem(STORAGE_KEYS.zikrCount, String(zikrCount));
    localStorage.setItem(STORAGE_KEYS.zikrType, zikrType);
    localStorage.setItem(STORAGE_KEYS.zikrTotal, String(zikrTotal));
    localStorage.setItem(STORAGE_KEYS.zikrTarget, String(zikrTarget));

    if (currentBeyit) {
      localStorage.setItem(STORAGE_KEYS.current, JSON.stringify(currentBeyit));
    }
  } catch (error) {
    console.warn("Save error", error);
  }
}

/* =========================================================
TRANSFORMATION
========================================================= */

function buildAllBeyits(data) {
  const list = [];
  let globalId = 1;

  data.forEach((k) => {
    const beyits = k.beyits || [];
    beyits.forEach((b) => {
      list.push({
        id: globalId++,
        khassidaId: k.id,
        khassida: k.khassida,
        khassidaArabe: k.khassidaArabe || "",
        traductionTitre: k.traductionTitre || "",
        numero: b.numero,
        vers1: b.vers1 || "",
        vers2: b.vers2 || "",
        transcription1: b.transcription1 || "",
        transcription2: b.transcription2 || "",
        traduction: b.traduction || "",
        traductionEn: b.traductionEn || ""
      });
    });
  });

  return list;
}

/* =========================================================
🌍 TRADUCTION DU BEYIT
========================================================= */

function getTraduction(beyit) {
  if (!beyit) return "";

  if (currentLanguage === "en") {
    return beyit.traductionEn || beyit.traduction || "";
  }
  return beyit.traduction || "";
}

/* =========================================================
⭐ ÉVÉNEMENTS
========================================================= */

function bindEvents() {
  DOM.discoverButton?.addEventListener("click", e => {
    e.stopPropagation();
    showNextBeyit();
  });

  DOM.favoriteButton?.addEventListener("click", e => {
    e.stopPropagation();
    toggleFavorite();
  });

  DOM.shareButton?.addEventListener("click", e => {
    e.stopPropagation();
    openShareModal();
  });

  DOM.copyButton?.addEventListener("click", e => {
    e.stopPropagation();
    copyBeyit();
  });

  DOM.menuButton?.addEventListener("click", e => {
    e.stopPropagation();
    openMenu();
  });

  DOM.closeMenu?.addEventListener("click", closeMenu);
  DOM.menuOverlay?.addEventListener("click", closeMenu);

  document.querySelectorAll(".menu-option").forEach(btn => {
    btn.addEventListener("click", () => handleMenuAction(btn.dataset.menu));
  });

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => handleNavigation(btn.dataset.page));
  });

  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });

  [DOM.favoritesModal, DOM.aboutModal, DOM.settingsModal, DOM.duasModal, DOM.zikrModal, DOM.shareModal].forEach(modal => {
    modal?.addEventListener("click", e => {
      if (e.target === modal) closeAllModals();
    });
  });

  DOM.themeButton?.addEventListener("click", e => {
    e.stopPropagation();
    toggleTheme();
  });

  DOM.ayahScreen?.addEventListener("click", handleScreenTouch);

  // =========================================================
  // OPTIONS DES PARAMÈTRES — ÉCOUTEURS DIRECTS
  // =========================================================

  // 🌙 THÈME
  document.querySelectorAll("#themeOptions .setting-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const choice = btn.dataset.themeChoice;
      if (choice) {
        setTheme(choice);
        renderThemeOptions();
        vibrate(20);
      }
    });
  });

  // 🔤 TAILLE
  document.querySelectorAll("#fontOptions .setting-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const font = btn.dataset.font;
      if (font) {
        currentFont = font;
        saveStorage();
        applyFont();
        renderFontOptions();
        vibrate(20);
      }
    });
  });

  // 🌍 LANGUE
  document.querySelectorAll("#languageOptions .setting-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const lang = btn.dataset.lang;
      if (lang === "fr" || lang === "en") {
        setLanguage(lang);
      }
    });
  });

  // Toggles
  DOM.vibrateToggle?.addEventListener("change", (e) => {
    vibrateEnabled = e.target.checked;
    saveStorage();
    showToast(
      vibrateEnabled ? t("toast.vibrateOn") : t("toast.vibrateOff"),
      "📳"
    );
    vibrate(20);
  });

  DOM.transcriptionToggle?.addEventListener("change", (e) => {
    transcriptionEnabled = e.target.checked;
    saveStorage();
    applyTranscriptionPreference();
    showToast(
      transcriptionEnabled ? t("toast.transcriptionOn") : t("toast.transcriptionOff"),
      "📝"
    );
  });

  DOM.resetButton?.addEventListener("click", () => {
    closeAllModals();
    resetFavorites();
  });

  // Zikr
  DOM.zikrTapButton?.addEventListener("click", (e) => {
    e.stopPropagation();
    incrementZikr();
  });

  DOM.zikrResetButton?.addEventListener("click", (e) => {
    e.stopPropagation();
    resetZikr();
  });

  DOM.zikrTargetButton?.addEventListener("click", (e) => {
    e.stopPropagation();
    cycleZikrTarget();
  });

  document.querySelectorAll(".zikr-choice").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const type = btn.dataset.zikr;
      if (type && ZIKR_DATA[type]) {
        setZikrType(type);
      }
    });
  });

  // Partage
  document.querySelectorAll(".share-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleShareAction(btn.dataset.share);
    });
  });

  DOM.shareDownloadBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    downloadShareImage();
  });

  DOM.shareNativeImageBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    shareImageNative();
  });

  // Clavier
  document.addEventListener("keydown", event => {
    if (event.code === "Space" || event.code === "Enter") {
      const tag = document.activeElement?.tagName;
      if (tag !== "BUTTON" && tag !== "INPUT" && tag !== "TEXTAREA") {
        event.preventDefault();
        showNextBeyit();
      }
    }
    if (event.key === "Escape") {
      closeMenu();
      closeAllModals();
    }
  });
}

/* =========================================================
TOUCHER L'ÉCRAN
========================================================= */

function handleScreenTouch(event) {
  const target = event.target;
  if (
    target.closest("button") ||
    target.closest(".bottom-navigation") ||
    target.closest(".side-menu") ||
    target.closest(".modal")
  ) return;
  showNextBeyit();
}

/* =========================================================
NOUVEAU BEYIT
========================================================= */

function showNextBeyit() {
  if (isChanging || !allBeyits.length) return;

  isChanging = true;
  const nextBeyit = getRandomNewBeyit();

  if (!nextBeyit) {
    isChanging = false;
    showToast(t("toast.allSeen"), "✦");
    return;
  }

  DOM.ayahCard?.classList.add("changing");

  setTimeout(() => {
    currentBeyit = nextBeyit;
    registerBeyit(nextBeyit);
    renderBeyit(nextBeyit, true);
    DOM.ayahCard?.classList.remove("changing");
    isChanging = false;
  }, 250);
}

function getRandomNewBeyit() {
  if (!allBeyits.length) return null;

  let available = allBeyits.filter(b => !seenIds.includes(b.id));

  if (available.length === 0 && allBeyits.length > 0) {
    seenIds = [];
    available = [...allBeyits];
    showToast(t("toast.newCycle"), "↻");
  }

  if (available.length === 0) return null;

  const index = Math.floor(Math.random() * available.length);
  return available[index];
}

function findBeyitById(id) {
  return allBeyits.find(b => b.id === id);
}

function registerBeyit(beyit) {
  if (!seenIds.includes(beyit.id)) {
    seenIds.push(beyit.id);
  }
  saveStorage();
}

/* =========================================================
AFFICHER UN BEYIT
========================================================= */

function renderBeyit(beyit, showNotification = true) {
  if (!beyit) return;

  if (DOM.arabicLine1) DOM.arabicLine1.textContent = beyit.vers1;
  if (DOM.arabicLine2) DOM.arabicLine2.textContent = beyit.vers2;
  if (DOM.transcriptionLine1) DOM.transcriptionLine1.textContent = beyit.transcription1;
  if (DOM.transcriptionLine2) DOM.transcriptionLine2.textContent = beyit.transcription2;
  if (DOM.translationText) DOM.translationText.textContent = getTraduction(beyit);
  if (DOM.khassidaName) DOM.khassidaName.textContent = (beyit.khassida || "").toUpperCase();
  if (DOM.referenceName) DOM.referenceName.textContent = "SHEIKH AHMADOU BAMBA";

  updateFavoriteButton();
  renderReminder(beyit);

  if (showNotification) showToast(t("toast.newBeyit"), "✦");
  saveStorage();
}

/* =========================================================
RAPPELS
========================================================= */

function getReminderForBeyit(beyit) {
  if (!beyit) return null;

  if (KHASSIDA_REMINDERS[beyit.khassida]) {
    return {
      icon: "📖",
      title: `${t("beyit.about") || "À propos de"} ${beyit.khassida}`,
      text: KHASSIDA_REMINDERS[beyit.khassida]
    };
  }

  const text = (beyit.traduction || "").toLowerCase();
  for (const theme of THEME_REMINDERS) {
    if (theme.keywords.some(kw => text.includes(kw.toLowerCase()))) {
      return { icon: "💡", title: "Réflexion", text: theme.advice };
    }
  }

  const fallbackIndex = beyit.id % UNIVERSAL_REMINDERS.length;
  return {
    icon: "✦",
    title: "Rappel",
    text: UNIVERSAL_REMINDERS[fallbackIndex]
  };
}

function renderReminder(beyit) {
  const container = DOM.reminderBox;
  if (!container) return;

  const reminder = getReminderForBeyit(beyit);

  if (!reminder) {
    container.innerHTML = "";
    container.classList.remove("visible");
    return;
  }

  container.innerHTML = `
    <div class="reminder-header">
      <span class="reminder-icon">${reminder.icon}</span>
      <span class="reminder-title">${escapeHTML(reminder.title)}</span>
    </div>
    <p class="reminder-text">${escapeHTML(reminder.text)}</p>
  `;

  container.classList.add("visible");
}

/* =========================================================
🌍 CHANGEMENT DE LANGUE
========================================================= */

function setLanguage(lang) {
  if (lang !== "fr" && lang !== "en") return;

  currentLanguage = lang;
  saveStorage();

  // 1. Traduire TOUTE la page
  applyTranslations();

  // 2. Traduire le beyit affiché
  if (currentBeyit && DOM.translationText) {
    DOM.translationText.textContent = getTraduction(currentBeyit);
  }

  // 3. Mettre à jour les boutons actifs
  renderLanguageOptions();

  // 4. Toast
  showToast(t("toast.langChanged"), "🌍");
  vibrate(20);
}

function renderLanguageOptions() {
  if (!DOM.languageOptions) return;

  DOM.languageOptions.querySelectorAll("[data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
  });
}

/* =========================================================
📤 PARTAGE
========================================================= */

function openShareModal() {
  if (!currentBeyit) return;

  if (DOM.sharePreview) DOM.sharePreview.classList.remove("visible");
  if (DOM.sharePreviewActions) DOM.sharePreviewActions.classList.remove("visible");

  openModal(DOM.shareModal);
  vibrate(15);
}

function getShareText(beyit, withReminder = true) {
  if (!beyit) return "";

  let text =
    `${beyit.vers1}\n${beyit.vers2}\n\n` +
    `${beyit.transcription1}\n${beyit.transcription2}\n\n` +
    `"${getTraduction(beyit)}"\n\n` +
    `📖 ${beyit.khassida}`;

  if (withReminder) {
    const reminder = getReminderForBeyit(beyit);
    if (reminder) {
      text += `\n\n${reminder.icon} ${reminder.text}`;
    }
  }

  text += `\n\n— KHASSIDA • Cheikh Ahmadou Bamba`;

  return text;
}

async function handleShareAction(action) {
  if (!currentBeyit) return;

  const shortText = getShareText(currentBeyit, false);

  switch (action) {
    case "copy":
      await copyShareText(shortText);
      break;
    case "image":
      generateShareImage();
      break;
    case "whatsapp":
      openWhatsApp(shortText);
      break;
    case "telegram":
      openTelegram(shortText);
      break;
    case "email":
      openEmail(shortText);
      break;
    case "native":
      await nativeShare(shortText);
      break;
  }
}

async function copyShareText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(t("toast.copied"), "📋");
    closeAllModals();
    vibrate(20);
  } catch (error) {
    showToast("Copie impossible", "!");
  }
}

function openWhatsApp(text) {
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
  closeAllModals();
  vibrate(20);
}

function openTelegram(text) {
  const url = `https://t.me/share/url?url=${encodeURIComponent(text)}&text=`;
  window.open(url, "_blank");
  closeAllModals();
  vibrate(20);
}

function openEmail(text) {
  const subject = `KHASSIDA — ${currentBeyit.khassida}`;
  const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  window.location.href = url;
  closeAllModals();
  vibrate(20);
}

async function nativeShare(text) {
  try {
    if (navigator.share) {
      await navigator.share({
        title: `KHASSIDA — ${currentBeyit.khassida}`,
        text: text
      });
      showToast(t("toast.shared"), "↗");
      closeAllModals();
      vibrate(20);
    } else {
      showToast("Partage natif indisponible", "!");
    }
  } catch (error) {
    if (error?.name !== "AbortError") {
      showToast("Partage annulé", "!");
    }
  }
}

/* =========================================================
🖼️ GÉNÉRATION D'IMAGE
========================================================= */

function generateShareImage() {
  const canvas = DOM.shareCanvas;
  if (!canvas || !currentBeyit) return;

  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  const beyit = currentBeyit;

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#050a08");
  grad.addColorStop(0.5, "#0a120e");
  grad.addColorStop(1, "#0f1a14");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  const halo1 = ctx.createRadialGradient(200, 150, 0, 200, 150, 500);
  halo1.addColorStop(0, "rgba(26, 157, 110, 0.15)");
  halo1.addColorStop(1, "rgba(26, 157, 110, 0)");
  ctx.fillStyle = halo1;
  ctx.fillRect(0, 0, W, H);

  const halo2 = ctx.createRadialGradient(W - 200, H - 200, 0, W - 200, H - 200, 500);
  halo2.addColorStop(0, "rgba(212, 175, 55, 0.12)");
  halo2.addColorStop(1, "rgba(212, 175, 55, 0)");
  ctx.fillStyle = halo2;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
  ctx.lineWidth = 3;
  ctx.strokeRect(40, 40, W - 80, H - 80);

  ctx.strokeStyle = "rgba(26, 157, 110, 0.3)";
  ctx.lineWidth = 1;
  ctx.strokeRect(55, 55, W - 110, H - 110);

  ctx.fillStyle = "rgba(212, 175, 55, 0.85)";
  ctx.font = "42px 'Amiri', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", W / 2, 150);

  ctx.strokeStyle = "rgba(26, 157, 110, 0.5)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(780, 200);
  ctx.stroke();

  ctx.fillStyle = "rgba(212, 175, 55, 0.9)";
  ctx.font = "30px serif";
  ctx.fillText("✦", W / 2, 202);

  ctx.fillStyle = "rgba(244, 212, 124, 1)";
  ctx.font = "bold 44px 'Marcellus', serif";
  ctx.fillText(beyit.khassida.toUpperCase(), W / 2, 280);

  ctx.fillStyle = "#f0ede5";
  ctx.font = "64px 'Amiri', serif";
  ctx.direction = "rtl";
  ctx.fillText(beyit.vers1, W / 2, 520);
  ctx.fillText(beyit.vers2, W / 2, 620);
  ctx.direction = "ltr";

  ctx.fillStyle = "rgba(62, 207, 154, 0.9)";
  ctx.font = "40px serif";
  ctx.fillText("✦", W / 2, 720);

  ctx.fillStyle = "rgba(62, 207, 154, 0.9)";
  ctx.font = "italic 30px 'Inter', sans-serif";
  ctx.fillText(beyit.transcription1, W / 2, 790);
  ctx.fillText(beyit.transcription2, W / 2, 835);

  ctx.strokeStyle = "rgba(26, 157, 110, 0.4)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(280, 880);
  ctx.lineTo(800, 880);
  ctx.stroke();

  ctx.fillStyle = "rgba(240, 237, 229, 0.85)";
  ctx.font = "italic 34px 'Inter', sans-serif";

  const lines = wrapText(ctx, `"${getTraduction(beyit)}"`, W - 200);
  const lineHeight = 48;
  const startY = 950;

  lines.forEach((line, i) => {
    ctx.fillText(line, W / 2, startY + i * lineHeight);
  });

  ctx.fillStyle = "rgba(244, 212, 124, 1)";
  ctx.font = "bold 28px 'Marcellus', serif";
  ctx.fillText("SHEIKH AHMADOU BAMBA", W / 2, H - 180);

  ctx.fillStyle = "rgba(240, 237, 229, 0.5)";
  ctx.font = "24px 'Inter', sans-serif";
  ctx.fillText("KHASSIDA — Serigne Touba", W / 2, H - 130);

  ctx.fillStyle = "rgba(212, 175, 55, 0.7)";
  ctx.font = "28px serif";
  ctx.fillText("─── ✦ ───", W / 2, H - 80);

  if (DOM.sharePreview) DOM.sharePreview.classList.add("visible");
  if (DOM.sharePreviewActions) DOM.sharePreviewActions.classList.add("visible");

  showToast(t("toast.imageGenerated"), "🖼️");
  vibrate(20);
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach(word => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });

  if (currentLine) lines.push(currentLine);
  return lines;
}

function downloadShareImage() {
  const canvas = DOM.shareCanvas;
  if (!canvas) return;

  try {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `khassida-${currentBeyit.khassida}-beyit-${currentBeyit.numero}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast(t("toast.imageDownloaded"), "⬇️");
      vibrate(20);
    }, "image/png");
  } catch (error) {
    showToast("Téléchargement impossible", "!");
  }
}

async function shareImageNative() {
  const canvas = DOM.shareCanvas;
  if (!canvas) return;

  try {
    canvas.toBlob(async (blob) => {
      const file = new File(
        [blob],
        `khassida-${currentBeyit.khassida}.png`,
        { type: "image/png" }
      );

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `KHASSIDA — ${currentBeyit.khassida}`,
          text: `${currentBeyit.khassida} • Beyit ${currentBeyit.numero}`
        });
        showToast(t("toast.shared"), "↗");
        closeAllModals();
      } else if (navigator.share) {
        await navigator.share({
          title: `KHASSIDA — ${currentBeyit.khassida}`,
          text: getShareText(currentBeyit, false)
        });
      } else {
        showToast("Partage d'image indisponible", "!");
      }
    }, "image/png");
  } catch (error) {
    if (error?.name !== "AbortError") {
      showToast("Partage annulé", "!");
    }
  }
}

/* =========================================================
📿 ZIKR
========================================================= */

function incrementZikr() {
  zikrCount++;
  zikrTotal++;
  saveStorage();

  if (DOM.zikrCount) {
    DOM.zikrCount.textContent = zikrCount;
    DOM.zikrCount.classList.add("bump");
    setTimeout(() => DOM.zikrCount.classList.remove("bump"), 150);
  }

  vibrate(10);
  updateZikrProgress();

  if (zikrCount === zikrTarget) {
    zikrComplete();
  }

  if (DOM.zikrTotal) {
    DOM.zikrTotal.textContent = zikrTotal.toLocaleString("fr-FR");
  }
}

function resetZikr() {
  if (zikrCount === 0) return;
  if (!window.confirm("Remettre le compteur à zéro ?")) return;

  zikrCount = 0;
  saveStorage();

  if (DOM.zikrCount) DOM.zikrCount.textContent = "0";
  if (DOM.zikrCounter) DOM.zikrCounter.classList.remove("completed");

  updateZikrProgress();
  showToast(t("toast.zikrReset"), "↻");
  vibrate(20);
}

function setZikrType(type) {
  if (!ZIKR_DATA[type]) return;

  zikrType = type;
  zikrTarget = ZIKR_DATA[type].defaultTarget;
  zikrCount = 0;
  saveStorage();

  document.querySelectorAll(".zikr-choice").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.zikr === type);
  });

  updateZikrDisplay();
  vibrate(20);
}

function cycleZikrTarget() {
  const currentIndex = TARGET_OPTIONS.indexOf(zikrTarget);
  const nextIndex = (currentIndex + 1) % TARGET_OPTIONS.length;
  zikrTarget = TARGET_OPTIONS[nextIndex];
  saveStorage();

  updateZikrDisplay();
  showToast(`${t("meta.objective")} : ${zikrTarget}`, "🎯");
}

function updateZikrDisplay() {
  const data = ZIKR_DATA[zikrType];
  if (!data) return;

  if (DOM.zikrCurrentAr) DOM.zikrCurrentAr.textContent = data.ar;
  if (DOM.zikrCurrentLabel) DOM.zikrCurrentLabel.textContent = data.label;
  if (DOM.zikrCount) DOM.zikrCount.textContent = zikrCount;
  if (DOM.zikrTarget) DOM.zikrTarget.textContent = `/ ${zikrTarget}`;
  if (DOM.zikrTargetLabel) DOM.zikrTargetLabel.textContent = `${t("meta.objective")} : ${zikrTarget}`;
  if (DOM.zikrTotal) DOM.zikrTotal.textContent = zikrTotal.toLocaleString("fr-FR");

  document.querySelectorAll(".zikr-choice").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.zikr === zikrType);
  });

  updateZikrProgress();

  if (DOM.zikrCounter) {
    DOM.zikrCounter.classList.toggle("completed", zikrCount >= zikrTarget);
  }
}

function updateZikrProgress() {
  if (!DOM.zikrProgressBar) return;
  const percent = Math.min(100, (zikrCount / zikrTarget) * 100);
  DOM.zikrProgressBar.style.width = `${percent}%`;
}

function zikrComplete() {
  if (DOM.zikrCounter) DOM.zikrCounter.classList.add("completed");
  vibrate([100, 50, 100, 50, 200]);
  showToast(`${t("toast.goalReached")} : ${zikrTarget} ✦`, "🎉");
}

/* =========================================================
FAVORIS
========================================================= */

function toggleFavorite() {
  if (!currentBeyit) return;

  const index = favorites.findIndex(item => item.id === currentBeyit.id);

  if (index === -1) {
    favorites.push(currentBeyit);
    showToast(t("toast.favoriteAdded"), "♡");
  } else {
    favorites.splice(index, 1);
    showToast(t("toast.favoriteRemoved"), "♡");
  }

  saveStorage();
  updateFavoriteButton();
  renderFavorites();
}

function updateFavoriteButton() {
  if (!DOM.favoriteButton || !currentBeyit) return;

  const isFavorite = favorites.some(item => item.id === currentBeyit.id);
  DOM.favoriteButton.classList.toggle("active", isFavorite);

  const icon = DOM.favoriteButton.querySelector(".action-icon");
  if (icon) icon.textContent = isFavorite ? "♥" : "♡";
}

function renderFavorites() {
  if (!DOM.favoritesList) return;
  DOM.favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    if (DOM.favoritesEmpty) DOM.favoritesEmpty.style.display = "block";
    return;
  }

  if (DOM.favoritesEmpty) DOM.favoritesEmpty.style.display = "none";

  [...favorites].reverse().forEach(beyit => {
    const item = document.createElement("div");
    item.className = "favorite-item";
    item.innerHTML = `
      <div class="favorite-arabic" dir="rtl">${escapeHTML(beyit.vers1)}<br>${escapeHTML(beyit.vers2)}</div>
      <div class="favorite-reference">${escapeHTML(beyit.khassida)}</div>
    `;
    item.addEventListener("click", () => {
      currentBeyit = beyit;
      renderBeyit(beyit, false);
      closeAllModals();
      showToast("Beyit chargé", "✦");
    });
    DOM.favoritesList.appendChild(item);
  });
}

/* =========================================================
☪ DU'A
========================================================= */

function renderDuas() {
  const container = DOM.duasList;
  if (!container) return;

  container.innerHTML = "";

  DUAS.forEach(dua => {
    const item = document.createElement("div");
    item.className = "dua-item";

    item.innerHTML = `
      <div class="dua-arabic" dir="rtl">${escapeHTML(dua.arabe)}</div>
      <div class="dua-transcription">${escapeHTML(dua.transcription)}</div>
      <div class="dua-traduction">${escapeHTML(dua.traduction)}</div>
      <div class="dua-usage">${escapeHTML(dua.usage)}</div>
    `;

    container.appendChild(item);
  });
}

/* =========================================================
COPIER
========================================================= */

async function copyBeyit() {
  if (!currentBeyit) return;

  const text = getShareText(currentBeyit, false);

  try {
    await navigator.clipboard.writeText(text);
    showToast(t("toast.copied"), "⧉");
    vibrate(20);
  } catch (error) {
    showToast("Copie impossible", "!");
  }
}

/* =========================================================
MENU
========================================================= */

function openMenu() {
  DOM.sideMenu?.classList.add("open");
  DOM.menuOverlay?.classList.add("visible");
  DOM.menuOverlay?.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  DOM.sideMenu?.classList.remove("open");
  DOM.menuOverlay?.classList.remove("visible");
  DOM.menuOverlay?.setAttribute("aria-hidden", "true");
}

function handleMenuAction(page) {
  closeMenu();
  switch (page) {
    case "home":
      window.scrollTo({ top: 0, behavior: "smooth" });
      break;
    case "favorites":
      openModal(DOM.favoritesModal);
      break;
    case "duas":
      renderDuas();
      openModal(DOM.duasModal);
      break;
    case "zikr":
      updateZikrDisplay();
      openModal(DOM.zikrModal);
      break;
    case "about":
      openModal(DOM.aboutModal);
      break;
    case "settings":
      openSettingsModal();
      break;
  }
}

function handleNavigation(page) {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === page);
  });

  switch (page) {
    case "home":
      closeAllModals();
      break;
    case "favorites":
      openModal(DOM.favoritesModal);
      break;
    case "duas":
      renderDuas();
      openModal(DOM.duasModal);
      break;
    case "zikr":
      updateZikrDisplay();
      openModal(DOM.zikrModal);
      break;
    case "about":
      openModal(DOM.aboutModal);
      break;
    case "settings":
      openSettingsModal();
      break;
  }
}

/* =========================================================
MODALES
========================================================= */

function openModal(modal) {
  if (!modal) return;
  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach(modal => {
    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
  });
}

/* =========================================================
PARAMÈTRES
========================================================= */

function openSettingsModal() {
  renderThemeOptions();
  renderFontOptions();
  renderLanguageOptions();
  syncToggles();
  openModal(DOM.settingsModal);
}

function renderThemeOptions() {
  if (!DOM.themeOptions) return;

  const current = localStorage.getItem(STORAGE_KEYS.theme) || "dark";

  DOM.themeOptions.querySelectorAll("[data-theme-choice]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.themeChoice === current);
  });
}

function setTheme(choice) {
  let theme = choice;

  if (choice === "auto") {
    const hour = new Date().getHours();
    theme = (hour >= 7 && hour < 19) ? "light" : "dark";
  }

  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEYS.theme, choice);

  if (DOM.themeButton) {
    DOM.themeButton.textContent = theme === "dark" ? "☾" : "☀";
  }

  const toastKey = choice === "auto" ? "toast.themeAuto" : (theme === "dark" ? "toast.themeDark" : "toast.themeLight");
  showToast(t(toastKey), theme === "dark" ? "☾" : "☀");
}

function renderFontOptions() {
  if (!DOM.fontOptions) return;

  DOM.fontOptions.querySelectorAll("[data-font]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.font === currentFont);
  });
}

function applyFont() {
  document.body.dataset.font = currentFont;
}

function applyTranscriptionPreference() {
  if (!DOM.transcriptionBlock) return;
  DOM.transcriptionBlock.classList.toggle("hidden", !transcriptionEnabled);
}

function syncToggles() {
  if (DOM.vibrateToggle) DOM.vibrateToggle.checked = vibrateEnabled;
  if (DOM.transcriptionToggle) DOM.transcriptionToggle.checked = transcriptionEnabled;
}

function vibrate(duration = 15) {
  if (!vibrateEnabled) return;
  if (navigator.vibrate) {
    try { navigator.vibrate(duration); } catch (e) {}
  }
}

/* =========================================================
TOAST
========================================================= */

function showToast(message, icon = "✦") {
  if (!DOM.toast || !DOM.toastMessage) return;

  DOM.toastMessage.textContent = message;
  if (DOM.toastIcon) DOM.toastIcon.textContent = icon;
  DOM.toast.classList.add("visible");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    DOM.toast.classList.remove("visible");
  }, 2200);
}

/* =========================================================
THÈME
========================================================= */

function toggleTheme() {
  const current = document.documentElement.dataset.theme || "dark";
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;
  localStorage.setItem(STORAGE_KEYS.theme, next);

  if (DOM.themeButton) {
    DOM.themeButton.textContent = next === "dark" ? "☾" : "☀";
  }

  showToast(
    next === "dark" ? t("toast.themeDark") : t("toast.themeLight"),
    next === "dark" ? "☾" : "☀"
  );
}

function applySavedTheme() {
  const saved = localStorage.getItem(STORAGE_KEYS.theme) || "dark";
  let actual = saved;

  if (saved === "auto") {
    const hour = new Date().getHours();
    actual = (hour >= 7 && hour < 19) ? "light" : "dark";
  }

  document.documentElement.dataset.theme = actual;

  if (DOM.themeButton) {
    DOM.themeButton.textContent = actual === "dark" ? "☾" : "☀";
  }
}

/* =========================================================
ÉCHAPPEMENT HTML
========================================================= */

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = String(value);
  return div.innerHTML;
}

/* =========================================================
RESET FAVORIS
========================================================= */

function resetFavorites() {
  if (!window.confirm("Effacer tous vos favoris ?")) return;

  favorites = [];
  saveStorage();
  renderFavorites();
  updateFavoriteButton();

  showToast(t("toast.favoritesReset"), "🗑️");
}

/* =========================================================
EXPORT
========================================================= */

window.KHASSIDA = {
  next: showNextBeyit,
  current: () => currentBeyit,
  favorites: () => favorites,
  resetFavorites,
  list: () => KHASSIDA_DATA,
  beyits: () => allBeyits,
  duas: () => DUAS,
  zikr: () => ({ count: zikrCount, total: zikrTotal, type: zikrType, target: zikrTarget }),
  resetZikr,
  openShare: openShareModal,
  setLanguage: (lang) => setLanguage(lang),
  getLanguage: () => currentLanguage,
  t
};
