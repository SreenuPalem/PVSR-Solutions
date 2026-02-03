"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Pizza Time – E-commerce Application",
    stack: "React, Node.js, Express, MySQL",
    description:
      "Production-ready e-commerce platform with user authentication, order management, and REST APIs for cart, checkout, and order history.",
  },
  {
    title: "Precision Agriculture Platform",
    stack: "Python, Flask, ML, SQL, HTML, CSS, JavaScript",
    description:
      "Full-stack web platform providing crop and fertilizer recommendations using ML models with real-time IoT data ingestion and dashboards.",
  },
  {
    title: "Sales Analytics Dashboard",
    stack: "SQL, Power BI",
    description:
      "Interactive analytics dashboards to track sales trends and business KPIs using optimized SQL queries and data models.",
  },
  {
    title: "TinyML-Based On-Device Medical Diagnostics",
    stack: "Infineon XMC7200, Embedded C, TinyML, TensorFlow Lite Micro",
    description:
      "End-to-end TinyML firmware enabling real-time, offline medical diagnostics with optimized RAM/Flash usage and low-latency inference.",
  },
  {
    title: "Embedded Learning Kit Firmware Platform",
    stack: "STM32, Arduino Uno, ESP32, Embedded C, Sensors",
    description:
      "Modular firmware platform supporting multiple sensors and peripherals with reusable drivers, fault handling, and stable long-duration operation.",
  },
  {
    title: "Smart Home Energy Monitoring System",
    stack: "STM32, Embedded C, STM32CubeIDE, HAL Drivers",
    description:
      "Real-time energy monitoring system using current and voltage sensors with cloud-based IoT dashboard and low-power operation.",
  },
  {
    title: "Skin Disease Classification System",
    stack: "Python, TensorFlow, Keras, OpenCV, CNNs",
    description:
      "CNN-based machine learning model for skin disease classification achieving 92% accuracy with enhanced reliability using data augmentation.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        Our Recent Projects
      </motion.h1>

      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
        A selection of projects showcasing our ability to deliver end-to-end
        solutions across software, machine learning, embedded systems, and
        engineering domains.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cap-card-advanced"
          >
            <h3 className="cap-title mb-2">{project.title}</h3>

            <p className="text-sm text-blue-600 font-medium mb-3">
              {project.stack}
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
