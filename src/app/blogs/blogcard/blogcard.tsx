import React from "react";
import Image from "next/image";
import Link from "next/link";

 // Define Card_Type interface for props
interface CardProps {
  heading: string;
  text: string;
  blogid: number;
  image?: string;
}

// Card component definition with props destructuring
const Card: React.FC<CardProps> = ({ heading, text, blogid, image }) => {

  return (
    <div className="bg-green-300 text-gray-700 p-6 font-sans font-semibold border border-[#f8f5f4] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {image && (
        <div className="mb-4 flex-shrink-0">
          <Image
            src={image}
            alt={heading}
            width={400}
            height={250}
            className="w-full h-auto object-cover rounded-t-lg"
          />
        </div>
      )}
      <div className="flex-grow">
        <h2 className="text-xl text-[#1d1d1d] font-semibold mb-2">{heading}</h2>
        <p className="text-gray-600 mb-4">{text}</p>
      </div>
      <div className="mt-auto">
        {/* Corrected blogid here */}
        <Link
          href={`/blogs/${blogid}`}
          className="block bg-green-600/100 text-white text-center py-2 px-4 rounded-lg border hover:border-green-600/100 hover:bg-black hover:text-white transition-colors"
        >
          Read Post
        </Link>
      </div>
    </div>
  );
};

export default Card;