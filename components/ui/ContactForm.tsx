"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import MagicButton from "./MagicButton";
import emailjs from "@emailjs/browser";

export function ContactForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS configuration");
      alert("Email service is not configured properly.");
      return;
    }

    emailjs.sendForm(
      serviceId,    // e.g. service_xxx
      templateId,   // e.g. template_yyy
      e.currentTarget,      // HTML form element
      publicKey     // e.g. nNQpXlIh_abc123
    )
    .then((result) => {
      console.log("Email sent!", result.text);
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error:", error.text);
      alert("Something went wrong.");
    });

    // Optional: reset form
    e.currentTarget.reset();
  };


  return (
    <>
      
      <p className="w-full flex justify-center p-2 text-center text-lg text-white">
          Fill out the form below and we&apos;ll get back to you as soon as possible
      </p>

      <div className="shadow-input mx-auto w-[95vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] border border-white/10 md:rounded-2xl p-2 sm:p-6 md:p-8 rounded-3xl mb-15 shadow-2xl max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">

        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-white">First name</Label>
              <Input id="firstname" placeholder="First Name" type="text" name="firstname" required className="bg-white/10 border-white/30 text-white placeholder:text-gray-400" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-white">Last name</Label>
              <Input id="lastname" placeholder="Last Name" type="text" name="lastname" className="bg-white/10 border-white/30 text-white placeholder:text-gray-400" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input id="email" placeholder="you@gmail.com" type="email" name="email" required className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"  />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message" className="text-white">Message</Label>
            <Textarea id="message" placeholder="Type your message here" name="message" required className="bg-white/10 border-white/30 text-white placeholder:text-gray-400" />
          </LabelInputContainer>

          <div className="flex justify-center mb-10">
            <MagicButton
              title={'Send Message'}
              type='submit'
          />
          </div>

          <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="flex flex-row justify-center items-center space-x-10 mb-4">
            <button onClick={() => window.open("https://wa.me/+94703185152", "_blank")}>
              <IconBrandWhatsapp className="h-8 w-10 text-white cursor-pointer hover:scale-150 hover:animate-bounce transition-transform duration-200" />
            </button>
            <button onClick={() => window.open("https://www.linkedin.com/in/sandaruwan-s-w-c-b7141a24b/", "_blank")}>
              <IconBrandLinkedin className="h-8 w-10 text-white cursor-pointer hover:scale-150 hover:animate-bounce transition-transform duration-200" />
            </button>
            <button onClick={() => window.open("https://t.me/Sandaruwan_SWC", "_blank")}>
              <IconBrandTelegram className="h-8 w-10 text-white cursor-pointer hover:scale-150 hover:animate-bounce transition-transform duration-200" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
