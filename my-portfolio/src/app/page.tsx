// src/app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedMain from './components/AnimatedMain';


export default function Home() {
  return (
    <>

      <main className="">
        <section id="about" className="bg-gradient-to-b dark:bg-black from-sky-100 to-white py-20">

          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">


            <div className="">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
                <span className="typewriting">Hello! I'm Pratik,</span>
              </h2>
              <p className="text-lg mb-6 text-gray-600">
                I am a graduate student at Cleveland State University pursuing MS in Software Engineering where I am learning and deep diving
                into the areas of Artificial Intelligence, Machine Learning and building a strong understanding of how computers and software systems work.
                I specialize in making responsive and interactive webites and web applications and have around 2 years of professional work experience as a full stack developer building and deploying production ready and scalable microservices in the financial domain, using
                Java, Springboot, Angular, Liferay, Javascript and SQL with strong hands-on proficiency in Linux and git.
              </p>
              <p className="text-lg mb-6 text-gray-600 ">
                I am looking for Internships and full-time roles in AI/ML and Software Engineering.
                <a href="#footer" className="underline-link ml-2 text-lg inline-block animate-bounce">Hire me?</a>


              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="/Pratik Mishra Software Engineering.pdf" className="bg-black text-white font-medium py-2 px-6 rounded-full shadow-md shadow-gray-500 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-black">
                  View Resume
                </a>
                <a href="https://www.linkedin.com/in/pratik-mishraa/" target="_blank" className="bg-black text-white font-medium py-2 px-6 rounded-full shadow-md shadow-gray-500 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-black">
                  View LinkedIn
                </a>
                <a href="https://github.com/pratikmishra17" target="_blank" className="bg-black text-white font-medium py-2 px-6 rounded-full shadow-md shadow-gray-500 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-black">
                  View Github
                </a>
              </div>
            </div>


            {/* <div className="">
              <div className="bg-white rounded-xl shadow-xl p-4 w-auto">
                <img src="/photo.jpg" alt="Pratik Mishra" className="w-80 h-100" />
              </div>
            </div> */}

          </div>
        </section>
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none bg-white hover:inset-shadow-sm inset-shadow-gray-500">
                <h3 className="text-xl font-semibold text-black mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg ">Java</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Python</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">JavaScript</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">TypeScript</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">SQL</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">HTML & CSS</span>
                </div>
              </div>
              <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                <h3 className="text-xl font-semibold text-black mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Springboot</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Liferay DXP</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">REST API</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Node.js</span>
                </div>
              </div>
              <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                <h3 className="text-xl font-semibold text-black mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Angular</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">React.js</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Chart.js</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Tailwind CSS</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Bootstrap CSS</span>
                </div>
              </div>
              <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                <h3 className="text-xl font-semibold text-black mb-2">Database</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">MySQL</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">PostgreSQL</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">MS-SQL</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Oracle DB</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Elasticsearch</span>
                </div>
              </div>
              <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                <h3 className="text-xl font-semibold text-black mb-2">Libraries/Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Java Collection Framework</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Sickit-learn</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Pytorch</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Pandas</span>
                </div>
              </div>
              <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                <h3 className="text-xl font-semibold text-black mb-2">DevOps/Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">AWS</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Linux servers</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Cron jobs</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Shell Scripting</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Git</span>
                  <span className="text-md text-black px-2 py-1 bg-gray-300 rounded-lg p-6">Drupal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Education</h2>
            <div>
              <h3 className="text-xl font-semibold italic text-black mb-2">Cleveland State University - Cleveland, Ohio, USA</h3>
              <h3 className="text-xxl font-semibold italic text-gray-600 mb-2">Master of Science in Software Engineering | Jan. 2025 - Dec. 2026</h3>
              <h4 className="text-md italic text-gray-500 mb-2">Courses: Data Mining, Deep Learning, Artificial Inteligence, Software Engineering, Project Management, Software Quality Assurance</h4>
            </div>
            <div className="py-8">
              <h3 className="text-xl font-semibold italic text-black mb-2">University of Mumbai - Mumbai, Maharashtra, India</h3>
              <h3 className="text-xxl font-semibold italic text-gray-600 mb-2">Bachelor of Engineering in Information Technology | Aug. 2018 - Jun. 2022</h3>
              <h4 className="text-md italic text-gray-500 mb-2">Courses: Data Structures, Computer networks, Operating System, Cloud computing, Big Data Analysis</h4>
            </div>
          </div>
        </section>
        <section id="experience" className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Work Experience</h2>

            <div className="pb-6">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-black">NSEIT Ltd.</h3>
                <img src="/logo.jpg" alt="NSEIT Logo" className="w-20 h-8 object-contain" />
              </div>
              <div className='mb-4'>
                <p className="text-lg text-gray-600">
                  Software Developer (Java Full Stack)
                </p>
                <p className="text-sm text-gray-500">
                  November 2022 - September 2024
                </p>
                <p className="text-sm text-gray-500">
                  Mumbai, India
                </p>
              </div>
              <div className='mb-4'>
                <h4 className="text-sm text-black font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-black px-2 py-1 bg-white shadow-sm shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">Java</span>
                  <span className="text-xs text-black px-2 py-1 bg-white shadow-sm shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">Springboot</span>
                  <span className="text-xs text-black px-2 py-1 bg-white shadow-sm shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">Liferay</span>
                  <span className="text-xs text-black px-2 py-1 bg-white shadow-sm shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">Javascript</span>
                  <span className="text-xs text-black px-2 py-1 bg-white shadow-sm shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">SQL</span>
                </div>
              </div>
              <h4 className="text-sm text-black font-semibold mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Developed and deployed end-to-end Spring Boot microservice applications in UAT and production environments—leveraging Liferay DXP, PostgreSQL, and Linux—to modernize legacy systems and boost performance.
                </li>
                <li>
                  Optimized Chart.js components to render real-time stock market data, achieving a 50% reduction in load times compared to Kibana and enhancing user experience.
                </li>
                <li>
                  Streamlined API architecture to reduce database load by 40%, significantly improving system responsiveness.
                </li>
                <li>
                  Collaborated with cross-functional teams to migrate critical web services from AWS to on-premise infrastructure, cutting operational costs by over 70% while ensuring data integrity and minimal downtime.
                </li>
                <li>
                  Assisted in setting up and configuring a comprehensive content management system with Drupal, streamlining web content updates and reducing dependency on technical teams.
                </li>
                <li>
                  Provided post go-live support to ensure high system availability and rapid resolution of production issues.
                </li>
              </ul>


            </div>
          </div>
        </section>





        {/* <section id="projects" className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none bg-white hover:inset-shadow-sm inset-shadow-gray-500">
                <h3 className="text-xl font-semibold text-black mb-2">Portfolio Website</h3>
                <p className="text-gray-700 mb-4">Online web portfolio showcasing my skills, experience and projects</p>
                <div className="flex space-x-2">
                  <a href="https://pratikmishra.vercel.app/">
                    <span className="bg-black text-sm text-white font-medium px-2 py-1 rounded-lg p-6 shadow-sm shadow-gray-500 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-black">Demo</span>
                  </a>
                  <a href="https://github.com/pratikmishra17/portfolio/tree/main/my-portfolio">
                    <span className="bg-black text-sm text-white font-medium px-2 py-1 rounded-lg p-6 shadow-md shadow-gray-500 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-black">Code</span>
                  </a>
                </div>
              </div>
              <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none bg-white hover:inset-shadow-sm inset-shadow-gray-500">
                <h3 className="text-xl font-semibold text-black mb-2">Portfolio Website</h3>
                <p className="text-gray-700 mb-4">Online web portfolio showcasing my skills, experience and projects</p>
                <div className="flex space-x-2">
                  <a href="https://pratikmishra.vercel.app/">
                    <span className="bg-black text-sm text-white font-medium px-2 py-1 rounded-lg p-6 shadow-sm shadow-gray-500 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-black">Demo</span>
                  </a>
                  <a href="https://github.com/pratikmishra17/portfolio/tree/main/my-portfolio">
                    <span className="bg-black text-sm text-white font-medium px-2 py-1 rounded-lg p-6 shadow-md shadow-gray-500 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-black">Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}


      </main>
    </>
  );
}