// src/app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      
      <main className="">
        {/* Hero Section */}
        <section id="about" className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
    
    {/* Left Content - About Description (2/3) */}
    <div className="md:w-2/3 pr-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
        Hi, I am Pratik Mishra
      </h1>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
        I'm currently pursuing MS in Software Engineering from Cleveland State University.
        I have over 2 years of professional work experience as a Java full stack developer building robust and scalable microservices and web applications.
        I am looking for new New Grad roles. &nbsp;
        <a href="#contact" className="text-lg text-gray-800 hover:text-gray-400">
          Hire me?
        </a>
      </p>
      
      <div className="flex flex-wrap gap-4">
        <a href="/Pratik Mishra Software Engineering.pdf" className="bg-gray-800 hover:bg-gray-100 text-white font-medium py-2 px-6 rounded-lg transition-colors">
          View Resume
        </a>
        <a href="https://www.linkedin.com/in/pratik-mishraa/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
          View LinkedIn
        </a>
      </div>
    </div>

    {/* Right Content - Profile Card (1/3) */}
    <div className="">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-full max-w-2xl">
        <img src="/photo.jpg" alt="Pratik Mishra" className="w-80 h-100 dark:border-gray-600" />
      </div>
    </div>

  </div>
</section>


        {/* Placeholder sections - you'll build these out later */}
        {/* <section id="about" className="py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-4">
              Hello! I'm a passionate software engineer currently pursuing my Master's in Software Engineering. I have experience in full-stack development, with a focus on modern JavaScript frameworks and cloud technologies.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enhancing my problem-solving skills through competitive programming.
            </p>
          </div>
        </section> */}
<section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-screen-lg mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
    
    {/* Experience Container - Centered */}
    <div className="flex justify-center">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-full max-w-2xl">
        
        {/* Company Header - Logo, Name, and Duration */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img src="/logo.jpg" alt="NSEIT Logo" className="w-18 h-12" />
            <h3 className="text-xl font-semibold">NSEIT</h3>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">Nov 2022 - Sept 2024</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Worked as a Developer, focusing on building Java-based web applications, microservices, and front-end interfaces using React. Led the development of a Liferay-based portlet application that streamlined data visualization and reporting.
        </p>
      </div>
    </div>

  </div>
</section>




        <section id="skills" className="py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project cards will go here */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Front End</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">HTML, Javascript, Angular, Reactjs, Nextjs</p>

              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Back End</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Python, Java, Springboot, Liferay</p>

              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Databases</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">MySQL, PostgreSQL, MS-SQL</p>

              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project cards will go here */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Short description of the project and technologies used.</p>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-600 hover:underline">Demo</a>
                  <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="max-w-md mx-auto">
              {/* Contact form will go here */}
              <p className="text-center mb-4">Email me at: <a href="mailto:pratikmishra2807@gmail.com" className="text-blue-600">pratikmishra2807@gmail.com</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}