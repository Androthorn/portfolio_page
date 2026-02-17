import { motion } from 'framer-motion';
import styles from './About.module.css';

const skills = {
    Backend: ['Node.js', 'TypeScript', 'Java', 'Python'],
    Frontend: ['Angular', 'Flutter'],
    'Cloud & Infrastructure': ['Docker', 'Kubernetes', 'Supabase'],
    Data: ['PostgreSQL'],
};

const focusAreas = [
    'Backend Architecture & API Design',
    'Distributed Systems Thinking',
    'Cloud-Native & Kubernetes Environments',
    'Decision-Support and Observability Tools',
    'Systems Design Trade-offs',
];

const contacts = [
    { label: 'GitHub', url: 'https://github.com/androthorn', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/andrefcc/', icon: 'linkedin' },
    { label: 'Medium', url: 'https://andrefcc.medium.com/', icon: 'medium' },
    { label: 'Email', url: 'mailto:andrefigrox@gmail.com', icon: 'email' },
];

const About = () => {
    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.aboutInner}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About
                </motion.h2>

                <div className={styles.grid}>
                    {/* Left column: Bio + Focus Areas */}
                    <motion.div
                        className={styles.bio}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <p>
                            I'm a Computer Science undergraduate interested in building reliable
                            backend systems and exploring how software behaves under real-world
                            constraints. My work is driven less by chasing trends and more by
                            understanding trade-offs — performance vs. simplicity, automation vs.
                            safety, and scalability vs. clarity.
                        </p>
                        <p>
                            Recently, I've been involved in research-oriented projects around
                            hybrid Kubernetes environments and agent-based reasoning for workload
                            migration. These experiences pushed me to think beyond implementation
                            details and focus on system design, experimentation, and building
                            tools that people can trust and reason about.
                        </p>
                        <p>
                            I'm still growing as an engineer, especially in areas like algorithms
                            and live problem solving, but I value curiosity, consistency, and
                            clear communication. My goal is to keep building practical systems
                            while developing a deeper understanding of distributed and
                            cloud-native architectures.
                        </p>

                        <div className={styles.focusAreas}>
                            <h3 className={styles.subsectionTitle}>Professional Focus</h3>
                            <ul className={styles.focusList}>
                                {focusAreas.map((area) => (
                                    <li key={area} className={styles.focusItem}>{area}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right column: Skills + Education */}
                    <motion.div
                        className={styles.sidebar}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {/* Skills */}
                        <div className={styles.skillsBlock}>
                            <h3 className={styles.subsectionTitle}>Tech Stack</h3>
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className={styles.skillCategory}>
                                    <span className={styles.skillCategoryLabel}>{category}</span>
                                    <div className={styles.skillTags}>
                                        {items.map((skill) => (
                                            <span key={skill} className={styles.skillTag}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className={styles.educationBlock}>
                            <h3 className={styles.subsectionTitle}>Education</h3>
                            <div className={styles.educationItem}>
                                <span className={styles.degree}>B.Sc. in Computer Science</span>
                                <span className={styles.school}>Federal University of Campina Grande (UFCG)</span>
                                <span className={styles.graduation}>Expected Graduation: 2027</span>
                            </div>
                            <p className={styles.educationNote}>
                                Academic focus includes distributed systems, software architecture,
                                and backend engineering. Participation in research and technical
                                writing involving hybrid cloud environments and workload migration
                                strategies.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Contact links */}
                <motion.div
                    className={styles.contacts}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {contacts.map(({ label, url, icon }) => (
                        <a
                            key={label}
                            href={url}
                            target={icon === 'email' ? undefined : '_blank'}
                            rel={icon === 'email' ? undefined : 'noopener noreferrer'}
                            className={styles.contactLink}
                        >
                            <ContactIcon type={icon} />
                            <span>{label}</span>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

/* Minimal inline SVG icons */
const ContactIcon = ({ type }: { type: string }) => {
    const size = 18;
    const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

    switch (type) {
        case 'github':
            return (
                <svg {...props}>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            );
        case 'linkedin':
            return (
                <svg {...props}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            );
        case 'medium':
            return (
                <svg {...props}>
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 8h2v8H8zM12 8h1l3 8h-1zM17 8h1v8h-1z" />
                </svg>
            );
        case 'email':
            return (
                <svg {...props}>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 6L2 7" />
                </svg>
            );
        default:
            return null;
    }
};

export default About;
