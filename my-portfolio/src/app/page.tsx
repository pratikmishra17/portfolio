// src/app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedMain from './components/AnimatedMain';


export default function Home() {
  return (
    <>

      <main className="">
        <AnimatedMain>
          <section id="about" className="bg-gradient-to-b dark:bg-black from-blue-50 to-white py-20">
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
                  <a href="#contact" className="underline-link ml-2 text-lg inline-block animate-bounce">Hire me?</a>


                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <a href="/Pratik Mishra Software Engineering.pdf" className="bg-black text-white font-medium py-2 px-6 rounded-full shadow-lg shadow-gray-500/50 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                    View Resume
                  </a>
                  <a href="https://www.linkedin.com/in/pratik-mishraa/" target="_blank" className="bg-black text-white font-medium py-2 px-6 rounded-full shadow-lg shadow-gray-500/50 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                    View LinkedIn
                  </a>
                  <a href="https://github.com/pratikmishra17" target="_blank" className="bg-black text-white font-medium py-2 px-6 rounded-full shadow-lg shadow-gray-500/50 hover:bg-white hover:text-black hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
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
        </AnimatedMain>

        <AnimatedMain>
          <section id="skills" className="py-20 bg-white">
            <div className="max-w-screen-lg mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-black">Skills and Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                  <h3 className="text-xl font-semibold text-black mb-2">Languages</h3>
                  <li className="text-gray-700 mb-4">Java</li>
                  <li className="text-gray-700 mb-4">Python</li>
                  <li className="text-gray-700 mb-4">SQL</li>
                  <li className="text-gray-700 mb-4">Javascript & Typescript</li>
                  <li className="text-gray-700 mb-4">HTML & CSS</li>
                </div>
                <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                  <h3 className="text-xl font-semibold text-black mb-2">Frameworks and Libraries</h3>
                  <li className="text-gray-700 mb-4">Springboot</li>
                  <li className="text-gray-700 mb-4">Java Collection Framework</li>
                  <li className="text-gray-700 mb-4">Angular</li>
                  <li className="text-gray-700 mb-4">React.js</li>
                  <li className="text-gray-700 mb-4">Node.js</li>
                  <li className="text-gray-700 mb-4">Chart.js</li>
                </div>
                <div className="bg-white shadow-lg shadow-gray-500/50 rounded-lg p-6 transition-all duration-300 ease-in-out group hover:shadow-none hover:inset-shadow-sm inset-shadow-gray-500">
                  <h3 className="text-xl font-semibold text-black mb-2">Technologies</h3>
                  <li className="text-gray-700 mb-4">Full Stack Development</li>
                  <li className="text-gray-700 mb-4">Liferay DXP</li>
                  <li className="text-gray-700 mb-4">RESTful APIs</li>
                  <li className="text-gray-700 mb-4">Microservices</li>
                  <li className="text-gray-700 mb-4">Linux Servers</li>
                  <li className="text-gray-700 mb-4">AI ML</li>
                </div>
              </div>
            </div>
          </section>
        </AnimatedMain>
        <AnimatedMain>
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
        </AnimatedMain>
        <AnimatedMain>
          <section id="experience" className="py-20 bg-white">
            <div className="max-w-screen-lg mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-black">Work Experience</h2>

              <div className="pb-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-black">NSEIT Ltd.</h3>
                  <img src="/logo.jpg" alt="NSEIT Logo" className="w-20 h-8 object-contain" />
                </div>
                <h3 className="text-gray-500">
                  Software Developer | Mumbai, India | Nov. 2022 - Sept. 2024
                </h3>
                <li className="text-gray-700">Developed and deployed end-to-end Spring Boot microservice applications in UAT and production environments—leveraging Liferay DXP, PostgreSQL, and Linux—to modernize legacy systems and boost performance.</li>
              <li className="text-gray-700">Optimized Chart.js components to render real-time stock market data, achieving a 50% reduction in load times compared to Kibana and enhancing user experience.</li>
              <li className="text-gray-700">Streamlined API architecture to reduce database load by 40%, significantly improving system responsiveness.</li>
              <li className="text-gray-700">Collaborated with cross-functional teams to migrate critical web services from AWS to on-premise infrastructure, cutting operational costs by over 70% while ensuring data integrity and minimal downtime.</li>
              <li className="text-gray-700">Assisted in setting up and configuring a comprehensive content management system with Drupal, streamlining web content updates and reducing dependency on technical teams.</li>
              <li className="text-gray-700">Provided post go-live support to ensure high system availability and rapid resolution of production issues.</li>

              </div>
            </div>
          </section>
        </AnimatedMain>




        {/* <section id="projects" className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Project Name</h3>
                <p className="text-gray-700 mb-4">Short description of the project and technologies used.</p>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-600 hover:underline">Demo</a>
                  <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      </main>
    </>
  );
}