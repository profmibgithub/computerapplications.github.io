// Computer Applications Website JavaScript

// Application data with full syllabus
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
            {
              title: "Introduction to Computers and Data Processing",
              topics: [
                "History and Evolution of Computers",
                "Generation of Computers - Vacuum tubes, Transistors, Integrated Circuits, Microprocessors, AI",
                "Classification of Computers - Analog, Digital, Hybrid",
                "Computer Organization - Input, Processing, Output, Storage",
                "Data vs Information - Data Processing Cycle",
                "Memory Hierarchy - Primary Memory (RAM, ROM), Secondary Memory (HDD, SSD)",
                "Cache Memory and Virtual Memory concepts"
              ]
            },
            {
              title: "Software Systems and Programming Languages",
              topics: [
                "System Software - Operating Systems, Device Drivers, Utilities",
                "Application Software - Word Processors, Spreadsheets, Database Software",
                "Programming Software - Compilers, Interpreters, Debuggers",
                "Programming Languages Classification - Low Level, High Level, Machine Language",
                "Programming Paradigms - Procedural, Object-Oriented, Functional",
                "Software Development Life Cycle (SDLC)",
                "Open Source vs Proprietary Software"
              ]
            },
            {
              title: "Data Communication and Networking",
              topics: [
                "Data Communication Components - Sender, Receiver, Medium, Protocol",
                "Transmission Media - Guided (Twisted Pair, Coaxial, Fiber Optic), Unguided (Radio, Microwave, Satellite)",
                "Network Topologies - Bus, Star, Ring, Mesh, Tree, Hybrid",
                "Network Types - LAN, WAN, MAN, PAN",
                "Network Protocols - TCP/IP, HTTP, FTP, SMTP",
                "OSI Model and its 7 layers",
                "Network Security basics - Firewalls, Encryption"
              ]
            },
            {
              title: "Internet and World Wide Web",
              topics: [
                "Internet History and Architecture",
                "Internet Service Providers (ISPs) and Internet Backbone",
                "Domain Name System (DNS) and IP Addressing",
                "Web Browsers - Chrome, Firefox, Safari, Edge functionality",
                "Search Engines - Google, Bing, Yahoo search algorithms",
                "Email Systems - SMTP, POP3, IMAP protocols",
                "Web Technologies - HTML, CSS, JavaScript basics",
                "E-commerce and Online Services",
                "Internet Security and Privacy concerns"
              ]
            }
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
            {
              title: "Number Systems and Binary Arithmetic",
              topics: [
                "Decimal, Binary, Octal, and Hexadecimal number systems",
                "Base conversion methods between different number systems",
                "Binary Addition, Subtraction using 1's and 2's complement",
                "Binary Multiplication and Division techniques",
                "Signed and Unsigned binary representation",
                "BCD (Binary Coded Decimal) representation",
                "Gray Code and its applications",
                "Error detection codes - Parity bits, Hamming codes"
              ]
            },
            {
              title: "Boolean Algebra and Logic Gates",
              topics: [
                "Boolean algebra fundamentals and postulates",
                "De Morgan's theorems and their applications",
                "Boolean expression simplification using algebraic methods",
                "Karnaugh Map (K-Map) simplification for 2, 3, and 4 variables",
                "Basic Logic Gates - AND, OR, NOT, NAND, NOR, XOR, XNOR",
                "Gate-level circuit design and implementation",
                "Universal gates and their significance",
                "Logic gate specifications - Propagation delay, Fan-in, Fan-out"
              ]
            },
            {
              title: "Combinational Logic Circuits",
              topics: [
                "Combinational vs Sequential circuits characteristics",
                "Half Adder and Full Adder design and implementation",
                "Binary adder circuits - Ripple Carry Adder, Look-ahead Carry Adder",
                "Subtractor circuits and BCD adders",
                "Encoders, Decoders, and Code converters",
                "Multiplexers (MUX) and Demultiplexers (DEMUX)",
                "Comparators and their applications",
                "Implementation of Boolean functions using MUX and DEMUX"
              ]
            },
            {
              title: "Computer Architecture and Microprocessors",
              topics: [
                "Von Neumann Architecture components and working",
                "Harvard Architecture vs Von Neumann Architecture",
                "CPU organization - ALU, Control Unit, Registers",
                "Instruction set architecture and instruction formats",
                "Microprocessor fundamentals - 8085, 8086 architecture",
                "Memory organization and addressing modes",
                "Input/Output interfaces and interrupt handling",
                "Introduction to RISC and CISC processors"
              ]
            }
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
            {
              title: "Programming Concepts and Problem Solving",
              topics: [
                "Algorithm definition and characteristics",
                "Flowchart symbols and flowchart construction",
                "Pseudocode writing techniques",
                "Problem analysis and solution design",
                "Programming languages evolution and classification",
                "Compiler vs Interpreter working mechanisms",
                "Program development life cycle",
                "Structured programming principles"
              ]
            },
            {
              title: "C Programming Basics and Operators",
              topics: [
                "History and features of C programming language",
                "C program structure - Preprocessor, main function, statements",
                "Character set, keywords, identifiers, and constants",
                "Data types - int, float, double, char and their modifiers",
                "Variable declaration, initialization, and scope",
                "Arithmetic, Relational, Logical, Assignment, and Bitwise operators",
                "Operator precedence and associativity",
                "Type conversion and type casting"
              ]
            },
            {
              title: "Control Structures and Loops",
              topics: [
                "Sequential, Selection, and Iterative control structures",
                "Conditional statements - if, if-else, nested if-else, switch-case",
                "Loop structures - for, while, do-while loops",
                "Loop control statements - break, continue, goto",
                "Nested loops and their applications",
                "Loop optimization techniques",
                "Common loop patterns and algorithms",
                "Debugging control flow issues"
              ]
            },
            {
              title: "Functions, Arrays, and Advanced Concepts",
              topics: [
                "Function definition, declaration, and calling",
                "Function parameters - call by value, call by reference",
                "Recursive functions and recursion tree analysis",
                "Storage classes - auto, static, extern, register",
                "Arrays - declaration, initialization, and manipulation",
                "Multi-dimensional arrays and matrix operations",
                "String handling - string.h library functions",
                "Pointers - declaration, initialization, arithmetic operations",
                "Dynamic memory allocation - malloc(), calloc(), free()",
                "Structures and unions - definition and usage",
                "File handling operations in C"
              ]
            }
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
            {
              title: "HTML5 Fundamentals and Semantic Markup",
              topics: [
                "HTML5 document structure and DOCTYPE declaration",
                "Semantic HTML5 elements - header, nav, main, section, article, aside, footer",
                "HTML forms - input types, validation, form controls",
                "HTML5 multimedia elements - audio, video, canvas",
                "HTML5 APIs - Geolocation, Local Storage, Web Workers",
                "Accessibility in HTML - ARIA attributes, semantic markup",
                "HTML5 metadata and SEO optimization",
                "Progressive Web App basics with HTML5"
              ]
            },
            {
              title: "CSS3 Styling and Responsive Design",
              topics: [
                "CSS3 syntax, selectors, and specificity rules",
                "CSS Box Model - margin, border, padding, content",
                "CSS3 layout techniques - Flexbox, CSS Grid, Floats",
                "Responsive web design principles and mobile-first approach",
                "CSS3 media queries and breakpoints",
                "Bootstrap framework - grid system, components, utilities",
                "CSS3 animations and transitions",
                "CSS preprocessors introduction - SASS/LESS basics"
              ]
            },
            {
              title: "JavaScript Programming Fundamentals",
              topics: [
                "JavaScript syntax, variables, and data types",
                "JavaScript functions - declaration, expression, arrow functions",
                "Control structures in JavaScript - if-else, loops, switch",
                "JavaScript arrays and array methods",
                "JavaScript objects and object-oriented programming",
                "Error handling with try-catch blocks",
                "JavaScript scope and closures",
                "ES6 features - let/const, template literals, destructuring"
              ]
            },
            {
              title: "DOM Manipulation and Interactive Web Development",
              topics: [
                "Document Object Model (DOM) structure and navigation",
                "DOM element selection and manipulation methods",
                "Event handling - addEventListener, event delegation",
                "Form validation and user input handling",
                "AJAX and Fetch API for asynchronous operations",
                "JSON data format and parsing",
                "Local Storage and Session Storage usage",
                "Basic JavaScript debugging techniques",
                "Introduction to modern JavaScript frameworks"
              ]
            }
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
  if (navToggle) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navMenu.classList.toggle('active');
    });
  }

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

