# server-towatchflix
API RESTful using Express and Node.js created for study purpose

### ONGOING PROJECT

-------------------------------------------------------

#### Contratos que deverão ser entregues

| Verbo        | Recurso                | Descrição                             |
| ------------ | ---------------------- | ------------------------------------- |
| GET          | `/series`              | Retornar todas as séries              |
| GET          | `/series/:id`          | Retornar apenas uma série específica  |
| POST         | `/series`              | Cadastrar nova série                  |
| PUT          | `/series/:id`          | Atualizar uma série específica        |
| DELETE       | `/series/:id`          | Deletar uma série específica          |
| PATCH        | `/series/:id/liked`    | Atualizar se gostou da série ou não   |

---

#### Contratos para ir ao infinito e além

Nossa API de séries contém várias temporadas e essas contém vários episódios. Podemos criar mais algumas rotas para trabalhar com essas temporadas e episódios:

| Verbo        | Recurso                | Descrição                             |
| ------------ | ---------------------- | ------------------------------------- |
| POST         | `/series/:id/season/:seasonId/episode` | Cadastrar novo episódio na temporada, onde :id é o id da série e :seasonId é o id da temporada |
| POST         | `/series/:id/season`                   | Cadastrar nova temporada na série, onde o :id é o id da série |
| DELETE       | `/series/:id/season/:seasonId`         | Deletar uma temporada específica, onde :id é o id da série e :seasonId é o id da temporada |
| DELETE       | `/series/:id/season/:seasonId/episode/:episodeId` | Deletar um episódio específico na temporada, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio |
| PATCH        | `/series/:id/season/:seasonId/episode/:episodeId/watched` | Atualizar se o episódio foi assistido ou não, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio |