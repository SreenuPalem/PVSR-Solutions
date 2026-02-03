"use client";

import Image from "next/image";
import Link from "next/link";
import { Cpu, Globe, Wifi, CircuitBoard, Layers, Mail } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Cpu,
    title: "Machine Learning & AI",
    levels: [
      "Basic: CSV / Excel based ML",
      "Intermediate: Data Analysis & ML Models",
      "Advanced: Deep Learning, CV & NLP",
      "Production: Deployment & APIs",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    levels: [
      "Basic: HTML, CSS, JavaScript",
      "Intermediate: React / Next.js",
      "Advanced: Node.js, APIs, Dashboards",
      "Production: Full Stack Applications",
    ],
  },
  {
    icon: Wifi,
    title: "IoT & Embedded Systems",
    levels: [
      "Basic: Arduino & Sensors",
      "Intermediate: ESP32 / NodeMCU",
      "Advanced: Raspberry Pi & Automation",
      "Production: Cloud & Mobile Integration",
    ],
  },
  {
    icon: CircuitBoard,
    title: "PCB & Hardware Design",
    levels: [
      "Basic: Schematic Design",
      "Intermediate: 2-Layer PCB Layout",
      "Advanced: Multi-Layer Boards",
      "Production: BOM, Gerber & Testing",
    ],
  },
  {
    icon: Layers,
    title: "IT & Engineering Projects",
    levels: [
      "Basic: Academic Projects",
      "Intermediate: Applied Engineering Use-Cases",
      "Advanced: Industrial-grade Solutions",
      "Custom: End-to-End Engineering",
    ],
  },
];

export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="hero-bg">
        <div className="container py-28 text-center">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/logo.png"
              alt="PVSR Solutions Logo"
              width={120}
              height={120}
              priority
            />
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
          >
            PVSR Solutions
          </motion.h1>

          {/* SUBTITLE */}
          <p className="hero-subtitle">
            End-to-End Engineering & Software Project Solutions
            <br />
            From Basic Concepts to Advanced Deployment
          </p>

          {/* CTA + CONTACT */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/submit-project">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn-primary"
              >
                Submit Project Requirements
              </motion.button>
            </Link>

            <div className="contact-pill">
              <Mail size={18} />
              <span>pvsr.solutions@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="container py-20">
        <h2 className="section-title">About PVSR Solutions</h2>

        <p className="max-w-4xl mx-auto text-center text-slate-600 text-lg leading-relaxed">
          <strong>PVSR Solutions</strong> provides end-to-end project development services across
          <strong> Machine Learning, Web Development, IoT, PCB Design, and Engineering domains</strong>.
          <br /><br />
          We undertake <strong>projects of any type and complexity</strong>—from basic concepts and
          prototypes to advanced, industry-level, production-ready systems.
          <br /><br />
          Every project is developed <strong>strictly based on client requirements</strong>, ensuring
          clear understanding, structured execution, high technical quality, and on-time delivery.
        </p>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="container py-24">
        <h2 className="section-title">Our Capabilities</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cap-card-advanced"
            >
              <div className="cap-header">
                <s.icon className="cap-icon" />
                <h3 className="cap-title">{s.title}</h3>
              </div>

              <div className="cap-timeline">
                {s.levels.map((l, idx) => (
                  <div key={idx} className="cap-step">
                    <span className="cap-dot" />
                    <span className="cap-text">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>📧 pvsr.solutions@gmail.com</p>
        <p className="mt-2">
          © PVSR Solutions — Project development & technical guidance only
        </p>
      </footer>
    </main>
  );
}
