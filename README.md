## Começando a asar

* instale o projeto e suas dependências
`yarn add -D package`

*  Crie um arquivo env.json em environments
`cp src/environments/aws.json src/environments/env.json`

## Comandos de execução

`yarn start ou npm start`

`yarn test ou npm test`

`yarn build ou npm build`

`yarn eject ou npm eject`

## Estrutura do projeto

src/
|---- assets
|---- components (Todos os componentes que são disponibilizados globalmente na aplicação)
|---- containers (Todas as estruturas padronizadoras como por exemplo: modais, auth ...)
|---- features (Toda a regra de negócios)
|---- routes (O nome já diz hehe)
|---- services (Serviços globais, **APENAS**!)
|---- type (Tipos globais, **APENAS**!)
|---- utils (recurso de ajudem globalmente na solução de problemas)
|---- environments (fornece as informações de configuração do projeto com os ambiente conhecidos)

## Facilidades:

Em vez de fazer imports com caminho relativo:

`import api from "../../../services/api`

Faça uso do caminho absoluto utilzando @ para importar

`import api from "@/services/api"`

Isso não quer dizer que você não deve utilizar caminhos relativos. Mas deixe para utiliza-los em estruras menores. De preferência dentro do proprio componente.

