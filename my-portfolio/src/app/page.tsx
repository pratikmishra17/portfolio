// src/app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>

      <main className="">

        <section id="about" className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">


            <div className="md:w-2/3 pr-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
              <span className="typewriting">Hello! I'm Pratik,</span>
              </h2>
              <p className="text-lg mb-6 text-gray-600">
                I am a graduate student at Cleveland State University pursuing MS in Software Engineering where I am learning and deep diving 
                into the areas of Artificial Intelligence, Machine Learning and building a strong understanding of how computers and software systems work. 
                I have around 2 years of professional work experience as a full stack developer building and deploying production ready and scalable microservices in the financial domain, using
                Java, Springboot, Angular, Liferay, Javascript and SQL with strong hands-on proficiency in Linux and git.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                I am looking for Internships and full-time roles in AI/ML and Software Engineering.
                <a href="#contact" className="underline-link ml-2 text-lg inline-block animate-bounce">Hire me?</a>


              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="/Pratik Mishra Software Engineering.pdf" className="bg-gray-900 hover:bg-gray-300 hover:text-black text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg">
                  View Resume
                </a>
                <a href="https://www.linkedin.com/in/pratik-mishraa/" className="bg-gray-900 hover:bg-gray-300 hover:text-black text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg">
                  View LinkedIn
                </a>
              </div>
            </div>


            <div className="">
              <div className="bg-white rounded-xl shadow-xl p-4 w-auto">
                <img src="/photo.jpg" alt="Pratik Mishra" className="w-80 h-100" />
              </div>
            </div>

          </div>
        </section>



        <section id="skills" className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Skills and Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white rounded-lg shadow-xl hover:shadow-md p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Languages</h3>
                <li className="text-gray-700 mb-4">Java</li>
                <li className="text-gray-700 mb-4">Python</li>
                <li className="text-gray-700 mb-4">SQL</li>
                <li className="text-gray-700 mb-4">Javascript & Typescript</li>
                <li className="text-gray-700 mb-4">HTML & CSS</li>
              </div>
              <div className="bg-white rounded-lg shadow-xl hover:shadow-md p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Frameworks and Libraries</h3>
                <li className="text-gray-700 mb-4">Springboot</li>
                <li className="text-gray-700 mb-4">Java Collection Framework</li>
                <li className="text-gray-700 mb-4">Angular</li>
                <li className="text-gray-700 mb-4">React.js</li>
                <li className="text-gray-700 mb-4">Node.js</li>
                <li className="text-gray-700 mb-4">Chart.js</li>
              </div>
              <div className="bg-white rounded-lg shadow-xl hover:shadow-md p-6">
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

        <section id="education" className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Education</h2>
            <div>
              <h3 className="text-xl font-semibold italic text-black mb-2">Cleveland State University - Cleveland, Ohio, USA</h3>
              <h3 className="text-xxl font-semibold italic text-gray-600 mb-2">Masters of Science in Software Engineering | Jan. 2025 - Dec. 2026</h3>
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
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold text-black">NSEIT Ltd.</h3>
                <img src="/logo.jpg" alt="NSEIT Logo" className="w-20 h-8 object-contain" />
              </div>
              <h3 className="text-lg text-gray-500">
                Software Developer | Mumbai, India | Nov. 2022 - Sept. 2024
              </h3>
              {/* <li className="text-gray-700 py-4"></li>
              <li className="text-gray-700 mb-4"></li>
              <li className="text-gray-700 mb-4"></li>
              <li className="text-gray-700 mb-4"></li>
              <li className="text-gray-700 mb-4"></li> */}

            </div>
          </div>
        </section>





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

        <section id="contact" className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Get In Touch</h2>
            <div className="max-w-md mx-auto">

              <p className="text-center mb-4 text-gray-700">Email me at: <a href="mailto:p.mishra23@vikes.csuohio.edu" className=" font-semibold text-gray-600">p.mishra23@vikes.csuohio.edu</a></p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex space-x-4">
                <a href="https://github.com/pratikmishra17/" title="github" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/pratik-mishraa/" title='linkedin' target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a href="mailto:p.mishra23@vikes.csuohio.edu" title='send me an email!' className="text-gray-800 hover:text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}