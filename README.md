# Examenopdracht Front-end Web Development & Web Services

> Schrap hierboven eventueel wat niet past

- Student: Miguel Angel Popa
- Studentennummer:** 202407528
- E-mailadres:** <miguel.popa@student.hogent.be>

## Vereisten

> Vul de vereisten eventueel aan

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [pnpm](https://pnpm.io)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

> Je kan ook een aparte README per project (in de respectievelijke map) voorzien. Verwijs er dan hier naar.

## Front-end

## Opstarten

> Schrijf hier hoe we de applicatie starten (.env bestanden aanmaken, commando's om uit te voeren...)
cd app
pnpm install
pnpm dev

.env:
NODE_ENV=development
PORT=3000

CORS_ORIGINS=["http://localhost:5173"]
CORS_MAX_AGE=10800

DATABASE_URL=mysql://407528mp:cwNYscHqIIPYC99uiBgBlzBCfh3wZt8E@vichogent.be:41260/407528mp

AUTH_JWT_SECRET=eenveeltemoeilijksecretdatniemandooitzalradenandersisdesitegehacked
AUTH_JWT_AUDIENCE=budget.hogent.be
AUTH_JWT_ISSUER=budget.hogent.be
AUTH_HASH_LENGTH=32
AUTH_HASH_TIME_COST=6
AUTH_HASH_MEMORY_COST=65536
AUTH_MAX_DELAY=2000

LOG_DISABLED=false
## Testen
> Schrijf hier hoe we de testen uitvoeren (.env bestanden aanmaken, commando's om uit te voeren...)
pnpm add -D cypress
pnpm add -D eslint-plugin-cypress
pnpm test


## Back-end

## Opstarten

> Schrijf hier hoe we de applicatie starten (.env bestanden aanmaken, commando's om uit te voeren...)
cd webservices-api
docker compose up -d
pnpm install
pnpm db:migrate
pnpm db:seed
pnpm start:dev
.env:
NODE_ENV=development
PORT=3000

CORS_ORIGINS=["http://localhost:5173"]
CORS_MAX_AGE=10800

DATABASE_URL=mysql://407528mp:cwNYscHqIIPYC99uiBgBlzBCfh3wZt8E@vichogent.be:41260/407528mp

AUTH_JWT_SECRET=eenveeltemoeilijksecretdatniemandooitzalradenandersisdesitegehacked
AUTH_JWT_AUDIENCE=budget.hogent.be
AUTH_JWT_ISSUER=budget.hogent.be
AUTH_HASH_LENGTH=32
AUTH_HASH_TIME_COST=6
AUTH_HASH_MEMORY_COST=65536
AUTH_MAX_DELAY=2000

LOG_DISABLED=false
## Testen

> Schrijf hier hoe we de testen uitvoeren (.env bestanden aanmaken, commando's om uit te voeren...)


