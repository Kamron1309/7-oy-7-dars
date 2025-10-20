import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// JSON import o'rniga to'g'ridan-to'g'ri obyektlar
const enTranslations = {
  "header": {
    "home": "Home",
    "services": "Services",
    "pricing": "Pricing",
    "testimonials": "Testimonials",
    "faq": "FAQ",
    "startJourney": "Start Journey"
  },
  "hero": {
    "title": "One platform meeting all your relocation needs",
    "subtitle": "Get a Global Talent Visa and relocate to the UK. Start your journey now",
    "startButton": "Start your journey now",
    "scoringTest": "Take a scoring test",
    "evaluation": "Evaluate your chances and get detailed feedback from our team"
  },
  "relocatedProfessions": {
    "title": "Who has relocated with the help of Immigram?",
    "subtitle": "You can be next! Start your relocation journey now",
    "startButton": "Start your relocation journey now",
    "developer": "Developer",
    "developerDesc": "Software engineers and developers building innovative solutions",
    "dataScientist": "Data Scientist", 
    "dataScientistDesc": "AI and machine learning experts driving data innovation",
    "uiDesigner": "UI Designer",
    "uiDesignerDesc": "Creative designers crafting exceptional user experiences",
    "gameDeveloper": "Game Developer",
    "gameDeveloperDesc": "Gaming professionals creating immersive digital worlds",
    "productManager": "Product Manager",
    "productManagerDesc": "Strategic leaders driving product vision and execution"
  },
  "features": {
    "title": "Immigration made easy",
    "subtitle": "Urelocation simplifies the visa process for you and your international employees. We'll handle the fine details so you can focus on other tasks",
    "fastService": {
      "title": "Fast Service",
      "description": "We research, build, submit, and get approved visas in a fraction of the time while working around your timelines."
    },
    "control": {
      "title": "Full control and visibility",
      "description": "Our intuitive platform guides you and your employee through every step of the immigration process, with at-a-glance status updates along the way."
    },
    "managers": {
      "title": "Personalized case managers",
      "description": "Feel confident with our team of global mobility experts. They're on hand to answer all your questions, letting you focus on what really matters."
    }
  },
  "process": {
    "title": "What is URElocation Platform?",
    "subtitle": "Full transparency with live dashboard overviewing the full process",
    "welcome": "Good morning, Yevhen!",
    "welcomeDesc": "We collected all steps below, see progress and fill out forms",
    "externalProfile": "External profile",
    "externalProfileDesc": "Describe your contribution to tech industry",
    "professionalJourney": "Professional journey",
    "professionalJourneyDesc": "Describe your contribution to tech industry",
    "references": "References",
    "referencesDesc": "Describe your contribution to tech industry"
  },
  "pricing": {
    "title": "How can I start my Global Talent Visa case?",
    "standard": {
      "title": "Standard Plan",
      "installment1": "Paid in 2 instalments — pre-payment when signing the contract and post-payment after receiving the Endorsement",
      "installment2": "Paid in 6 fine equal instalments first of which is payable when signing the contract",
      "refund": "In cases of the second failed attempt to get the Endorsement, you are entitled to a 70% refund",
      "discount": "Pay the entire amount and receive an extra 5% discount"
    },
    "basic": {
      "title": "Basic Plan",
      "installment1": "Paid in 2 instalments — pre-payment when signing the contract and post-payment after receiving the Endorsement",
      "installment2": "Paid in 6 fine equal instalments first of which is payable when signing the contract",
      "discount": "Pay the entire amount and receive an extra 10% discount",
      "nonRefundable": "Non-refundable rate"
    },
    "choose": "Choose"
  },
  "testimonials": {
    "title": "Testimonials",
    "position": "Co-Founder CEO",
    "content1": "I was referred to Immigram by my Ukrainian colleague. What has surprised me the most? I was amazed how the Immigram Team understood the twists and turns of AI and algorithms I worked on at companies like Goldman Sachs and Nomura",
    "content2": "I have a broad experience in academic research with more than 30 published journal papers and book chapters related to Data Science, Machine Learning, Statistical Methods, Optimization, and Finance. I was surprised that Immigram Team were able to compile my research papers in a way that you could tell they comprehended my scientific activity and not just bibliographic it. At the end of the day, I came to Immigram for a visa and got the visa"
  },
  "faq": {
    "title": "FAQ",
    "question1": "What does a Global Talent Visa offer?",
    "answer1": "The Global Talent Visa offers the opportunity for talented individuals in digital technology fields to work and live in the UK.",
    "question2": "Who can apply for the Global Talent Visa?",
    "answer2": "Professionals in digital technology fields such as developers, data scientists, UI designers, game developers, and product managers can apply.",
    "question3": "What documents are required for Global Talent Visa?",
    "answer3": "Global Talent candidates in digital tech will need to attach a completed Visa application form, which includes:",
    "documents": {
      "statement": "A Personal Statement",
      "cv": "A C.V. containing your experience, contributions to the relevant field, publications, etc",
      "recommendations": "At least 3 letters of recommendation from recognised leaders in the tech industry",
      "evidence": "Up to 10 pieces of evidence in relation to the relevant Eligibility Criteria"
    },
    "question4": "What does Immigram offer?",
    "services": {
      "service": "Service",
      "description": "Description",
      "relocation": "Relocation",
      "relocationDesc": "All immigration advisers provided by GSC-regulated partner"
    }
  },
  "footer": {
    "description": "We simplify the visa process for you and your international employees.",
    "menu": "Main menu",
    "address": "Address",
    "follow": "Follow us",
    "rights": "All rights reserved."
  }
};

