---
id: 4
slug: "filtro-e-paginacao"
title: "Filtro e Paginação"
image: "https://i.imgur.com/T5T6StI.png"
technologies: ["TypeScript", "Next.JS", "Prisma"]
links: {
  sourceCode: "https://github.com/luiz2k/filter-and-pagination/",
}
---

Desenvolvimento de uma tabela para listagem de tarefas. No back-end foi utilizado **Prisma ORM**, para lidar com a interação com o banco de dados. Para a criação do layout foram utilizados os componentes do **Shadcn/UI**. Também foi criado uma rota de API para buscar as tarefas dinamicamente de acordo com os filtros informados nos parâmetros da URL.
<br /><br />
A tabela possui as seguintes funcionalidades:
- Filtro pelo `title` da tarefa
- FIltrar tarefas pelo `status`
- Ordernar por `asc` e `desc`
- Páginação
- Definir quantas tarefas exibir por página
