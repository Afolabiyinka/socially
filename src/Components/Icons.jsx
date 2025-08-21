import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <FaFacebookF size={20} />
        </li>
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <FaTwitter size={20} />
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <FaInstagram size={20} />
        </li>
        <li className="icon tiktok">
          <span className="tooltip">TikTok</span>
          <FaTiktok size={24} />
        </li>
        <li className="icon youtube">
          <span className="tooltip">YouTube</span>
          <FaYoutube size={24} />
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    // color: white;
    font-family: "Poppins", sans-serif;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  .icon {
    position: relative;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: inherit;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #333;
    color: white;
    padding: 5px 8px;
    border-radius: 5px;
    opacity: 0;
    transform: translateY(-15px);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    height: 8px;
    width: 8px;
    background: #333;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  .icon:hover .tooltip {
    opacity: 1;
    transform: translateY(-40px);
  }

  .facebook:hover,
  .facebook:hover .tooltip,
  .facebook:hover .tooltip::before {
    background: #1877f2;
    color: white;
  }

  .twitter:hover,
  .twitter:hover .tooltip,
  .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: white;
  }

  .instagram:hover,
  .instagram:hover .tooltip,
  .instagram:hover .tooltip::before {
    background: #e1306c;
    color: white;
  }

  .youtube:hover,
  .youtube:hover .tooltip,
  .youtube:hover .tooltip::before {
    background: #ff0000;
    color: white;
  }

  .tiktok:hover,
  .tiktok:hover .tooltip,
  .tiktok:hover .tooltip::before {
    background: #000;
    color: white;
  }
`;

export default SocialIcons;
