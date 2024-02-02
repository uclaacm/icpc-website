<img align=left width=100 src=public/static/icon/logo.svg alt="ICPC logo">

# ACM ICPC Website
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/777861e3-68f3-4363-a673-8da56142c043/deploy-status)](https://app.netlify.com/sites/admiring-johnson-e4d28e/deploys)
\
\
Official Website for ACM ICPC

Built using React and Webpack. Uses [Chakra-UI](https://chakra-ui.com) for components.

## Development Setup

Install [`git`](https://git-scm.com/) and [Node.js](https://nodejs.org/en) version `16.15.0`.

We recommend using [`nvm`](https://github.com/nvm-sh/nvm) to manage Node.js versions: 
```sh
$ nvm install 16.15.0
$ nvm use 16.15.0
```

Clone the repository and install dependencies: 
```sh
$ git clone https://github.com/uclaacm/icpc-website.git
$ cd icpc-website
$ npm install
```

In `icpc-website` directory, run
```sh
npm run build-dev
```

This will start the development server on `http://localhost:12345`.

## Contributing

To make changes to the website, follow the steps below: 

1. Clone the repository by following the instructions in the [development setup](#development-setup) section. Alternatively, fork this repository and follow the same instructions with the URL of the forked repository.
2. Create a new branch with `git checkout -b <branch-name>`.
3. Make changes to the code.
4. Make sure the website builds with `npm run build-dev`. Furthermore confirm that the website can be loaded at `http://localhost:12345`.
5. Create a [pull request](https://github.com/uclaacm/icpc-website/pulls). The web team will review the changes.
6. The pull request will be merged into main once it passes the code review. You can then delete the branch with `git branch --delete <branch-name>`.