function initializeEventListeners() {
  // Global click handler for all navigation
  document.addEventListener('click', function(e) {
    handleGlobalClick(e);
  });

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

function handleGlobalClick(e) {
  e.preventDefault();

  // Handle accordion toggle
  if (e.target.closest('.accordion-header')) {
    const header = e.target.closest('.accordion-header');
    toggleAccordion(header);
    return;
  }

  // Handle navigation links with data-page attribute
  const navElement = e.target.closest('[data-page]');
  if (navElement) {
    const page = navElement.dataset.page;
    const semester = navElement.dataset.semester;
    
    if (page === 'semester' && semester) {
      showSemesterPage(parseInt(semester));
    } else {
      showPage(page);
    }
    
    // Close mobile menu
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    
    updateActiveNavLink(navElement);
    return;
  }

  // Handle semester cards
  const semesterCard = e.target.closest('.semester-card');
  if (semesterCard) {
    const semester = semesterCard.dataset.semester;
    if (semester) {
      showSemesterPage(parseInt(semester));
      return;
    }
  }

  // Handle course cards
  const courseCard = e.target.closest('.course-card');
  if (courseCard) {
    const courseCode = courseCard.dataset.course;
    if (courseCode) {
      showCourseDetail(courseCode);
      return;
    }
  }

  // Handle buttons with data-page
  const button = e.target.closest('.btn[data-page]');
  if (button) {
    const page = button.dataset.page;
    const semester = button.dataset.semester;
    
    if (page === 'semester' && semester) {
      showSemesterPage(parseInt(semester));
    } else {
      showPage(page);
    }
    return;
  }
}

function toggleAccordion(header) {
  const accordionItem = header.closest('.accordion-item');
  const content = accordionItem.querySelector('.accordion-content');
  const icon = header.querySelector('.accordion-icon');
  
  // Toggle active state
  const isActive = accordionItem.classList.toggle('active');
  
  // Update icon rotation and content height
  if (isActive) {
    if (icon) icon.style.transform = 'rotate(180deg)';
    if (content) content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    if (icon) icon.style.transform = 'rotate(0deg)';
    if (content) content.style.maxHeight = '0';
  }
}

function initializeBackToTop() {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
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
        <h3>Course Syllabus</h3>
        <div class="accordion">
    `;
    
    course.units.forEach((unit, index) => {
      html += `
        <div class="accordion-item">
          <div class="accordion-header">
            <div class="accordion-title">
              <span class="unit-number">Unit ${index + 1}</span>
              <h4>${unit.title}</h4>
            </div>
            <div class="accordion-icon">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div class="accordion-content">
            <div class="unit-topics">
              <ul>
      `;
      
      unit.topics.forEach(topic => {
        html += `<li>${topic}</li>`;
      });
      
      html += `
              </ul>
            </div>
          </div>
        </div>
      `;
    });
    
    html += '</div></div>';
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
  if (e.key === 'Escape' && navMenu) {
    navMenu.classList.remove('active');
  }
  
  // Enter key on focusable elements
  if (e.key === 'Enter' && e.target.matches('[data-page], .course-card, .semester-card, .accordion-header')) {
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
  
  // Add ARIA labels to accordion headers
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
  });
}

// Initialize accessibility features after content loads
function initializeAccessibility() {
  setTimeout(addAccessibilityFeatures, 100);
}

// Re-run accessibility setup when content changes
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Export functions for potential testing
window.CAWebsite = {
  showPage,
  showSemesterPage,
  showCourseDetail,
  searchCourses,
  programData
};