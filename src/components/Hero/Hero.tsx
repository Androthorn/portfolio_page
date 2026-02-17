import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

const Hero = () => {
    const { t } = useLanguage();

    const smoothScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const target = el.getBoundingClientRect().top + window.scrollY;
        const start = window.scrollY;
        const distance = target - start;
        const duration = 900;
        let startTime: number | null = null;

        const ease = (t: number) => 1 - Math.pow(1 - t, 3);

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, start + distance * ease(progress));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    return (
        <motion.section
            className={styles.hero}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.content}>
                <motion.h1
                    className={styles.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    André de Figueirêdo Castro Cunha
                </motion.h1>

                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {t('heroTitle')}
                </motion.h2>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {t('heroDescription')}
                </motion.p>

                <motion.div
                    className={styles.buttons}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <button className={styles.buttonPrimary} onClick={() => smoothScrollTo('projects')}>
                        {t('heroButtonProjects')}
                    </button>
                    <button className={styles.buttonSecondary} onClick={() => smoothScrollTo('about')}>
                        {t('heroButtonAbout')}
                    </button>
                </motion.div>
            </div>

            <motion.div
                className={styles.imageContainer}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <img
                    src="/profile-photo.jpg"
                    alt="André Cunha"
                    className={styles.profileImage}
                />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
