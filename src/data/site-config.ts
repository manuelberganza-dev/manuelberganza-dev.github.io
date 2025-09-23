export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://manuelberganza-dev.github.io',
    title: 'Manuel Berganza',
    subtitle: 'Portafolio y Blog de un Desarrollador Backend',
    description: 'Manuel Berganza programador backend Java, Spring y Node.js. Trabajo con microservicios, APIs REST y bases de datos MySQL. También tengo experiencia en TypeScript, JavaScript, Docker, Linux y Git. Bienvenido a mi espacio donde comparto proyectos, aprendizajes y recursos de programación.',
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/manuel-berganza/'
        },
    ],
    hero: {
        title: 'Bienvenidos a mi Blog!',
        text: "**Manuel Berganza**, programador Java, Spring y Node.js, especializado en microservicios y APIs REST. También manejo MySQL, TypeScript, JavaScript, Docker, Linux y Git. Me apasiona crear soluciones escalables y eficientes, Puedes explorar algunos de mis trabajos en <a href='https://github.com/manuelberganza-dev'>GitHub</a>",
        actions: [
            {
                text: 'Contáctame',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
