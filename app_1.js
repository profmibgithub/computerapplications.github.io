// Computer Applications Website JavaScript

// Application data
const programData = {
  program_info: {
    name: "Bachelor with Computer Applications as Major",
    duration: "4 Years",
    types: ["Honours", "Honours with Research"],
    university: "University of Kashmir"
  },
  semesters: [
    {
      semester: 1,
      courses: [
        {
          code: "CAP122J",
          type: "CT-1",
          title: "Computer Fundamentals",
          theory_credits: 4,
          practical_credits: 2,
          description: "Introduction to computers, data representation, software/hardware concepts, networking basics",
          units: [
            "Introduction to Computers, History, Generation of Computers, Data Processing, Memory Hierarchy",
            "Application Software and System Software, Programming Languages",
            "Data Communication, Networking Basics",
            "Internet and WWW, Web Browsers, Email"
          ]
        },
        {
          code: "ACP124N",
          type: "Applied Computing Minor",
          title: "Digital Electronics",
          theory_credits: 4,
          practical_credits: 2,
          description: "Number systems, Boolean algebra, logic gates, combinational circuits",
          units: [
            "Digital quantities, Number Systems, Binary Arithmetic",
            "Logic Gates, Boolean Algebra",
            "Combinational Logic Circuits",
            "von Neumann Architecture, Microprocessors"
          ]
        }
      ]
    },
    {
      semester: 2,
      courses: [
        {
          code: "CAP222J",
          type: "CT-1",
          title: "Programming Fundamentals through C",
          theory_credits: 4,
          practical_credits: 2,
          description: "Introduction to programming concepts, C language fundamentals",
          units: [
            "Programming Languages, Flowcharts, Algorithms",
            "C Programming Basics, Operators, Control Structures",
            "Loops, Functions, Pointers",
            "Arrays, Strings, Structures, Dynamic Memory"
          ]
        },
        {
          code: "ACP222N",
          type: "Applied Computing Minor",
          title: "Web Designing",
          theory_credits: 4,
          practical_credits: 2,
          description: "HTML5, CSS3, JavaScript fundamentals for web development",
          units: [
            "HTML5 Markup, Forms, Multimedia",
            "CSS Styling, Responsive Design, Bootstrap",
            "JavaScript Basics, Functions, Control Structures",
            "DOM manipulation, Event Handling"
          ]
        }
      ]
    },
    {
      semester: 3,
      courses: [
        {
          code: "CAP322J",
          type: "CT-1",
          title: "Data Communications and Computer Networks",
          theory_credits: 4,
          practical_credits: 2,
          description: "Networking fundamentals, protocols, network models",
          units: [
            "Data Communication basics, Transmission Media",
            "Signal Conversion, Multiplexing",
            "Network Components, OSI/TCP-IP Models",
            "Network Addressing, Protocols, Error Detection"
          ]
        },
        {
          code: "ACP323N",
          type: "Applied Computing Minor",
          title: "Cryptography & Network Security",
          theory_credits: 4,
          practical_credits: 2,
          description: "Security fundamentals, cryptographic techniques, network security",
          units: [
            "Classical Ciphers, Symmetric Key Cryptography",
            "Public Key Cryptography, Hash Functions",
            "Network Security Principles and Protocols",
            "Security Threats and Mitigation Strategies"
          ]
        }
      ]
    },
    {
      semester: 4,
      courses: [
        {
          code: "CAP422J1",
          type: "CT-1",
          title: "Database Management Systems",
          theory_credits: 3,
          practical_credits: 1,
          description: "Database concepts, ER modeling, SQL, normalization",
          units: [
            "Database Fundamentals, DBMS Architecture",
            "ER Modeling, Relational Model, Normalization",
            "SQL, Transactions, Concurrency Control"
          ]
        },
        {
          code: "CAP422J2",
          type: "CT-2",
          title: "Object-Oriented Programming with C++",
          theory_credits: 4,
          practical_credits: 2,
          description: "OOP concepts, C++ programming, inheritance, polymorphism",
          units: [
            "OOP Introduction, C++ Basics",
            "Classes, Objects, Constructors",
            "Inheritance, Operator Overloading",
            "Virtual Functions, File Handling, STL"
          ]
        },
        {
          code: "CAP422J3",
          type: "CT-3",
          title: "Computing Mathematics",
          theory_credits: 4,
          practical_credits: 2,
          description: "Mathematical foundations for computing",
          units: [
            "Matrices and Determinants",
            "Functions and Limits",
            "Differentiation",
            "Approximation and Errors"
          ]
        },
        {
          code: "ACP422N",
          type: "Applied Computing Minor",
          title: "IoT Fundamentals",
          theory_credits: 3,
          practical_credits: 1,
          description: "Internet of Things concepts, sensors, Arduino programming",
          units: [
            "IoT Introduction, Components, Applications",
            "IoT Architecture, Communication Models",
            "Hardware Platforms, Sensors, Security"
          ]
        }
      ]
    },
    {
      semester: 5,
      courses: [
        {
          code: "CAP522J1",
          type: "CT-1",
          title: "Operating Systems",
          theory_credits: 3,
          practical_credits: 1,
          description: "OS concepts, process management, memory management",
          units: [
            "OS Introduction, Process Management",
            "Concurrency, Deadlock Management",
            "Memory Management, Virtual Memory"
          ]
        },
        {
          code: "CAP522J2",
          type: "CT-2",
          title: "Data Structures using C",
          theory_credits: 4,
          practical_credits: 2,
          description: "Linear and non-linear data structures, algorithms",
          units: [
            "Arrays, Searching, Sorting Algorithms",
            "Stacks, Queues, Linked Lists",
            "Trees, Binary Search Trees",
            "Graphs, Graph Algorithms"
          ]
        },
        {
          code: "CAP522J3",
          type: "CT-3",
          title: "Discrete Mathematics",
          theory_credits: 4,
          practical_credits: 2,
          description: "Mathematical structures for computer science",
          units: [
            "Sets, Relations, Functions",
            "Logic, Propositions, Predicates",
            "Matrices, Counting, Recurrence Relations",
            "Graphs, Trees, Graph Algorithms"
          ]
        },
        {
          code: "ACP522N",
          type: "Applied Computing Minor",
          title: "Theory of Computation",
          theory_credits: 3,
          practical_credits: 1,
          description: "Formal languages, automata theory, computability",
          units: [
            "Finite Automata, Regular Languages",
            "Context-Free Languages, Pushdown Automata",
            "Turing Machines, Computability Theory"
          ]
        }
      ]
    },
    {
      semester: 6,
      courses: [
        {
          code: "CAP622J1",
          type: "CT-1",
          title: "Python Programming",
          theory_credits: 3,
          practical_credits: 1,
          description: "Python fundamentals, data structures, file handling",
          units: [
            "Python Basics, Control Structures",
            "Functions, Lists, Comprehensions",
            "Dictionaries, Tuples, Sets, File Operations"
          ]
        },
        {
          code: "CAP622J2",
          type: "CT-2",
          title: "Computer Organization & Architecture",
          theory_credits: 4,
          practical_credits: 2,
          description: "Computer architecture, assembly programming, memory systems",
          units: [
            "Basic Computer Organization",
            "ALU, Instruction Formats, RISC/CISC",
            "Memory Hierarchy, Cache Memory",
            "I/O Organization, Parallel Processing"
          ]
        },
        {
          code: "CAP622J3",
          type: "CT-3",
          title: "Probability and Statistics",
          theory_credits: 4,
          practical_credits: 2,
          description: "Statistical concepts for data analysis",
          units: [
            "Probability Theory, Random Variables",
            "Distributions, Central Limit Theorem",
            "Statistical Inference, Regression",
            "Hypothesis Testing, Statistical Analysis"
          ]
        },
        {
          code: "ACP622N",
          type: "Applied Computing Minor",
          title: "Artificial Intelligence",
          theory_credits: 3,
          practical_credits: 1,
          description: "AI fundamentals, search algorithms, knowledge representation",
          units: [
            "AI Introduction, Intelligent Agents",
            "Search Algorithms, Heuristic Search",
            "Uncertainty, Probability, Bayes' Rule"
          ]
        }
      ]
    },
    {
      semester: 7,
      courses: [
        {
          code: "CAP722J1",
          type: "CT-1",
          title: "Cyber Security",
          theory_credits: 3,
          practical_credits: 1,
          description: "Security fundamentals, threats, best practices",
          units: [
            "Cybersecurity Fundamentals, Threats",
            "Legal Framework, Data Privacy",
            "E-commerce Security, Best Practices"
          ]
        },
        {
          code: "CAP722J2",
          type: "CT-2",
          title: "Java Programming",
          theory_credits: 4,
          practical_credits: 2,
          description: "Java programming, OOP, GUI, networking",
          units: [
            "Java Basics, OOP Concepts",
            "Inheritance, Exception Handling",
            "Multithreading, Applets",
            "GUI Programming, I/O, Networking"
          ]
        },
        {
          code: "CAP722J3",
          type: "CT-3",
          title: "Machine Learning",
          theory_credits: 4,
          practical_credits: 2,
          description: "ML algorithms, data mining, pattern recognition",
          units: [
            "ML Introduction, Feature Engineering",
            "Supervised Learning, Decision Trees",
            "Unsupervised Learning, Clustering",
            "Bayesian Learning, Support Vector Machines"
          ]
        },
        {
          code: "ACP722N",
          type: "Applied Computing Minor",
          title: "Design & Analysis of Algorithms",
          theory_credits: 3,
          practical_credits: 1,
          description: "Algorithm design techniques, complexity analysis",
          units: [
            "Algorithm Analysis, Asymptotic Notations",
            "Sorting, Searching, Greedy Algorithms",
            "Dynamic Programming, Backtracking",
            "P and NP Problems"
          ]
        }
      ]
    },
    {
      semester: 8,
      courses: [
        {
          code: "CAP822J1",
          type: "CT-1 (Honours)",
          title: "Software Engineering",
          theory_credits: 3,
          practical_credits: 1,
          description: "Software development methodologies, testing, project management",
          units: [
            "Software Engineering Fundamentals",
            "Requirements Engineering, COCOMO",
            "Design Engineering, Testing"
          ]
        },
        {
          code: "CAP822J2",
          type: "CT-2",
          title: "Mini Project with Report",
          theory_credits: 4,
          practical_credits: 2,
          description: "Capstone project development and documentation",
          units: []
        },
        {
          code: "CAP822J3",
          type: "CT-3",
          title: "Mobile Application Development",
          theory_credits: 4,
          practical_credits: 2,
          description: "Android app development, mobile UI design",
          units: [
            "Mobile Development Fundamentals, Java",
            "Android Platform, SDK, Development Tools",
            "Android Components, Intents, Data Storage",
            "UI Design, Database Integration"
          ]
        },
        {
          code: "CAP822RJ1",
          type: "CT-1 (Research Honours)",
          title: "Research Methodology",
          theory_credits: 3,
          practical_credits: 1,
          description: "Research methods for computer applications",
          units: []
        },
        {
          code: "CAP822P",
          type: "Project (Research Honours)",
          title: "Project with Dissertation",
          theory_credits: 0,
          practical_credits: 12,
          description: "Major research project with dissertation",
          units: []
        },
        {
          code: "ACP822N",
          type: "Applied Computing Minor",
          title: "Cloud Computing",
          theory_credits: 3,
          practical_credits: 1,
          description: "Cloud computing concepts, virtualization, cloud services",
          units: [
            "Cloud Computing Overview, Service Models",
            "Virtualization, Cloud Infrastructure",
            "Cloud Applications, Service Management"
          ]
        }
      ]
    }
  ]
};

