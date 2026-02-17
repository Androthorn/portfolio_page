import type { Project } from '../../types';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectsGrid.module.css';

const ProjectsGrid = () => {
    const projects: Project[] = [
        {
            id: '1',
            title: 'Medium',
            description: 'Writing about life, computer science and everything in between.',
            imageUrl: '/medium-image.png',
            link: 'https://medium.com/@andrefcc',
            meta: 'Medium · 2025',
        },
        {
            id: '2',
            title: 'Most recent published paper',
            description: 'AI-Driven Workload Migration Framework for Multi-Cluster Environments',
            imageUrl: '/wasp-article.png',
            link: 'https://ieeexplore.ieee.org/abstract/document/11331470',
            meta: 'IEEE Xplore · 2025',
        },
        {
            id: '3',
            title: 'In construction',
            description: 'Prosopis juliflora, love and hate',
            meta: 'Coming soon',
        },
    ];

    return (
        <section className={styles.projectsSection}>
            <div className={styles.projectsInner}>
                <div className={styles.projectsPanel}>
                    <h2 className={styles.sectionTitle}>Selected Work</h2>
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
