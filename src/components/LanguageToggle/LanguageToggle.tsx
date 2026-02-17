import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../i18n/translations';
import styles from './LanguageToggle.module.css';

const USFlag = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" className={styles.flag}>
        <rect width="16" height="12" fill="#B22234" />
        <rect y="0.923" width="16" height="0.923" fill="white" />
        <rect y="2.769" width="16" height="0.923" fill="white" />
        <rect y="4.615" width="16" height="0.923" fill="white" />
        <rect y="6.462" width="16" height="0.923" fill="white" />
        <rect y="8.308" width="16" height="0.923" fill="white" />
        <rect y="10.154" width="16" height="0.923" fill="white" />
        <rect width="6.4" height="6.462" fill="#3C3B6E" />
    </svg>
);

const BRFlag = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" className={styles.flag}>
        <rect width="16" height="12" fill="#009739" />
        <polygon points="8,1 15,6 8,11 1,6" fill="#FEDD00" />
        <circle cx="8" cy="6" r="2.5" fill="#012169" />
    </svg>
);

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const handleSet = (lang: Language) => (e: React.MouseEvent) => {
        e.stopPropagation();
        setLanguage(lang);
    };

    return (
        <motion.div
            className={styles.toggle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            aria-label="Language selector"
        >
            <span className={language === 'en' ? styles.active : styles.inactive} onClick={handleSet('en')} role="button">
                <USFlag /> EN
            </span>
            <span className={styles.divider}>/</span>
            <span className={language === 'pt-br' ? styles.active : styles.inactive} onClick={handleSet('pt-br')} role="button">
                <BRFlag /> BR
            </span>
        </motion.div>
    );
};

export default LanguageToggle;
