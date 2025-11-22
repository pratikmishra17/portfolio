"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  FileText, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  LucideIcon
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-zinc-100 tracking-tighter">
              PM<span className="text-orange-500">.</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-zinc-100 hover:bg-white text-zinc-950 px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-zinc-300 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pt-16"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(#3f3f46 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: 0.2
        }}
      ></div>

      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.06), transparent 40%)`,
        }}
      ></div>
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.03), transparent 40%)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <div className="flex-1 space-y-8 text-center md:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-medium uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Open to Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight leading-tight">
              Hello! I'm <span className="text-orange-500">Pratik</span>.
            </h1>
            
            <div className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto md:mx-0 space-y-4 text-justify md:text-left">
              <p>
                I am a graduate student at <span className="text-zinc-200 font-medium">Cleveland State University</span> pursuing an MS in Software Engineering, where I am learning and deep diving into the areas of <span className="text-zinc-200 font-medium">Artificial Intelligence</span>, <span className="text-zinc-200 font-medium">Machine Learning</span> and building a strong understanding of how computers and software systems work.
              </p>
              <p>
                I specialize in making responsive and interactive websites and web applications and have around 2 years of professional work experience as a <span className="text-zinc-200 font-medium">full stack developer</span> building and deploying production-ready and scalable microservices in the financial domain, using <span className="text-orange-500/90">Java, Springboot, Angular, Liferay, Javascript and SQL</span> with strong hands-on proficiency in Linux and git.
              </p>
              <p className="font-medium text-zinc-300 pt-2">
                I am looking for Internships and full-time roles in AI/ML and Software Engineering. 
                <a href="#contact" className="inline-block ml-2 text-orange-500 hover:text-orange-400 underline decoration-orange-500/30 hover:decoration-orange-500 transition-all font-bold animate-pulse">
                  Hire me?
                </a>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a 
                href="/Pratik Mishra Resume.pdf" 
                className="flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all hover:-translate-y-1 shadow-lg shadow-orange-900/20"
              >
                <FileText size={20} />
                View Resume
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/pratik-mishraa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/pratikmishra17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-600">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

const SkillCard = ({ title, skills, icon: Icon }: SkillCardProps) => (
  <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-orange-500/30 transition-all duration-300 group h-full">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-zinc-100">{title}</h3>
      <Icon className="text-zinc-600 group-hover:text-orange-500 transition-colors" size={24} />
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-950 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS"]
    },
    {
      title: "Backend & Cloud",
      icon: Terminal,
      skills: ["Spring Boot", "Node.js", "REST APIs", "AWS", "Linux", "Shell Scripting", "Liferay DXP"]
    },
    {
      title: "Frontend",
      icon: ExternalLink,
      skills: ["React.js", "Angular", "Tailwind CSS", "Bootstrap", "Chart.js"]
    },
    {
      title: "AI & Data Science",
      icon: Cpu,
      skills: ["PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Deep Learning", "Generative AI"]
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MS-SQL", "Oracle DB", "Elasticsearch"]
    },
    {
      title: "Tools",
      icon: Briefcase,
      skills: ["Git", "Maven", "Postman", "Jupyter", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  tags: string[];
}

const ExperienceItem = ({ role, company, duration, location, description, tags }: ExperienceItemProps) => (
  <div className="group relative pl-8 md:pl-0 transition-all">
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>
    
    <div className="md:flex items-start justify-between gap-10 mb-16">
      <div className="md:w-1/2 md:text-right">
        <div className="md:pr-10">
          <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-orange-500 transition-colors">{company}</h3>
          <div className="flex md:justify-end items-center gap-2 mt-1 mb-2 md:mb-0">
             <Briefcase size={14} className="text-orange-500" />
             <span className="text-zinc-400 text-sm font-medium">{role}</span>
          </div>
        </div>
      </div>

      <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-zinc-950 border-2 border-orange-500 rounded-full transform md:-translate-x-1/2 mt-2.5 z-10 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>

      <div className="md:w-1/2 md:pl-10 mt-4 md:mt-0">
        <div className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-wider text-zinc-500">
          <span>{duration}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {description.map((item, idx) => (
            <li key={idx} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-3">
              <span className="mt-1.5 w-1 h-1 bg-zinc-600 rounded-full flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Experience</h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
           <ExperienceItem 
            role="Engineering Peer Teacher"
            company="Cleveland State University"
            duration="Aug 2025 - Present"
            location="Cleveland, OH"
            tags={["Teaching", "Statistics", "Leadership"]}
            description={[
              "Reinforcing complex statistical concepts for a class of 20+ graduate and undergraduate students.",
              "Leading weekly recitation sessions and designing interactive presentations to boost engagement.",
              "Mentoring students on academic success and core engineering principles."
            ]}
          />

          <ExperienceItem 
            role="Associate Systems Analyst"
            company="NSEIT Ltd."
            duration="Nov 2022 - Sept 2024"
            location="Mumbai, India"
            tags={["Java", "Spring Boot", "Microservices", "RHEL"]}
            description={[
              "Modernized legacy systems by developing Spring Boot microservices on RHEL, improving runtime efficiency by 75%.",
              "Optimized frontend performance (Angular) and API architecture, reducing screen load times by 50% compared to previous Kibana implementations.",
              "Led the migration of critical web services from AWS to on-premise infrastructure, resulting in a 70% reduction in operational costs.",
              "Automated database maintenance and server tasks using Shell scripting and Cron jobs, reducing manual intervention by 60%."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  links: {
    demo: string;
    github: string;
  };
  accuracy?: string;
}

const ProjectCard = ({ title, description, techStack, links, accuracy }: ProjectCardProps) => (
  <div className="group bg-zinc-900 rounded-none border-l-2 border-zinc-800 hover:border-orange-500 transition-all duration-300 p-8 flex flex-col h-full hover:bg-zinc-800/50">
    <div className="flex justify-between items-start mb-6">
      <Code2 className="text-zinc-500 group-hover:text-orange-500 transition-colors" size={28} />
      <div className="flex gap-4">
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
            <ExternalLink size={20} />
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-orange-500 transition-colors">{title}</h3>
    <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
    
    {accuracy && (
      <div className="mb-6 px-3 py-2 bg-orange-500/10 border border-orange-500/20 rounded w-fit">
        <p className="text-orange-500 text-xs font-bold font-mono">{accuracy}</p>
      </div>
    )}

    <div className="pt-6 border-t border-zinc-800/50">
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span key={tech} className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Insurance Fraud Detection",
      description: "A comprehensive data visualization dashboard for fraud detection. Analyzed 15k+ records to compare performance across multiple ML algorithms.",
      techStack: ["Python", "Streamlit", "Pandas", "Random Forest"],
      accuracy: "92% Model Accuracy",
      links: {
        demo: "https://github.com/pratikmishra17/Fraud-Detection-Dashboard",
        github: "https://github.com/pratikmishra17/Fraud-Detection-Dashboard"
      }
    },
    {
      title: "Deep Encoder-Decoder",
      description: "Architected a custom CNN with dual encoders and a single decoder for advanced image denoising tasks. Validated on color image datasets.",
      techStack: ["PyTorch", "Python", "CNN", "Matplotlib"],
      links: {
        demo: "https://github.com/pratikmishra17/encoder-decoder",
        github: "https://github.com/pratikmishra17/encoder-decoder"
      }
    },
    {
      title: "AlexNet Implementation",
      description: "Implementation of the AlexNet architecture for top-K distance-based image retrieval, demonstrating deep understanding of CNN structures.",
      techStack: ["Python", "PyTorch", "NumPy"],
      links: {
        demo: "https://github.com/pratikmishra17/alexNet-implementation",
        github: "https://github.com/pratikmishra17/alexNet-implementation"
      }
    },
    {
      title: "Personal Portfolio",
      description: "A clean, high-performance portfolio website built with modern React patterns and Tailwind CSS. Features a responsive, industrial design.",
      techStack: ["TypeScript", "React", "Tailwind CSS"],
      links: {
        demo: "https://pratikmishra.vercel.app/",
        github: "https://github.com/pratikmishra17/portfolio"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationAndAchievements = () => {
  return (
    <section id="education" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold text-zinc-100">Education</h2>
            </div>
            
            <div className="space-y-8 border-l border-zinc-800 ml-3 pl-8">
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-zinc-950 border-2 border-zinc-700 rounded-full"></div>
                <h3 className="text-lg font-bold text-zinc-100">Cleveland State University</h3>
                <p className="text-orange-500 text-sm font-mono mb-2">2025 - 2026</p>
                <p className="text-zinc-300 font-medium">MS in Software Engineering</p>
                <p className="text-zinc-500 text-sm mt-1">GPA: 4.0</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-zinc-950 border-2 border-zinc-700 rounded-full"></div>
                <h3 className="text-lg font-bold text-zinc-100">University of Mumbai</h3>
                <p className="text-zinc-600 text-sm font-mono mb-2">2018 - 2022</p>
                <p className="text-zinc-300 font-medium">BE in Information Technology</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold text-zinc-100">Achievements</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                "2nd Place: NSEIT Tech Challenge (Fraud Detection System)",
                "Google Certification: Generative AI Fundamentals",
                "NSE Academy: Financial Markets (NCFM) Certified",
                "Microsoft Excel Data Analysis Certified"
              ].map((achievement, index) => (
                <div key={index} className="bg-zinc-900 p-4 border-l-2 border-orange-500/50 hover:border-orange-500 hover:bg-zinc-800 transition-all flex items-center gap-4">
                  <p className="text-zinc-300 text-sm font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-zinc-100 mb-6">Ready to Collaborate?</h2>
      <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
        I am currently open to internships and full-time roles in AI/ML and Software Engineering.
      </p>
      
      <div className="flex justify-center gap-8 mb-12">
        <a href="mailto:p.mishra23@vikes.csuohio.edu" className="text-zinc-500 hover:text-orange-500 transition-colors">
          <Mail size={28} />
        </a>
        <a href="https://www.linkedin.com/in/pratik-mishraa/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-orange-500 transition-colors">
          <Linkedin size={28} />
        </a>
        <a href="https://github.com/pratikmishra17" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-orange-500 transition-colors">
          <Github size={28} />
        </a>
      </div>
      
      <p className="text-zinc-700 text-sm">
        © {new Date().getFullYear()} Pratik Mishra.
      </p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 selection:bg-orange-500/30 selection:text-orange-100">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <EducationAndAchievements />
      </main>
      <Footer />
    </div>
  );
}
