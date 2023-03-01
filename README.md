# qtp-controller
nest backend for qtp service
=======
## MICROSERVICES DEPENDENCIES

##### GO annotation ressources

```bash
python -m unigo gostore --onto=data/ontologies/go.owl --prot=data/proteomes/uniprot-proteome_UP000000625_+TMT_210126.xml --goport=5555
```

```bash
python -m unigo pwas api --goport=5555 --pwasport=5009
```

##### Uniprot ressource

```bash
 python -m pyproteinsExt service uniprot data/proteomes/uniprot-proteome_UP000000625_+TMT_210126.xml --port=1234
```

###### `src/constant.ts`

Edit these file to reflect port values of the microservices.

* gostore  **--pwasport** maps to `PWAS_ENDPOINT`
* service uniprot **--port** maps to `UNIPROT_ENDPOINT`


## PUBLIC API

###### http://localhost:3000/api/pwas/ora <POST>

```json
{
    "proteinsExp"   : ["UNIPROT_ID",],
    "proteinsDelta" : ["UNIPROT_ID",], 
    "taxid"         : 83333, 
    "method"        : "fisher"
}
```


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
