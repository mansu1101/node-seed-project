# Node Seed Server

This repo is a simple express API which can be used as a starter project for building your own backend, based on Typescript.

## Starting the dev server

First you have to install the necessary dependencies.

```yarn install```

Then you can start the development server.

```yarn start:dev```

We are using Nodemon to watch for changes in the ts files and restart the server once we detect a change.

## Running unit tests

The project contains mocha unit tests for the models and the controllers. When running the unit tests and during development the mongoDB is mocked by mockgoose.

```yarn test```

Or you can inspect them in a browser window by running:

```yarn test:inspect```

and accessing chrome://inspect on a chrome browser - a websocket connection will be available

## Linting files

I am have used my own favorite linting rules but feel free to adjust them by touching the tslint.json file.

```yarn tslint```

## Connecting to a prod database

You can configure your own prod database by changing the value for MONGODB_CONNECTION_URL in config/database.ts

## Running the server in production

Linting, testing and building the server:

```yarn prod```

Starting the production server:

```yarn start```
