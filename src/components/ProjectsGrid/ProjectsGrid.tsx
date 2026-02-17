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
            title: 'Project 1...',
            description: 'Quis aut a Lorem labore id, ut vitae lorem ipsum lorem',
            meta: 'Coming soon',
        },
        {
            id: '3',
            title: 'And another one',
            description: 'Quis aut a labore labore id, ut vitae lorem ipsum',
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
