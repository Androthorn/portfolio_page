import { motion } from 'framer-motion';
import type { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const handleClick = () => {
        if (project.link) {
            window.open(project.link, '_blank');
        }
    };

    return (
        <motion.div
            className={styles.card}
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
        >
            <div className={styles.imageContainer}>
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={styles.image}
                    />
                ) : (
                    <div
                        className={styles.gradientPlaceholder}
                        style={{ background: project.gradient }}
                    />
                )}
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
