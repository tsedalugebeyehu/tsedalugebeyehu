import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'Java',
    'Spring Boot',
    'Vue',
    'React',
    'AWS',
    'PostgreSQL',
    'MongoDB',
    'Elasticsearch',
    'OpenShift',
    'Git',
  ];

  readonly experiences: Experience[] = [
    {
      company: 'SHLD, Inc.',
      role: 'Senior Software Engineer',
      period: 'Dec 2022 — Present',
      description:
        'Develop and maintain modern enterprise software applications using current frontend and backend technologies.',
      technologies: ['Vue.js', 'Vuetify', 'JavaScript', 'Full Stack Development'],
      highlights: [
        'Work across design, implementation, testing and deployment.',
        'Develop new application features and maintain existing functionality.',
        'Investigate and resolve production and application defects.',
      ],
    },
    {
      company: 'The Buffalo Group, LLC — A Jacobs Company',
      role: 'Software Engineer — SME3',
      period: 'Feb 2019 — Dec 2022',
      description:
        'Built, enhanced and transitioned enterprise applications using Angular, Spring Boot and Java.',
      technologies: [
        'Angular',
        'TypeScript',
        'Spring Boot',
        'Java',
        'JPA',
        'MongoDB',
        'Elasticsearch',
        'OpenShift',
        'AWS',
        'Keycloak',
      ],
      highlights: [
        'Designed and structured multi-module frontend and backend applications.',
        'Supported production systems and implemented application enhancements.',
        'Integrated applications with authentication, authorization, workflow and auditing services.',
        'Supported deployments and application transitions to OpenShift environments.',
      ],
    },
    {
      company: 'Armedia, LLC',
      role: 'Software Developer',
      period: 'Jun 2014 — Feb 2019',
      description:
        'Developed enterprise case-management, content-management and workflow solutions.',
      technologies: [
        'Java',
        'Spring',
        'Angular',
        'ADF',
        'Alfresco',
        'Activiti',
        'Mule',
        'Liquibase',
        'REST',
      ],
      highlights: [
        'Developed REST services for enterprise applications.',
        'Customized Alfresco content-management solutions.',
        'Implemented workflow solutions using Activiti.',
        'Contributed to Angular and ADF application rewrites.',
        'Built software demonstrations and proof-of-concept applications.',
      ],
    },
  ];
}
