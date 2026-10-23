import { BuildingIcon, UsersIcon } from '../components/icons.jsx';

export const role = {
  title: 'Junior Software Developer Intern',
  company: 'Starsoftech Pvt. Ltd.',
  duration: 'Sep 2025 – Jul 2026',
  location: 'Hubballi, Karnataka',
};

export const techStack = [
  'React',
  'TypeScript',
  'Vite',
  'TanStack Query',
  'Java',
  'Spring Boot',
  'Swagger UI',
  'Postman',
  'Vitest',
  'Unit Testing',
];

export const projectTech = ['React', 'TypeScript', 'TanStack Query', 'Spring Boot', 'Swagger UI', 'Vitest'];

export const contributions = [
  'Built and maintained responsive, accessible UI components with React, Vite and TypeScript.',
  'Implemented English and Hindi support with i18n and dynamic language switching.',
  'Migrated state management from Context API to TanStack Query for better caching and data fetching.',
  'Integrated the frontend with Spring Boot REST APIs, validated with Swagger UI and Postman.',
  'Implemented debounced search, cutting unnecessary API requests by up to 80–85%.',
  'Removed unnecessary payload data from API responses to reduce response size.',
];

export const workProjects = [
  {
    name: 'SalanaPay',
    role: 'Software Developer Intern',
    Icon: BuildingIcon,
    description:
      'Production-level SaaS platform used by real organizations, covering company management, payroll, attendance, finance and employee operations.',
    contribution: 'Developed end-to-end features across the frontend and backend.',
  },
  {
    name: 'HRM Dashboard',
    role: 'Software Developer Intern',
    Icon: UsersIcon,
    description:
      'Human Resource Management system for employee management, reports, permissions, roles, settings and HR operations.',
    contribution: 'Contributed to building the production-level dashboard.',
  },
];
