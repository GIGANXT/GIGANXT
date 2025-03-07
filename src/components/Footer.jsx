import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-n-8 text-white">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">GIGANXT</h2>
          <p className="text-sm text-gray-400 mt-2">
            Innovating with AI & Technology to Transform Businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {[
              "Services",
              "Case Studies",
              "Careers",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold">Community</h3>
          <ul className="mt-2 space-y-2">
            {[
              "Events",
              "Webinars",
              "AI Research",
              "Startup Accelerator Program",
            ].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Stay Connected</h3>
          <p className="text-sm text-gray-400">support@giganxt.com</p>
          <p className="text-sm text-gray-400">+91 XXXXXXXX</p>
          
          <div className="flex gap-4 mt-4">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        <p className="caption text-sm">
          © {new Date().getFullYear()} GIGANXT. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
