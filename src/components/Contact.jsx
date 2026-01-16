import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleAction: "play none none none",
        },
      });
      gsap.from(".contact-icon", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleAction: "play none none none",
        },
      });
    }, contactRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">
          Contact{" "}
        </h2>
        <p className="contact-text mb-4 text-lg lg:text-xl">
          Feel free to email:{""}
          <a href="mailto:786khanprince@gmail.com" className="border-b">
            786khanprince@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/khan-prince-87562a190"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit My LinkedIn Profile"
          >
            {" "}
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/KhanPrince"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit My GitHub Profile"
          >
            {" "}
            <RiGithubFill className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/khan_prince420?utm_source=qr&igsh=dXhhaW5xZnBrZXI1"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit My instagram Profile"
          >
            {" "}
            <RiInstagramFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
