import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Graphic Design Intern"
            company="DataraFlow"
            time="Jun 2026 - Present"
            address="Full Time Remote"
            companyLink="https://www.dataraFlow.org"
            work="At DataraFlow, I worked as a Graphic Design Intern, creating engaging visual content for marketing, social media, workshops, and educational programs. 
            I collaborated with cross-functional teams to transform complex Data Science, Machine Learning, and Generative AI concepts into clear and impactful designs while maintaining brand consistency across digital platforms. 
            This role strengthened my skills in visual communication, branding, and managing multiple design projects in a fast-paced environment."
          />

          <Details
            position="Campus Ambassador"
            company="Cowrywise"
            time="Dec 2025 - Present"
            address="Full Time Remote"
            companyLink="https://cowrywise.com"
            work="As a Cowrywise Student Ambassador, I promote financial literacy and smart money management among students by encouraging saving and investing habits. 
            I create awareness, educate peers on digital investment tools, support user onboarding, and engage student communities to foster 
            a culture of financial responsibility and long-term wealth building."
            />

          <Details
            position="Frontend Developer Intern"
            company="Trueminds Innovations"
            time="Jan 2025 - Mar 2026"
            address="Full Time Remote"
            companyLink="https://truemindsltd.com"
            work="Built and maintained reusable React components, reducing code duplication and improving development speed.
           Collaborated with product and design teams to deliver responsive, accessible, and pixel-perfect user interfaces.
           Optimized application performance and build processes, increasing Lighthouse scores from 74 to 92.
           Integrated REST APIs and implemented real-time data updates with enhanced user experience patterns."
          />

          <Details
            position="Frontend Developer"
            company="PixelSoft Digital"
            time="Aug 2023 - Dec 2023"
            address="Remote Contract"
            companyLink="https://pixelsoft.tech"
            work="Converted complex workflows into fully functional web applications, making independent layout and structural
            decisions to enhance user experience and interface design.
           reviewed ad debugged responsive layouts across mobile, tablet, and desktop breakpoints, ahead of project launch."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-center gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Experience;
