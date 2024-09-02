const initialState = [
    {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: '/api/placeholder/400/320',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
          },
          {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
          },
        ],
      },
      {
        id: 2,
        name: 'Advanced JavaScript Techniques',
        instructor: 'Jane Smith',
        description: 'Deep dive into advanced JavaScript concepts and modern development practices.',
        enrollmentStatus: 'Open',
        thumbnail: '/api/placeholder/400/320',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Intermediate JavaScript knowledge', 'Basic understanding of ES6+'],
        syllabus: [
          {
            week: 1,
            topic: 'Advanced Functions and Closures',
            content: 'Understanding higher-order functions, closures, and function composition.'
          },
          {
            week: 2,
            topic: 'Asynchronous JavaScript',
            content: 'Promises, async/await, and advanced error handling techniques.'
          },
        ],
      },
      {
        id: 3,
        name: 'Data Structures and Algorithms in Python',
        instructor: 'Alex Johnson',
        description: 'Comprehensive course on implementing and analyzing data structures and algorithms using Python.',
        enrollmentStatus: 'Open',
        thumbnail: '/api/placeholder/400/320',
        duration: '12 weeks',
        schedule: 'Tuesdays and Fridays, 6:30 PM - 8:30 PM',
        location: 'Hybrid (Online and In-person)',
        prerequisites: ['Basic Python programming', 'Fundamental mathematics'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Algorithm Analysis',
            content: 'Big O notation, time and space complexity analysis.'
          },
          {
            week: 2,
            topic: 'Arrays and Linked Lists',
            content: 'Implementation and operations on arrays and linked lists.'
          },
        ],
      },
      {
        id: 4,
        name: 'Machine Learning Fundamentals',
        instructor: 'Emily Chen',
        description: 'Introduction to core machine learning concepts, algorithms, and their practical applications.',
        enrollmentStatus: 'Open',
        thumbnail: '/api/placeholder/400/320',
        duration: '10 weeks',
        schedule: 'Wednesdays and Saturdays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: ['Basic Python programming', 'Fundamental statistics and linear algebra'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Machine Learning',
            content: 'Overview of ML, types of learning, and the ML pipeline.'
          },
          {
            week: 2,
            topic: 'Supervised Learning: Regression',
            content: 'Linear regression, polynomial regression, and regularization techniques.'
          },
        ],
      },
      {
        id: 5,
        name: 'Web Security and Ethical Hacking',
        instructor: 'Michael Brown',
        description: 'Learn about common web vulnerabilities, security best practices, and ethical hacking techniques.',
        enrollmentStatus: 'Open',
        thumbnail: '/api/placeholder/400/320',
        duration: '8 weeks',
        schedule: 'Mondays and Thursdays, 7:30 PM - 9:30 PM',
        location: 'Online',
        prerequisites: ['Basic web development knowledge', 'Understanding of networking concepts'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Web Security',
            content: 'Overview of web security landscape, common vulnerabilities, and attack vectors.'
          },
          {
            week: 2,
            topic: 'Cross-Site Scripting (XSS) and SQL Injection',
            content: 'Understanding, identifying, and preventing XSS and SQL injection attacks.'
          },
        ],
      },
    // Add some sample courses here
  ];
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_COURSES':
        return state.filter(course => 
          course.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          course.instructor.toLowerCase().includes(action.payload.toLowerCase())
        );
      default:
        return state;
    }
  };
  
  export default courseReducer;