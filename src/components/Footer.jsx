import React from "react";
import Section from "./Section";
import { footerLinks, socialMedia } from "../constants";
import styles from "../constants/style";
import { logo } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!py-10 w-full px-6 md:px-16" id="footer">
      <div className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1 flex flex-col justify-start mr-10">
            <img
              src={logo}
              alt="hoobank"
              className="w-[250px] h-[100px] object-contain"
            />
            <p className={`${styles.paragraph} ml-4 mt-4 max-w-[312px]`}>
              Empower Your  Business  With GIGANXT Solution .
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-wrap justify-between md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className="flex flex-col  ss:my-0 my-4 min-w-[150px] underli">
                <h4 className=" font-bold  text-[20px] leading-[27px] text-white">
                  {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={` font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                        }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3F3E45]">
          <p className=" text-center text-[15px] leading-[27px] text-white">
            Copyright Ⓒ 2025 GIGANXT. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[25px] h-[25px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
