// SHISFEST'26 — Full event catalog.
// Source of truth: the official "2026 INVITE.pdf" document.
// Content is extracted and structured verbatim. Do not invent or embellish
// details here — edit only to reflect updates to the official invite.

export interface JudgingCriterion {
  criteria: string;
  marks: string;
}

export interface EventSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export const eventCategories = [
  "English",
  "Sanskrit",
  "Hindi",
  "Science",
  "Economics",
  "Commerce",
  "Mathematics",
  "Social Science",
  "Foreign Language",
  "Art",
  "Drama",
  "Dance",
  "Music",
  "Psychology",
] as const;

export type EventCategory = (typeof eventCategories)[number];

export interface EventData {
  id: string;
  title: string;
  nativeTitle?: string;
  category: EventCategory;
  eligibleGrades: string;
  participants: string;
  language: "en" | "hi";
  theme?: string;
  duration?: string;
  intro?: string[];
  sections: EventSection[];
  judgingCriteria?: JudgingCriterion[];
  totalMarks?: string;
  teacherInCharge: string[];
  studentInCharge: string[];
  note?: string;
}

export const events: EventData[] = [
  {
    id: "slam-poetry",
    title: "Slam Poetry",
    category: "English",
    eligibleGrades: "VI - VIII",
    participants: "Individual",
    language: "en",
    theme: "The Version of Me You Never See.",
    duration: "2 - 2:30 mins",
    intro: [
      "This competition aims to enhance students' awareness of current affairs while developing their communication, articulation, and public speaking skills.",
    ],
    sections: [
      {
        heading: "Rules",
        bullets: [
          "Every poem must be written by the participant performing it.",
          "Reading from the paper is not permitted.",
          "Performers cannot use any physical props, musical instrument or costumes.",
          "No recorded music is permitted.",
          "Use of offensive language is prohibited.",
          "The decision of the judges will be final and binding.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Content", marks: "10" },
      { criteria: "Creativity", marks: "10" },
      { criteria: "Delivery and Performance", marks: "10" },
      { criteria: "Audience Connect", marks: "10" },
    ],
    totalMarks: "40 marks",
    teacherInCharge: ["Ms. Shubhi Basantani"],
    studentInCharge: ["Naavya Jain"],
  },
  {
    id: "news-reading",
    title: "News Reading",
    category: "English",
    eligibleGrades: "IX - X",
    participants: "Team of 2",
    language: "en",
    intro: [
      "This competition aims to enhance students' awareness of current affairs while developing their communication, articulation, and public speaking skills. It also seeks to foster critical thinking, effective presentation skills, and a deeper understanding of the world around them, while encouraging respect for diverse perspectives and cultures.",
    ],
    sections: [
      {
        heading: "Guidelines",
        bullets: ["The competition will be conducted in two rounds."],
      },
      {
        heading: "Round I",
        bullets: [
          "Each participant will present 10 news headlines within one minute 30 seconds.",
          "Only the shortlisted participants will qualify for the second round.",
        ],
      },
      {
        heading: "Round II",
        bullets: [
          "Time Limit: each participant will be given 1 minute to 1 minute 30 seconds for the presentation.",
          "A warning bell may be given 30 seconds before the completion of the allotted time.",
          "Exceeding the prescribed time may result in deduction of marks.",
          "Participants will present news in the following sequence: International News, National News, Political News, Business News, Entertainment News, Sports News, Weather Report.",
          "The news script will be provided to the participants 15 minutes before the competition.",
          "Each participant must prepare and deliver their own opening and closing remarks.",
          "Participants should present the news in the style of a professional newsreader in formal attire, maintaining appropriate journalistic language and decorum.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Fluency", marks: "10" },
      { criteria: "Pronunciation", marks: "10" },
      { criteria: "Confidence", marks: "10" },
      { criteria: "Overall Presentation", marks: "10" },
    ],
    totalMarks: "40 marks",
    teacherInCharge: ["Ms. Rachna Bhatia"],
    studentInCharge: ["Maya Purakyastha"],
  },
  {
    id: "quizzeria",
    title: "Quizzeria",
    category: "English",
    eligibleGrades: "IX - XII",
    participants: "Team of 3",
    language: "en",
    intro: [
      "The competition aims at providing a platform for the participants to exhibit their knowledge in the subject beyond their textbooks and academic syllabi. It is a quick and fun way of testing an individual's literary and language-based skills and aiding in inculcating team spirit amongst the participants.",
    ],
    sections: [
      {
        heading: "Guidelines",
        bullets: [
          "The selection round will have MCQs on the syllabus given below. It will be a pen and paper test.",
          "Top five schools will go to the final round.",
          "There will be a total of five rounds.",
          "Syllabus: questions will be based on Shakespeare and his writings, Poets of the Romantic Era and their writings, Vocabulary, Proverbs and Idioms and Phrases.",
          "Any unfair means used will disqualify the team from the competition.",
        ],
      },
      {
        heading: "Round 1 — Shakespeare and his writings",
        bullets: [
          "Each team will be asked 2 questions.",
          "Time Limit – 20 seconds per question.",
          "Marks Allotted – 10 marks for correct answer & 0 marks for wrong answer.",
        ],
      },
      {
        heading:
          "Round 2 — Poets of the Modern Era and their writings (T.S. Eliot, Yeats, Auden, Wilfred Owen, D. H. Lawrence, Thomas Hardy and Robert Frost)",
        bullets: [
          "Each team will be asked 2 questions.",
          "Time Limit – 20 seconds per question.",
          "Marks Allotted – 10 marks for correct answer & 0 marks for wrong answer.",
        ],
      },
      {
        heading: "Round 3 — Proverbs",
        bullets: [
          "Each team will be asked 2 questions.",
          "Time Limit – 20 seconds per question.",
          "Marks Allotted – 10 marks for correct answer & 0 marks for wrong answer.",
        ],
      },
      {
        heading: "Round 4 — Guess the Idiom",
        bullets: [
          "Pictorial representations of idioms will be shown to the participants and they'll have to guess the idiom.",
          "Each team will be asked 2 questions.",
          "Time Limit – 20 seconds per question.",
          "Marks Allotted – 10 marks for correct answer & 0 marks for wrong answer.",
        ],
      },
      {
        heading: "Round 5 — Taboo",
        bullets: [
          "Cue cards with the word to be guessed and the list of taboo words will be given to one of the members of the team. The other two members will guess the word based on the hints provided by the 1st member.",
          "Each team will guess 2 words.",
          "Time Limit - 60 seconds per word.",
          "Marks Allotted – 10 marks for correct answer & 0 marks for wrong answer.",
          "The decision of the quiz master will be final and will not be subjected to any change.",
        ],
      },
    ],
    teacherInCharge: ["Ms. Anshu Bhatnagar"],
    studentInCharge: ["Anya Bhandari"],
  },
  {
    id: "prashnottri",
    title: "Prashnottri",
    nativeTitle: "प्रश्नोत्तरी",
    category: "Sanskrit",
    eligibleGrades: "VIII",
    participants: "Team of 2",
    language: "hi",
    intro: [
      "हिंदी व संस्कृत प्रश्नोत्तरी प्रतियोगिता का उद्देश्य हिंदी व संस्कृत भाषा, सामान्य व्याकरण और साहित्य के ज्ञान को प्रदर्शित करना है।",
    ],
    sections: [
      {
        heading: "नियम",
        bullets: [
          "इस प्रतियोगिता में प्रत्येक विद्यालय से कक्षा आठवीं के दो विद्यार्थियों का एक दल भाग ले सकता है।",
          "यह प्रतियोगिता दो चक्रों में आयोजित की जाएगी: प्रारंभिक चक्र और मुख्य चक्र।",
          "प्रथम चरण में 40 अंकों की लिखित परीक्षा ली जाएगी, जिसके लिए 30 मिनट का समय दिया जाएगा। इस चरण के विजेता छात्रों को ही अगले चरण में जाने का अवसर प्राप्त होगा।",
        ],
      },
      {
        heading: "हिंदी",
        bullets: [
          "कक्षा आठवीं तक पढ़ाया जाने वाला व्याकरण भाग।",
          "भारतीय त्योहार, भारतीय कैलेंडर के अनुसार मास व तिथियाँ।",
          "मुंशी प्रेमचंद, रामधारी सिंह दिनकर और महादेवी वर्मा का सामान्य जीवन परिचय।",
          "रामायण और महाभारत संबंधित प्रश्न।",
          "कबीर व रहीम के दोहे।",
        ],
      },
      {
        heading: "संस्कृत",
        bullets: [
          "सामान्य फल, सब्जियों, पशुओं पक्षियों तथा वस्तुओं के नाम।",
          "प्रमुख ग्रंथ (रामायण, महाभारत, पंचतंत्र तथा भगवद्गीता)।",
          "संस्कृत संख्याएँ तथा समय।",
          "शब्दरूप: अकारान्त, आकारान्त, इकारान्त तथा ईकारान्त।",
          "धातुरूप: परस्मैपदी (पाँचों लकारों में)।",
        ],
      },
    ],
    totalMarks: "40 अंक",
    teacherInCharge: ["डॉ. रेखा श्रीवास्तव"],
    studentInCharge: ["अपारूपा मलिक"],
  },
  {
    id: "ekal-abhinay",
    title: "Ekal Abhinay",
    nativeTitle: "एकल अभिनय",
    category: "Hindi",
    eligibleGrades: "VI - VII",
    participants: "Individual",
    language: "hi",
    sections: [
      {
        heading: "नियम",
        bullets: [
          "इस प्रतियोगिता में प्रत्येक विद्यालय से छठी व सातवीं कक्षा से कोई एक छात्र/छात्रा भाग ले सकता/सकती है।",
          "छात्र किसी भी प्रसिद्ध लेखक द्वारा लिखी गई पुस्तक या फिर उससे सम्बन्धित फिल्म के किसी भी पात्र को प्रस्तुत कर सकता है।",
          "प्रस्तुतीकरण की अवधि 2 मिनट होगी। 2 मिनट से अधिक बोलने पर निर्णायक मंडल की सहमति से प्रतियोगी के कुल अंकों में से 5 अंक काटे जा सकते हैं। इसी प्रकार 1:30 मिनट से कम बोलने पर भी 5 अंक काटे जा सकते हैं। पहली घंटी 1:30 मिनट पर बजाई जाएगी व दूसरी घंटी 2:00 मिनट पर बजाई जाएगी।",
          "अपनी प्रस्तुति को और अधिक प्रभावशाली बनाने के लिए छात्र वेशभूषा का प्रयोग भी कर सकते हैं। प्रतियोगियों को उच्चारण, विषय वस्तु तथा प्रस्तुतीकरण के आधार पर 30 में से अंक दिए जाएंगे।",
        ],
      },
      {
        heading: "निर्णय पद्धति",
        paragraphs: [
          "निर्णायक मंडल द्वारा प्रत्येक प्रतियोगी के कुल प्राप्तांक के आधार पर विजेता घोषित किया जाएगा। निर्णायक मंडल का निर्णय सर्वमान्य होगा।",
        ],
      },
    ],
    judgingCriteria: [{ criteria: "उच्चारण, विषय वस्तु तथा प्रस्तुतीकरण", marks: "30" }],
    totalMarks: "30 अंक",
    teacherInCharge: ["पूजा सेठी"],
    studentInCharge: ["पूर्वी गुप्ता"],
  },
  {
    id: "samachaar-vachan",
    title: "Samachaar Vachan",
    nativeTitle: "समाचार वाचन",
    category: "Hindi",
    eligibleGrades: "IX - X",
    participants: "Team of 2",
    language: "hi",
    intro: [
      "इस प्रतियोगिता का उद्देश्य छात्रों में समाचार पढ़ने की कला, अभिव्यक्ति, आत्मविश्वास तथा जनसंचार कौशल का विकास करना है। इस प्रतियोगिता द्वारा छात्र न केवल शुद्ध उच्चारण, सही भाव प्रवणता और स्वर-लय में समाचार पढ़ने का अभ्यास करेंगे, बल्कि उनमें समसामयिक घटनाओं की समझ और जागरूकता भी बढ़ेगी।",
    ],
    sections: [
      {
        heading: "नियम",
        bullets: [
          "इस प्रतियोगिता में प्रत्येक विद्यालय से नवमी व दसवीं कक्षा के कोई दो विद्यार्थी भाग ले सकते हैं।",
          "प्रतियोगिता दो चरणों में विभाजित होगी।",
          "प्रथम चरण में प्रत्येक प्रतिभागी को एक मिनट में 10 खबरें प्रस्तुत करनी होंगी। इस चरण के विजेता छात्रों को ही अगले चरण में जाने का अवसर दिया जाएगा।",
          "समाचार छात्रों को प्रतियोगिता शुरू होने से 15 मिनट पहले दिए जायेंगे।",
          "आरंभिक और समापन वाक्य प्रत्येक प्रतिभागी का स्वयं का होगा।",
          "प्रतिभागी को धाराप्रवाह बोलने, उच्चारण की शुद्धता, आत्मविश्वास और प्रस्तुतीकरण के आधार पर 40 में से अंक दिए जायेंगे।",
          "समाचार वाचन के समय प्रतिभागी विद्यालय या औपचारिक वेशभूषा धारण कर सकता है।",
        ],
      },
      {
        heading: "दूसरे चरण के विषय (इसी क्रम में प्रस्तुत करना होगा)",
        bullets: [
          "अंतर्राष्ट्रीय समाचार",
          "राष्ट्रीय समाचार",
          "राजनीतिक समाचार",
          "स्थानीय समाचार",
          "व्यापार समाचार",
          "मनोरंजन समाचार",
          "खेल समाचार",
          "मौसम समाचार",
        ],
      },
      {
        heading: "निर्णय पद्धति",
        paragraphs: [
          "निर्णायक मंडल द्वारा प्रत्येक प्रतियोगी के कुल प्राप्तांक के आधार पर विजेता घोषित किया जाएगा। निर्णायक मंडल का निर्णय सर्वमान्य होगा।",
        ],
      },
    ],
    totalMarks: "40 अंक",
    teacherInCharge: ["मधुलिका शुक्ला"],
    studentInCharge: ["नव्या लड्डा"],
  },
  {
    id: "innovative-idea",
    title: "Innovative Idea",
    category: "Science",
    eligibleGrades: "VI - VIII",
    participants: "Team of 2",
    language: "en",
    intro: [
      'The Science Department at Scottish High International School cordially invites other educational institutions to partake in the esteemed SHIS Fest, a remarkable event aimed at fostering cultural diversity and promoting a deeper understanding of the world through "The Science Innovative Ideas Presentation Competition."',
    ],
    sections: [
      {
        heading: "Educational Emphasis / Areas of Reference",
        bullets: [
          "In this competition, students can showcase their innovative ideas related to science and technology which can solve real world problems.",
          "Identify the areas in science that you are more interested in. Some popular areas in science include physics, chemistry, astronomy, biology, etc. By leveraging the strengths of these varied scientific domains, you have the potential to devise groundbreaking solutions that play a vital role in addressing substantial challenges in climate change and environmental sustainability, public health and pandemic, space exploration and astrophysics, water scarcity and quality, agriculture, STEM education, etc.",
          "When you choose a topic from the area that you are passionate about, your enthusiasm will fuel your efforts and make the project more enjoyable.",
        ],
      },
      {
        heading: "Guidelines",
        bullets: [
          "Each team will be represented by two participants.",
          "Participants will be asked to explain their ideas to judges through a model/experiment/activity and a PPT presentation.",
          "Presentation should be in the form of a visual display and a brief oral explanation of the topic.",
          "Participants are required to deliver their presentations within a specified 3-5-minute (maximum 5) time frame.",
          "Participant must dress up in proper school uniform.",
          "Participants must provide a clear demonstration and groundbreaking of their ideas to foster innovation.",
        ],
      },
      {
        heading: "Please Note",
        bullets: [
          "Preliminary Selection Round: participants are kindly requested to share details of their chosen topics a week before the competition through a short video/PPT on the given e-mail id.",
          "Top ten teams will qualify for the Final Round.",
          "Selected teams will be informed through e-mail.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Presentation skills — ability to effectively communicate ideas", marks: "—" },
      { criteria: "Uniqueness and creativity of the idea or solution presented", marks: "—" },
      { criteria: "Feasibility and application of the idea", marks: "—" },
      {
        criteria:
          "Ability to think critically, approach problems creatively, and demonstrate a deep understanding of the topic",
        marks: "—",
      },
      { criteria: "Judges' round of questioning based on the topic", marks: "—" },
    ],
    teacherInCharge: ["Ms. Saswata Chaudhuri"],
    studentInCharge: ["Arnav Sawhney"],
  },
  {
    id: "mystery-box",
    title: "Mystery Box",
    category: "Science",
    eligibleGrades: "IX - X",
    participants: "Team of minimum 2 and maximum 3 members",
    language: "en",
    intro: [
      "This exciting inter-school competition tests students' scientific thinking, creativity, teamwork, and problem-solving skills. Participants will receive a sealed Mystery Box containing everyday materials and will be challenged to design and demonstrate Physics principles using the given items. The competition encourages students to apply fundamental physics concepts in innovative ways while communicating their scientific reasoning effectively.",
    ],
    sections: [
      {
        heading: "Competition Format",
        bullets: [
          "Each participating team will receive a sealed Mystery Box containing random materials.",
          "The challenge is to design and present a modelling / experimental setup or assembly of the material given that successfully explains one or more physics concepts using the provided materials.",
          "Teams will be assessed on their scientific understanding, creativity, effective use of materials, and presentation skills.",
        ],
      },
      {
        heading: "Competition Rules & Guidelines",
        bullets: [
          "Each team will receive one sealed Mystery Box. Every box will contain different materials of a similar difficulty level.",
          "Teams are not permitted to exchange their Mystery Box or request another box.",
          "Only the materials provided inside the Mystery Box may be used. Additional materials, gadgets, calculators, mobile phones, smart watches, laptops, or internet access are strictly prohibited.",
          "Teams should utilise at least 80% of the materials provided in the Mystery Box. If a team is unable to use every item in the box, they should briefly explain why.",
          "Teams will be given 15 minutes to examine the materials, discuss ideas, and prepare their demonstration. Each team will have 5 minutes to present their model, experiment, or demonstration before the judges.",
          "Judges' Question Round: 2 minutes.",
          "Participant teams may make simple modifications to the given materials (folding paper, tying thread, arranging objects, etc.) but should not intentionally damage the materials.",
          "If any material is not used, the team should briefly explain the reason.",
          "Teams should identify the physics principle(s) involved, demonstrate the concept using the given materials, explain the scientific reasoning clearly, and answer questions from the judges (if any).",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Understanding & Application of Physics Concepts", marks: "20" },
      { criteria: "Creativity & Innovation", marks: "20" },
      { criteria: "Effective Use of Mystery Box", marks: "20" },
      { criteria: "Scientific Demonstration & Explanation", marks: "20" },
      { criteria: "Presentation Skills", marks: "20" },
    ],
    totalMarks: "100 marks",
    teacherInCharge: ["Ms. Anita Kashyap", "Mr. Neeraj Pant"],
    studentInCharge: ["Saanvi Aggarwal"],
  },
  {
    id: "lab-detective",
    title: "Lab Detective",
    category: "Science",
    eligibleGrades: "IX - X",
    participants: "Team of minimum 2 and maximum 3 members",
    language: "en",
    duration: "10-15 minutes (presentation)",
    intro: [
      "Lab Detective is an engaging interschool chemistry competition that challenges students to apply scientific knowledge, teamwork, and problem-solving skills through interactive chemistry-based events. Participants will investigate clues, solve chemical mysteries, and demonstrate their conceptual understanding in an exciting and competitive environment.",
    ],
    sections: [
      {
        heading: "Rounds",
        bullets: [
          'Periodic Table Bingo – "Crack the Element Code": teams identify elements from scientific clues to complete a Bingo pattern. Accuracy and speed determine the winners.',
          'Balancing Chemical Reactions Relay Race – "Race Against the Reaction": participants complete a chemistry relay by balancing equations and answering bonus conceptual questions before tagging the next teammate.',
          'Mystery Chemical Detective – "Who Am I?": teams identify mystery chemicals from progressive clues and score higher by answering earlier and explaining one important property or use.',
          'Chemical Bonding Maze – "Ionic & Covalent Escape Challenge": teams navigate a chemistry maze by identifying ionic and covalent compounds and solving bonding-based challenges.',
        ],
      },
    ],
    judgingCriteria: [
      {
        criteria: "Scientific accuracy of the information, methods, observations, and conclusions presented",
        marks: "20",
      },
      {
        criteria: "Ability to demonstrate a clear understanding of the concepts and principles related to the topic",
        marks: "20",
      },
      {
        criteria: "Ability to identify problems, think critically, and develop creative, logical, and effective solutions",
        marks: "20",
      },
      { criteria: "Ability to communicate, coordinate, cooperate, and contribute effectively as a team", marks: "20" },
      {
        criteria: "Ability to plan and complete the presentation or activity effectively within the allotted time (10-15 minutes)",
        marks: "—",
      },
    ],
    teacherInCharge: ["Ms. Aparna Dwivedi"],
    studentInCharge: ["Samaira Guglani"],
  },
  {
    id: "bioflix",
    title: "BioFlix",
    category: "Science",
    eligibleGrades: "IX - XII",
    participants: "Team of 2",
    language: "en",
    duration: "5-7 minutes",
    intro: [
      "BIOFLIX transforms the silver screen into a scientific laboratory where every movie scene becomes a hypothesis waiting to be tested. Participants will critically examine biological concepts portrayed in films, challenge cinematic myths with scientific evidence, and discover whether Hollywood/Bollywood has captured the truth or simply created compelling fiction.",
    ],
    sections: [
      {
        heading: "Sample Topics",
        bullets: [
          "Jurassic Park – Dinosaur cloning",
          "Spider-Man – Spider bite creating superpowers",
          "Rise of the Planet of the Apes – Genetic enhancement",
          "Avatar – Biological neural connections",
          "Venom – Human-symbiote relationship",
        ],
      },
      {
        heading: "Guidelines",
        bullets: [
          "Only commercially released movies are permitted. TV series, web series and documentaries are not allowed.",
          "Total presentation time: 5-7 minutes.",
          "Every biological claim must end with a clear FACT or FICTION verdict.",
          "Every verdict must be justified using accepted biological evidence. Unsupported opinions will not receive marks.",
          "Charts, models, props, animations and simple demonstrations are permitted.",
          "Scientific references are mandatory.",
          "Movie clips must be appropriate for a school audience.",
          "Judges' decision will be final.",
        ],
      },
      {
        heading: "Submission Guidelines (at least 2 days before the competition)",
        bullets: [
          "Name of the movie",
          "Title or brief description of the selected scene",
          "The movie clip (30-60 seconds total) in MP4 format",
          "A brief synopsis (100-150 words) explaining the biological concept being analysed",
        ],
      },
      {
        heading: "Presentation Sequence on SHIS Fest Day",
        bullets: [
          "Play the selected movie clip (30-60 seconds in total).",
          "Briefly explain the context of the scene.",
          "Identify the biological claim shown in the movie.",
          "Display your verdict clearly: FACT or FICTION.",
          "Support your verdict using biological concepts, diagrams, models, experimental results, textbook principles, scientific research or real-life biological examples.",
          "Explain what the movie got right or wrong and how the concept works in real life.",
          "Conclude with one key biological takeaway.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Accuracy of Biological Concepts", marks: "5" },
      { criteria: "Quality of Scientific Evidence & Justification", marks: "15" },
      { criteria: "Correct Identification of FACT or FICTION", marks: "10" },
      { criteria: "Creativity, Presentation & Use of Visual Aids", marks: "15" },
      { criteria: "Communication & Time Management", marks: "5" },
    ],
    totalMarks: "50 marks",
    teacherInCharge: ["Ms. Swati Sohni", "Ms. Indrani Sinha"],
    studentInCharge: ["Sanvi Sengupta"],
  },
  {
    id: "econquest",
    title: "EconQuest",
    category: "Economics",
    eligibleGrades: "XI - XII",
    participants: "Team of 2",
    language: "en",
    intro: [
      "EconQuest - The Economics Quiz is an exciting intellectual battle designed to test participants' knowledge of key economic concepts and Economic current affairs in a fast-paced quiz covering topics such as the facts on the Indian economy, Budget 2026, Banking, Data Analysis and Problem-Solving skills. This is a golden opportunity for students to showcase their analytical skills, economic awareness and quick thinking.",
    ],
    sections: [
      {
        heading: "Quiz Format",
        bullets: [
          "Preliminary (Qualifying) Round: all participating teams will compete in the preliminary round, out of which the top six teams will qualify for the Final Round.",
          "Final Round: the Final Quiz will comprise of four rounds.",
        ],
      },
      {
        heading: "Round 1: General Economic Affairs",
        bullets: [
          "Multiple choice questions will be given to the teams on the diverse sectors of Indian economy, Indian government policies & programs, Budget 2026, Nobel Prize winners in Economics and General Economic terms/concepts.",
          "Five questions of 10 marks will be asked to each team.",
        ],
      },
      {
        heading: "Round 2: Audio Visual Round",
        bullets: [
          "Each team will identify Governors of the Reserve Bank of India and renowned Economists from the given images.",
          "Questions will be asked about facts related to Indian currency notes and coins, including their design, security features etc.",
          "Teams will be shown a visual scenario/clip along with multiple choice options for which they have to identify the economic problem/concept mentioned in the same.",
          "Five questions of 10 marks will be asked to each team.",
        ],
      },
      {
        heading: "Round 3: Economic Analysis and Interpretations",
        bullets: [
          "Questions will include graphs, newspaper headlines, data interpretation and odd-one-out terms.",
          "Four questions of 10 marks will be asked to each team.",
        ],
      },
      {
        heading: "Round 4: Rapid Fire Round",
        bullets: [
          "Teams will be tested on their knowledge of abbreviations by providing the full forms of commonly used economic, banking and financial terms within a time limit of 60 seconds.",
          "Each correct answer earns 2 points. No negative marking for the wrong answer.",
          "A maximum of 10 abbreviations will be asked from each team.",
        ],
      },
    ],
    teacherInCharge: ["Pooja Sharma"],
    studentInCharge: ["Ishaan Das", "Sadhya Sajwan"],
  },
  {
    id: "vision-to-venture",
    title: "Vision to Venture",
    category: "Commerce",
    eligibleGrades: "XI - XII",
    participants: "Team of 2",
    language: "en",
    intro: [
      "Vision to Venture is a Business Plan competition for students of Grades XI and XII that challenges participants to transform innovative ideas into viable business ventures. Teams will identify a real-world problem, develop an innovative solution, and present a comprehensive business plan supported by market research, financial feasibility, branding, and a short promotional advertisement video. Finalists will pitch their business ideas before a panel of judges.",
    ],
    sections: [
      {
        heading: "Round 1: Online Submission",
        bullets: [
          "Teams must submit a PowerPoint presentation covering 12 to 15 slides. A detailed PDF containing the presentation guidelines, competition rules, and other important instructions has been shared along with this document.",
          "Submission Deadline: 25th September 2026.",
        ],
      },
      {
        heading: "Round 2: Final Presentation",
        bullets: [
          "The top 10 teams will be shortlisted to present their business ideas before a panel of judges offline on 10th October 2026.",
          "Shortlisted teams will be informed via email by the SHIS Fest Organising Team on or before 1st October 2026.",
          "A promotional advertisement (maximum duration: 1 minute) must be included as part of the presentation.",
          "The presentation will be followed by a Q&A session with the judges.",
          "Participants are encouraged to use visuals, prototypes, or product samples wherever applicable.",
        ],
      },
    ],
    judgingCriteria: [
      {
        criteria:
          "Innovation & Problem Solving — originality of the business idea, relevance of the problem identified, and effectiveness of the proposed solution",
        marks: "10",
      },
      {
        criteria:
          "Business Feasibility — strength of the business model, market research, financial viability, and potential for sustainable growth",
        marks: "10",
      },
    ],
    teacherInCharge: ["Ms. Bhavyata Wadhawan"],
    studentInCharge: ["Shreya Mazumdar"],
  },
  {
    id: "complexity-precision-quiz",
    title: "Complexity and Precision Quiz",
    category: "Mathematics",
    eligibleGrades: "VII - VIII",
    participants: "Team of 3 (at least one from each grade)",
    language: "en",
    intro: [
      "Let's unlock a world of potential by rummaging about solutions to untie the knotty problems in a perpetual battle against the mathematics blues. Complexity and Precision is a prestigious contest that challenges students to apply mathematical tools and concepts to real-world problems, thus helping students' ability to access, assess, adopt, and apply knowledge, to think independently to exercise appropriate judgement and to collaborate with others to make sense of new situations in order to become a globalized citizen.",
    ],
    sections: [
      {
        heading: "Guidelines",
        bullets: [
          "The competition will be held on Saturday, 10th October 2026.",
          "Each school is allowed to send only one team.",
          "There will be two rounds in the Quiz — Preliminary round: Complexity, and Final round: Precision Mathematics Quiz.",
          "Preliminary round: Complexity will be a pen-paper-based test.",
          "The top 5 preliminary round teams would qualify for the final round, Precision - Mathematics Quiz.",
          "The final round, Precision Mathematics Quiz, will be a live interactive quiz, wherein the top five teams would compete for the winner title.",
          "No electronic gadgets or equipment is allowed during both rounds.",
          "Any kind of written or printed material is not allowed.",
          "Any team found using unfair means shall be immediately disqualified.",
          "The Rules & Regulations of the Precision Round will be conveyed only to the qualified teams.",
          "Judgement Criteria: the decision of the quiz master will be final and will not be subjected to any change.",
        ],
      },
    ],
    teacherInCharge: ["Dr. Gurpreet Kaur"],
    studentInCharge: ["Ritvik Hazara"],
  },
  {
    id: "complexity-precision-symposium",
    title: "Complexity and Precision Symposium",
    category: "Mathematics",
    eligibleGrades: "IX - X",
    participants: "Team of exactly 2 (one speaks FOR, one speaks AGAINST the motion)",
    language: "en",
    intro: [
      "The symposium follows a debate-style motion format: Participant 1 speaks FOR the motion/topic, and Participant 2 speaks AGAINST the motion/topic. Event Format: Team-based Mathematical Debate & Presentation. Both participants represent the school as a unified team, but individual speaking scores and time tracking will be maintained.",
    ],
    sections: [
      {
        heading: "Topic & Presentation Requirements",
        bullets: [
          "The final round topics will be officially shared with participating schools on 25th September 2026.",
          "Participants must support their arguments and mathematical demonstrations using a PowerPoint presentation.",
          "Presentation slides must be submitted prior to the event as per the organizers' submission deadline.",
          "The competition will be held on Saturday, 10th October 2026.",
        ],
      },
      {
        heading: "Time Duration & Penalties",
        bullets: [
          "Time Allocation: each participant is allotted 2 to 3 minutes for their presentation.",
          "Time Penalty: a mandatory 5-point deduction will be applied to an individual's score if their speech falls short of 2 minutes or exceeds 3 minutes.",
        ],
      },
      {
        heading: "Rebuttal Round Rules",
        bullets: [
          "Questioning Order: the succeeding school on the roster will pose exactly one (1) rebuttal question to the team of the preceding school.",
          "Default Score Clause: if the succeeding school fails to pose a rebuttal question within the allotted time, the presenting school will automatically be awarded the full 10 points for the rebuttal round by default.",
        ],
      },
      {
        heading: "Final Score Formulation",
        paragraphs: [
          "The final score for each participating school will be the sum of both participants' scores at the end of the competition.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Conceptual Clarity", marks: "10" },
      { criteria: "Mathematical terminology used", marks: "10" },
      { criteria: "Mathematical application", marks: "10" },
      { criteria: "Validity of arguments", marks: "10" },
      { criteria: "Overall presentation", marks: "10" },
      { criteria: "Rebuttal Round", marks: "10" },
    ],
    totalMarks: "60 points per speaker/team",
    teacherInCharge: ["Dr. Gurpreet Kaur"],
    studentInCharge: ["Ritvik Hazara"],
  },
  {
    id: "talking-titans",
    title: "Talking Titans",
    category: "Social Science",
    eligibleGrades: "Category 1 - V | Category 2 - VIII",
    participants: "Individual",
    language: "en",
    intro: [
      "Words can spark a revolution, reform society and create an ideal future. Inevitably words outlive their speaker, so at Scottish High International School, we would like to relive these speeches that are etched forever in our hearts.",
    ],
    sections: [
      {
        heading: "Guidelines",
        bullets: [
          "Participants will select a Historical or Political speech given by Historical or Political leaders from the 19th to 21st Century. These leaders can be National or International. Participants must orate a historical or revolutionary speech delivered by their chosen leader and not a biography of the leader.",
          "Time: 3 minutes.",
          "Participants will announce the name of their chosen leader and where and on what occasion the selected speech was given.",
          "Hand gestures are welcomed along with voice modulation as appropriate. Students should emulate their chosen leader as much as possible. Props can be used. Students may dress up as their chosen leader.",
          "Speech can be delivered in English or Hindi as per the choice of the participant.",
          "A speech less than 2 min 30 seconds will invite a deduction of two marks from the total marks.",
          "Participants found using any unfair means (reading from paper) will be disqualified.",
          "Judge's decision will be final.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Relevance to the topic and content", marks: "10" },
      { criteria: "Presentation/delivery", marks: "10" },
      { criteria: "Confidence", marks: "10" },
    ],
    totalMarks: "30 marks",
    teacherInCharge: ["Ms. Bhawna Dhull", "Ms. Bincy Gaur"],
    studentInCharge: ["Siddhi Khandelwal"],
  },
  {
    id: "tell-a-geo-tale",
    title: "Tell A Geo Tale",
    category: "Social Science",
    eligibleGrades: "VII",
    participants: "Team of 2",
    language: "en",
    theme: "The Story Behind Earth's Landforms",
    intro: [
      "Unfold the stories carved by nature, where every relief feature tells a tale of time. The objective of Tell A Geo Tale is to combine scientific understanding with creativity, helping participants appreciate the fascinating processes that shape our planet and the vital role these landforms play in Earth's ecosystem. Nature is the greatest author; every relief feature is a chapter in Earth's timeless story.",
    ],
    sections: [
      {
        heading: "Guidelines",
        bullets: [
          "Participants will select a topic from the formation of any relief feature such as mountains, plains, plateaus, islands, valleys, etc. and explain its formation in the form of a story and the importance of that relief feature in the ecosystem.",
          "Participants can use any type of props such as models, charts, etc. to explain the tale (optional).",
          "PPT is compulsory. The presentation should include a scientifically accurate explanation of how the chosen relief feature was formed; a creative and engaging storytelling approach, where the landform may be personified or presented through an imaginative narrative; and an explanation of the importance of the chosen relief feature in maintaining ecological balance, supporting biodiversity, influencing climate, or sustaining human life.",
          "Participants will be given 3-5 minutes to speak. Less than 3 minutes will invite a deduction of two marks from the total marks.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Content", marks: "10" },
      { criteria: "Presentation", marks: "10" },
      { criteria: "Confidence", marks: "10" },
    ],
    totalMarks: "30 marks",
    teacherInCharge: ["Ms. Deepika Thakur", "Ms. Shailja Sharma"],
    studentInCharge: ["Arshnoor Kaur"],
  },
  {
    id: "lingua-quest",
    title: "Lingua Quest",
    category: "Foreign Language",
    eligibleGrades: "IX - X",
    participants: "Team of 2 (representing French, German or Spanish)",
    language: "en",
    intro: [
      "We are delighted to invite students to participate in LinguaQuest, an exciting celebration of languages and cultures, where participants will explore their knowledge of French, German, and Spanish through an engaging quiz.",
    ],
    sections: [
      {
        heading: "Rules",
        bullets: [
          "The quiz will consist of 5 rounds, with each round focusing on a different linguistic and cultural theme: Language & Country, Festivals & Traditions, Food, Famous Personalities, and General Knowledge.",
          "Each round will have 3-4 questions per language.",
        ],
      },
      {
        heading: "Question Format",
        bullets: [
          "All questions will be Multiple-Choice Questions (MCQs), except for the General Knowledge round, which will be a Buzzer Round.",
          "The questions will explore various linguistic and cultural aspects of the three languages.",
        ],
      },
      {
        heading: "Scoring",
        bullets: ["Each correct answer will carry 2 marks.", "There will be no negative marking."],
      },
      {
        heading: "Answering Time",
        bullets: ["Teams will have 15 seconds to answer each question."],
      },
    ],
    teacherInCharge: ["Ms. Nupur Verma (French)", "Ms. Sakshi Puri (German)", "Mr. Arpit Ashta (Spanish)"],
    studentInCharge: ["Dhriti Singhi"],
  },
  {
    id: "ad-lingo",
    title: "Ad-Lingo",
    category: "Foreign Language",
    eligibleGrades: "VI - VIII",
    participants: "Team of 2",
    language: "en",
    intro: [
      "We are delighted to invite students to participate in the foreign language Ad-Mad Show, an exciting platform where young minds can showcase their creativity, confidence, and language skills through the art of advertising.",
    ],
    sections: [
      {
        heading: "Rules",
        bullets: [
          "Participants will present an original advertisement for a product, service, social campaign, or event.",
          "Suggested themes include: Eco-Friendly Products, Technology & Gadgets, Fashion & Lifestyle, Social Awareness Campaign.",
          "The advertisement must be presented entirely in the chosen foreign language – French, German, or Spanish.",
          "Each team will be given two minutes to present the advertisement.",
          "The warning bell will ring after one and a half minutes, followed by the final bell at two minutes.",
          "Marks will be deducted for exceeding the allotted time and reading from paper is not allowed.",
        ],
      },
    ],
    teacherInCharge: [],
    studentInCharge: [],
    note: "Judgement criteria and in-charge details for this event were not included in the official invite document. Please check www.shisfest.com or contact the school for more information.",
  },
  {
    id: "vocal-vibes",
    title: "Vocal Vibes",
    category: "Music",
    eligibleGrades: "IX - XII",
    participants: "Individual",
    language: "en",
    duration: "3-4 mins",
    intro: [
      "A solo singing competition to provide all participants with a memorable experience on stage to showcase their talents, not only as a singer but also as a performer.",
    ],
    sections: [
      {
        heading: "Rules and Regulations",
        bullets: [
          "The language of songs is to be only in English.",
          "Each participant will carry their own karaoke / backing track on a pen drive, and also share the same at least 3 days before the event with the student in-charge of Scottish High on their email id.",
          "Participants can also accompany themselves with a guitar or keyboard if they can play, however no extra marks will be given for live instrument accompaniment.",
          "One mark will be deducted on exceeding every 30 seconds from the overall total mark of the participant.",
          "The song chosen should not have derogatory lyrics.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Pitching", marks: "5" },
      { criteria: "Rhythm (timing)", marks: "5" },
      { criteria: "Diction and clarity", marks: "5" },
      { criteria: "Presentation", marks: "5" },
    ],
    totalMarks: "20 marks",
    teacherInCharge: ["Mr. Tony Fernandes"],
    studentInCharge: ["Gaurika Mukherjee", "Kenisha Kaur Roy"],
  },
  {
    id: "tamasha",
    title: "Tamasha: Nukkad Natak",
    category: "Drama",
    eligibleGrades: "IX - XII",
    participants: "Team of 8-10",
    language: "en",
    theme: "Responsible Citizenship",
    duration: "9-10 minutes",
    intro: [
      "Street play is one of the oldest forms of theatre where the artists enact in public places in front of the audience. It serves as a metaphor that captures an image of moral nature which every layman can relate to and is also known as 'Nukkad Natak'. Eventually, a street play should be a road map for change.",
    ],
    sections: [
      {
        heading: "Rules and Regulations",
        bullets: [
          "Time limit: 9-10 minutes; marks will be deducted for exceeding the time limit.",
          "Language: English, Hindi or both.",
          "Use of props is allowed but to be managed by the performing school.",
          "Use of musical instruments is allowed to enhance the performance.",
          "Costume, gestures, and language must be appropriate for a school atmosphere and in accordance with general street play norms.",
          "Script should not be derogatory for any caste, religion, gender, or others. Any violation will lead to disqualification.",
          "The judges' decision will be final and binding.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Acting", marks: "5" },
      { criteria: "Coordination", marks: "5" },
      { criteria: "Adherence to the theme", marks: "5" },
      { criteria: "Overall performance and impact", marks: "5" },
    ],
    totalMarks: "20 marks",
    teacherInCharge: ["Mr. Vikas Sharma"],
    studentInCharge: ["Aniruddha Agarwal"],
  },
  {
    id: "art-attack",
    title: "Art Attack",
    category: "Art",
    eligibleGrades: "IV - V",
    participants: "2 individual participants per school",
    language: "en",
    theme: "Choose one: 'One Earth, One Future' or 'The World We Want Tomorrow'",
    duration: "2 hours",
    sections: [
      {
        heading: "Guidelines",
        bullets: [
          "Each participant must create one original individual artwork based on the selected theme.",
          "A pre-written concept note of 50 words explaining the artwork must be submitted along with the finished artwork.",
          "An A3-size cartridge sheet will be provided by the host school. Participants are required to bring only their own colouring materials and other art supplies.",
          "The artwork must be completed within the allotted competition time (time duration - 2 hours).",
          "All submitted artworks will become the property of the host school and will not be returned to the participants.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Creativity & Originality", marks: "15" },
      { criteria: "Interpretation and Clarity of the Theme", marks: "10" },
      { criteria: "Effective Use of Colouring Medium", marks: "10" },
      { criteria: "Neatness and Overall Presentation", marks: "10" },
      { criteria: "Concept Note (50 words – pre-written)", marks: "05" },
    ],
    totalMarks: "50 marks",
    teacherInCharge: ["Ms. Sonia Mudgil", "Ms. Amitta Gahallot"],
    studentInCharge: ["Seerat Watson"],
  },
  {
    id: "what-a-colour",
    title: "What A Colour!",
    category: "Art",
    eligibleGrades: "VI - VIII",
    participants: "2 individual participants per school",
    language: "en",
    theme: "Choose one: 'Colour of Hope' or 'The Power of Kindness'",
    duration: "2 hours",
    sections: [
      {
        heading: "Guidelines",
        bullets: [
          "Each participant must create one original individual artwork based on the selected theme.",
          "An A2 size cartridge sheet will be provided by the host school. Participants are required to bring only their own colouring materials and other art supplies.",
          "A pre-written concept note of 50 words explaining the artwork must be submitted along with the finished artwork.",
          "The artwork must be completed within the allotted competition time (time duration - 2 hours).",
          "All submitted artworks will become the property of the host school and will not be returned to the participants.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Creativity & Originality", marks: "15" },
      { criteria: "Interpretation and Clarity of the Theme", marks: "10" },
      { criteria: "Effective Use of Colouring Medium", marks: "10" },
      { criteria: "Neatness and Overall Presentation", marks: "10" },
      { criteria: "Concept Note (50 words – pre-written)", marks: "05" },
    ],
    totalMarks: "50 marks",
    teacherInCharge: ["Ms. Amitta Gahallot", "Mr. Ashok Mahakur"],
    studentInCharge: ["Myra Dua"],
  },
  {
    id: "dress-design",
    title: "Dress Design",
    category: "Art",
    eligibleGrades: "IX - XII",
    participants: "Team of 3",
    language: "en",
    sections: [],
    teacherInCharge: [],
    studentInCharge: [],
    note: "Full guidelines, judging criteria and in-charge details for this event were not included in the official invite document. Please check www.shisfest.com or contact the school for more information.",
  },
  {
    id: "classical-dance-solo",
    title: "Classical Dance Solo Performance",
    category: "Dance",
    eligibleGrades: "VIII",
    participants: "Individual",
    language: "en",
    duration: "2 to 3 minutes",
    sections: [
      {
        heading: "Guidelines",
        bullets: [
          "Participants must submit their music tracks by 5th October 2026 (carry a backup of the track on a pen drive).",
          "Only Indian classical dance styles are allowed (e.g. Kathak, Bharatanatyam, and Odissi etc.).",
          "Use of props is optional and must be handled independently within the performance time.",
          "The choreography and the music should reflect the grace, discipline, and authenticity of the chosen classical style.",
          "Participants must wear appropriate classical costumes and accessories.",
          "Inappropriate moves, music, or costumes will lead to disqualification.",
          "Exceeding the time limit may result in deduction of points.",
        ],
      },
      {
        heading: "Additional Instructions",
        bullets: [
          "All participants must report to the venue 30 minutes prior to their scheduled time.",
          "The decision of the judges will be final and binding.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Choreography & Creativity", marks: "10" },
      { criteria: "Expression & Stage presence", marks: "10" },
      { criteria: "Technique & Clarity of style", marks: "10" },
      { criteria: "Costume", marks: "10" },
      { criteria: "Overall Impact", marks: "10" },
    ],
    totalMarks: "50 marks",
    teacherInCharge: ["Ms. Himani Yadav"],
    studentInCharge: ["Kajal Verma"],
  },
  {
    id: "rhythm-revolution",
    title: "Rhythm Revolution",
    category: "Dance",
    eligibleGrades: "IX - XII",
    participants: "Individual",
    language: "en",
    duration: "2 to 3 minutes",
    intro: [
      "Rhythm Revolution aims to inspire young dancers to express themselves through dynamic western dance styles, blending technique, creativity, and stage presence. The competition provides a platform for students to showcase their passion while encouraging artistic confidence and performance excellence.",
    ],
    sections: [
      {
        heading: "Music & Performance Guidelines",
        bullets: [
          "Participants must submit their music tracks by 5th October 2026 (carry a backup of the track on a pen drive).",
          "Only western dance styles are allowed (e.g., jazz, hip-hop, contemporary, lyrical, freestyle, etc.).",
          "Use of props is optional and must be handled independently within the performance time.",
          "Costumes should be appropriate for school and suitable for the chosen dance style.",
          "Inappropriate moves, music, or costumes will lead to disqualification.",
          "Exceeding the time limit may result in deduction of points.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Choreography & Creativity", marks: "10" },
      { criteria: "Expression & Stage presence", marks: "10" },
      { criteria: "Technique & Clarity of style", marks: "10" },
      { criteria: "Costume", marks: "10" },
      { criteria: "Overall Impact", marks: "10" },
    ],
    totalMarks: "50 marks",
    teacherInCharge: ["Mr. Sourabh Chaudhary"],
    studentInCharge: ["Hiral Chopra"],
  },
  {
    id: "mind-matters",
    title: "Mind Matters",
    category: "Psychology",
    eligibleGrades: "XI - XII",
    participants: "Team of 2",
    language: "en",
    intro: [
      "Psychology Case Insights is an on-the-spot, situation-based problem-solving competition exclusively for Grade XI and XII Psychology students. Each pair receives a unique, sealed real-life-situation problem statement and must analyze it through the lens of psychological aspects before presenting a well-reasoned solution to a panel of judges.",
    ],
    sections: [
      {
        heading: "Guidelines",
        bullets: [
          "Each team receives one unique problem statement (hypothetical situation).",
          "Preparation time: 45 minutes, to analyze the case and prepare a short presentation (PPT).",
          "Presentation time: 5 minutes per team, followed by brief questions from the judges.",
          "Teams must identify the psychological concepts at play, the likely underlying cause, and propose a realistic, actionable solution.",
        ],
      },
      {
        heading: "Sample Problem — Case 1: The Group Chat",
        paragraphs: [
          "Aanya, a Grade XI student, has recently become quieter in class and often makes excuses to skip group activities. A teacher discovers that a WhatsApp group created by some classmates has been circulating unflattering photos of Aanya with mocking captions about her weight and appearance. Aanya was added to the group without her knowledge and only found out when a friend showed her the messages. Her class attendance has started dropping, and her grades have slipped over the last month.",
        ],
      },
      {
        heading: "Points to Consider",
        bullets: [
          "Concepts: social comparison, self-esteem, cyberbullying, aggression, bystander effect.",
          "Consider both the affected student and the group's behaviour and motives.",
          "Solution should weigh confidentiality, policies, and long-term wellbeing and not just immediate punishment.",
        ],
      },
      {
        heading: "Sample Model Solution (Illustrative — for reference only)",
        paragraphs: [
          "Aanya's withdrawal and dropping grades reflect a decline in self-esteem, likely intensified by social comparison as she measures herself against the mockery directed at her appearance. This fits a pattern of relational/cyberbullying aggression, where harm is caused through exclusion and humiliation rather than physical means.",
          "A sound response would involve two parallel tracks: supporting Aanya through confidential counselling to rebuild her confidence and give her a safe space to process the incident. Simultaneously addressing the group involved and not only the students who posted the content. Silent members of the chat also need to be sensitized, using restorative conversations rather than blanket punishment alone.",
          "A brief, non-accusatory class-level discussion on digital responsibility and empathy would also help shift the wider peer culture rather than isolating the incident as a one-off disciplinary matter. Policy updates also need to be made related to such incidences.",
        ],
      },
    ],
    judgingCriteria: [
      { criteria: "Depth of analysis", marks: "30" },
      { criteria: "Practicality and sensitivity of proposed solution", marks: "30" },
      { criteria: "Accurate use of psychological concepts", marks: "20" },
      { criteria: "Clarity, confidence, and teamwork", marks: "20" },
    ],
    totalMarks: "100 marks",
    teacherInCharge: ["Neha Maurya"],
    studentInCharge: ["Mehak Kalia"],
  },
];
