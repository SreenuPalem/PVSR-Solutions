"use client";

import { motion } from "framer-motion";
import ProjectForm from "@/components/ProjectForm";

export default function SubmitProject() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl px-6"
      >
        <ProjectForm />
      </motion.div>
    </main>
  );
}
