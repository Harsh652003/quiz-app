document.addEventListener("DOMContentLoaded", function () {
    let quizData = {
        sections: [
            // General Knowledge Section
            {
                sectionTitle: "General Knowledge",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Which is the largest ocean in the world?",
                        options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
                        answer: "Pacific Ocean"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is the author of the Harry Potter series?",
                        options: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Stephen King"],
                        answer: "J.K. Rowling"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the currency of Japan?",
                        options:["rupe","doller","Yen","usd"],
                        answer: "Yen"
                    },
                    {
                        questionType: "mcq",
                        question: "Which planet is closest to the Sun?",
                        options:["Jupiter","Mercury","Venus","Mars"],
                        answer: "Mercury"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first man to step on the Moon?",
                        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
                        answer: "Neil Armstrong"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the smallest country in the world by area?",
                        options: ["India", "Indore", "Vatican City", "Nepal"],
                        answer: "Vatican City"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian city is also known as the 'City of Joy'?",
                        options: ["Mumbai", "Kolkata", "Delhi", "Bangalore"],
                        answer: "Kolkata"
                    },
                    {
                        questionType: "mcq",
                        question: "Which is the longest river in the world?",
                        options: ["Nile", "Ganga", "chila", "Lacrosse"],
                        answer: "Nile"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the first woman to win a Nobel Prize?",
                        options: ["Marie Curie", "Rosalind Franklin", "Mother Teresa", "Jane Addams"],
                        answer: "Marie Curie"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the national sport of Canada?",
                        options: ["Hockey", "Basketball", "Cricket", "Lacrosse"],
                        answer: "Lacrosse"
                    }
                ]
            },
            // Mathematics Section
            {
                sectionTitle: "Mathematics",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the value of π (pi) to two decimal places?",
                        options: ["3.12", "3.14", "3.16", "3.18"],
                        answer: "3.14"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the square root of 81?",
                        options: ["7", "8", "9", "10"],
                        answer: "9"
                    },
                    {
                        questionType: "mcq",
                        question: "What is 15% of 200?",
                        options: ["15", "25", "30", "35"],
                        answer: "30"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the perimeter of a rectangle with length 5 cm and width 3 cm?",
                        options: ["15 cm", "16 cm", "18 cm", "20 cm"],
                        answer: "16 cm"
                    },
                    {
                        questionType: "mcq",
                        question: "Solve for x: 2x + 3 = 11",
                        options: ["3", "4", "5", "6"],
                        answer: "4"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the formula for the area of a circle?",
                        options: ["2πr", "πr^2", "πd", "2πd"],
                        answer: "πr^2"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the next prime number after 7?",
                        options: ["9", "10", "11", "13"],
                        answer: "11"
                    },
                    {
                        questionType: "mcq",
                        question: "If a triangle has angles of 90°, 30°, and 60°, what type of triangle is it?",
                        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
                        answer: "Right-angled"
                    },
                    {
                        questionType: "mcq",
                        question: "What is 12 multiplied by 7?",
                        options: ["72", "82", "84", "86"],
                        answer: "84"
                    },
                    {
                        questionType: "number",
                        question: "If 3x = 21, what is the value of x?",
                        options: ["7", "8", "14", "86"],
                        answer: "7"
                    }
                ]
            },
            // Science Section
            {
                sectionTitle: "Science",
                questions: [
                    {
                        questionType: "mcq",
                        question: "What is the chemical symbol for water?",
                        options: ["H2O", "O2", "CO2", "HO"],
                        answer: "H2O"
                    },
                    {
                        questionType: "mcq",
                        question: "What planet is known as the 'Red Planet'?",
                        options: ["Earth", "Mars", "Venus", "Jupiter"],
                        answer: "Mars"
                    },
                    {
                        questionType: "mcq",
                        question: "Which gas is most abundant in Earth's atmosphere?",
                        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
                        answer: "Nitrogen"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the speed of light?",
                        options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "250,000 km/s"],
                        answer: "300,000 km/s"
                    },
                    {
                        questionType: "mcq",
                        question: "Who proposed the theory of general relativity?",
                        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
                        answer: "Albert Einstein"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the powerhouse of the cell?",
                        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
                        answer: "Mitochondria"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the chemical formula for table salt?",
                        options: ["NaCl", "H2SO4", "KCl", "CH4"],
                        answer: "NaCl"
                    },
                    {
                        questionType: "mcq",
                        question: "Which organ is primarily responsible for filtering waste from the blood?",
                        options: ["Liver", "Kidney", "Heart", "Lung"],
                        answer: "Kidney"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the unit of electrical resistance?",
                        options: ["Ohm", "Volt", "Ampere", "Watt"],
                        answer: "Ohm"
                    },
                    {
                        questionType: "mcq",
                        question: "Which planet has the most moons?",
                        options: ["Earth", "Mars", "Jupiter", "Saturn"],
                        answer: "Jupiter"
                    }
                ]
            },
            // Indian History Section
            {
                sectionTitle: "Indian History",
                questions: [
                    {
                        questionType: "mcq",
                        question: "Who was the first Prime Minister of India?",
                        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Dr. B.R. Ambedkar"],
                        answer: "Jawaharlal Nehru"
                    },
                    {
                        questionType: "mcq",
                        question: "In which year did India gain independence from British rule?",
                        options: ["1947", "1945", "1950", "1935"],
                        answer: "1947"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the founder of the Maurya Empire?",
                        options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Kautilya"],
                        answer: "Chandragupta Maurya"
                    },
                    {
                        questionType: "mcq",
                        question: "Which movement was launched by Mahatma Gandhi in 1942 demanding 'Quit India'?",
                        options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Dandi March"],
                        answer: "Quit India Movement"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the last Governor-General of independent India?",
                        options: ["Lord Mountbatten", "Rajendra Prasad", "C. Rajagopalachari", "Warren Hastings"],
                        answer: "C. Rajagopalachari"
                    },
                    {
                        questionType: "mcq",
                        question: "The Battle of Plassey, which marked the beginning of British rule in India, was fought in which year?",
                        options: ["1757", "1857", "1784", "1764"],
                        answer: "1757"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Mughal emperor is known for his policy of religious tolerance and efforts to integrate Hindus into the administration?",
                        options: ["Akbar", "Aurangzeb", "Babur", "Shah Jahan"],
                        answer: "Akbar"
                    },
                    {
                        questionType: "mcq",
                        question: "What was the main purpose of the 'Simon Commission' set up by the British government?",
                        options: ["To review the working of the Indian Constitution", "To oversee the partition of India", "To investigate the Jallianwala Bagh massacre", "To propose reforms in British India"],
                        answer: "To propose reforms in British India"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the leader of the Indian National Congress during the Quit India Movement?",
                        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Lal Bahadur Shastri"],
                        answer: "Mahatma Gandhi"
                    },
                    {
                        questionType: "mcq",
                        question: "The famous Red Fort is located in which Indian city?",
                        options: ["Delhi", "Agra", "Jaipur", "Mumbai"],
                        answer: "Delhi"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian leader is known for his role in the Khilafat Movement along with Gandhi?",
                        options: ["Mohammed Ali Jinnah", "Maulana Abul Kalam Azad", "Chandra Shekhar Azad", "Ali Brothers"],
                        answer: "Ali Brothers"
                    }
                ]
            },
            {
                sectionTitle:"Indian Geograpphy",
                questions:[
                    {
                        questionType: "mcq",
                        question: "What is the highest peak in India?",
                        options: ["Kanchenjunga", "Nanda Devi", "Mount Everest", "Annapurna"],
                        answer: "Kanchenjunga"
                      },
                      {
                        questionType: "mcq",
                        question: "Which river is known as the 'Sorrow of Bihar'?",
                        options: ["Ganges", "Yamuna", "Brahmaputra", "Kosi"],
                        answer: "Kosi"
                      },
                      {
                        questionType: "mcq",
                        question: "Which Indian state has the longest coastline?",
                        options: ["Tamil Nadu", "Gujarat", "Maharashtra", "Andhra Pradesh"],
                        answer: "Gujarat"
                      },
                      {
                        questionType: "mcq",
                        question: "Which desert is located in the northwestern part of India?",
                        options: ["Thar Desert", "Kharan Desert", "Dasht-e Kavir", "Great Indian Desert"],
                        answer: "Thar Desert"
                      },
                      {
                        questionType: "mcq",
                        question: "The city of Mumbai is situated on which coast of India?",
                        options: ["Eastern Coast", "Western Coast", "Northern Coast", "Southern Coast"],
                        answer: "Western Coast"
                      },
                      {
                        questionType: "mcq",
                        question: "Which Indian state is known as the 'Land of Five Rivers'?",
                        options: ["Punjab", "Haryana", "Uttar Pradesh", "Himachal Pradesh"],
                        answer: "Punjab"
                      },
                      {
                        questionType: "mcq",
                        question: "Which is the largest state in India by area?",
                        options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
                        answer: "Rajasthan"
                      },
                      {
                        questionType: "mcq",
                        question: "Which island group is located to the southeast of India?",
                        options: ["Andaman and Nicobar Islands", "Lakshadweep Islands", "Maldives", "Seychelles"],
                        answer: "Andaman and Nicobar Islands"
                      },
                      {
                        questionType: "mcq",
                        question: "Which mountain range runs parallel to the western coast of India?",
                        options: ["Himalayas", "Aravalli Range", "Western Ghats", "Eastern Ghats"],
                        answer: "Western Ghats"
                      },
                      {
                        questionType: "mcq",
                        question: "The city of Delhi is situated on the banks of which river?",
                        options: ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
                        answer: "Yamuna"
                      }

                ]
            },
            {
                sectionTitle:"Indian Literature",
                questions:[
                    {
                        questionType: "mcq",
                        question: "Who is the author of the famous novel 'God of Small Things'?",
                        options: ["Arundhati Roy", "Salman Rushdie", "Jhumpa Lahiri", "Ruskin Bond"],
                        answer: "Arundhati Roy"
                    },
                    {
                        questionType: "mcq",
                        question: "Which epic is traditionally attributed to the sage Valmiki?",
                        options: ["Mahabharata", "Ramayana", "Bhagavad Gita", "Upanishads"],
                        answer: "Ramayana"
                    },
                    {
                        questionType: "mcq",
                        question: "Who wrote the novel 'Midnight's Children'?",
                        options: ["Vikram Seth", "Salman Rushdie", "Rohinton Mistry", "Chetan Bhagat"],
                        answer: "Salman Rushdie"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the name of the famous book by Rabindranath Tagore that won him the Nobel Prize in Literature?",
                        options: ["Gitanjali", "Chokher Bali", "The Home and the World", "Kabuliwala"],
                        answer: "Gitanjali"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian author is known for his works on Indian history and mythology, including the 'Shiva Trilogy'?",
                        options: ["Amish Tripathi", "Chetan Bhagat", "Ruskin Bond", "Kiran Desai"],
                        answer: "Amish Tripathi"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is the author of the book 'Train to Pakistan'?",
                        options: ["Khushwant Singh", "R.K. Narayan", "Manohar Malgonkar", "Ismat Chughtai"],
                        answer: "Khushwant Singh"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian poet is known for his collection of poems titled 'A Portrait of the Artist as a Young Man'?",
                        options: ["Jayanta Mahapatra", "Nissim Ezekiel", "Agha Shahid Ali", "Keki N. Daruwalla"],
                        answer: "Nissim Ezekiel"
                    },
                    {
                        questionType: "mcq",
                        question: "Who wrote the famous Indian novel 'The White Tiger'?",
                        options: ["Aravind Adiga", "Vikram Seth", "Kamila Shamsie", "Kiran Desai"],
                        answer: "Aravind Adiga"
                    },
                    {
                        questionType: "mcq",
                        question: "Which literary work is considered the first known Indian novel in English?",
                        options: ["The Bengali Novel", "Rajmohan's Wife", "Puran Dharm", "The Love Story of a Hindu"],
                        answer: "Rajmohan's Wife"
                    },
                    {
                        questionType: "mcq",
                        question: "Which Indian author is known for the book 'The Inheritance of Loss'?",
                        options: ["Kiran Desai", "Arundhati Roy", "Jhumpa Lahiri", "Ruskin Bond"],
                        answer: "Kiran Desai"
                    },
                    {
                        questionType: "mcq",
                        question: "Who is the author of the book 'The God of Small Things'?",
                        options: ["Arundhati Roy", "Salman Rushdie", "Jhumpa Lahiri", "Ruskin Bond"],
                        answer: "Arundhati Roy"
                    }
                ]
            },
           { 
            sectionTitle:"World History",
                questions:[
                    {
                        questionType: "mcq",
                        question: "Who was the first emperor of China?",
                        options: ["Qin Shi Huang", "Liu Bang", "Sun Tzu", "Confucius"],
                        answer: "Qin Shi Huang"
                    },
                    {
                        questionType: "mcq",
                        question: "What was the primary cause of the outbreak of World War I?",
                        options: ["Assassination of Archduke Franz Ferdinand", "The rise of Nazi Germany", "The Treaty of Versailles", "The invasion of Poland"],
                        answer: "Assassination of Archduke Franz Ferdinand"
                    },
                    {
                        questionType: "mcq",
                        question: "Which empire was ruled by Genghis Khan?",
                        options: ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Byzantine Empire"],
                        answer: "Mongol Empire"
                    },
                    {
                        questionType: "mcq",
                        question: "What significant event happened on July 4, 1776?",
                        options: ["The signing of the Treaty of Versailles", "The Declaration of Independence of the United States", "The beginning of the French Revolution", "The end of World War I"],
                        answer: "The Declaration of Independence of the United States"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the leader of the Soviet Union during World War II?",
                        options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
                        answer: "Joseph Stalin"
                    },
                    {
                        questionType: "mcq",
                        question: "Which civilization is known for its pyramids and mummies?",
                        options: ["Ancient Greece", "Ancient Rome", "Ancient Egypt", "Ancient Mesopotamia"],
                        answer: "Ancient Egypt"
                    },
                    {
                        questionType: "mcq",
                        question: "What was the main goal of the Crusades?",
                        options: ["To conquer new territories", "To spread Christianity and reclaim the Holy Land", "To trade with the East", "To establish trade routes"],
                        answer: "To spread Christianity and reclaim the Holy Land"
                    },
                    {
                        questionType: "mcq",
                        question: "What was the significance of the Berlin Wall?",
                        options: ["It marked the division between East and West Germany", "It was a symbol of the end of World War II", "It was a barrier during the Cold War between NATO and Warsaw Pact countries", "It was built to protect Germany from invasions"],
                        answer: "It marked the division between East and West Germany"
                    },
                    {
                        questionType: "mcq",
                        question: "Who was the famous queen of France who was executed during the French Revolution?",
                        options: ["Marie Antoinette", "Catherine de Braganza", "Elizabeth I", "Cleopatra"],
                        answer: "Marie Antoinette"
                    },
                    {
                        questionType: "mcq",
                        question: "Which document ended the American Civil War?",
                        options: ["The Emancipation Proclamation", "The Treaty of Paris", "The Gettysburg Address", "The Appomattox Court House surrender"],
                        answer: "The Appomattox Court House surrender"
                    }

                ]
            },
            {
                sectionTitle:"Technology",
                questions:[
                    {
                        questionType: "mcq",
                        question: "Who is known as the father of the World Wide Web?",
                        options: ["Tim Berners-Lee", "Vint Cerf", "Linus Torvalds", "Alan Turing"],
                        answer: "Tim Berners-Lee"
                    },
                    {
                        questionType: "mcq",
                        question: "What does the acronym 'HTTP' stand for?",
                        options: ["Hypertext Transfer Protocol", "Hypertext Transaction Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol"],
                        answer: "Hypertext Transfer Protocol"
                    },
                    {
                        questionType: "mcq",
                        question: "Which company developed the first personal computer?",
                        options: ["Apple", "IBM", "Microsoft", "Intel"],
                        answer: "IBM"
                    },
                    {
                        questionType: "mcq",
                        question: "What programming language is primarily used for web development on the client side?",
                        options: ["Python", "JavaScript", "Java", "C++"],
                        answer: "JavaScript"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the main function of an operating system?",
                        options: ["Manage hardware and software resources", "Design graphics", "Execute user applications", "Manage network connections"],
                        answer: "Manage hardware and software resources"
                    },
                    {
                        questionType: "mcq",
                        question: "What does 'SQL' stand for in database technology?",
                        options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"],
                        answer: "Structured Query Language"
                    },
                    {
                        questionType: "mcq",
                        question: "Which technology is used for virtual reality?",
                        options: ["Augmented Reality", "Virtual Reality", "Mixed Reality", "Simulated Reality"],
                        answer: "Virtual Reality"
                    },
                    {
                        questionType: "mcq",
                        question: "Which company is known for its 'Android' operating system?",
                        options: ["Apple", "Microsoft", "Google", "Samsung"],
                        answer: "Google"
                    },
                    {
                        questionType: "mcq",
                        question: "What is the primary function of a router in a network?",
                        options: ["Connect devices to the internet", "Store data", "Secure network traffic", "Manage user access"],
                        answer: "Connect devices to the internet"
                    },
                    {
                        questionType: "mcq",
                        question: "Which technology is used for secure communication over the internet?",
                        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
                        answer: "HTTPS"
                    }
                ]
            }
        ]
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    quizData.sections.forEach(section => {
        section.questions = shuffleArray(section.questions);
    });


    initSection();

    function initSection(){
        let card_btn = document.querySelectorAll('.card-btn');
        card_btn.forEach((card) => {
            card.addEventListener("click", () => {
                let card_btn_number = parseInt(card.getAttribute("data-section"));
                startQuiz(card_btn_number);
            })
        })
    }

    function startQuiz(index){

        const currentQuestionBank = quizData.sections[index].questions;
        let currentQuestionIndex = 0;
        let score = 0;
        let answerSelected = false;

        document.querySelector(".main-content").style.display = "none";
        document.querySelector("body").style.backgroundImage = "none";
        document.querySelector(".question-container").style.display ="flex"
        document.querySelector(".question-container").innerHTML = `
        <div class="questions-content">
            
        </div>
        <div class="options">
            <ul>

            </ul>
        <p class="right">Correct Answer!</p>
        <p class="wrong"></p>
        <button class="next-btn">Next</button>
        </div>
        `

        showQuestion();

        function showQuestion(){
            answerSelected = false;
            let question = currentQuestionBank[currentQuestionIndex];
            let questionElement = document.querySelector(".questions-content");
            let optionsElement = document.querySelector("ul");

            questionElement.textContent = question.question;
            optionsElement.innerHTML = ``;
            document.querySelector(".right").style.display = 'none';
            let wrong = document.querySelector(".wrong").style.display = 'none'

            
            question.options.forEach(option => {
                const optionElement = document.createElement('li');
                optionElement.textContent = option;
                optionsElement.appendChild(optionElement);

    
                optionElement.addEventListener("click", function(){
                    if(!answerSelected){
                        answerSelected = true;
                        optionElement.classList.add("selected");
                        checkAnswer(option, question.answer);
                    }
                })
            })
        }


        document.querySelector(".next-btn").addEventListener("click", () => {
            if(currentQuestionIndex == currentQuestionBank.length - 1){
                endQuiz();
            }
            else{
                answerSelected = false
                currentQuestionIndex++;
                showQuestion();
            }
        })

        function checkAnswer(userAns, correctAns){
            if(userAns === correctAns){
                score++;
                document.querySelector(".right").style.display = 'block';
                updateScore()
            }
            else{
                let wrong = document.querySelector(".wrong");
                wrong.innerHTML = `Wrong Answer! "${correctAns}"`
                wrong.style.display = 'block'
            }
        }

        function updateScore(){
            console.log(score)
        }

        function endQuiz(){
            let questionContainer = document.querySelector(".question-container");

            questionContainer.innerHTML = `
            <img src="https://surjeet-quizapp.netlify.app/img/quiz%20end.jpg" alt="quizEnd">
            <div class="scoreElement>
                <h1 class="quizEnd-h1">QUIZ Completed</h1>
                <p>Your Final Score is : ${score}/10</p>
                <button id="home-btn">Go To Home</button>
            </div>
            `;

            let homeBtn = document.getElementById("home-btn");

            homeBtn.addEventListener("click", function(){
                document.querySelector(".main-content").style.display = "";
                document.querySelector("body").style.backgroundImage = "";
                questionContainer.style.display = `none`;

                function shuffleArray(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                }
            
                
                quizData.sections.forEach(section => {
                    section.questions = shuffleArray(section.questions);
                });
            })
        }
    }

    let randonBtn = document.querySelector(".randon-btn-btn");

    randonBtn.addEventListener("click",function(){
        
        const randomSectionIndex = Math.floor(Math.random() * quizData.sections.length);
        console.log(randomSectionIndex);
    
       
        startQuiz(randomSectionIndex);
    })

})

