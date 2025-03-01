// src/app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
              Pratik Mishra
            </h1>
            <h2 className="text-xl md:text-2xl text-center mb-6 text-gray-600 dark:text-gray-300">
              Software Engineer | MS in Software Engineering
            </h2>
            <p className="text-lg text-center max-w-2xl mb-8 text-gray-600 dark:text-gray-300">
              Building innovative solutions with modern technologies. Currently pursuing my Master's degree from Cleveland State University and seeking new opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="bg-gray-800 hover:bg-gray-100 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Resume
              </a>
              <a href="#contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                Hire Me
              </a>
            </div>
          </div>
        </section>

        {/* Placeholder sections - you'll build these out later */}
        <section id="about" className="py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-4">
              Hello! I'm a passionate software engineer currently pursuing my Master's in Software Engineering. I have experience in full-stack development, with a focus on modern JavaScript frameworks and cloud technologies.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enhancing my problem-solving skills through competitive programming.
            </p>
          </div>
        </section>

        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Work Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project cards will go here */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">NSEIT</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Short description of the project and technologies used.</p>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-600 hover:underline">Demo</a>
                  <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                </div>
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