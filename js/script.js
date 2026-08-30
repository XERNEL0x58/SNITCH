// ============================================================
// Data — question bank (20 questions, 10 shown per round)
// ============================================================
const questionBank = [
    // ---- فئة: الشغل والمدير ----
    {
        category: "work",
        text: "لو سمعت زميلك بيتكلم عن المدير بشكل سلبي، هتعمل إيه؟",
        options: [
            { text: "أنقل الكلام للمدير فورًا", score: 10 },
            { text: "ألمّح للمدير إن في كلام بيتقال", score: 7.5 },
            { text: "ممكن أحكي لزميل تاني", score: 5 },
            { text: "أطنش الموضوع", score: 2.5 },
            { text: "أعتبره كلام خاص ومقولوش لحد", score: 0 }
        ]
    },
    {
        category: "work",
        text: "لو عرفت إن زميلك عمل مخالفة بسيطة في الشغل؟",
        options: [
            { text: "أبلغ المدير فورًا", score: 10 },
            { text: "أستنى وأشوف الموضوع هيحصل فيه إيه", score: 7.5 },
            { text: "أقول لزميل تاني", score: 5 },
            { text: "أنبه زميلي الأول", score: 2.5 },
            { text: "مش شأني", score: 0 }
        ]
    },
    {
        category: "work",
        text: "لو زميلك قالك سر عن الشغل، ومديرك سألك عنه؟",
        options: [
            { text: "أقول للمدير كل حاجة", score: 10 },
            { text: "أقول جزء من الكلام", score: 7.5 },
            { text: "أغيّر الموضوع", score: 5 },
            { text: "أرفض أقول", score: 2.5 },
            { text: "أحافظ على السر تمامًا", score: 0 }
        ]
    },
    {
        category: "work",
        text: "لو سمعت موظفين بيتكلموا عن المدير في غيابه؟",
        options: [
            { text: "أروح أحكي للمدير", score: 10 },
            { text: "أقول له إنهم بيتكلموا عنه", score: 7.5 },
            { text: "أحكي لحد تاني", score: 5 },
            { text: "أسيبهم يتكلموا", score: 2.5 },
            { text: "أتجاهل الموضوع تمامًا", score: 0 }
        ]
    },
    {
        category: "work",
        text: "هل بتحب تعرف الموظفين بيتكلموا عن إيه بعيد عنك؟",
        options: [
            { text: "جدًا وبحاول أعرف كل حاجة", score: 10 },
            { text: "آه لو الموضوع يخص المدير", score: 7.5 },
            { text: "أحيانًا", score: 5 },
            { text: "نادرًا", score: 2.5 },
            { text: "لأ، مش مهتم", score: 0 }
        ]
    },
    {
        category: "work",
        text: "لو زميلك انتقد قرار للمدير قدامك؟",
        options: [
            { text: "أنقل الكلام للمدير", score: 10 },
            { text: "ألمح للمدير إن في حد معترض", score: 7.5 },
            { text: "أحكي الموضوع لزميل تاني", score: 5 },
            { text: "أسمع وخلاص", score: 2.5 },
            { text: "أحترم رأيه ومش أنقل كلامه", score: 0 }
        ]
    },
    {
        category: "work",
        text: "لو المدير قالك: قولي الموظفين بيتكلموا عني بإيه؟",
        options: [
            { text: "أقول له كل اللي سمعته", score: 10 },
            { text: "أقول له أهم الحاجات", score: 7.5 },
            { text: "أقول له جزء بسيط", score: 5 },
            { text: "أرفض الكلام عن زملائي", score: 2.5 },
            { text: "أقول له إن الكلام ده خاص", score: 0 }
        ]
    },
    {
        category: "work",
        text: "لو اكتشفت إن زميلك بيخالف تعليمات المدير؟",
        options: [
            { text: "أبلغ المدير مباشرة", score: 10 },
            { text: "أسأل زميلي الأول وبعدها ممكن أبلغ", score: 7.5 },
            { text: "أحكي لزميل تاني", score: 5 },
            { text: "أنبه زميلي فقط", score: 2.5 },
            { text: "أتجاهل الأمر", score: 0 }
        ]
    },
    {
        category: "work",
        text: "لو عندك معلومة ممكن تعمل مشكلة لزميلك، لكن المدير مش عارفها؟",
        options: [
            { text: "أروح أقول للمدير", score: 10 },
            { text: "ألمح للمدير عنها", score: 7.5 },
            { text: "أستنى وأشوف", score: 5 },
            { text: "أحذر زميلي فقط", score: 2.5 },
            { text: "أحافظ على المعلومة لنفسي", score: 0 }
        ]
    },
    {
        category: "work",
        text: "لو عرفت معلومة مهمة عن زميلك والمدير ممكن يستفيد منها؟",
        options: [
            { text: "أول حاجة أفكر فيها إني أقول للمدير", score: 10 },
            { text: "غالبًا هقول له", score: 7.5 },
            { text: "حسب الموقف", score: 5 },
            { text: "غالبًا مش هقول", score: 2.5 },
            { text: "مش هقولها نهائيًا", score: 0 }
        ]
    },

    // ---- فئة: الأصحاب ----
    {
        category: "friends",
        text: "لو صاحبك زنقته الدنيا ومحتاج منك فلوس، وإنت معاك بس مش مبلغ كبير… هتعمل إيه؟",
        options: [
            { text: "أديه اللي أقدر عليه وأحاول أساعده", score: 0 },
            { text: "أديه جزء من اللي معايا", score: 2.5 },
            { text: "أشوف هو محتاجهم ليه الأول", score: 5 },
            { text: "أعتذر وأقوله مش هقدر", score: 7.5 },
            { text: "أختفي لحد ما المشكلة تعدي 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو صاحبك اتزنق في مشكلة وهو غلطان، هتتصرف إزاي؟",
        options: [
            { text: "أقف جنبه وأساعده يصلّح غلطه، بس أقوله إنه غلط", score: 0 },
            { text: "أساعده على قد ما أقدر", score: 2.5 },
            { text: "أسيبه يتصرف لوحده", score: 5 },
            { text: "أقوله من الأول \"أنا قولتلك\"", score: 7.5 },
            { text: "أقول للناس: \"أنا ماليش دعوة بيه\" 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو عرفت إن صاحبك بيتكلم عليك من وراك، ولقيته قدامك بيتعامل معاك عادي… تعمل إيه؟",
        options: [
            { text: "أواجهه وأسأله في وشه", score: 0 },
            { text: "أتكلم معاه وأفهم منه الأول", score: 2.5 },
            { text: "أبعد عنه واحدة واحدة", score: 5 },
            { text: "أتعامل معاه بالمثل", score: 7.5 },
            { text: "أبدأ أحكي عليه للناس عشان يعرف إن اللعبة مش من طرف واحد 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو صاحبك نجح في حاجة وإنت كنت نفسك تنجح فيها، هتكون ردة فعلك إيه؟",
        options: [
            { text: "أفرحله بجد وأباركله", score: 0 },
            { text: "أفرحله حتى لو جوايا شوية غيرة", score: 2.5 },
            { text: "أباركله وخلاص", score: 5 },
            { text: "أقول \"محظوظ\" وأعدّي الموضوع", score: 7.5 },
            { text: "أقلل من اللي عمله وأقول: \"ما هي جت معاه بالصدفة\" 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو لقيت صاحبك ناسي محفظته وإنتوا خارجين، هتعمل إيه؟",
        options: [
            { text: "أدفع عنه ومش هفتح الموضوع", score: 0 },
            { text: "أدفع عنه وأقوله يرجعهالي بعدين", score: 2.5 },
            { text: "أشوف معاه حل تاني", score: 5 },
            { text: "أقوله يستلف من حد تاني", score: 7.5 },
            { text: "أقوله: \"معلش يا صاحبي، أنا كمان مفلس\" 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو اتنين من صحابك اتخانقوا، وكل واحد فيهم بيحاول يخليك في صفه… هتعمل إيه؟",
        options: [
            { text: "أحاول أصلح بينهم ومقفش مع حد ظلمًا", score: 0 },
            { text: "أسمع من الاتنين وبعدين أحدد موقفي", score: 2.5 },
            { text: "أبعد عن الموضوع خالص", score: 5 },
            { text: "أقف مع صاحبي حتى لو هو غلطان", score: 7.5 },
            { text: "أستنى أشوف مين هيكسب وأقف معاه 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو صاحبك ائتمنك على سر مهم جدًا، وبعدها حد سألك عنه…",
        options: [
            { text: "السر يفضل سر مهما حصل", score: 0 },
            { text: "أرفض أقول أي تفاصيل", score: 2.5 },
            { text: "أغير الموضوع", score: 5 },
            { text: "أقول جزء بسيط منه", score: 7.5 },
            { text: "أقول كل حاجة بس أخلي الشخص يوعدني إنه ما يقولش لحد 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو صاحبك محتاج مساعدتك في حاجة وإنت عندك مشوار مهم، بس تقدر تأجل مشوارك… هتعمل إيه؟",
        options: [
            { text: "أساعده لو الموضوع فعلاً مهم", score: 0 },
            { text: "أخلصله اللي أقدر عليه وبعدها أروح مشواري", score: 2.5 },
            { text: "أشوف الأول المساعدة هتاخد وقت قد إيه", score: 5 },
            { text: "أقوله لو ملقتش حد غيري هساعدك", score: 7.5 },
            { text: "أقوله: \"والله كنت لسه داخل الحمام\" 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو حد ظلم صاحبك قدامك، وصاحبك مش موجود يرد عليه… هتعمل إيه؟",
        options: [
            { text: "أدافع عنه وأوضح الحقيقة", score: 0 },
            { text: "أقول رأيي من غير ما أكبر الموضوع", score: 2.5 },
            { text: "لو الموضوع كبير هتدخل", score: 5 },
            { text: "أسيبهم يتصرفوا مع بعض", score: 7.5 },
            { text: "أفضل ساكت عشان \"أنا مالي\" 😂", score: 10 }
        ]
    },
    {
        category: "friends",
        text: "لو صاحبك وقف جنبك في وقت صعب، وبعد فترة هو اللي احتاجك…",
        options: [
            { text: "أقف جنبه من غير ما أفكره هو عمل معايا إيه", score: 0 },
            { text: "أساعده على قد ما أقدر", score: 2.5 },
            { text: "أساعده لو الموضوع في مقدرتي", score: 5 },
            { text: "أفتكر الأول هو كان وقف جنبي قد إيه", score: 7.5 },
            { text: "أقوله: \"الدنيا دوارة يا صاحبي\" وأشوف مصلحتي الأول 😂", score: 10 }
        ]
    }
];

function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let questions = [];

const levels = [
    {
        min: 0, max: 20,
        iconClass: "lvl-0",
        iconText: "1",
        title: "بريء تمامًا",
        desc: "أنت بعيد عن العصفرة... لسه في أمل",
        messages: [
            "المدير مش عارف عنك حاجة... بس خلك حذر",
            "أنت آمن 100% من شبهات العرصنة.",
            "زمايلك بيثقوا فيك... كمل كده!"
        ]
    },
    {
        min: 21, max: 40,
        iconClass: "lvl-1",
        iconText: "2",
        title: "عصفورة تحت التدريب",
        desc: "بتسمع الكلام، بس لسه مش بتوصله كله.",
        messages: [
            "لسه في أمل... بس ابعد عن المدير شوية",
            "بتتعلم فنون العرصنة بس لسه مبتدئ.",
            "العصفورة لسه صغيرة... بس بتكبر!"
        ]
    },
    {
        min: 41, max: 60,
        iconClass: "lvl-2",
        iconText: "3",
        title: "مش مطمّن",
        desc: "عندك استعداد تنقل الكلام لو الظروف ساعدت.",
        messages: [
            "عينك على المدير وعينك على زمايلك... مش عارف تختار",
            "نص نص... يا بتكمل يا بتوقف.",
            "المدير بيبصلك بشكل غريب لآخر فترة"
        ]
    },
    {
        min: 61, max: 80,
        iconClass: "lvl-3",
        iconText: "4",
        title: "عصفورة محترفة",
        desc: "المدير غالبًا عارف أخبار أكتر منك.",
        messages: [
            "المدير عنده خط مباشر معاك",
            "أنت مش بتسمع الكلام... أنت بتعمل له تحويل مباشر.",
            "العصفورة بدأت تشتغل بكفاءة.",
            "لو المدير قالك صباح الخير، غالبًا أنت عارف هو كان فين امبارح."
        ]
    },
    {
        min: 81, max: 95,
        iconClass: "lvl-4",
        iconText: "5",
        title: "عصفورة VIP",
        desc: "لو في حاجة حصلت في الشركة، المدير هيعرف قبل صاحبها.",
        messages: [
            "المدير بيصحى من النوم يسأل نفسه: العصفورة قالت إيه النهاردة؟",
            "أنت الأخبار العاجلة بتاعة الشركة.",
            "VIP يعني عصفورة معلومات متكاملة",
            "زمايلك بيحذروا بعض منك... دي علامة النجاح"
        ]
    },
    {
        min: 96, max: 100,
        iconClass: "lvl-5",
        iconText: "MAX",
        title: "عصفورة الإدارة",
        desc: "المدير مش محتاج يسأل... أنت الإشعار بتاعه.",
        messages: [
            "المدير مش محتاج كاميرات مراقبة... أنت كفاية.",
            "لو حد عطس في الشركة، المدير عارف منين جاب البرد.",
            "أنت مركز التحليلات بتاع الشركة.",
            "مبروك... بقيت رئيس قسم النميمة الرسمي"
        ]
    }
];

// Messages cycled on the "analyzing" screen
const analyzingMessages = [
    "جاري تحليل درجة عصفرتك...",
    "بنراجع كل إجاباتك واحدة واحدة...",
    "بنقارنك بباقي اللي عملوا الاختبار...",
    "لحظات وهتعرف نتيجتك..."
];

// ============================================================
// State
// ============================================================
let currentQuestion = 0;
let totalScore = 0;
let isTransitioning = false;
let categoryTotals = { work: { sum: 0, count: 0 }, friends: { sum: 0, count: 0 } };
let playerTargetName = "";
let challengeScore = null;
let analyzingIntervalId = null;

// Read a challenge score from the URL, if a friend shared a link
(function readChallengeFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.has('score')) {
            const s = parseFloat(params.get('score'));
            if (!isNaN(s) && s >= 0 && s <= 100) {
                challengeScore = s;
            }
        }
    } catch (e) { /* no-op */ }
})();

// ============================================================
// DOM Elements
// ============================================================
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const analyzingScreen = document.getElementById('analyzingScreen');
const resultScreen = document.getElementById('resultScreen');
const qNum = document.getElementById('qNum');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const percentageNumber = document.getElementById('percentageNumber');
const gaugeFill = document.getElementById('gaugeFill');
const levelBadge = document.getElementById('levelBadge');
const levelTitle = document.getElementById('levelTitle');
const levelDesc = document.getElementById('levelDesc');
const randomMessage = document.getElementById('randomMessage');
const confettiContainer = document.getElementById('confettiContainer');
const toast = document.getElementById('toast');
const analyzingText = document.getElementById('analyzingText');
const challengeBanner = document.getElementById('challengeBanner');
const targetNameInput = document.getElementById('targetNameInput');
const workBarFill = document.getElementById('workBarFill');
const workBarValue = document.getElementById('workBarValue');
const workRow = document.getElementById('workRow');
const friendsBarFill = document.getElementById('friendsBarFill');
const friendsBarValue = document.getElementById('friendsBarValue');
const friendsRow = document.getElementById('friendsRow');
const percentileStat = document.getElementById('percentileStat');
const secretBadge = document.getElementById('secretBadge');
const challengeResult = document.getElementById('challengeResult');

// Show challenge banner on the home screen if a friend's link was opened
if (challengeScore !== null && challengeBanner) {
    challengeBanner.textContent = `🔥 حد تحداك بنسبة عرصنة ${challengeScore}% — تقدر تعدّيه؟`;
    challengeBanner.classList.add('visible');
}

// ============================================================
// Screen navigation
// ============================================================
function showScreen(screen) {
    [homeScreen, quizScreen, analyzingScreen, resultScreen].forEach(s => {
        s.classList.remove('visible');
        s.classList.add('hidden');
    });
    screen.classList.remove('hidden');
    screen.classList.add('visible');
}

// ============================================================
// Game flow
// ============================================================
function startGame() {
    playerTargetName = (targetNameInput && targetNameInput.value.trim()) || "";

    questions = shuffleArray(questionBank).slice(0, 10).map(q => ({
        text: personalizeText(q.text),
        category: q.category,
        options: shuffleArray(q.options)
    }));

    currentQuestion = 0;
    totalScore = 0;
    isTransitioning = false;
    categoryTotals = { work: { sum: 0, count: 0 }, friends: { sum: 0, count: 0 } };

    showScreen(quizScreen);
    showQuestion();
}

function personalizeText(text) {
    if (!playerTargetName) return text;
    return text
        .replace(/زميلك/g, playerTargetName)
        .replace(/صاحبك/g, playerTargetName)
        .replace(/صحابك/g, playerTargetName);
}

function showQuestion() {
    const q = questions[currentQuestion];
    qNum.textContent = currentQuestion + 1;

    const progress = (currentQuestion / 10) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';

    questionText.textContent = q.text;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => selectAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });

    const card = document.querySelector('.question-card');
    card.style.animation = 'none';
    setTimeout(() => card.style.animation = 'fadeIn 0.45s ease-out', 10);
}

function selectAnswer(optionIndex, btnElement) {
    if (isTransitioning) return;
    isTransitioning = true;

    const q = questions[currentQuestion];
    const scoreGained = q.options[optionIndex].score;
    totalScore += scoreGained;

    if (categoryTotals[q.category]) {
        categoryTotals[q.category].sum += scoreGained;
        categoryTotals[q.category].count += 1;
    }

    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');

    const progress = ((currentQuestion + 1) / 10) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
            isTransitioning = false;
        } else {
            runAnalyzingScreen();
        }
    }, 550);
}

// ============================================================
// Analyzing / suspense screen
// ============================================================
function runAnalyzingScreen() {
    showScreen(analyzingScreen);

    let msgIndex = 0;
    analyzingText.textContent = analyzingMessages[0];
    analyzingIntervalId = setInterval(() => {
        msgIndex = (msgIndex + 1) % analyzingMessages.length;
        analyzingText.textContent = analyzingMessages[msgIndex];
    }, 650);

    setTimeout(() => {
        clearInterval(analyzingIntervalId);
        calculateResult();
    }, 2300);
}

function calculateResult() {
    const percentage = totalScore;
    showResult(percentage);
}

// ============================================================
// Result screen
// ============================================================
function showResult(percentage) {
    showScreen(resultScreen);

    const level = levels.find(l => percentage >= l.min && percentage <= l.max) || levels[0];

    levelBadge.className = 'level-icon ' + level.iconClass;
    levelBadge.textContent = level.iconText;
    levelTitle.textContent = level.title;
    levelDesc.textContent = level.desc;

    const randomMsg = level.messages[Math.floor(Math.random() * level.messages.length)];
    randomMessage.textContent = randomMsg;

    setTimeout(() => {
        const circumference = 2 * Math.PI * 110;
        const offset = circumference - (percentage / 100) * circumference;
        gaugeFill.style.strokeDashoffset = offset;
    }, 300);

    animateNumber(percentageNumber, 0, percentage, 1800);

    renderCategoryBreakdown();
    renderPercentile(percentage);
    renderSecretBadge(percentage);
    renderChallengeResult(percentage);

    if (percentage >= 60) {
        createConfetti();
    }
}

function renderCategoryBreakdown() {
    const cats = [
        { key: 'work', fill: workBarFill, value: workBarValue, row: workRow },
        { key: 'friends', fill: friendsBarFill, value: friendsBarValue, row: friendsRow }
    ];

    cats.forEach(c => {
        const data = categoryTotals[c.key];
        if (!data || data.count === 0) {
            if (c.row) c.row.style.display = 'none';
            return;
        }
        if (c.row) c.row.style.display = 'flex';
        const pct = Math.round((data.sum / (data.count * 10)) * 100);
        setTimeout(() => {
            c.fill.style.width = pct + '%';
        }, 350);
        c.value.textContent = pct + '%';
    });
}

// A smooth, monotonic percentile curve (S-curve) — entertainment stat, not real analytics
function computePercentile(score) {
    const raw = 100 / (1 + Math.exp(-0.09 * (score - 50)));
    return Math.min(99, Math.max(1, Math.round(raw)));
}

function renderPercentile(percentage) {
    if (!percentileStat) return;
    const p = computePercentile(percentage);
    percentileStat.innerHTML = `أنت أعصف من <strong>${p}%</strong> من اللي جربوا الاختبار`;
}

function renderSecretBadge(percentage) {
    if (!secretBadge) return;
    if (percentage >= 80) {
        secretBadge.className = 'secret-badge unlocked';
        secretBadge.innerHTML = `
            <div class="secret-badge-icon">🏆</div>
            <div class="secret-badge-title">فتحت الشارة السرية</div>
            <div class="secret-badge-desc">عصفورة أسطورية معتمدة — من أعلى نسب العرصنة في الاختبار!</div>
        `;
    } else {
        secretBadge.className = 'secret-badge locked';
        secretBadge.innerHTML = `
            <div class="secret-badge-icon">🔒</div>
            <div class="secret-badge-title">شارة سرية مقفولة</div>
            <div class="secret-badge-desc">جيب 80% أو أكتر عشان تفتحها... جرب تاني!</div>
        `;
    }
}

function renderChallengeResult(myScore) {
    if (!challengeResult) return;
    if (challengeScore === null) {
        challengeResult.style.display = 'none';
        return;
    }
    challengeResult.style.display = 'flex';
    const mine = myScore.toFixed(1);
    if (myScore > challengeScore) {
        challengeResult.className = 'challenge-result win';
        challengeResult.innerHTML = `🏆 عدّيت التحدي! هو جاب ${challengeScore}% وإنت جبت ${mine}%`;
    } else if (myScore < challengeScore) {
        challengeResult.className = 'challenge-result lose';
        challengeResult.innerHTML = `😅 لسه محتاج تحاول... هو جاب ${challengeScore}% وإنت جبت ${mine}%`;
    } else {
        challengeResult.className = 'challenge-result tie';
        challengeResult.innerHTML = `🤝 تعادلتوا بالظبط! نفس نسبة ${challengeScore}%`;
    }
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeProgress;

        element.textContent = current.toFixed(1) + '%';

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function restartGame() {
    currentQuestion = 0;
    totalScore = 0;
    isTransitioning = false;
    gaugeFill.style.strokeDashoffset = 691;
    confettiContainer.innerHTML = '';
    if (workBarFill) workBarFill.style.width = '0%';
    if (friendsBarFill) friendsBarFill.style.width = '0%';
    showScreen(homeScreen);
}

// ============================================================
// Sharing & comparison
// ============================================================
async function shareResult() {
    const percentage = totalScore;
    const shareText = `طلعت نسبة العصفرة عندي ${percentage.toFixed(1)}% في اختبار العرصميتر`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'العرصميتر',
                text: shareText,
                url: window.location.href
            });
        } catch (err) {
            copyToClipboard(shareText, 'تم نسخ النتيجة!');
        }
    } else {
        copyToClipboard(shareText, 'تم نسخ النتيجة!');
    }
}

async function compareChallenge() {
    const percentage = totalScore;
    const url = new URL(window.location.href);
    url.search = '';
    url.searchParams.set('score', percentage.toFixed(1));
    const shareText = `تحداك في اختبار العرصميتر! جبت ${percentage.toFixed(1)}% — تقدر تعدّيني؟`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'تحدي العرصميتر',
                text: shareText,
                url: url.toString()
            });
            return;
        } catch (err) { /* fall through to copy */ }
    }
    copyToClipboard(`${shareText}\n${url.toString()}`, 'تم نسخ رابط التحدي!');
}

function copyToClipboard(text, toastMsg) {
    const msg = toastMsg || 'تم النسخ!';
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(msg);
        }).catch(() => {
            fallbackCopy(text, msg);
        });
    } else {
        fallbackCopy(text, msg);
    }
}

