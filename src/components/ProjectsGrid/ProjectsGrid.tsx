import { useLanguage } from '../../context/LanguageContext';
import type { Project } from '../../types';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectsGrid.module.css';

const ProjectsGrid = () => {
    const { t } = useLanguage();

    const projects: Project[] = [
        {
            id: '1',
            title: t('project1Title'),
            description: t('project1Description'),
            imageUrl: '/medium-image.png',
            link: 'https://medium.com/@andrefcc',
            meta: t('project1Meta'),
        },
        {
            id: '2',
            title: t('project2Title'),
            description: t('project2Description'),
            imageUrl: '/wasp-article.png',
            link: 'https://ieeexplore.ieee.org/abstract/document/11331470',
            meta: t('project2Meta'),
        },
        {
            id: '3',
            title: t('project3Title'),
            description: t('project3Description'),
            meta: t('project3Meta'),
        },
    ];

    return (
        <section className={styles.projectsSection} id="projects">
            <div className={styles.projectsInner}>
                <div className={styles.projectsPanel}>
                    <h2 className={styles.sectionTitle}>{t('projectsSectionTitle')}</h2>
                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
