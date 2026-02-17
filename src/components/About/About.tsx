import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import styles from './About.module.css';

const skillItems = {
    skillBackend: ['Node.js', 'TypeScript', 'Java', 'Python'],
    skillFrontend: ['Angular', 'Flutter'],
    skillCloud: ['Docker', 'Kubernetes', 'Supabase'],
    skillData: ['PostgreSQL'],
} as const;

const focusKeys = ['focus1', 'focus2', 'focus3', 'focus4', 'focus5'] as const;

const contacts = [
    { label: 'GitHub', url: 'https://github.com/androthorn', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/andrefcc/', icon: 'linkedin' },
    { label: 'Medium', url: 'https://andrefcc.medium.com/', icon: 'medium' },
    { label: 'Email', url: 'mailto:andrefigrox@gmail.com', icon: 'email' },
];

const About = () => {
    const { t } = useLanguage();

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
                    {t('aboutTitle')}
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
                        <p>{t('bio1')}</p>
                        <p>{t('bio2')}</p>
                        <p>{t('bio3')}</p>

                        <div className={styles.focusAreas}>
                            <h3 className={styles.subsectionTitle}>{t('focusTitle')}</h3>
                            <ul className={styles.focusList}>
                                {focusKeys.map((key) => (
                                    <li key={key} className={styles.focusItem}>{t(key)}</li>
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
                            <h3 className={styles.subsectionTitle}>{t('techStackTitle')}</h3>
                            {Object.entries(skillItems).map(([categoryKey, items]) => (
                                <div key={categoryKey} className={styles.skillCategory}>
                                    <span className={styles.skillCategoryLabel}>
                                        {t(categoryKey as keyof typeof skillItems)}
                                    </span>
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
                            <h3 className={styles.subsectionTitle}>{t('educationTitle')}</h3>
                            <div className={styles.educationItem}>
                                <span className={styles.degree}>{t('degree')}</span>
                                <span className={styles.school}>{t('school')}</span>
                                <span className={styles.graduation}>{t('graduation')}</span>
                            </div>
                            <p className={styles.educationNote}>{t('educationNote')}</p>
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