const ruTranslations = {
  "header": {
    "home": "Главная",
    "services": "Услуги",
    "pricing": "Цены",
    "testimonials": "Отзывы",
    "faq": "Вопросы-Ответы",
    "startJourney": "Начать путь"
  },
  "hero": {
    "title": "Единая платформа для всех ваших потребностей в переезде",
    "subtitle": "Получите визу Global Talent и переезжайте в Великобританию. Начните свой путь сейчас",
    "startButton": "Начните свой путь сейчас",
    "scoringTest": "Пройдите оценочный тест",
    "evaluation": "Оцените свои шансы и получите подробную обратную связь от нашей команды"
  },
  "relocatedProfessions": {
    "title": "Кто переехал с помощью Immigram?",
    "subtitle": "Вы можете быть следующими! Начните свой путь переезда сейчас",
    "startButton": "Начните свой путь переезда сейчас",
    "developer": "Разработчик",
    "developerDesc": "Инженеры-программисты и разработчики, создающие инновационные решения",
    "dataScientist": "Специалист по данным",
    "dataScientistDesc": "Эксперты по ИИ и машинному обучению, продвигающие инновации в данных",
    "uiDesigner": "UI Дизайнер",
    "uiDesignerDesc": "Креативные дизайнеры, создающие исключительный пользовательский опыт",
    "gameDeveloper": "Разработчик игр",
    "gameDeveloperDesc": "Профессионалы игровой индустрии, создающие захватывающие цифровые миры",
    "productManager": "Менеджер по продукту",
    "productManagerDesc": "Стратегические лидеры, определяющие видение и реализацию продукта"
  },
  "features": {
    "title": "Иммиграция стала проще",
    "subtitle": "Urelocation упрощает процесс получения визы для вас и ваших международных сотрудников. Мы позаботимся о мелочах, чтобы вы могли сосредоточиться на других задачах",
    "fastService": {
      "title": "Быстрый сервис",
      "description": "Мы исследуем, создаем, подаем и получаем одобренные визы за долю времени, работая в соответствии с вашими сроками."
    },
    "control": {
      "title": "Полный контроль и видимость",
      "description": "Наша интуитивно понятная платформа проведет вас и вашего сотрудника через каждый этап иммиграционного процесса с обновлениями статуса на каждом шагу."
    },
    "managers": {
      "title": "Персональные менеджеры",
      "description": "Чувствуйте уверенность с нашей командой экспертов по глобальной мобильности. Они готовы ответить на все ваши вопросы, позволяя вам сосредоточиться на том, что действительно важно."
    }
  },
  "process": {
    "title": "Что такое платформа URElocation?",
    "subtitle": "Полная прозрачность с живой панелью управления, отображающей весь процесс",
    "welcome": "Доброе утро, Евгений!",
    "welcomeDesc": "Мы собрали все шаги ниже, следите за прогрессом и заполняйте формы",
    "externalProfile": "Внешний профиль",
    "externalProfileDesc": "Опишите ваш вклад в технологическую индустрию",
    "professionalJourney": "Профессиональный путь",
    "professionalJourneyDesc": "Опишите ваш вклад в технологическую индустрию",
    "references": "Рекомендации",
    "referencesDesc": "Опишите ваш вклад в технологическую индустрию"
  },
  "pricing": {
    "title": "Как я могу начать процесс получения визы Global Talent?",
    "standard": {
      "title": "Стандартный план",
      "installment1": "Оплата в 2 рассрочки - предоплата при подписании контракта и оплата после получения Endorsement",
      "installment2": "Оплата в 6 равных рассрочек, первая из которых оплачивается при подписании контракта",
      "refund": "В случае второй неудачной попытки получить Endorsement, вы имеете право на возврат 70% суммы",
      "discount": "Оплатите полную сумму и получите дополнительную 5% скидку"
    },
    "basic": {
      "title": "Базовый план",
      "installment1": "Оплата в 2 рассрочки - предоплата при подписании контракта и оплата после получения Endorsement",
      "installment2": "Оплата в 6 равных рассрочек, первая из которых оплачивается при подписании контракта",
      "discount": "Оплатите полную сумму и получите дополнительную 10% скидку",
      "nonRefundable": "Невозвратный тариф"
    },
    "choose": "Выбрать"
  },
  "testimonials": {
    "title": "Отзывы",
    "position": "Сооснователь CEO",
    "content1": "Меня направил в Immigram мой украинский коллега. Что меня больше всего удивило? Я был поражен тем, как команда Immigram понимала все тонкости ИИ и алгоритмов, над которыми я работал в таких компаниях, как Goldman Sachs и Nomura",
    "content2": "У меня большой опыт академических исследований с более чем 30 опубликованными журнальными статьями и главами книг, связанных с Data Science, Machine Learning, Statistical Methods, Optimization, and Finance. Я был удивлен, что команда Immigram смогла составить мои исследовательские работы таким образом, что было видно, что они понимают мою научную деятельность, а не просто библиографируют ее. В конечном счете, я пришел в Immigram за визой и получил визу"
  },
  "faq": {
    "title": "Часто задаваемые вопросы",
    "question1": "Что предлагает виза Global Talent?",
    "answer1": "Визы Global Talent предлагают возможность талантливым специалистам в области цифровых технологий работать и жить в Великобритании.",
    "question2": "Кто может подать заявку на визу Global Talent?",
    "answer2": "Профессионалы в области цифровых технологий, такие как разработчики, специалисты по данным, дизайнеры интерфейсов, разработчики игр и менеджеры по продукту, могут подать заявку.",
    "question3": "Какие документы требуются для визы Global Talent?",
    "answer3": "Кандидатам на визу Global Talent в цифровых технологиях необходимо приложить заполненную форму заявления на визу, которая включает:",
    "documents": {
      "statement": "Личное заявление",
      "cv": "Резюме с вашим опытом, вкладом в соответствующую область, публикациями и т.д.",
      "recommendations": "Как минимум 3 рекомендательных письма от признанных лидеров в технологической индустрии",
      "evidence": "До 10 доказательств, относящихся к соответствующим критериям приемлемости"
    },
    "question4": "Что предлагает Immigram?",
    "services": {
      "service": "Услуга",
      "description": "Описание",
      "relocation": "Переезд",
      "relocationDesc": "Все иммиграционные консультанты предоставляются партнером, регулируемым GSC"
    }
  },
  "footer": {
    "description": "Мы упрощаем процесс получения визы для вас и ваших международных сотрудников.",
    "menu": "Главное меню",
    "address": "Адрес",
    "follow": "Подпишитесь на нас",
    "rights": "Все права защищены."
  }
};

