export type Language = 'en' | 'pt-br';

export const translations = {
    en: {
        // Hero
        heroTitle: 'Systems-minded engineer building reliable, practical software.',
        heroDescription:
            'Computer Science undergrad focused on distributed systems, AI-assisted reasoning, and production-grade backend architecture. Currently building and studying how systems fail and how to design them better.',
        heroButtonProjects: 'My projects',
        heroButtonAbout: 'About me',

        // Projects
        projectsSectionTitle: 'Selected Work',
        project1Title: 'Medium',
        project1Description: 'Writing about life, computer science and everything in between.',
        project1Meta: 'Medium · 2025',
        project2Title: 'Most recent published paper',
        project2Description: 'AI-Driven Workload Migration Framework for Multi-Cluster Environments',
        project2Meta: 'IEEE Xplore · 2025',
        project3Title: 'In construction',
        project3Description: 'Prosopis juliflora, love and hate',
        project3Meta: 'Coming soon',

        // About
        aboutTitle: 'About',
        bio1: "I'm a Computer Science undergraduate interested in building reliable backend systems and exploring how software behaves under real-world constraints. My work is driven  by understanding trade-offs: performance vs. simplicity, automation vs. safety, and scalability vs. clarity.",
        bio2: "Recently, I've been involved in research-oriented projects around hybrid Kubernetes environments and agent-based reasoning for workload migration. These experiences pushed me to think beyond implementation details and focus on system design, experimentation, and building tools that people can trust and reason about.",
        bio3: "I'm still growing as an engineer, especially in areas like algorithms and live problem solving, but I value curiosity, consistency, and clear communication. My goal is to keep building practical systems while developing a deeper understanding of distributed and cloud-native architectures.",
        focusTitle: 'Professional Focus',
        focus1: 'Backend Architecture & API Design',
        focus2: 'Distributed Systems Thinking',
        focus3: 'Cloud-Native & Kubernetes Environments',
        focus4: 'Decision-Support and Observability Tools',
        focus5: 'Systems Design Trade-offs',
        techStackTitle: 'Tech Stack',
        educationTitle: 'Education',
        degree: 'B.Sc. in Computer Science',
        school: 'Federal University of Campina Grande (UFCG)',
        graduation: 'Expected Graduation: 2027',
        educationNote:
            'Academic focus includes distributed systems, software architecture, and backend engineering. Participation in research and technical writing involving hybrid cloud environments and workload migration strategies.',

        // Skill categories
        skillBackend: 'Backend',
        skillFrontend: 'Frontend',
        skillCloud: 'Cloud & Infrastructure',
        skillData: 'Data',
    },

    'pt-br': {
        // Hero
        heroTitle: 'Engenheiro com mentalidade de sistemas, construindo software confiável e prático.',
        heroDescription:
            'Graduando em Ciência da Computação com foco em sistemas distribuídos, raciocínio assistido por IA e arquitetura backend em nível de produção. Atualmente construindo e estudando como os sistemas falham e como projetá-los melhor.',
        heroButtonProjects: 'Meus projetos',
        heroButtonAbout: 'Sobre mim',

        // Projects
        projectsSectionTitle: 'Trabalhos Selecionados',
        project1Title: 'Medium',
        project1Description: 'Escrevendo sobre vida, ciência da computação e tudo o que está entre esses dois mundos.',
        project1Meta: 'Medium · 2025',
        project2Title: 'Artigo publicado mais recente',
        project2Description: 'Framework de Migração de Cargas de Trabalho Orientado por IA para Ambientes Multi-Cluster',
        project2Meta: 'IEEE Xplore · 2025',
        project3Title: 'Em construção',
        project3Description: 'Prosopis juliflora, amor e ódio',
        project3Meta: 'Em breve',

        // About
        aboutTitle: 'Sobre',
        bio1: 'Sou graduando em Ciência da Computação interessado em construir sistemas backend confiáveis e explorar como o software se comporta sob restrições do mundo real. Meu trabalho é motivado por entender trade-offs: desempenho vs. simplicidade, automação vs. segurança e escalabilidade vs. clareza.',
        bio2: 'Recentemente, estive envolvido em projetos de pesquisa sobre ambientes híbridos Kubernetes e raciocínio baseado em agentes para migração de cargas de trabalho. Essas experiências me levaram a pensar além dos detalhes de implementação e focar em design de sistemas, experimentação e construção de ferramentas nas quais as pessoas possam confiar e raciocinar.',
        bio3: 'Ainda estou crescendo como engenheiro, especialmente em áreas como algoritmos e resolução de problemas ao vivo, mas valorizo curiosidade, consistência e comunicação clara. Meu objetivo é continuar construindo sistemas práticos enquanto desenvolvo uma compreensão mais profunda de arquiteturas distribuídas e cloud-native.',
        focusTitle: 'Foco Profissional',
        focus1: 'Arquitetura Backend & Design de APIs',
        focus2: 'Pensamento em Sistemas Distribuídos',
        focus3: 'Ambientes Cloud-Native & Kubernetes',
        focus4: 'Ferramentas de Suporte à Decisão e Observabilidade',
        focus5: 'Trade-offs de Design de Sistemas',
        techStackTitle: 'Stack Tecnológica',
        educationTitle: 'Formação',
        degree: 'Bacharelado em Ciência da Computação',
        school: 'Universidade Federal de Campina Grande (UFCG)',
        graduation: 'Previsão de conclusão: 2027',
        educationNote:
            'Foco acadêmico em sistemas distribuídos, arquitetura de software e engenharia backend. Participação em pesquisa e escrita técnica envolvendo ambientes de nuvem híbrida e estratégias de migração de cargas de trabalho.',

        // Skill categories
        skillBackend: 'Backend',
        skillFrontend: 'Frontend',
        skillCloud: 'Nuvem & Infraestrutura',
        skillData: 'Dados',
    },

} as const;

export type TranslationKey = keyof typeof translations.en;
