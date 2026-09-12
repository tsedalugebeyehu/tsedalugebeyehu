export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  topics: BlogTopic[];
}

export interface BlogTopic {
  id: string;
  title: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: '</>',
    description: 'Modern frontend development tutorials, concepts and practical examples.',
    topics: [
      {
        id: 'html',
        title: 'HTML',
        description: 'HTML fundamentals, semantic markup and modern HTML.',
      },
      {
        id: 'css',
        title: 'CSS & SCSS',
        description: 'CSS layouts, responsive design, Sass and styling.',
      },
      {
        id: 'javascript',
        title: 'JavaScript',
        description: 'JavaScript fundamentals and web development concepts.',
      },
      {
        id: 'typescript',
        title: 'TypeScript',
        description: 'Types, interfaces, generics and modern TypeScript.',
      },
      {
        id: 'angular',
        title: 'Angular',
        description: 'Angular components, routing, services, signals and architecture.',
      },
    ],
  },

  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    description: 'Java development tutorials and interview preparation.',
    topics: [
      {
        id: 'java-tutorial',
        title: 'Java Tutorials',
        description: 'Java language concepts and practical examples.',
      },
      {
        id: 'java-interview',
        title: 'Java Interview Questions',
        description: 'Common Java interview questions and explanations.',
      },
      {
        id: 'java-topics',
        title: 'Java Interview Topics',
        description: 'Important Java topics for technical interviews.',
      },
    ],
  },

  {
    id: 'spring',
    name: 'Spring & Spring Boot',
    icon: '🌱',
    description: 'Spring Boot, Spring Framework and Spring Security.',
    topics: [
      {
        id: 'spring-boot',
        title: 'Spring Boot',
        description: 'REST APIs, configuration and backend services.',
      },
      {
        id: 'spring-security',
        title: 'Spring Security',
        description: 'Authentication and authorization concepts.',
      },
    ],
  },

  {
    id: 'database',
    name: 'Database',
    icon: '◉',
    description: 'SQL, relational databases, MongoDB and data design.',
    topics: [
      {
        id: 'sql',
        title: 'SQL',
        description: 'Queries, joins and relational database fundamentals.',
      },
      {
        id: 'mongodb',
        title: 'MongoDB',
        description: 'MongoDB development and administration.',
      },
    ],
  },

  {
    id: 'linux',
    name: 'Linux',
    icon: '⌘',
    description: 'Linux administration and developer commands.',
    topics: [
      {
        id: 'sudo-user',
        title: 'Create a sudo user',
        description: 'Linux user and sudo configuration.',
      },
      {
        id: 'install-java',
        title: 'Install Java',
        description: 'Java installation and environment configuration.',
      },
      {
        id: 'tar',
        title: 'Tar / Untar',
        description: 'Working with tar archives.',
      },
    ],
  },

  {
    id: 'others',
    name: 'Tools & Others',
    icon: '⚙',
    description: 'Git, NPM, MongoDB and other development notes.',
    topics: [
      {
        id: 'git',
        title: 'Git',
        description: 'Git commands and source-control workflows.',
      },
      {
        id: 'npm',
        title: 'NPM',
        description: 'Package-management notes and troubleshooting.',
      },
    ],
  },
];
