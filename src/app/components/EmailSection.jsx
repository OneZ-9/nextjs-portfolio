"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail-icon.svg";
import Link from "next/link";
import Image from "next/image";
import EmailForm from "./EmailForm";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: "POST",
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-5">
          <Link href="https://github.com/OneZ-9" target="_blank">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="hover:scale-110"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chamod-tharuka-aa48a0188"
            target="_blank"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="hover:scale-110"
            />
          </Link>
        </div>
        <div>
          <p className="text-[#ADB7BE] mt-4 max-w-md ">
            Tel:{" "}
            <Link
              href="tel:+94705868354"
              className="hover:underline text-emerald-600"
            >
              +94 (70) 586 8354
            </Link>
          </p>
          <p className="text-[#ADB7BE] mt-2 max-w-md ">
            Email:{" "}
            <Link
              href="mailto:rmpgctharuka@gmail.com"
              target="_blank"
              className="hover:underline text-emerald-600"
            >
              rmpgctharuka@gmail.com
            </Link>
          </p>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <EmailForm />
        )}
      </div>
    </section>
  );
};

export default EmailSection;
