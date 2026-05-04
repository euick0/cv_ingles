"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const scrollReveal = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const scrollContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto">
          <div className="text-lg font-black tracking-tighter text-white">CURRICULUM VITAE</div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
            <a className="text-white border-b border-white pb-1" href="#about">About</a>
            <a className="text-gray-500 hover:text-white transition-colors duration-300" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-8 pb-24 pt-[100px] flex flex-col gap-6">

        {/* Row 1 — staggered on load */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="md:col-span-8 flex flex-col gap-6" variants={heroItem}>
            {/* Name Card */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[1rem] p-8 overflow-hidden flex flex-col justify-center items-center py-20">
              <h1 className="text-[80px] leading-[1.1] tracking-[-0.02em] font-extrabold text-center uppercase">
                Eric Simões
              </h1>
            </div>

            {/* Bio + Expertise Row */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow"
              variants={heroContainer}
            >
              <motion.div
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[1rem] p-8 overflow-hidden flex flex-col"
                variants={heroItem}
              >
                <p className="text-lg leading-[1.6] text-[#A0A0A0] mb-6">
                  Hey, I&apos;m Eric Simões. Since I was 13 years old I've had a passion for programming. I'm a full-stack developer with experience in web and app development.
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="w-2 h-2 rounded-full bg-[#00FF94] shrink-0" />
                  <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A0A0A0]">
                    Available for hire
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[1rem] p-8 overflow-hidden flex flex-col"
                variants={heroItem}
              >
                <h2 className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A0A0A0] mb-8">Expertise</h2>
                <ul className="flex flex-col gap-4">
                  <li className="text-2xl leading-[1.2] tracking-[0.05em] font-bold">Web Development</li>
                  <li className="text-2xl leading-[1.2] tracking-[0.05em] font-bold text-[#A0A0A0]">Desktop App Development</li>
                  <li className="text-2xl leading-[1.2] tracking-[0.05em] font-bold text-[#A0A0A0]">Backend Development</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="md:col-span-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-[1rem] overflow-hidden flex flex-col !p-0 relative h-[600px] md:h-auto"
            variants={heroItem}
          >
            <Image
              src="/portrait.jpeg"
              alt="Eric Simões"
              fill
              className="object-cover object-top opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Row 2 — scroll reveal with stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={scrollContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Experience */}
          <motion.div
            className="md:col-span-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-[1rem] p-8 overflow-hidden flex flex-col"
            variants={scrollReveal}
          >
            <h2 className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A0A0A0] mb-8">Experience</h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl leading-[1.2] tracking-[0.05em] font-bold mb-1">Founder &amp; CEO</h3>
                <p className="text-base leading-[1.6] text-[#A0A0A0]">ReQal.app • 2026 - Present</p>
              </div>
              <div>
                <h3 className="text-2xl leading-[1.2] tracking-[0.05em] font-bold mb-1">Vocacional IT course - Systems</h3>
                <p className="text-base leading-[1.6] text-[#A0A0A0]"> School António Carvalho Figueiredo • 2023 - 2026</p>
              </div>
              <div>
                <h3 className="text-2xl leading-[1.2] tracking-[0.05em] font-bold mb-1">Basic Schooling</h3>
                <p className="text-base leading-[1.6] text-[#A0A0A0]">College Monte Maior • 2014 - 2022</p>
              </div>
            </div>
          </motion.div>

          {/* Kitsilano Featured Work */}
          <motion.div
            className="md:col-span-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-[1rem] overflow-hidden flex flex-col relative min-h-[400px] group cursor-pointer"
            variants={scrollReveal}
          >
            <Image
              src="/image.png"
              alt="ReQal.app"
              fill
              loading="eager"
              className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white mb-2">Language Learning Webiste</p>
                <h3 className="text-[48px] leading-none font-extrabold">ReQal</h3>
              </div>
              <span className="material-symbols-outlined text-white text-4xl group-hover:translate-x-2 transition-transform duration-300">
                arrow_forward
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact — scroll reveal with stagger */}
        <motion.div
          id="contact"
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={scrollContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            className="md:col-span-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-[1rem] p-8 overflow-hidden flex flex-col"
            variants={scrollReveal}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={scrollReveal}>
                <h2 className="text-[64px] leading-tight font-extrabold mb-6">
                  Let&apos;s work<br />together.
                </h2>
                <p className="text-lg leading-[1.6] text-[#A0A0A0] max-w-md">
                  Currently available for hire. Let&apos;s discuss your next project.
                </p>
              </motion.div>

              <motion.form
                className="flex flex-col gap-6"
                variants={scrollReveal}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A0A0A0]">Name</label>
                    <Input
                      className="bg-[#0a0a0a] border-[#2A2A2A] text-white placeholder:text-[#555] focus-visible:border-white focus-visible:ring-0 rounded-lg p-4 h-auto"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A0A0A0]">Email</label>
                    <Input
                      className="bg-[#0a0a0a] border-[#2A2A2A] text-white placeholder:text-[#555] focus-visible:border-white focus-visible:ring-0 rounded-lg p-4 h-auto"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#A0A0A0]">Message</label>
                  <Textarea
                    className="bg-[#0a0a0a] border-[#2A2A2A] text-white placeholder:text-[#555] focus-visible:border-white focus-visible:ring-0 rounded-lg p-4 resize-none"
                    placeholder="Tell me about your project..."
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-white text-black text-2xl font-bold tracking-[0.05em] py-6 rounded-lg hover:bg-gray-200 h-auto mt-2"
                >
                  Submit Inquiry
                </Button>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>

      </main>
    </div>
  );
}
