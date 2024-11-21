import React from "react";
import { GitHub, LinkedIn, Twitter, Instagram, Facebook } from "@mui/icons-material";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-semibold">Contact</h2>
        <p className="mt-4 text-lg text-gray-300">
          Feel free to connect with me on any of the platforms below!
        </p>

        {/* Social Media Icons Section */}
        <div className="flex justify-center mt-8 space-x-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tharun-yetti-9775a0280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125"
          >
            <LinkedIn style={{ fontSize: "50px" }} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/TharunYetti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-transform transform hover:scale-125"
          >
            <GitHub style={{ fontSize: "50px" }} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125"
          >
            <Twitter style={{ fontSize: "50px" }} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tharunyetti24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-125"
          >
            <Instagram style={{ fontSize: "50px" }} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125"
          >
            <Facebook style={{ fontSize: "50px" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;