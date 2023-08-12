import carrinhoDeCompras from '../../public/projectDemo/carrinho-de-compras.png';
import catalogoDeFilmes from '../../public/projectDemo/catalogo-de-filmes.png';
import formularioDeRegistro from '../../public/projectDemo/formulario-de-registro.png';
import listaDeTarefas from '../../public/projectDemo/lista-de-tarefas.png';
import pokedex from '../../public/projectDemo/pokedex.png';

const projects = [
  {
    title: 'Carrinho de Compras',
    image: carrinhoDeCompras,
    description:
      'Projeto de um Carrinho de Compras feito no NextJS com TypeScript, consumindo a API do Mercado Livre e utilizando o React Query para o consumo da API. A página inicial exibe todos os produtos disponíveis para adicionar ao carrinho. Após a adição de um produto, um contador aparece no canto superior direito, mostrando a quantidade de itens no carrinho. Na página do carrinho, é apresentado um resumo dos produtos adicionados, incluindo a quantidade e o preço total. Para compartilhar os dados entre a página inicial e a do carrinho, a Context API foi utilizada. O layout da aplicação foi construído com o Sass e CSS Modules.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Next.JS',
      'Sass',
    ],
    projectLink: 'https://carrinhodecompras-luiz2k.vercel.app/',
    sourceCode: 'https://github.com/luiz2k/carrinho-de-compras',
  },
  {
    title: 'Catalogo de Filmes',
    image: catalogoDeFilmes,
    description:
      'Projeto de um Catálogo de Filmes que foi feito consumindo a API de filmes TheMovieDB, para a criação desse projeto foi utilizado a biblioteca React. No header da página foi adiciona um botão que altera o tema do site entre dark e light, e também uma barra de pesquisa que você pode pesquisar um filme de sua preferência. Já no corpo da página temos dois carrosséis com categorias de filmes diferentes, para fazer esse carrossel foi utilizado o Splide. Sempre que houver alguma interação com os cards você será direcionado para uma página que mostra as informações do card do filme interagido.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Tailwind CSS'],
    projectLink: 'https://catalogodefilmes-luiz2k.vercel.app/',
    sourceCode: 'https://github.com/luiz2k/catalogo-de-filmes',
  },
  {
    title: 'Pokédex',
    image: pokedex,
    description:
      'Projeto de uma Pokédex feita consumindo a PokeAPI, para o consumo dessa API foi utilizado o Fetch API. Sempre que houver alguma interação com os card dos Pokémons, irá abrir um modal mostrando mais informações sobre o Pokémon do card interagido, se clicar na estrelinha que está no canto inferior direito da foto do Pokémon no modal, o Pokémon irá mudar de versão. Também é possível buscar um Pokémon especifico pelo seu NOME ou ID na barra de pesquisa que fica no cabeçalho da página. Os Pokémon também podem ser filtrado pelo seu tipo, basta clicar no botão do tipo do Pokémon que aparece logo no início da página.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://pokedex-luiz2k.vercel.app/',
    sourceCode: 'https://github.com/luiz2k/pokedex',
  },
  {
    title: 'Lista de Tarefas',
    image: listaDeTarefas,
    description:
      'Projeto de um Lista de Tarefas onde pode ser adicionado anotações que podem ser editados, removidos ou marcados como concluído. Todos as tarefas ficam salva no LocalStorage, possibilitando a não perde dessas tarefas quando o navegador for fechado. Também foi criado uma barra de pesquisa onde pode ser usado para procurar anotações especificas, e também um filtro que possibilita a exibição apenas das tarefas que estão em aberto ou concluído.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://listadetarefas-luiz2k.vercel.app/',
    sourceCode: 'https://github.com/luiz2k/lista-de-tarefas',
  },
  {
    title: 'Formulário de Registro',
    image: formularioDeRegistro,
    description:
      'Projeto de um Formulário de Registro onde os inputs são validados, nos inputs de e-mail foi feito uma validação com RegExp (Expressões Regulares) onde ele só aceita um texto que contém nome antes e depois do @, e texto depois do ponto, já nas senhas além delas terem que ser iguais, o mínimo de caracteres aceitos são 8. Quando todo os inputs tiverem válidos aparecera uma mensagem informado que a validação do formulário está 100% concluída.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://formularioderegistro-luiz2k.vercel.app/',
    sourceCode: 'https://github.com/luiz2k/formulario-de-registro',
  },
];

export default projects;
