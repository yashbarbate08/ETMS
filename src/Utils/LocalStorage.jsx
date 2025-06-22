// localStorage.clear();

const Employee = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@me.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create a responsive landing page for the new product.",
        category: "Design",
        active: true,
        complete: false,
        failed: false,
        newTask: true,
        date: "2025-06-15",
      },
      {
        title: "Fix navbar issue",
        description: "Resolve alignment problem in mobile view.",
        category: "Development",
        active: true,
        complete: false,
        failed: false,
        newTask: false,
        date: "2025-06-10",
      },
      {
        title: "Review PR #42",
        description: "Code review for pull request #42 on GitHub.",
        category: "Code Review",
        active: false,
        complete: false,
        failed: true,
        newTask: false,
        date: "2025-06-09",
      },
    ],
  },
  {
    id: 2,
    firstName: "Neha",
    email: "neha@me.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 3,
      failed: 1,
    },
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Add unit tests for user authentication module.",
        category: "Testing",
        active: true,
        complete: false,
        failed: false,
        newTask: true,
        date: "2025-06-14",
      },
      {
        title: "Update Docs",
        description: "Update the README file with setup instructions.",
        category: "Documentation",
        active: false,
        complete: true,
        failed: false,
        newTask: false,
        date: "2025-06-08",
      },
      {
        title: "Fix build error",
        description: "Resolve the npm build issue on CI/CD pipeline.",
        category: "DevOps",
        active: false,
        complete: false,
        failed: true,
        newTask: false,
        date: "2025-06-06",
      },
      {
        title: "Prepare Sprint Report",
        description: "Create and share sprint summary with the team.",
        category: "Management",
        active: false,
        complete: true,
        failed: false,
        newTask: true,
        date: "2025-06-12",
      },
      {
        title: "Prepare Sprint Report 1",
        description: "Create and share sprint summary with the team.",
        category: "Management",
        active: false,
        complete: true,
        failed: false,
        newTask: true,
        date: "2025-06-12",
      },
    ],
  },
  {
    id: 3,
    firstName: "Amit",
    email: "amit@me.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Implement Login",
        description: "Develop login functionality with JWT.",
        category: "Development",
        active: true,
        complete: false,
        failed: false,
        newTask: true,
        date: "2025-06-16",
      },
      {
        title: "Create Logo",
        description: "Design a new logo for mobile app.",
        category: "Design",
        active: false,
        complete: true,
        failed: false,
        newTask: false,
        date: "2025-06-11",
      },
      {
        title: "Deploy App",
        description: "Deploy latest version to production.",
        category: "Deployment",
        active: false,
        complete: false,
        failed: true,
        newTask: false,
        date: "2025-06-07",
      },
    ],
  },
  {
    id: 4,
    firstName: "Kavita",
    email: "kavita@me.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "User Feedback Survey",
        description: "Design and send user satisfaction survey.",
        category: "Research",
        active: true,
        complete: false,
        failed: false,
        newTask: true,
        date: "2025-06-14",
      },
      {
        title: "Bug Triage",
        description: "Review and assign new bugs from backlog.",
        category: "Management",
        active: false,
        complete: true,
        failed: false,
        newTask: false,
        date: "2025-06-09",
      },
      {
        title: "Fix Form Validation",
        description: "Resolve client-side validation issues.",
        category: "Development",
        active: false,
        complete: false,
        failed: true,
        newTask: false,
        date: "2025-06-06",
      },
      {
        title: "Create UI Components",
        description: "Develop reusable button and card components.",
        category: "Frontend",
        active: true,
        complete: false,
        failed: false,
        newTask: true,
        date: "2025-06-16",
      },
    ],
  },
  {
    id: 5,
    firstName: "Sachin",
    email: "sachin@me.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Optimize Database",
        description: "Improve query performance and indexing.",
        category: "Database",
        active: true,
        complete: false,
        failed: false,
        newTask: true,
        date: "2025-06-17",
      },
      {
        title: "Add Dark Mode",
        description: "Implement dark mode toggle for UI.",
        category: "Frontend",
        active: false,
        complete: true,
        failed: false,
        newTask: false,
        date: "2025-06-08",
      },
      {
        title: "Resolve Merge Conflicts",
        description: "Fix conflicts in feature branch before merging.",
        category: "Git",
        active: false,
        complete: false,
        failed: true,
        newTask: false,
        date: "2025-06-06",
      },
      {
        title: "Setup Docker",
        description: "Containerize application using Docker.",
        category: "DevOps",
        active: true,
        complete: false,
        failed: false,
        newTask: true,
        date: "2025-06-17",
      },
    ],
  },
];

const Admin = [
  {
    id: 101,
    firstName: 'admin',
    email: "admin@example.com",
    password: "adminSecurePass123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("Employees", JSON.stringify(Employee)); // fix here
  localStorage.setItem("Admin", JSON.stringify(Admin));
};

export const getLocalStorage = () => {
  const Employees = JSON.parse(localStorage.getItem("Employees")) || [];
  const Admin = JSON.parse(localStorage.getItem("Admin")) || [];

  // console.log("Employees", Employees);
  // console.log("Admin", Admin);

  return { Employees, Admin };
};
