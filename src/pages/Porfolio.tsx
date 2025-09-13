// app/page.jsx (Next.js 13+ với App Router)
"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin, Linkedin, ExternalLink, Calendar } from "lucide-react";

export default function Portfolio() {
    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="p-6 bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Nguyen The Tan Phat</h1>
                    <nav className="space-x-6 font-medium">
                        <a href="#about" className="hover:text-blue-600">About</a>
                        <a href="#skills" className="hover:text-blue-600">Skills</a>
                        <a href="#projects" className="hover:text-blue-600">Projects</a>
                        <a href="#education" className="hover:text-blue-600">Education</a>
                        <a href="#certifications" className="hover:text-blue-600">Certifications</a>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <motion.section
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center justify-center h-[70vh] text-center bg-gradient-to-r from-blue-50 to-blue-100"
            >
                <img
                    src="/me.png" // 👉 bạn để ảnh ở public/me.png
                    alt="Profile"
                    className="w-[140px] h-[140px] rounded-full shadow-md mb-6 object-cover"
                />
                <h2 className="text-4xl font-bold mb-4">Hi, I’m Phat 👋</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Motivated Final-year IT student at HCMUTE. Passionate about full-stack
                    development, OOP, design patterns, and solving real-world problems.
                </p>

                {/* Resume button */}
                <a
                    href="https://drive.google.com/file/d/1cP40VmqbaRzQ8wJuu93qkgeVz5Cw4X9v/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
                >
                    View Resume
                </a>
            </motion.section>

            {/* About */}
            <motion.section
                id="about"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto py-16 px-6"
            >
                <h3 className="text-2xl font-bold mb-4">About Me</h3>
                <p className="text-gray-700 leading-relaxed">
                    I am a final-year student majoring in Information Technology at HCMUTE.
                    I enjoy building web applications using modern frameworks and tools, focusing on clean architecture, scalability, and good UX.
                    Strong understanding of OOP, familiar with design patterns, proficient in Data Structures & Algorithms (DSA),
                    and strongest in <span className="font-semibold text-blue-600">JavaScript</span>.
                </p>
            </motion.section>

            {/* Skills */}
            <motion.section
                id="skills"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white py-16"
            >
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "JavaScript", "Kotlin", "HTML", "CSS", "C#",
                            "Next.js", "Node.js", "ExpressJS", "Bootstrap",
                            "SQL Server", "MongoDB", "MySQL",
                            "Git", "GitHub", "Linux", "Docker", "AWS (Basic)"
                        ].map((skill, idx) => (
                            <motion.span
                                key={idx}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow-sm"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Projects */}
            <motion.section
                id="projects"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl mx-auto py-16 px-6"
            >
                <h3 className="text-2xl font-bold mb-6">Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Real-time Chat",
                            desc: "Discord-inspired app with Next.js, Socket.IO, Prisma, Clerk, Uploadthing, and LiveKit.",
                            code: "https://github.com/PhatDos/discord-clone",
                            live: "https://team-chat-tutorial.netlify.app/"
                        },
                        {
                            title: "News Website",
                            desc: "Dynamic platform with Node.js, Handlebars, MongoDB, session auth, MVC architecture.",
                            code: "https://github.com/PhatDos/News-web-MVC-solo",
                            live: "https://news-i7xe.onrender.com/"
                        },
                        {
                            title: "Blog Application",
                            desc: "React blogging platform with CRUD, React Router, SCSS modules, and search optimization.",
                            code: "https://github.com/PhatDos/Blog",
                            live: "" // chưa có demo
                        }
                    ].map((project, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className="p-6 bg-white rounded-xl shadow-md"
                        >
                            <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                            <p className="text-gray-600 mb-4">{project.desc}</p>
                            <div className="flex space-x-4">
                                <a href={project.code} target="_blank" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                                    Code <Github size={16} />
                                </a>
                                {project.live && (
                                    <a href={project.live} target="_blank" className="text-green-600 font-medium hover:underline flex items-center gap-1">
                                        Live <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Education */}
            <motion.section
                id="education"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white py-16"
            >
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>

                    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-blue-100 rounded-xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">
                                        Bachelor of Engineering, Information Technology
                                    </h4>
                                    <p className="text-gray-600">
                                        University of Education and Technology (HCMUTE)
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-gray-700 text-sm">
                                <Calendar className="w-4 h-4 text-blue-600" />
                                <span>2022 – 2026 (expected)</span>
                            </div>
                        </div>

                        {/* Key Competencies */}
                        <div className="mt-6">
                            <h5 className="font-semibold mb-2">Key Competencies:</h5>
                            <ul className="space-y-1 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 text-lg">•</span>
                                    Strong understanding of Object-Oriented Programming (OOP)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 text-lg">•</span>
                                    Familiar with common design patterns
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 text-lg">•</span>
                                    Proficient in Data Structures and Algorithms (DSA)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 text-lg">•</span>
                                    Full-stack web development with modern technologies
                                </li>
                            </ul>
                        </div>

                        {/* Status */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <p>
                                <span className="font-semibold">Current Status:</span>{" "}
                                Final-year student actively seeking software development internship
                                opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Certifications */}
            <motion.section
                id="certifications"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl mx-auto py-16 px-6"
            >
                <h3 className="text-3xl font-bold mb-8 text-center">Certifications & Achievements</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "AWS Academy Graduate – Cloud Foundations",
                            org: "Amazon Web Services",
                            year: "2024",
                            tag: "Cloud",
                            link: "https://www.credly.com/badges/9f488c66-f408-4b9a-b2ed-bb51d6b1558f"
                        },
                        {
                            title: "AWS Academy Graduate – Cloud Developing",
                            org: "Amazon Web Services",
                            year: "2024",
                            tag: "Cloud",
                            link: "https://www.credly.com/earner/earned/badge/a2c8c8ad-faa9-4933-8808-09c7315ed01f"
                        },
                        {
                            title: "JavaScript Advanced",
                            org: "F8",
                            year: "2025",
                            tag: "Programming",
                            link: "https://drive.google.com/file/d/1Gy6Bq31-TBjYX4vguaZtetkuwS918R22/view?usp=sharing"
                        },
                        {
                            title: "JavaScript Basic",
                            org: "F8",
                            year: "2024",
                            tag: "Programming",
                            link: "https://drive.google.com/file/d/1ulLh5TqPBTe5grj6GnxWdItH-BDgYDA0/view?usp=sharing"
                        },
                        {
                            title: "LeetCode – SQL50, Algorithms, Data Structures",
                            org: "LeetCode",
                            year: "2024",
                            tag: "Algorithms",
                            link: "https://leetcode.com/u/recdum123/"
                        }
                    ].map((cert, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="p-5 bg-white rounded-xl shadow-md border-0.5"
                        >
                            <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                            <p className="text-gray-600 text-sm">
                                {cert.org} • {cert.year}
                            </p>
                            {/* flex container cho badge + link */}
                            <div className="mt-3 flex items-center justify-between">
                                <span
                                    className={`inline-block px-3 py-1 text-sm rounded-full ${cert.tag === "Cloud"
                                        ? "bg-blue-100 text-blue-800"
                                        : cert.tag === "Programming"
                                            ? "bg-green-100 text-green-800 mt-7"
                                            : cert.tag === "Algorithms"
                                                ? "text-purple-700 bg-[#f3e8ff]"
                                                : "bg-gray-100 text-gray-800"
                                        }`}
                                >
                                    {cert.tag}
                                </span>


                                <a
                                    href={cert.link}
                                    target="_blank"
                                    className={`text-blue-600 flex items-center gap-1 hover:underline ${cert.tag === "Programming" ? "mt-7" : ""}`}
                                >
                                    View <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section
                id="contact"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white py-16"
            >
                <div className="max-w-5xl mx-auto px-6">
                    <h3 className="text-2xl font-bold mb-6">Contact</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 rounded-xl shadow-md">
                            <h4 className="font-semibold mb-3">Get in Touch</h4>
                            <p className="flex items-center gap-2"><Phone size={18} /> 0799003451</p>
                            <p className="flex items-center gap-2"><Mail size={18} /> <a href="mailto:tphatdn1@gmail.com" className="hover:underline">tphatdn1@gmail.com</a></p>
                            <p className="flex items-center gap-2"><MapPin size={18} /> Ho Chi Minh City</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl shadow-md">
                            <h4 className="font-semibold mb-3">Online Profiles</h4>
                            <p className="flex items-center gap-2"><Github size={18} /> <a href="https://github.com/PhatDos" target="_blank" className="hover:underline">GitHub</a></p>
                            <p className="flex items-center gap-2"><Linkedin size={18} /> <a href="https://www.linkedin.com/in/t%E1%BA%A5n-ph%C3%A1t-nguy%E1%BB%85n-6a3648361/" target="_blank" className="hover:underline">LinkedIn</a></p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="text-center py-6 bg-gray-100 text-gray-600 text-sm">
                © {new Date().getFullYear()} Nguyen The Tan Phat. All rights reserved.
            </footer>
        </main>
    );
}
