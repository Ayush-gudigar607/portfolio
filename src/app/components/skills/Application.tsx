"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ActivityIcon,
  CodepenIcon,
  WebhookIcon,
  MobileIcon,
} from "../Icons";

const skillCategories = {
  web: {
    title: "Web Development",
    icon: CodepenIcon,
    description: "Building modern, responsive web applications",
    languages: [
      "HTML","CSS","JavaScript","TypeScript","React","NextJS","TailwindCSS",
      "NodeJS","ExpressJS","Python","Firebase"
    ],
    tools: ["VS Code","Git","Github","Figma","Docker","Postman","AWS"],
  },
  api: {
    title: "REST API",
    icon: WebhookIcon,
    description: "Creating robust and scalable backend services",
    languages: [
      "NodeJS","ExpressJS","Python","FastAPI","MySQL","PostgreSQL","MongoDB"
    ],
    tools: ["Postman","Docker","Swagger","Git","Github","AWS"],
  },
  devops: {
    title: "DevOps",
    icon: ActivityIcon,
    description: "CI/CD and cloud infrastructure management",
    languages: ["Bash","Python","YAML"],
    tools: ["Docker","Kubernetes","Jenkins","GitHub Actions","AWS","Azure","Terraform"],
  },

  mobile: {
    title: "Mobile Development",
    icon: MobileIcon,
    description: "Cross-platform mobile app development",
    languages: ["React Native","TypeScript"],
    tools: ["Expo","React Native CLI"],
  },
};

export default function Application() {
  const [selected, setSelected] = useState("web");

  return (
    <section className="mt-40 px-6">

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
        {Object.entries(skillCategories).map(([key, skill]) => {
          const Icon = skill.icon;
          const isActive = selected === key;

          return (
            <motion.div
              key={key}
              onClick={() => setSelected(key)}
              whileHover={!isActive ? { scale: 1.06 } : {}}
              className={`skill-card flex flex-col items-center text-center ${
                isActive
                  ? "border-black shadow-2xl scale-[1.05]"
                  : "hover:shadow-xl"
              }`}
            >
              <Icon className="skill-icon mb-6" />

              <h3 className="text-[30px] font-semibold mb-2">
                {skill.title}
              </h3>

              <p className="text-gray-600 text-[20px]">
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 space-y-12"
        >
          {/* Languages */}
          <div className="bg-[#f4f4f4] rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-center mb-8">
              Languages & Frameworks
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {skillCategories[selected].languages.map((lang) => (
                <span
                  key={lang}
                  className="px-5 py-5 text-sm bg-white border border-gray-300 rounded-full text-gray-800 gap-8"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-[#f4f4f4] rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-center mb-8">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {skillCategories[selected].tools.map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-5 text-sm bg-white border border-gray-300 rounded-full text-gray-800 gap-8"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
