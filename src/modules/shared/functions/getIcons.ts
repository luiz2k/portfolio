// Obtém os icones através do nome da linguagem
export const getIcons = (icon: string) => {
  return {
    TypeScript: "/icons/typescript.svg",
    "React.JS": "/icons/react-js.svg",
    "Next.JS": "/icons/next-js.svg",
    "Tailwind CSS": "/icons/tailwind-css.svg",
    Astro: "/icons/astro.svg",
    "Express.JS": "/icons/express-js.svg",
    Vitest: "/icons/vitest.svg",
    Cypress: "/icons/cypress.svg",
    "Node.JS": "/icons/node-js.svg",
    PHP: "/icons/php.svg",
    PostgreSQL: "/icons/postgresql.svg",
    HTML: "/icons/html.svg",
    CSS: "/icons/css.svg",
    JavaScript: "/icons/javascript.svg",
    TypeORM: "/icons/typeorm.svg",
    Prisma: "/icons/prisma.svg",
    "Nest.JS": "/icons/nest-js.svg",
    MongoDB: "/icons/mongodb.svg",
    Docker: "/icons/docker.svg",
    Zustand: "/icons/zustand.svg",
    Swagger: "/icons/swagger.svg",
    Stripe: "/icons/stripe.svg",
    "Auth.JS": "/icons/auth-js.svg",
  }[icon];
};
