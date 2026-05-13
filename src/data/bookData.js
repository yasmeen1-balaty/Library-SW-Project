export const allBooks = [
  // --- قسم التمريض (عربي) ---
  { 
    id: "nursing-101", 
    title: "أساسيات التمريض السريري", 
    author: "د. أحمد خليل", 
    category: "تمريض", 
    year: "2023",
    isbn: "978-3-16-148410-0",
    source: "local",
    lang: "ar",
    description: "المرجع الشامل لطلاب السنة الأولى، يغطي المهارات الأساسية والرعاية الأولية.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600"
  },
  { 
    id: "emergency-505", 
    title: "الإسعافات الأولية والطوارئ", 
    author: "د. سمير جودة", 
    category: "تمريض", 
    year: "2022",
    isbn: "978-0-11-223344-5",
    source: "local",
    lang: "ar",
    description: "كيفية التعامل مع الحالات الحرجة والحوادث في أقسام الطوارئ.",
    image: "https://images.pexels.com/photos/6129207/pexels-photo-6129207.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  { 
    id: "pediatrics-ar", 
    title: "تمريض الأطفال والخدج", 
    author: "د. منى القاسم", 
    category: "تمريض", 
    year: "2023",
    isbn: "978-0-55-667788-9",
    source: "online",
    lang: "ar",
    downloadUrl: "/books/pediatrics.pdf",
    description: "دليل شامل لرعاية الأطفال منذ الولادة وحتى المراهقة.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600"
  },

  // --- قسم التمريض (English) ---
  { 
    id: "nursing-en-1", 
    title: "Fundamentals of Nursing", 
    author: "Patricia Potter", 
    category: "تمريض", 
    year: "2021",
    isbn: "978-0323677721",
    source: "online",
    lang: "en",
    downloadUrl: "/books/fundamentals.pdf",
    description: "The leading textbook for nursing foundations and clinical skills.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
  },
  { 
    id: "critical-care-en", 
    title: "Critical Care Nursing", 
    author: "Linda Urden", 
    category: "تمريض", 
    year: "2022",
    isbn: "978-0323642958",
    source: "local",
    lang: "en",
    description: "Diagnosis and management for high-acuity nursing practice.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600"
  },

  // --- قسم الطب العام والتشريح (English) ---
  { 
    id: "anatomy-en-1", 
    title: "Gray's Anatomy for Students", 
    author: "Richard Drake", 
    category: "طب عام", 
    year: "2024",
    isbn: "978-032393041",
    source: "online",
    lang: "en",
    downloadUrl: "/books/grays.pdf",
    description: "The gold standard for human anatomy studies.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600"
  },
  { 
    id: "physiology-en", 
    title: "Guyton and Hall Physiology", 
    author: "John Hall", 
    category: "طب عام", 
    year: "2021",
    isbn: "978-0323597128",
    source: "local",
    lang: "en",
    description: "Focuses on the systems of the human body and their functions.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600"
  },

  // --- قسم القبالة (عربي) ---
  { 
    id: "midwifery-303", 
    title: "دليل القبالة الحديثة", 
    author: "أ. ليلى حسن", 
    category: "قبالة", 
    year: "2021",
    isbn: "978-1-88-123456-7",
    source: "local",
    lang: "ar",
    description: "مرجع متكامل حول رعاية الحوامل وإجراءات الولادة الآمنة.",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600"
  },
  { 
    id: "maternal-ar", 
    title: "صحة الأم والوليد", 
    author: "د. هدى السعيد", 
    category: "قبالة", 
    year: "2022",
    isbn: "978-0-12-112233-4",
    source: "online",
    lang: "ar",
    downloadUrl: "/books/maternal.pdf",
    description: "يتناول الرعاية الصحية للأم والطفل في مراحل الحمل والولادة.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600"
  },

  // --- قسم القبالة (English) ---
  { 
    id: "midwifery-en-1", 
    title: "Myles Textbook for Midwives", 
    author: "Jayne Marshall", 
    category: "قبالة", 
    year: "2020",
    isbn: "978-0702076428",
    source: "local",
    lang: "en",
    description: "The most trusted guide for midwifery students globally.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600"
  },

  // --- قسم الصيدلة (عربي وإنجليزي) ---
  { 
    id: "pharma-404", 
    title: "علم الأدوية التمريضي", 
    author: "د. يوسف العبد", 
    category: "صيدلة", 
    year: "2024",
    isbn: "978-0-99-887766-5",
    source: "online",
    lang: "ar",
    downloadUrl: "/books/pharma.pdf",
    description: "يركز على الجرعات الدوائية ومسؤولية الممرض.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600"
  },
  { 
    id: "pharmacology-en-1", 
    title: "Lippincott Pharmacology", 
    author: "Karen Whalen", 
    category: "صيدلة", 
    year: "2023",
    isbn: "978-1975170554",
    source: "local",
    lang: "en",
    description: "Visual and detailed guide to pharmacology mechanisms.",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600"
  },

  // --- أقسام منوعة ---
  { 
    id: "biochem-222", 
    title: "الكيمياء الحيوية الطبية", 
    author: "د. فؤاد خليل", 
    category: "علوم طبية", 
    year: "2020",
    isbn: "978-0-99-887755-4",
    source: "online",
    lang: "ar",
    downloadUrl: "/books/biochem.pdf",
    description: "دراسة التفاعلات الكيميائية داخل جسم الإنسان.",
    image: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  { 
    id: "psych-en", 
    title: "Psychiatric Nursing", 
    author: "Mary Townsend", 
    category: "تمريض", 
    year: "2021",
    isbn: "978-0803699670",
    source: "local",
    lang: "en",
    description: "Evidence-based mental health nursing concepts.",
    image: "https://pictures.abebooks.com/isbn/9780803699670-us.jpg"
  },
  { 
    id: "nutrition-909", 
    title: "التغذية العلاجية", 
    author: "د. ريم المصري", 
    category: "طب عام", 
    year: "2021",
    isbn: "978-0-44-556677-8",
    source: "local",
    lang: "ar",
    description: "دور الغذاء في علاج الأمراض المزمنة.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600"
  },
  { 
    id: "microbio-en", 
    title: "Medical Microbiology", 
    author: "Patrick Murray", 
    category: "علوم طبية", 
    year: "2020",
    isbn: "978-0323673228",
    source: "online",
    lang: "en",
    downloadUrl: "/books/microbio.pdf",
    description: "Covers principles of immunology and microbiology.",
    image: "https://pictures.abebooks.com/isbn/9780323673228-us.jpg"
  },
  { 
    id: "ethics-111", 
    title: "أخلاقيات مهنة التمريض", 
    author: "د. نبيلة العمد", 
    category: "تمريض", 
    year: "2022",
    isbn: "978-0-12-112233-4",
    source: "local",
    lang: "ar",
    description: "المبادئ الأخلاقية والقانونية لمهنة التمريض.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600"
  },
  { 
    id: "research-en", 
    title: "Nursing Research", 
    author: "Denise Polit", 
    category: "تمريض", 
    year: "2023",
    isbn: "978-1975145729",
    source: "online",
    lang: "en",
    downloadUrl: "/books/research.pdf",
    description: "Principles and methods for clinical research in nursing.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600"
  },
  { 
    id: "anatomy-ar", 
    title: "أطلس جسم الإنسان", 
    author: "د. يحيى الشريف", 
    category: "طب عام", 
    year: "2020",
    isbn: "978-603-500-111-2",
    source: "local",
    lang: "ar",
    description: "رسومات توضيحية كاملة لأعضاء جسم الإنسان بالعربي.",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=600"
  },
  { 
    id: "leadership-en", 
    title: "Leadership in Nursing", 
    author: "Diane Huber", 
    category: "تمريض", 
    year: "2021",
    isbn: "978-0323389662",
    source: "local",
    lang: "en",
    description: "Management and leadership techniques for senior nurses.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600"
  }
];