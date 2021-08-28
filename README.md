## Comandos de execução

`yarn start`

`yarn test`

`yarn build`

`yarn eject`

## Estrutura do projeto

src/
|---- assets (aqui colocamos todos os arquivos de imagem)
|---- components (Todos os componentes que são disponibilizados globalmente na aplicação)
|---- containers (Todas as estruturas padronizadoras como por exemplo: modais, auth ...)
|---- features (Toda a regra de negócios)
|---- routes (O nome ja diz hehe)
|---- services (Serviços globais, **APENAS**!)
|---- type (Tipos globais, **APENAS**!)
|---- utils (recurso de ajudem globalmente na solução de problemas)

## Facilidades:

Em vez de fazer imports com caminho relativo:

`import api from "../../../services/api`

Faça uso do caminho absoluto utilzando @ para importar

`import api from "@/services/api"`

Isso não quer dizer que você não deve utilizar caminhos relativos. Mas deixe para utiliza-los em estruras menores. De preferência dentro do proprio componente.