function fallbackCopy(text, toastMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast(toastMsg || 'تم النسخ!');
    } catch (err) {
        showToast('لم نتمكن من النسخ');
    }
    document.body.removeChild(textarea);
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ============================================================
// Downloadable badge image (canvas)
// ============================================================
async function downloadBadge() {
    try {
        if (document.fonts && document.fonts.load) {
            await Promise.all([
                document.fonts.load('900 90px Cairo'),
                document.fonts.load('800 40px Cairo'),
                document.fonts.load('700 30px Cairo')
            ]);
        }
    } catch (e) { /* proceed with fallback font */ }

    const percentage = totalScore;
    const level = levels.find(l => percentage >= l.min && percentage <= l.max) || levels[0];

    const size = 1080;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Background
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#142449');
    grad.addColorStop(0.6, '#0B1530');
    grad.addColorStop(1, '#060B18');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    // Soft accent glow
    const glow = ctx.createRadialGradient(size * 0.8, size * 0.15, 20, size * 0.8, size * 0.15, 420);
    glow.addColorStop(0, 'rgba(230, 57, 80, 0.28)');
    glow.addColorStop(1, 'rgba(230, 57, 80, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, size, size);

    const drawRest = () => {
        // Percentage
        ctx.textAlign = 'center';
        ctx.fillStyle = '#E63950';
        ctx.font = '900 190px Cairo, Tahoma, sans-serif';
        ctx.fillText(Math.round(percentage) + '%', size / 2, 700);

        ctx.fillStyle = '#FFE29A';
        ctx.font = '800 42px Cairo, Tahoma, sans-serif';
        ctx.fillText('نسبة العرصنة', size / 2, 760);

        // Level title
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '800 56px Cairo, Tahoma, sans-serif';
        ctx.fillText(level.title, size / 2, 860);

        // Footer branding
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.font = '700 34px Cairo, Tahoma, sans-serif';
        ctx.fillText('العرصميتر', size / 2, 990);

        canvas.toBlob(blob => {
            if (!blob) { showToast('حصلت مشكلة في إنشاء الصورة'); return; }
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'arsameter-badge.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 3000);
            showToast('تم تحميل الشارة!');
        }, 'image/png');
    };

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        const logoSize = 300;
        const logoX = size / 2 - logoSize / 2;
        const logoY = 110;
        const radius = 46;
        ctx.save();
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(logoX, logoY, logoSize, logoSize, radius);
        } else {
            ctx.rect(logoX, logoY, logoSize, logoSize);
        }
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, logoX, logoY, logoSize, logoSize);
        ctx.restore();
        drawRest();
    };
    img.onerror = () => { drawRest(); };
    img.src = 'assets/images/logo.png';
}

// ============================================================
// Confetti
// ============================================================
function createConfetti() {
    const colors = ['#FFC93C', '#E63950', '#FFE29A', '#142449', '#FFF9EC', '#34C77B'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) confetti.parentNode.removeChild(confetti);
            }, 4000);
        }, i * 50);
    }
}
