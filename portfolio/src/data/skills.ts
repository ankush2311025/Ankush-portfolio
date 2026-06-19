import { 
  SiTypescript, SiJavascript, SiPython, SiCplusplus, SiSqlite,
  SiNodedotjs, SiExpress, SiNestjs, SiJsonwebtokens,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiMysql, SiPostgresql,
  SiDocker, SiKubernetes, SiGithubactions,
  SiGit, SiGithub, SiPostman
} from "react-icons/si";

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 85 },
      { name: "Python", icon: SiPython, level: 80 },
      { name: "SQL", icon: SiSqlite, level: 85 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: 90 },
      { name: "Express", icon: SiExpress, level: 90 },
      { name: "NestJS", icon: SiNestjs, level: 80 },
      { name: "REST APIs", icon: SiNodedotjs, level: 95 },
      { name: "JWT / RBAC", icon: SiJsonwebtokens, level: 85 }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, level: 50 },
      { name: "Next.js", icon: SiNextdotjs, level: 50 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 50 }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 80 },
      { name: "MySQL", icon: SiMysql, level: 80 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker, level: 75 },
      { name: "Kubernetes", icon: SiKubernetes, level: 60 },
      { name: "CI/CD", icon: SiGithubactions, level: 70 },
      { name: "GitHub Actions", icon: SiGithubactions, level: 80 }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, level: 90 },
      { name: "GitHub", icon: SiGithub, level: 90 },
      { name: "Postman", icon: SiPostman, level: 95 }
    ]
  }
];
