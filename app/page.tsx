"use client";

import { Cpu, Globe, Wifi, CircuitBoard, Layers, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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
      {/* HERO */}
      <section className="hero-bg">
        <div className="container py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
          >
            PVSR Solutions
          </motion.h1>

          <p className="hero-subtitle">
            End-to-End Engineering & Software Project Solutions  
            <br /> From Basic Concepts to Advanced Deployment
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/submit-project">
              <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
                Submit Your Project
              </motion.button>
            </Link>

            <div className="contact-pill">
              <Mail size={18} />
              <span>pvsr.solutions@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
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

      {/* FOOTER */}
      <footer className="footer">
        <p>📧 pvsr.solutions@gmail.com</p>
        <p className="mt-2">
          © PVSR Solutions — Project development & technical guidance only
        </p>
      </footer>
    </main>
  );
}
