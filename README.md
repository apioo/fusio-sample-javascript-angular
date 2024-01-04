# FusioSample

This is an example [Angular-App](https://github.com/apioo/fusio-sample-javascript-angular) which uses Fusio as Backend.
You can use the [Fusio Angular SDK](https://github.com/apioo/fusio-sdk-javascript-angular) to quickly build a backend app for your Fusio API.

* `src/app/generated`  
  This folder contains the generated SDK, you can generate this at your Fusio instance with the following command: `php bin/fusio generate:sdk --filter=frontend`
* `src/app/config-builder.ts`  
  Contains the configuration of your backend app.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
