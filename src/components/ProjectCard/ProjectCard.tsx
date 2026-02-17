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
        >
            {/* Zone 1: Visual header */}
            <div className={styles.visual}>
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        className={styles.preview}
                    />
                ) : project.iconUrl ? (
                    <img
                        src={project.iconUrl}
                        alt={`${project.title} icon`}
                        className={styles.icon}
                    />
                ) : null}
            </div>

            {/* Zone 2: Content body */}
            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
            </div>

            {/* Zone 3: Meta footer */}
            {project.meta && (
                <div className={styles.meta}>{project.meta}</div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
