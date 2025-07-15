"use client";
import { GlobeComponent } from "./GlobeComponent";
import { AnimatedTestimonialsDemo } from "./Cards";
import { ContactForm } from "./ContactForm";
import { Tab } from "./tab";
import { TextFlip } from "./Textflip";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import { useState } from "react";

export function Tabs() {
  const [copied, setcopied] = useState(false);

  const handleCopy = () => {
    alert("Function called!"); // Add this line temporarily
    navigator.clipboard.writeText("chamarasudusinghe428@gmail.com");
    setcopied(true);
    console.log("Copied");
  };

  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900/30 to-blue-950/20 backdrop-blur-md border border-blue-400/30 shadow-2xl">
          <TextFlip />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900/30 to-blue-950/20 backdrop-blur-md border border-blue-400/30 shadow-2xl">
        </div>
      ),
    },
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900/30 to-blue-950/20 backdrop-blur-md border border-blue-400/30 shadow-2xl">
          <TextFlip />

          <div className="absolute right-20 top-10 text-white/70">
            I prioritize client collaboration, <br /> fostering open
            communication
          </div>

          <div className="absolute left-20 bottom-20 text-white/70">
            Tech enthusiast with a <br /> passion for development
          </div>

          <div className="absolute flex flex-col items-center justify-center text-center left-40 top-1/2 transform -translate-y-1/2 bg-slate-900 backdrop-blur-lg border border-slate-400/30 rounded-xl px-6 py-4 md:px-10 md:py-8 shadow-2xl shadow-slate-900/40 ring-1 ring-slate-300/20 animate-pulse w-[180px] md:w-[400px]">
            Start a project <br /> together ?

            <div>
              <MagicButton
                title='Copy My Email'
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161A31]"
                handleclick={handleCopy}
              />
            </div>
          </div>

          <div className="absolute -top-25 right-30 w-24 h-24 md:w-200 md:h-200">
            <Image
              src="/code-block.svg"
              alt="Code Block"
              width={128}
              height={128}
              className="w-full h-full object-contain opacity-40"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[12vw] h-[12vh] md:w-120 md:h-120 overflow-hidden">
            <div className="absolute text-white/70 bottom-30 z-5">
              I'm very flexible with time zone communications
            </div>
            <div className="absolute bottom-0 w-120 h-120 transform translate-y-1/2">
              <GlobeComponent />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Contact Me",
      value: "contactme",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900/30 to-blue-950/20 backdrop-blur-md border border-blue-400/30 shadow-2xl">
          <ContactForm />
        </div>
      ),
    },
    /*{
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-white/10 to-white/2 backdrop-blur-md border border-white/20">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },*/
  ];

  return (
    <div className="h-[30rem] md:h-[45rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full items-start justify-start">
      <Tab tabs={tabs} />
    </div>
  );
}
