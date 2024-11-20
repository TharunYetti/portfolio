import React from "react";
import { Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Instagram, Facebook } from "@mui/icons-material";

const Contact = () => {
  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f7f7f7" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontWeight: "600", color: "#333" }}>Contact</h2>

        {/* Social Media Icons Section */}
        <Box display="flex" justifyContent="center" marginTop="30px">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            style={{
              color: "#0077b5",
              fontSize: "50px",
              margin: "0 20px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#004d80")}
            onMouseLeave={(e) => (e.target.style.color = "#0077b5")}
          >
            <LinkedIn />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/TharunYetti/"
            target="_blank"
            style={{
              color: "#333",
              fontSize: "50px",
              margin: "0 20px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#000")}
            onMouseLeave={(e) => (e.target.style.color = "#333")}
          >
            <GitHub />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            style={{
              color: "#1DA1F2",
              fontSize: "50px",
              margin: "0 20px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#004a73")}
            onMouseLeave={(e) => (e.target.style.color = "#1DA1F2")}
          >
            <Twitter />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your-username"
            target="_blank"
            style={{
              color: "#e1306c",
              fontSize: "50px",
              margin: "0 20px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#9b1b44")}
            onMouseLeave={(e) => (e.target.style.color = "#e1306c")}
          >
            <Instagram />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/your-username"
            target="_blank"
            style={{
              color: "#1877F2",
              fontSize: "50px",
              margin: "0 20px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#004b87")}
            onMouseLeave={(e) => (e.target.style.color = "#1877F2")}
          >
            <Facebook />
          </a>
        </Box>
      </div>
    </section>
  );
};

export default Contact;