// Application state
let currentPage = 'home';
let currentSemester = null;
let currentCourse = null;

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const mainContent = document.getElementById('mainContent');
const backToTop = document.getElementById('backToTop');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeEventListeners();
  initializeBackToTop();
  showPage('home');
});

// Navigation Functions
function initializeNavigation() {
  // Mobile navigation toggle
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    navMenu.classList.toggle('active');
  });

  // Main navigation click handler
  document.addEventListener('click', handleNavigationClick);

  // Back button functionality
  const backButton = document.getElementById('backToCourses');
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      e.preventDefault();
      if (currentSemester) {
        showSemesterPage(currentSemester);
      } else {
        showPage('home');
      }
    });
  }
}

function handleNavigationClick(e) {
  // Handle navigation links
  if (e.target.matches('[data-page]') || e.target.closest('[data-page]')) {
    e.preventDefault();
    
    const element = e.target.matches('[data-page]') ? e.target : e.target.closest('[data-page]');
    const page = element.dataset.page;
    const semester = element.dataset.semester;
    const course = element.dataset.course;
    
    if (page === 'semester' && semester) {
      showSemesterPage(parseInt(semester));
    } else if (page === 'course' && course) {
      showCourseDetail(course);
    } else {
      showPage(page);
    }
    
    // Close mobile menu
    navMenu.classList.remove('active');
    
    // Update active nav link
    updateActiveNavLink(element);
    return;
  }

  // Handle semester cards
  if (e.target.closest('.semester-card')) {
    e.preventDefault();
    const semesterCard = e.target.closest('.semester-card');
    const semester = parseInt(semesterCard.dataset.semester);
    if (semester) {
      showSemesterPage(semester);
    }
    return;
  }

  // Handle course cards
  if (e.target.closest('.course-card')) {
    e.preventDefault();
    const courseCard = e.target.closest('.course-card');
    const courseCode = courseCard.dataset.course;
    if (courseCode) {
      showCourseDetail(courseCode);
    }
    return;
  }

  // Handle hero buttons
  if (e.target.matches('.btn[data-page]') || e.target.closest('.btn[data-page]')) {
    e.preventDefault();
    const button = e.target.matches('.btn[data-page]') ? e.target : e.target.closest('.btn[data-page]');
    const page = button.dataset.page;
    showPage(page);
    return;
  }
}

