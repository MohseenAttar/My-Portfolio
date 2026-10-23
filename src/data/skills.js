import { FaJava } from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReactquery,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import {
  ApiIcon,
  CheckCircleIcon,
  ClipboardCheckIcon,
  CodeIcon,
  DatabaseIcon,
  LayersIcon,
  TerminalIcon,
  UsersIcon,
  WrenchIcon,
} from '../components/icons.jsx';

const GOLD = '#D4AF37';

const java = { name: 'Java', Icon: FaJava, color: '#E76F00' };

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    Icon: TerminalIcon,
    skills: [
      java,
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'C', Icon: SiC, color: '#A8B9CC' },
      { name: 'C++', Icon: SiCplusplus, color: '#659AD2' },
      { name: 'Python', Icon: SiPython, color: '#4B8BBE' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    Icon: CodeIcon,
    skills: [
      { name: 'ReactJS', Icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vite', Icon: SiVite, color: '#646CFF' },
      { name: 'TanStack Query', Icon: SiReactquery, color: '#FF4154' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    Icon: LayersIcon,
    skills: [
      java,
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'REST API', Icon: ApiIcon, color: GOLD },
      { name: 'MVC', Icon: LayersIcon, color: GOLD },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    Icon: DatabaseIcon,
    skills: [
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#5E82E8' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    Icon: WrenchIcon,
    skills: [
      { name: 'GitHub', Icon: SiGithub, color: '#F5F5F5' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      { name: 'Swagger UI', Icon: SiSwagger, color: '#85EA2D' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
    ],
  },
  {
    id: 'practices',
    title: 'Practices',
    Icon: ClipboardCheckIcon,
    skills: [
      { name: 'Scrum', Icon: UsersIcon, color: GOLD },
      { name: 'Unit Testing', Icon: CheckCircleIcon, color: GOLD },
      { name: 'OOP', Icon: CodeIcon, color: GOLD },
    ],
  },
];

// Flat, de-duplicated list for the marquee (Java appears in two categories).
const seen = new Set();
export const allSkills = skillCategories
  .flatMap((category) => category.skills)
  .filter((skill) => !seen.has(skill.name) && seen.add(skill.name));
