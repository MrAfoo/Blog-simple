import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex justify-center items-center">
      {/* Background Image */}
      <div className=" inset-0">
        <Image
          src="/nature.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-100"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        {/* Main Heading */}
        <h1
          className={`text-2xl text-gray-300 font-bold mb-8 mt-8 text-center sm:text-3xl md:text-5xl ${styles.typewriter}`}
        >
          Explore the Beauty of Nature
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-md lg:text-md text-gray-200 font-semibold mb-2 text-center">
        Blooming with Nature’s Beauty and Serenity
        </h2>

        {/* Text */}
        <p className=" text-gray-300 mb-6 mt-2 text-center max-w-lg text-md md:text-md lg:text-md">
        Explore the beauty of nature with in-depth insights, tips, and expert advice on the wonders of flora and the environment.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6 text-gray-300">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition duration-300"
          >
            <FaGithub className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition duration-300"
          >
            <FaTwitter className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition duration-300"
          >
            <FaLinkedin className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
        </div>

        {/* Button */}
        <Link
          href="/blogs"
          className="px-6 py-2 text-sm text-gray-300 bg-green-600 rounded-xl hover:bg-[#6d3535]/10 transition duration-300 text-center font-bold"
        >
          Explore Blogs
        </Link>
      </div>
    </div>
  );
}