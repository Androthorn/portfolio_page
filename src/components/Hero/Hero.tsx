import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
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
                    Systems-minded engineer building reliable, practical software.
                </motion.h2>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Computer Science undergrad focused on distributed systems, AI-assisted reasoning, and production-grade backend architecture. Currently building and studying how systems fail and how to design them better.
                </motion.p>

                <motion.div
                    className={styles.buttons}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <button className={`${styles.button} ${styles.buttonPrimary}`}>
                        My projects
                    </button>
                    <button className={`${styles.button} ${styles.buttonSecondary}`}>
                        About me
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
