### context:
this is a simple relay-compatible note-taking app. this was created while learning relay-modern and typescript. you can check the graphql server on `packages/server` and the web client on `packages/web`.

#### scripts:
- `server:dev`: starts the development server
- `web:dev`: starts the development web client
- `server:build`: builds the server.
- `web:build`: builds the web client  

#### known issues:
some of the packages needed for the web client may stop the server from building. To get around that you'll probably need to delete these packages.
