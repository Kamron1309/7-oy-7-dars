// script.js
// Til o'zgartirish funksiyalari
const translations = {
    uz: {
        heroTitle: "Barcha ko'chish ehtiyojlaringizni qondiradigan yagona platforma",
        heroSubtitle: "Global Talent vizasini oling va Buyuk Britaniyaga ko'ching.<br>Hozir safaringizni boshlang",
        takeTest: "Test topshiring",
        evaluateChances: "Imkoniyatlaringizni baholang va jamoamizdan batafsil fikr oling",
        startJourney: "Safaringizni boshlang",
        immigrationMadeEasy: "Immigratsiya osonlashtirildi",
        serviceDescription: "Urelocation siz va xalqaro xodimlaringiz uchun viza jarayonini soddalashtiradi.<br>Biz nozik tafsilotlarni hal qilamiz, shunda siz boshqa vazifalarga e'tibor qaratishingiz mumkin",
        fastService: "Tez xizmat",
        fastServiceDesc: "Biz sizning vaqt jadvalingiz bo'yicha ishlayotganimizda, viza so'rovlarini tekshiramiz, yaratamiz, topshiramiz va maqullaymiz.",
        fullControl: "To'liq nazorat va ko'rinish",
        fullControlDesc: "Bizning intuitiv platformamiz siz va xodimingizni immigratsiya jarayonining har bir bosqichida boshqaradi, yo'l davomida holat yangilanishlarini bir ko'rinishda ko'rsatadi.",
        personalManagers: "Shaxsiy mas'ul menejerlar",
        personalManagersDesc: "Bizning global mobil mutaxassislar jamoasi bilan ishonch bilan ishlang. Ular barcha savollaringizga javob berish uchun tayyor, siz esa haqiqatdan muhim narsalarga e'tibor qaratishingiz mumkin.",
        whoRelocated: "Immigram yordami bilan kimlar ko'chdi?",
        youCanBeNext: "Siz keyingi bo'lishingiz mumkin! Ko'chish safaringizni hozir boshlang",
        developer: "Dasturchi",
        dataScientist: "Ma'lumotlar olimi",
        uiDesigner: "UI dizayner",
        gameDeveloper: "O'yin dasturchisi",
        productManager: "Mahsulot menejeri",
        howToStart: "Global Talent Visa ishimi qanday boshlashim mumkin?",
        pricingDescription: "Platformamizda afzal ko'rgan yo'lingizni tanlang:",
        paymentOption1: "2 ta to'lovda - shartnoma imzolashda oldindan to'lov va Endowment olingandan keyin to'lov",
        paymentOption2: "6 ta teng to'lovda - birinchisi shartnoma imzolashda to'lanadi va qolgan to'rt to'lov bir oy oralig'ida to'lanadi",
        refundPolicy: "*Endowment olishning ikkinchi muvaffaqiyatsiz urinishi holatida, siz to'lov miqdorining 70% qaytarib olish huquqiga egasiz.",
        discount5: "**Butun miqdorni to'lang va qo'shimcha 5% chegirma oling.",
        discount10: "*Butun miqdorni to'lang va qo'shimcha 10% chegirma oling.",
        nonRefundable: "*Qaytarib bo'lmaydigan tarif",
        choose: "Tanlash",
        whatIsPlatform: "URElocation Platformasi nima?",
        fullTransparency: "To'liq shaffoflik",
        dashboardDesc: "Butun jarayonni ko'rib chiqadigan jonli boshqaruv paneli",
        clearTimeline: "Aniq vaqt jadvali",
        timelineDesc: "Bosqichlar taraqqiyotini ko'rsatadigan aniq jadval",
        goodMorning: "Xayrli tong, Yevhen!",
        dashboardSubtitle: "Biz barcha bosqichlarni pastda to'pladik, taraqqiyotni ko'ring va shakllarni to'ldiring",
        externalProfile: "Tashqi profil",
        profileDesc: "Texnologiya sanoatidagi hissangizni tavsiflang",
        professionalJourney: "Professional safar",
        journeyDesc: "Texnologiya sanoatidagi hissangizni tavsiflang",
        references: "Ma'lumotnomalar",
        referencesDesc: "Texnologiya sanoatidagi hissangizni tavsiflang",
        notSureEligible: "Haqiqatan ham mos kelasizmi deb ishonmayapsizmi?",
        calculateChances: "Imkoniyatlaringizni hisoblang va jamoamizdan batafsil fikr oling",
        testimonials: "Sharhlar",
        ceo: "Co-Founder CEO",
        testimonialText: "Men Immigramga ukrainalik hamkasbim tavsiya qilgan. Menga eng kutilmagan nima bo'ldi? Men Immigram jamoasi Goldman Sachs va Nomura kabi kompaniyalarda ishlagan AI va algoritmlarning burilishlarini qanday tushunishlariga hayron qoldim.",
        testimonialText2: "Menda Data Science, Machine Learning, Statistik usullar, Optimizatsiya va Moliya bilan bog'liq 30 dan ortiq nashr etilgan jurnal maqolalari va kitob boblariga ega keng akademik tadqiqot tajribam bor. Men Immigram jamoasi mening tadqiqot maqolalarimni ular mening ilmiy faoliyatimni tushunganligini aytishim mumkin bo'lgan tarzda tuzishga muvaffaq bo'lishlariga hayron qoldim, shunchaki bibliografiya emas. Oxir-oqibat, men Immigramga viza olish uchun keldim va vizani oldim.",
        whatDoesVisaOffer: "Global Talent Visa nima taklif qiladi?",
        visaRequirements: "Raqamli texnologiyalar sohasidagi Global Talent nomzodlari quyidagilarni o'z ichiga olgan to'ldirilgan Viza arizasi shaklini ilova qilishlari kerak:",
        personalStatement: "Shaxsiy bayonot;",
        cv: "Tajribangizni, tegishli sohaga qo'shgan hissangizni, nashrlaringizni va boshqalarni o'z ichiga olgan CV;",
        recommendations: "Texnologiya sanoatining tan olingan yetakchilaridan kamida 3 ta tavsiya xati;",
        evidence: "Tegishli malaka mezonlari bo'yicha 10 gacha dalil.",
        whoCanApply: "Kim Global Talent Viza uchun ariza berishi mumkin?",
        whoCanApplyDesc: "Texnologiya sohasida malakali mutaxassislar, tadqiqotchilar va rahbarlar Global Talent Viza uchun ariza berishlari mumkin.",
        whatDoesImmigramOffer: "Immigram nima taklif qiladi?",
        immigramOfferDesc: "Immigram Global Talent Viza olish jarayonida professional yordam taklif qiladi, shu jumladan hujjatlarni tayyorlash, ariza topshirish va maslahat xizmatlari.",
        regulatedPartner: "GSC tomonidan tartibga solingan hamkor tomonidan taqdim etilgan barcha immigratsiya maslahatchilari. Ref has (2020/2022)",
        mainMenu: "Asosiy menyu",
        home: "Bosh sahifa",
        address: "Manzil",
        followUs: "Bizni kuzatib boring",
        linkedin: "In"
    },
    ru: {
        heroTitle: "Единая платформа для всех ваших потребностей в переезде",
        heroSubtitle: "Получите визу Global Talent и переезжайте в Великобританию.<br>Начните свое путешествие сейчас",
        takeTest: "Пройти тест",
        evaluateChances: "Оцените свои шансы и получите подробный отзыв от нашей команды",
        startJourney: "Начать путешествие",
        immigrationMadeEasy: "Иммиграция упрощена",
        serviceDescription: "Urelocation упрощает процесс получения визы для вас и ваших международных сотрудников.<br>Мы решаем сложные детали, чтобы вы могли сосредоточиться на других задачах",
        fastService: "Быстрый сервис",
        fastServiceDesc: "Мы проверяем, создаем, подаем и утверждаем запросы на визу, работая по вашему графику.",
        fullControl: "Полный контроль и видимость",
        fullControlDesc: "Наша интуитивная платформа направляет вас и вашего сотрудника на каждом этапе иммиграционного процесса, показывая обновления статуса на одном экране.",
        personalManagers: "Персональные ответственные менеджеры",
        personalManagersDesc: "Работайте с уверенностью с нашей глобальной командой мобильных специалистов. Они готовы ответить на все ваши вопросы, а вы можете сосредоточиться на действительно важных вещах.",
        whoRelocated: "Кто переехал с помощью Immigram?",
        youCanBeNext: "Вы можете стать следующим! Начните свой переезд сейчас",
        developer: "Разработчик",
        dataScientist: "Специалист по данным",
        uiDesigner: "UI дизайнер",
        gameDeveloper: "Разработчик игр",
        productManager: "Менеджер по продукту",
        howToStart: "Как я могу начать работу с визой Global Talent?",
        pricingDescription: "Выберите предпочтительный путь на нашей платформе:",
        paymentOption1: "2 платежа - предоплата при подписании контракта и платеж после получения Endorsement",
        paymentOption2: "6 равных платежей - первый оплачивается при подписании контракта, а остальные четыре платежа производятся с интервалом в один месяц",
        refundPolicy: "*В случае второй неудачной попытки получения Endorsement, вы имеете право на возврат 70% суммы платежа.",
        discount5: "**Оплатите полную сумму и получите дополнительную 5% скидку.",
        discount10: "*Оплатите полную сумму и получите дополнительную 10% скидку.",
        nonRefundable: "*Невозвратный тариф",
        choose: "Выбрать",
        whatIsPlatform: "Что такое платформа URElocation?",
        fullTransparency: "Полная прозрачность",
        dashboardDesc: "Живая панель управления для просмотра всего процесса",
        clearTimeline: "Четкий график",
        timelineDesc: "Четкий график, показывающий прогресс этапов",
        goodMorning: "Доброе утро, Евгений!",
        dashboardSubtitle: "Мы собрали все этапы ниже, просмотрите прогресс и заполните формы",
        externalProfile: "Внешний профиль",
        profileDesc: "Опишите свой вклад в технологическую индустрию",
        professionalJourney: "Профессиональный путь",
        journeyDesc: "Опишите свой вклад в технологическую индустрию",
        references: "Рекомендации",
        referencesDesc: "Опишите свой вклад в технологическую индустрию",
        notSureEligible: "Не уверены, что подходите?",
        calculateChances: "Рассчитайте свои шансы и получите подробный отзыв от нашей команды",
        testimonials: "Отзывы",
        ceo: "Сооснователь CEO",
        testimonialText: "Мне порекомендовал Immigram мой украинский коллега. Что меня больше всего удивило? Я был поражен тем, как команда Immigram понимает повороты AI и алгоритмов, работая в таких компаниях, как Goldman Sachs и Nomura.",
        testimonialText2: "У меня есть обширный опыт академических исследований с более чем 30 опубликованными журнальными статьями и главами книг, связанными с Data Science, Machine Learning, статистическими методами, оптимизацией и финансами. Я был поражен тем, как команде Immigram удалось структурировать мои исследовательские статьи таким образом, что можно сказать, что они поняли мою научную деятельность, а не просто библиографию. В конечном счете, я пришел в Immigram за визой и получил визу.",
        whatDoesVisaOffer: "Что предлагает виза Global Talent?",
        visaRequirements: "Кандидаты на Global Talent в области цифровых технологий должны предоставить заполненную форму заявления на визу, включающую:",
        personalStatement: "Личное заявление;",
        cv: "Резюме, включающее ваш опыт, вклад в соответствующую область, публикации и другое;",
        recommendations: "Как минимум 3 рекомендательных письма от признанных лидеров технологической индустрии;",
        evidence: "До 10 доказательств по соответствующим критериям квалификации.",
        whoCanApply: "Кто может подать заявку на визу Global Talent?",
        whoCanApplyDesc: "Квалифицированные специалисты, исследователи и руководители в области технологий могут подать заявку на визу Global Talent.",
        whatDoesImmigramOffer: "Что предлагает Immigram?",
        immigramOfferDesc: "Immigram предлагает профессиональную помощь в процессе получения визы Global Talent, включая подготовку документов, подачу заявления и консультационные услуги.",
        regulatedPartner: "Все иммиграционные консультации предоставляются партнером, регулируемым GSC. Ref has (2020/2022)",
        mainMenu: "Главное меню",
        home: "Главная",
        address: "Адрес",
        followUs: "Следите за нами",
        linkedin: "In"
    },
    en: {
        heroTitle: "The single platform for all your relocation needs",
        heroSubtitle: "Get the Global Talent visa and relocate to the UK.<br>Start your journey now",
        takeTest: "Take the test",
        evaluateChances: "Evaluate your chances and get detailed feedback from our team",
        startJourney: "Start your journey",
        immigrationMadeEasy: "Immigration made easy",
        serviceDescription: "Urelocation simplifies the visa process for you and your international staff.<br>We handle the intricate details so you can focus on other tasks",
        fastService: "Fast service",
        fastServiceDesc: "We review, create, submit and approve visa requests working to your timeline.",
        fullControl: "Full control and visibility",
        fullControlDesc: "Our intuitive platform guides you and your employee through every stage of the immigration process, showing status updates at a glance along the way.",
        personalManagers: "Personal accountable managers",
        personalManagersDesc: "Work with confidence with our global team of mobile specialists. They're ready to answer all your questions while you focus on what really matters.",
        whoRelocated: "Who relocated with Immigram?",
        youCanBeNext: "You can be next! Start your relocation now",
        developer: "Developer",
        dataScientist: "Data Scientist",
        uiDesigner: "UI Designer",
        gameDeveloper: "Game Developer",
        productManager: "Product Manager",
        howToStart: "How can I start my Global Talent Visa journey?",
        pricingDescription: "Choose your preferred path on our platform:",
        paymentOption1: "2 payments - upfront payment upon signing the contract and payment after Endorsement received",
        paymentOption2: "6 equal payments - first one paid upon signing the contract and the remaining four payments are made one month apart",
        refundPolicy: "*In case of the second unsuccessful attempt of getting Endorsement, you are entitled to a refund of 70% of the payment amount.",
        discount5: "**Pay the full amount and get an additional 5% discount.",
        discount10: "*Pay the full amount and get an additional 10% discount.",
        nonRefundable: "*Non-refundable rate",
        choose: "Choose",
        whatIsPlatform: "What is URElocation Platform?",
        fullTransparency: "Full transparency",
        dashboardDesc: "Live dashboard to review the entire process",
        clearTimeline: "Clear timeline",
        timelineDesc: "Clear timeline showing stages progress",
        goodMorning: "Good morning, Yevhen!",
        dashboardSubtitle: "We've gathered all the stages below, review the progress and fill in the forms",
        externalProfile: "External profile",
        profileDesc: "Describe your contribution to the tech industry",
        professionalJourney: "Professional journey",
        journeyDesc: "Describe your contribution to the tech industry",
        references: "References",
        referencesDesc: "Describe your contribution to the tech industry",
        notSureEligible: "Not sure if you're eligible?",
        calculateChances: "Calculate your chances and get detailed feedback from our team",
        testimonials: "Testimonials",
        ceo: "Co-Founder CEO",
        testimonialText: "I was recommended Immigram by my Ukrainian colleague. What was the most unexpected for me? I was amazed by how the Immigram team understands the twists of AI and algorithms having worked in companies like Goldman Sachs and Nomura.",
        testimonialText2: "I have extensive academic research experience with over 30 published journal articles and book chapters related to Data Science, Machine Learning, Statistical methods, Optimization and Finance. I was amazed by how the Immigram team managed to structure my research papers in a way that I can say they understood my scientific activity, not just bibliography. Ultimately, I came to Immigram for the visa and got the visa.",
        whatDoesVisaOffer: "What does the Global Talent Visa offer?",
        visaRequirements: "Global Talent candidates in Digital Technology must submit a completed Visa application form including:",
        personalStatement: "Personal statement;",
        cv: "CV including your experience, contribution to the relevant field, publications and others;",
        recommendations: "At least 3 letters of recommendation from recognized leaders of the tech industry;",
        evidence: "Up to 10 pieces of evidence against the relevant qualifying criteria.",
        whoCanApply: "Who can apply for the Global Talent Visa?",
        whoCanApplyDesc: "Skilled professionals, researchers and leaders in the technology field can apply for the Global Talent Visa.",
        whatDoesImmigramOffer: "What does Immigram offer?",
        immigramOfferDesc: "Immigram offers professional assistance in the Global Talent Visa obtaining process, including document preparation, application submission and advisory services.",
        regulatedPartner: "All immigration advice is presented by a partner regulated by the GSC. Ref has (2020/2022)",
        mainMenu: "Main menu",
        home: "Home",
        address: "Address",
        followUs: "Follow us",
        linkedin: "In"
    }
};

// Hozirgi til
let currentLang = 'uz';

// Tilni o'zgartirish funksiyasi
function changeLanguage(lang) {
    currentLang = lang;
    
    // HTML til atributini o'zgartirish
    document.documentElement.lang = lang;
    
    // Barcha elementlarni yangilash
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'checkbox') {
                // Checkbox label uchun
                const label = document.querySelector(`label[for="${element.id}"]`);
                if (label) {
                    label.textContent = translations[lang][key];
                }
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Til tugmalarini yangilash
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Til tugmalariga hodisa qo'shish
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// FAQ bo'limini ochish/yopish
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Boshlang'ich tilni o'rnatish
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('uz');
    
    // Barcha FAQ javoblarini yopish
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
});