function initializeEventListeners() {
  // Smooth scrolling for anchor links
  document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

function initializeBackToTop() {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function updateActiveNavLink(clickedLink) {
  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to appropriate nav link
  if (clickedLink && clickedLink.classList.contains('nav-link')) {
    clickedLink.classList.add('active');
  } else {
    // Find and activate the appropriate main nav link based on current page
    const currentPageLink = document.querySelector(`.nav-link[data-page="${currentPage}"]`);
    if (currentPageLink) {
      currentPageLink.classList.add('active');
    }
  }
}

// Page Management
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show requested page
  const targetPage = document.getElementById(pageName + 'Page');
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageName;
    
    // Update active nav link
    updateActiveNavLink();
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSemesterPage(semesterNumber) {
  currentSemester = semesterNumber;
  
  // Update breadcrumb and title
  const semesterBreadcrumb = document.getElementById('semesterBreadcrumb');
  const semesterTitle = document.getElementById('semesterTitle');
  
  if (semesterBreadcrumb) {
    semesterBreadcrumb.textContent = `Semester ${semesterNumber}`;
  }
  if (semesterTitle) {
    semesterTitle.textContent = `Semester ${semesterNumber} Courses`;
  }
  
  // Generate semester content
  const semesterData = programData.semesters.find(s => s.semester === semesterNumber);
  const semesterContent = document.getElementById('semesterContent');
  
  if (semesterData && semesterContent) {
    semesterContent.innerHTML = generateSemesterCoursesHTML(semesterData);
  } else if (semesterContent) {
    semesterContent.innerHTML = '<p>No courses found for this semester.</p>';
  }
  
  // Show semester page
  showPage('semester');
}

function showCourseDetail(courseCode) {
  // Find course across all semesters
  let course = null;
  let semester = null;
  
  for (const semesterData of programData.semesters) {
    const foundCourse = semesterData.courses.find(c => c.code === courseCode);
    if (foundCourse) {
      course = foundCourse;
      semester = semesterData.semester;
      break;
    }
  }
  
  if (course) {
    currentCourse = courseCode;
    
    // Update breadcrumb
    const courseBreadcrumb = document.getElementById('courseBreadcrumb');
    if (courseBreadcrumb) {
      courseBreadcrumb.textContent = `Semester ${semester} / ${course.title}`;
    }
    
    // Generate course detail content
    const courseDetailContent = document.getElementById('courseDetailContent');
    if (courseDetailContent) {
      courseDetailContent.innerHTML = generateCourseDetailHTML(course, semester);
    }
    
    // Show course detail page
    showPage('courseDetail');
  }
}

// HTML Generation Functions
function generateSemesterCoursesHTML(semesterData) {
  let html = `
    <div class="semester-info">
      <p>This semester includes ${semesterData.courses.length} courses covering various aspects of computer applications.</p>
    </div>
    <div class="courses-grid">
  `;
  
  semesterData.courses.forEach(course => {
    html += `
      <div class="course-card" data-course="${course.code}">
        <div class="course-header">
          <div class="course-code">${course.code}</div>
          <div class="course-type">${course.type}</div>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <div class="course-credits">
          <div class="credit-item">
            <i class="fas fa-book"></i>
            <span>Theory: ${course.theory_credits} credits</span>
          </div>
          <div class="credit-item">
            <i class="fas fa-laptop-code"></i>
            <span>Practical: ${course.practical_credits} credits</span>
          </div>
        </div>
        <p class="course-description">${course.description}</p>
        <div class="course-actions">
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

function generateCourseDetailHTML(course, semester) {
  let html = `
    <div class="course-detail">
      <div class="course-detail-header">
        <div class="course-detail-title">
          <div class="course-code">${course.code}</div>
          <h1>${course.title}</h1>
        </div>
        <div class="course-detail-meta">
          <div class="meta-item">
            <i class="fas fa-calendar"></i>
            <span>Semester ${semester}</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-tag"></i>
            <span>${course.type}</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-book"></i>
            <span>Theory: ${course.theory_credits} credits</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-laptop-code"></i>
            <span>Practical: ${course.practical_credits} credits</span>
          </div>
        </div>
      </div>
      
      <div class="course-description">
        <h3>Course Description</h3>
        <p>${course.description}</p>
      </div>
  `;
  
  if (course.units && course.units.length > 0) {
    html += `
      <div class="course-units">
        <h3>Course Units</h3>
        <ul class="unit-list">
    `;
    
    course.units.forEach((unit, index) => {
      html += `<li class="unit-item">Unit ${index + 1}: ${unit}</li>`;
    });
    
    html += '</ul></div>';
  }
  
  html += `
      <div class="course-outcomes">
        <h3>Learning Outcomes</h3>
        <p>Upon successful completion of this course, students will be able to understand and apply the key concepts and techniques covered in the curriculum.</p>
      </div>
    </div>
  `;
  
  return html;
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Search functionality
function searchCourses(query) {
  const results = [];
  
  programData.semesters.forEach(semester => {
    semester.courses.forEach(course => {
      if (course.title.toLowerCase().includes(query) || 
          course.code.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query)) {
        results.push({
          ...course,
          semester: semester.semester
        });
      }
    });
  });
  
  return results;
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  // ESC key to close mobile menu
  if (e.key === 'Escape') {
    navMenu.classList.remove('active');
  }
  
  // Enter key on focusable elements
  if (e.key === 'Enter' && e.target.matches('[data-page], .course-card, .semester-card')) {
    e.target.click();
  }
});

// Add accessibility improvements
function addAccessibilityFeatures() {
  // Add ARIA labels to interactive elements
  document.querySelectorAll('.course-card, .semester-card').forEach(card => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', card.querySelector('h3') ? `View details for ${card.querySelector('h3').textContent}` : 'View details');
  });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function() {
  addAccessibilityFeatures();
});

// Export functions for potential testing
window.CAWebsite = {
  showPage,
  showSemesterPage,
  showCourseDetail,
  searchCourses,
  programData
};