## Launch server
`npm run server`

## Launch client
`npm run client`

## Build client
`npm run build`

## Hosts:
production: `http://localhost:3000`

development: `http://localhost:8080`

## What it does

- runs on top of existing backend
- compiles Sass, JSX
- imports components as modules (`import App from 'App';`)
- allows absolute imports (`@import '/variables.scss';`)
- resolve images (inline small ones, bundle big ones)
- eliminates dead code (no `[FIND_ME]`, `.logger {}` in production bundle)
- outputs bundle into `server/assets`
