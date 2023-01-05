# # Bonsaiilabs Api

Repo includes all codes, instrructions for setting up and runing the app.

## Getting Started

This app is build with `Express` ontop of `Node.JS`. Some other development dependencies includes:

- `Postgresql` for database
- `Typescript` for typings
- `Es-Lint` for code linting
- `Prettier` for code formatting

#### Installation:

Clone this repository.

In your project terminal and switch to it's directory, run the following command:

```bash
npm install
```

or

```bashs
yarn
```

Secondly, the `env.example` file provides you with all the environmental variable keys. Make sure to copy and input their values to your env file.

Once that is completed you then need to run migrations to create the specified database table in the schema file

```bash
npm run migration
```

or

```bash
yarn run migration
```

Secondly, if you are runing the project for development purpose, run the following command next:

```bash
npm run dev
```

This will start a development server on your `localhost` on port the port you specified in your env.

## Building The App for Production

In your project terminal, run the following command:

```bash
npm run build
```

or

```bash
yarn run build
```

This will create a `dist` folder where all the production build recides.

Next you run the following command to start the production build:

```bash
npm start
```

or

```bash
yarn start
```

This will start a production server on your host ip address at your specified port.