const uzTranslations = {
  "header": {
    "home": "Bosh sahifa",
    "services": "Xizmatlar",
    "pricing": "Narxlar",
    "testimonials": "Sharhlar",
    "faq": "Savol-Javob",
    "startJourney": "Safar boshlash"
  },
  "hero": {
    "title": "Barcha ko'chish ehtiyojlaringizni qondiradigan yagona platforma",
    "subtitle": "Global Talent vizasini oling va Buyuk Britaniyaga ko'ching. Safaringizni hozir boshlang",
    "startButton": "Safaringizni hozir boshlang",
    "scoringTest": "Ball testini topshiring",
    "evaluation": "Imkoniyatlaringizni baholang va jamoamizdan batafsil fikr oling"
  },
  "relocatedProfessions": {
    "title": "Immigram yordami bilan kimlar ko'chib o'tdi?",
    "subtitle": "Siz keyingi bo'lishingiz mumkin! Ko'chish safaringizni hozir boshlang",
    "startButton": "Ko'chish safaringizni hozir boshlang",
    "developer": "Dasturchi",
    "developerDesc": "Innovatsion yechimlar yaratadigan dastur muhandislari va dasturchilar",
    "dataScientist": "Ma'lumotlar olimi",
    "dataScientistDesc": "Ma'lumotlar innovatsiyasini olib boradigan Sun'iy Intellekt va mashina o'rganish mutaxassislari",
    "uiDesigner": "UI Dizayner",
    "uiDesignerDesc": "Ajoyib foydalanuvchi tajribasini yaratadigan ijodiy dizaynerlar",
    "gameDeveloper": "O'yin Ishlab Chiquvchi",
    "gameDeveloperDesc": "Jalb qiluvchi raqamli dunyolarni yaratadigan o'yin mutaxassislari",
    "productManager": "Mahsulot Menejeri",
    "productManagerDesc": "Mahsulot vizyonini va amalga oshirishni boshqaradigan strategik rahbarlar"
  },
  "features": {
    "title": "Immigratsiya osonlashtirildi",
    "subtitle": "Urelocation siz va xalqaro xodimlaringiz uchun viza jarayonini soddalashtiradi. Biz nozik tafsilotlarni hal qilamiz, siz boshqa vazifalaga e'tibor qaratishingiz mumkin",
    "fastService": {
      "title": "Tez Xizmat",
      "description": "Biz sizning vaqt jadvalingizga moslashgan holda, vizalarni tezroq tekshiramiz, tuzamiz, topshiramiz va tasdiqlaymiz."
    },
    "control": {
      "title": "To'liq nazorat va ko'rinish",
      "description": "Bizning intuitiv platformamiz siz va xodimingizni immigratsiya jarayonining har bir bosqichida boshqaradi, yo'l davomida holat yangilanishlarini ko'rsatadi."
    },
    "managers": {
      "title": "Shaxsiylashtirilgan ish menejerlari",
      "description": "Bizning global mobil mutaxassislar jamoasi bilan ishonch his qiling. Ular barcha savollaringizga javob berish uchun tayyor, siz esa asosiysiga e'tibor qaratishingiz mumkin."
    }
  },
  "process": {
    "title": "URElocation Platformasi nima?",
    "subtitle": "To'liq shaffoflik va butun jarayonni ko'rsatadigan jonli boshqaruv paneli",
    "welcome": "Xayrli tong, Yevhen!",
    "welcomeDesc": "Biz barcha bosqichlarni pastda to'pladik, taraqqiyotni ko'ring va shakllarni to'ldiring",
    "externalProfile": "Tashqi profil",
    "externalProfileDesc": "Texnologiya sohasidagi hissangizni tavsiflang",
    "professionalJourney": "Kasbiy safar",
    "professionalJourneyDesc": "Texnologiya sohasidagi hissangizni tavsiflang",
    "references": "Ma'lumotnomalar",
    "referencesDesc": "Texnologiya sohasidagi hissangizni tavsiflang"
  },
  "pricing": {
    "title": "Global Talent viza arizasini qanday boshlashim mumkin?",
    "standard": {
      "title": "Standart Reja",
      "installment1": "2 ta bo'lib to'lov - shartnoma imzolanganda oldindan to'lov va Tasdiq olgandan keyin to'lov",
      "installment2": "6 ta teng bo'lib to'lov, birinchisi shartnoma imzolanganda to'lanadi",
      "refund": "Tasdiq olishning ikkinchi muvaffaqiyatsiz urinishi holatida, siz 70% qaytarib olish huquqiga egasiz",
      "discount": "Butun miqdorni to'lang va qo'shimcha 5% chegirma oling"
    },
    "basic": {
      "title": "Asosiy Reja",
      "installment1": "2 ta bo'lib to'lov - shartnoma imzolanganda oldindan to'lov va Tasdiq olgandan keyin to'lov",
      "installment2": "6 ta teng bo'lib to'lov, birinchisi shartnoma imzolanganda to'lanadi",
      "discount": "Butun miqdorni to'lang va qo'shimcha 10% chegirma oling",
      "nonRefundable": "Qaytarib bo'lmaydigan stavka"
    },
    "choose": "Tanlash"
  },
  "testimonials": {
    "title": "Sharhlar",
    "position": "Hamkash Asoschi Bosh Direktor",
    "content1": "Meni Immigramga ukrainalik hamkasbim tavsiya qilgan. Menga eng ko'p nima ajablantirdi? Men Immigram jamoasi Goldman Sachs va Nomura kabi kompaniyalarda ishlagan Sun'iy Intellekt va algoritmlarning murakkab jihatlarini qanday tushunishlariga hayron qoldim",
    "content2": "Mening Data Science, Machine Learning, Statistical Methods, Optimization, and Finance sohalarida 30 dan ortiq nashr etilgan jurnal maqolalari va kitob boblarini o'z ichiga olgan keng akademik tajribam bor. Immigram jamoasi mening ilmiy faoliyatimni nafaqat bibliografik tarzda, balki tushunganlarini ko'rsatadigan tarzda tadqiqot hujjatlarimni tuzishlari meni hayratda qoldirdi. Oxirida, men Immigramga viza olish uchun keldim va vizani oldim"
  },
  "faq": {
    "title": "Ko'p So'raladigan Savollar",
    "question1": "Global Talent vizasi nimalarni taklif qiladi?",
    "answer1": "Global Talent vizasi raqamli texnologiya sohasidagi iste'dodli shaxslarga Buyuk Britaniyada ishlash va yashash imkoniyatini beradi.",
    "question2": "Kimlar Global Talent vizasiga ariza berishi mumkin?",
    "answer2": "Dasturchilar, ma'lumotlar olimlari, UI dizaynerlari, o'yin ishlab chiquvchilari va mahsulot menejerlari kabi raqamli texnologiya sohasidagi mutaxassislar ariza berishi mumkin.",
    "question3": "Global Talent vizasi uchun qanday hujjatlar kerak?",
    "answer3": "Raqamli texnologiya sohasidagi Global Talent nomzodlari to'ldirilgan Viza ariza shaklini ilova qilishlari kerak, bular:",
    "documents": {
      "statement": "Shaxsiy bayonot",
      "cv": "Tajribangiz, tegishli sohaga qo'shgan hissangiz, nashrlaringiz va boshqalarni o'z ichiga olgan CV",
      "recommendations": "Texnologiya sohasidagi taniqli etakchilardan kamida 3 ta tavsiya xati",
      "evidence": "Tegishli malaka mezonlariga oid 10 gacha bo'lgan dalillar"
    },
    "question4": "Immigram nima taklif qiladi?",
    "services": {
      "service": "Xizmat",
      "description": "Tavsif",
      "relocation": "Ko'chish",
      "relocationDesc": "GSC tomonidan tartibga solingan hamkor tomonidan taqdim etiladigan barcha immigratsiya maslahatchilari"
    }
  },
  "footer": {
    "description": "Biz siz va xalqaro xodimlaringiz uchun viza jarayonini soddalashtiramiz.",
    "menu": "Asosiy menyu",
    "address": "Manzil",
    "follow": "Bizni kuzating",
    "rights": "Barcha huquqlar himoyalangan."
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ru: { translation: ruTranslations },
      uz: { translation: uzTranslations }
    },
    lng: 'en', // default til
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;