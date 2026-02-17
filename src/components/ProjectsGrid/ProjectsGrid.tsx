import type { Project } from '../../types';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectsGrid.module.css';

const ProjectsGrid = () => {
    const projects: Project[] = [
        {
            id: '1',
            title: 'Medium page',
            description: 'Some text Lorem this is some text Lorem ipsum',
            gradient: 'linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)',
        },
        {
            id: '2',
            title: 'Project 1...',
            description: 'Quis aut a Lorem labore id, ut vitae lorem ipsum lorem',
            gradient: 'linear-gradient(135deg, #42A5F5 0%, #1E88E5 100%)',
        },
        {
            id: '3',
            title: 'And another one',
            description: 'Quis aut a labore labore id, ut vitae lorem ipsum',
            gradient: 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)',
        },
    ];

    return (
        <section className={styles.projectsSection}>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;
