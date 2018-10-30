# Express Sequelize Boilerplate

## Getting started

Read this in other languages: [English](README.md), [한국어](README.ko.md)

```sh
# Clone the project
git clone https://github.com/the6thm0nth/epress-sequelize-boilerplate.git
cd express-sequelize-boilerplate

# Install dependencies
yarn
```

```sh
cp .env.example .env
vim .env # set environment variables such as database config
yarn start # npm run start
```

## Basic APIs
### Common
- API HOST: `/api/{VERSION}
### Normal
#### AUTH
| METHOD | URI     | Purpose |
| ------ | ------- | ------- |
| `POST` | /signup | Signup  |
| `POST` | /login  | Login   |

#### POSTS
| METHOD   | URI              | Purpose                   |
| -------- | ---------------- | ------------------------- |
| `GET`    | /posts           | GET Posts with Pagination |
| `POST`   | /posts           | CREATE a new post         |
| `PUT`    | /posts/{POST_ID} | UPDATE a post             |
| `DELETE` | /posts/{POST_ID} | DELETE a post             |

## License
MIT License. See the [LICENSE](LICENSE) file.

## Forked from
https://github.com/vmasto/express-babel
