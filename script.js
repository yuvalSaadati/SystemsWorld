// מערכת המשחק - מערכת ורכיביה
document.addEventListener('DOMContentLoaded', function() {
    // מאפיינים גלובליים של המשחק
    let currentScreen = 'welcome-screen';
    let currentEasyIndex = 0;
    let currentMediumIndex = 0;
    let correctAnswers = 0;
    let totalQuestions = 0;
    
    // מערכות למשחק ברמה קלה
    const easySystems = [
        {
            title: "משחק כדורגל",
            image: "football-system",
            imageName: "משחק כדורגל",
            description: "משחק כדורגל הוא מערכת מורכבת המורכבת מרכיבים שונים הפועלים יחד.",
            question: "אילו רכיבים מהווים חלק ממערכת משחק הכדורגל?",
            components: [
                { text: "שחקנים", isCorrect: true },
                { text: "כדור", isCorrect: true },
                { text: "מגרש", isCorrect: true },
                { text: "שופט", isCorrect: true },
                { text: "חוקי המשחק", isCorrect: true },
                { text: "מזג אוויר", isCorrect: false },
                { text: "מכונת קפה", isCorrect: false },
                { text: "תשלום כניסה", isCorrect: false }
            ],
            explanation: "משחק כדורגל מורכב משחקנים, כדור, מגרש, שופט וחוקי משחק. כל אלה הם חלק מהמערכת כי הם משפיעים זה על זה ופועלים יחד ליצירת המשחק. מזג האוויר ותשלום כניסה הם חיצוניים למערכת המשחק עצמה."
        },
        {
            title: "מערכת שעות בית הספר",
            image: "school-system",
            imageName: "מערכת שעות",
            description: "מערכת השעות בבית הספר היא מערכת מורכבת שמאורגנת על פי ימים ושעות.",
            question: "אילו רכיבים מהווים חלק ממערכת השעות בבית הספר?",
            components: [
                { text: "שיעורים", isCorrect: true },
                { text: "מורים", isCorrect: true },
                { text: "כיתות", isCorrect: true },
                { text: "זמני שיעורים", isCorrect: true },
                { text: "הפסקות", isCorrect: true },
                { text: "תפריט קפיטריה", isCorrect: false },
                { text: "מזג אוויר", isCorrect: false },
                { text: "תחבורה לבית הספר", isCorrect: false }
            ],
            explanation: "מערכת השעות כוללת את השיעורים, המורים, הכיתות, זמני השיעורים וההפסקות. אלה הם הרכיבים של המערכת שפועלים יחד ליצירת מבנה הלימודים. תפריט הקפיטריה, מזג האוויר ותחבורה הם חיצוניים למערכת השעות עצמה."
        },
        {
            title: "גל אנושי באצטדיון",
            image: "wave-system",
            imageName: "גל אנושי באצטדיון",
            description: "גל אנושי הוא תופעה של תנועה מתואמת בין צופים באצטדיון.",
            question: "אילו רכיבים מהווים חלק ממערכת הגל האנושי?",
            components: [
                { text: "אנשים", isCorrect: true },
                { text: "תיאום", isCorrect: true },
                { text: "עיתוי", isCorrect: true },
                { text: "תנועה", isCorrect: true },
                { text: "מוזיקה באצטדיון", isCorrect: false },
                { text: "צבע הכיסאות", isCorrect: false },
                { text: "סוג המשחק", isCorrect: false },
                { text: "תוצאת המשחק", isCorrect: false }
            ],
            explanation: "הגל האנושי מורכב מאנשים, תיאום בין האנשים, עיתוי ותנועה. אלה הם רכיבי המערכת שיוצרים את התופעה המיוחדת. המוזיקה, צבע הכיסאות, סוג המשחק ותוצאת המשחק אינם חלק מרכיבי המערכת עצמה אלא גורמים חיצוניים."
        },
        {
            title: "אופניים",
            image: "bicycle-system",
            imageName: "אופניים",
            description: "אופניים הם מערכת מכנית המאפשרת תנועה באמצעות הפעלת כוח על ידי הרוכב.",
            question: "אילו רכיבים מהווים חלק ממערכת האופניים?",
            components: [
                { text: "גלגלים", isCorrect: true },
                { text: "שלדה", isCorrect: true },
                { text: "שרשרת", isCorrect: true },
                { text: "דוושות", isCorrect: true },
                { text: "כידון", isCorrect: true },
                { text: "סימני דרך", isCorrect: false },
                { text: "איכות הכביש", isCorrect: false },
                { text: "יעד הנסיעה", isCorrect: false }
            ],
            explanation: "מערכת האופניים כוללת את הגלגלים, השלדה, השרשרת, הדוושות והכידון. אלה הם רכיבי המערכת שפועלים יחד ומאפשרים את פעולת האופניים. סימני דרך, איכות הכביש ויעד הנסיעה הם חיצוניים למערכת עצמה."
        }
    ];
    
    // מערכות למשחק ברמה בינונית
    const mediumSystems = [
        {
            title: "גל אנושי באצטדיון - רמות ארגון",
            image: "wave-system",
            imageName: "גל אנושי באצטדיון",
            description: "גל אנושי הוא דוגמה מצוינת למערכת בה יש רמות ארגון שונות.",
            question: "מה יקרה אם נסתכל על הגל האנושי ברמת המיקרו (אדם בודד) לעומת רמת המאקרו (כל הקהל)?",
            options: [
                { text: "ברמת המיקרו נראה אדם שקם ומתיישב, ברמת המאקרו נראה תנועת גל", isCorrect: true },
                { text: "ברמת המיקרו ובמאקרו נראה את אותה תופעה בדיוק", isCorrect: false },
                { text: "ברמת המיקרו נראה גל מתקדם, ברמת המאקרו נראה אנשים בודדים", isCorrect: false },
                { text: "אי אפשר לראות שום קשר בין רמת המיקרו למאקרו", isCorrect: false }
            ],
            explanation: "כאשר מתבוננים ברמת המיקרו (אדם בודד), רואים פעולה פשוטה של קימה והתיישבות. לעומת זאת, ברמת המאקרו (הקהל כולו) רואים תופעה מורכבת של גל מתקדם. זוהי דוגמה מצוינת להבדל בין רמות ארגון שונות של מערכת."
        },
        {
            title: "משחק כדורגל - השפעת רכיב בודד",
            image: "football-system",
            imageName: "משחק כדורגל",
            description: "במשחק כדורגל, גם רכיב בודד יכול להשפיע על המערכת כולה.",
            question: "כיצד שחקן בודד יכול להשפיע על מערכת משחק הכדורגל כולה?",
            options: [
                { text: "שחקן שמבקיע גול או מקבל כרטיס אדום יכול לשנות את מהלך המשחק כולו", isCorrect: true },
                { text: "שחקן בודד לא יכול להשפיע על המערכת כולה בשום מצב", isCorrect: false },
                { text: "רק קבוצה שלמה יכולה להשפיע על מהלך המשחק", isCorrect: false },
                { text: "השפעת השחקן הבודד תלויה רק במזג האוויר", isCorrect: false }
            ],
            explanation: "שחקן בודד יכול להשפיע משמעותית על מערכת המשחק כולה - למשל, שחקן שמבקיע גול משנה את התוצאה, או שחקן שמקבל כרטיס אדום משנה את מאזן הכוחות בין הקבוצות. זוהי דוגמה לכך ששינויים ברמת המיקרו משפיעים על המערכת כולה."
        },
        {
            title: "מערכת אקולוגית - תיאום בין רכיבים",
            image: "ecosystem-system",
            imageName: "מערכת אקולוגית",
            description: "במערכת אקולוגית, התיאום בין רכיבי המערכת חיוני להצלחתה.",
            question: "מדוע התיאום בין רכיבי המערכת האקולוגית חיוני לקיומה?",
            options: [
                { text: "כל יצור במערכת תלוי באחרים ומשפיע עליהם באיזון עדין", isCorrect: true },
                { text: "רק היצור החזק ביותר משפיע על המערכת", isCorrect: false },
                { text: "אין תיאום בין רכיבי המערכת האקולוגית", isCorrect: false },
                { text: "התיאום נקבע על ידי גורם חיצוני בלבד", isCorrect: false }
            ],
            explanation: "במערכת אקולוגית, כל יצור (רכיב) תלוי באחרים ומשפיע עליהם - צמחים מייצרים חמצן, בעלי חיים צורכים צמחים, טורפים צורכים בעלי חיים, פסולת מתפרקת ומזינה את הקרקע וחוזר חלילה. התיאום והאיזון בין כל הרכיבים חיוני לקיום המערכת כולה."
        },
        {
            title: "מערכת שעות בית הספר - גבולות המערכת",
            image: "school-system",
            imageName: "מערכת שעות",
            description: "הגדרת גבולות המערכת היא סובייקטיבית בהתאם לצרכי המתבונן.",
            question: "כיצד ניתן להגדיר גבולות שונים למערכת השעות בבית הספר?",
            options: [
                { text: "אפשר להגדיר את הגבולות כמערכת של כיתה בודדת, שכבה שלמה או בית הספר כולו", isCorrect: true },
                { text: "גבולות מערכת השעות קבועים ולא ניתנים לשינוי", isCorrect: false },
                { text: "גבולות המערכת כוללים רק את זמני השיעורים ללא קשר למורים ותלמידים", isCorrect: false },
                { text: "גבולות המערכת נקבעים אך ורק על ידי מנהל בית הספר", isCorrect: false }
            ],
            explanation: "הגדרת גבולות מערכת היא סובייקטיבית - במערכת השעות אפשר להתמקד במערכת של כיתה בודדת, של שכבה שלמה, או של בית הספר כולו. ניתן גם להתייחס למורה בודד כמערכת, או לתלמיד בודד. כל נקודת מבט תספק תובנות שונות על המערכת."
        }
    ];
    
    // טעינת מסך הפתיחה
    function showScreen(screenId) {
        // הסתרת כל המסכים
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // הצגת המסך המבוקש
        document.getElementById(screenId).classList.add('active');
        currentScreen = screenId;
    }
    
    // מעבר בין מסכים
    document.getElementById('start-btn').addEventListener('click', function() {
        showScreen('difficulty-screen');
    });
    
    document.getElementById('instructions-btn').addEventListener('click', function() {
        showScreen('instructions-screen');
    });
    
    document.getElementById('back-to-welcome').addEventListener('click', function() {
        showScreen('welcome-screen');
    });
    
    document.getElementById('back-from-difficulty').addEventListener('click', function() {
        showScreen('welcome-screen');
    });
    
    document.getElementById('back-from-game-easy').addEventListener('click', function() {
        resetGame();
        showScreen('difficulty-screen');
    });
    
    document.getElementById('back-from-game-medium').addEventListener('click', function() {
        resetGame();
        showScreen('difficulty-screen');
    });
    
    document.getElementById('play-again').addEventListener('click', function() {
        resetGame();
        showScreen('difficulty-screen');
    });
    
    document.getElementById('go-home').addEventListener('click', function() {
        resetGame();
        showScreen('welcome-screen');
    });
    
    // בחירת רמת קושי
    document.getElementById('easy-level').addEventListener('click', function() {
        startEasyGame();
    });
    
    document.getElementById('medium-level').addEventListener('click', function() {
        startMediumGame();
    });
    
    // התחלת משחק ברמה קלה
    function startEasyGame() {
        currentEasyIndex = 0;
        correctAnswers = 0;
        totalQuestions = easySystems.length;
        showScreen('game-easy-screen');
        loadEasySystem(currentEasyIndex);
        updateProgress(currentEasyIndex, easySystems.length, 'progress-easy');
    }
    
    // התחלת משחק ברמה בינונית
    function startMediumGame() {
        currentMediumIndex = 0;
        correctAnswers = 0;
        totalQuestions = mediumSystems.length;
        showScreen('game-medium-screen');
        loadMediumSystem(currentMediumIndex);
        updateProgress(currentMediumIndex, mediumSystems.length, 'progress-medium');
    }
    
    // עדכון סרגל התקדמות
    function updateProgress(current, total, progressId) {
        const progressPercent = ((current) / total) * 100;
        document.getElementById(progressId).style.width = progressPercent + '%';
    }
    
    // טעינת מערכת ברמה קלה
    function loadEasySystem(index) {
        const system = easySystems[index];
        const container = document.getElementById('systems-container');
        
        // ניקוי התוכן הקודם
        container.innerHTML = '';
        
        // יצירת כרטיס מערכת
        const systemCard = document.createElement('div');
        systemCard.className = 'system-card';
        
        // כותרת המערכת
        const title = document.createElement('h3');
        title.className = 'system-title';
        title.textContent = system.title;
        systemCard.appendChild(title);
        
        // תמונת המערכת
        const image = document.createElement('div');
        image.className = 'system-image ' + system.image;
        image.textContent = system.imageName;
        systemCard.appendChild(image);
        
        // תיאור המערכת
        const description = document.createElement('p');
        description.className = 'system-description';
        description.textContent = system.description;
        systemCard.appendChild(description);
        
        // שאלה על המערכת
        const question = document.createElement('div');
        question.className = 'system-question';
        question.textContent = system.question;
        systemCard.appendChild(question);
        
        // רכיבי המערכת
        const components = document.createElement('div');
        components.className = 'system-components';
        
        // יצירת לחצנים עבור כל רכיב
        system.components.forEach((component, i) => {
            const componentBtn = document.createElement('div');
            componentBtn.className = 'component';
            componentBtn.textContent = component.text;
            componentBtn.dataset.correct = component.isCorrect;
            componentBtn.dataset.index = i;
            
            componentBtn.addEventListener('click', function() {
                // הוספת או הסרת קלאס 'נבחר'
                this.classList.toggle('selected');
            });
            
            components.appendChild(componentBtn);
        });
        
        systemCard.appendChild(components);
        
        // הוספת תיבת הכרטיס למיכל
        container.appendChild(systemCard);
        
        // איפוס משוב
        const feedback = document.getElementById('feedback-easy');
        feedback.innerHTML = '';
        feedback.className = 'feedback';
        
        // הפעלת כפתור המשך
        document.getElementById('next-easy').onclick = function() {
            checkEasyAnswer(index);
        };
    }
    
    // טעינת מערכת ברמה בינונית
    function loadMediumSystem(index) {
        const system = mediumSystems[index];
        const container = document.getElementById('medium-systems-container');
        
        // ניקוי התוכן הקודם
        container.innerHTML = '';
        
        // יצירת כרטיס מערכת
        const systemCard = document.createElement('div');
        systemCard.className = 'system-card';
        
        // כותרת המערכת
        const title = document.createElement('h3');
        title.className = 'system-title';
        title.textContent = system.title;
        systemCard.appendChild(title);
        
        // תמונת המערכת
        const image = document.createElement('div');
        image.className = 'system-image ' + system.image;
        image.textContent = system.imageName;
        systemCard.appendChild(image);
        
        // תיאור המערכת
        const description = document.createElement('p');
        description.className = 'system-description';
        description.textContent = system.description;
        systemCard.appendChild(description);
        
        // שאלה על המערכת
        const question = document.createElement('div');
        question.className = 'system-question';
        question.textContent = system.question;
        systemCard.appendChild(question);
        
        // אפשרויות תשובה
        const options = document.createElement('div');
        options.className = 'system-options';
        
        // יצירת לחצנים עבור כל אפשרות
        system.options.forEach((option, i) => {
            const optionBtn = document.createElement('div');
            optionBtn.className = 'option';
            optionBtn.textContent = option.text;
            optionBtn.dataset.correct = option.isCorrect;
            optionBtn.dataset.index = i;
            
            optionBtn.addEventListener('click', function() {
                // הסרת הבחירה הקודמת
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // סימון האפשרות הנוכחית
                this.classList.add('selected');
            });
            
            options.appendChild(optionBtn);
        });
        
        systemCard.appendChild(options);
        
        // הוספת תיבת הכרטיס למיכל
        container.appendChild(systemCard);
        
        // איפוס משוב
        const feedback = document.getElementById('feedback-medium');
        feedback.innerHTML = '';
        feedback.className = 'feedback';
        
        // הפעלת כפתור המשך
        document.getElementById('next-medium').onclick = function() {
            checkMediumAnswer(index);
        };
    }
    
    // בדיקת תשובה ברמה קלה
    function checkEasyAnswer(index) {
        const system = easySystems[index];
        const selectedComponents = document.querySelectorAll('.component.selected');
        const feedback = document.getElementById('feedback-easy');
        let isCorrect = true;
        let hasSelection = selectedComponents.length > 0;
        
        // בדיקה אם לא נבחרו רכיבים
        if (!hasSelection) {
            showFeedback(feedback, 'אנא בחר לפחות רכיב אחד', 'hint');
            return;
        }
        
        // בדיקת בחירות
        document.querySelectorAll('.component').forEach(component => {
            const shouldBeSelected = component.dataset.correct === 'true';
            const isSelected = component.classList.contains('selected');
            
            // בדיקה אם הרכיב צריך להיבחר והוא לא נבחר או להיפך
            if (shouldBeSelected !== isSelected) {
                isCorrect = false;
            }
            
            // סימון התשובות הנכונות והשגויות
            if (isSelected) {
                if (shouldBeSelected) {
                    component.classList.add('correct');
                } else {
                    component.classList.add('incorrect');
                }
            } else if (shouldBeSelected) {
                component.classList.add('correct');
            }
            
            // ביטול האפשרות להמשיך לבחור
            component.style.pointerEvents = 'none';
        });
        
        // עדכון המשוב
        if (isCorrect) {
            showFeedback(feedback, 'כל הכבוד! בחרת את כל הרכיבים הנכונים.', 'correct');
            correctAnswers++;
        } else {
            showFeedback(feedback, system.explanation, 'incorrect');
        }
        
        // שינוי פעולת כפתור ההמשך
        document.getElementById('next-easy').onclick = function() {
            if (currentEasyIndex < easySystems.length - 1) {
                currentEasyIndex++;
                loadEasySystem(currentEasyIndex);
                updateProgress(currentEasyIndex, easySystems.length, 'progress-easy');
            } else {
                finishGame();
            }
        };
    }
    
    // בדיקת תשובה ברמה בינונית
    function checkMediumAnswer(index) {
        const system = mediumSystems[index];
        const selectedOption = document.querySelector('.option.selected');
        const feedback = document.getElementById('feedback-medium');
        
        // בדיקה אם לא נבחרה אפשרות
        if (!selectedOption) {
            showFeedback(feedback, 'אנא בחר אפשרות אחת', 'hint');
            return;
        }
        
        const isCorrect = selectedOption.dataset.correct === 'true';
        
        // סימון התשובות הנכונות והשגויות
        document.querySelectorAll('.option').forEach(option => {
            if (option.dataset.correct === 'true') {
                option.classList.add('correct');
            } else if (option === selectedOption && !isCorrect) {
                option.classList.add('incorrect');
            }
            
            // ביטול האפשרות להמשיך לבחור
            option.style.pointerEvents = 'none';
        });
        
        // עדכון המשוב
        if (isCorrect) {
            showFeedback(feedback, 'כל הכבוד! בחרת את התשובה הנכונה.', 'correct');
            correctAnswers++;
        } else {
            showFeedback(feedback, system.explanation, 'incorrect');
        }
        
        // שינוי פעולת כפתור ההמשך
        document.getElementById('next-medium').onclick = function() {
            if (currentMediumIndex < mediumSystems.length - 1) {
                currentMediumIndex++;
                loadMediumSystem(currentMediumIndex);
                updateProgress(currentMediumIndex, mediumSystems.length, 'progress-medium');
            } else {
                finishGame();
            }
        };
    }
    
    // הצגת משוב
    function showFeedback(element, message, type) {
        element.textContent = message;
        element.className = 'feedback ' + type + ' show';
    }
    
    // סיום המשחק
    function finishGame() {
        const summary = document.getElementById('summary-stats');
        const score = Math.round((correctAnswers / totalQuestions) * 100);
        
        summary.innerHTML = `
            <h2>הציון שלך: ${score}%</h2>
            <p>ענית נכון על ${correctAnswers} שאלות מתוך ${totalQuestions}</p>
        `;
        
        showScreen('summary-screen');
    }
    
    // איפוס המשחק
    function resetGame() {
        currentEasyIndex = 0;
        currentMediumIndex = 0;
        correctAnswers = 0;
        totalQuestions = 0;
        
        document.getElementById('progress-easy').style.width = '0%';
        document.getElementById('progress-medium').style.width = '0%';
    }
});