// Importing FontAwesome icons
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="px-4 lg:px-8 py-8">
      <h1 className="text-center text-4xl font-extrabold mb-10 font-serif">About Me</h1>

      <div className="max-w-4xl mx-auto p-6 lg:p-8 rounded-2xl shadow-2xl bg-green-200 border border-l-transparent border-r-transparent border-[#f8f5f4]">
        <h2 className="text-gray-800 font-serif text-2xl sm:text-3xl lg:text-4xl mb-4 text-center">
        My Story: From Passion to Purpose</h2>
        <p className="text-gray-600 mb-4 text-center">
        Welcome to my world of creativity and innovation! I am Syed Affan Ali, a passionate designer and developer with a flair for creating visually stunning and functional digital experiences. My journey began with a keen interest in graphic design, which evolved into mastering UI/UX design and diving into the realm of front-end development.</p>
        <p className="text-gray-600 mb-4 text-center">
        Over the years, I have honed my skills in tools like Next.js, React, Tailwind CSS, and more, blending design with technology to bring ideas to life. Alongside this, I have ventured into entrepreneurship, exploring e-commerce and building engaging projects that resonate with real-world needs.</p>
        <p className="text-gray-600 mb-4 text-center">
        Beyond the screen, I enjoy gaming, staying inspired by interactive design, and constantly challenging myself to learn and grow. This platform is a reflection of my dedication to craft and the belief that creativity is limitless.</p>
        <p className="text-black mb-4 text-center">
        Letss connect and create something extraordinary together!</p>


        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-600 hover:text-green-600/100 text-3xl transition-colors" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-gray-600 hover:text-green-600/100 text-3xl transition-colors" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-600 hover:text-green-600/100 text-3xl transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;