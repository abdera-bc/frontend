# Abdera Website

The Abdera Website is a VueJS powered SPA. The contents are fetched from a headless Wordpress backend (WP REST API) located at (https://backend.abdera-bc.de).

You can change the `API_LOCATION` in `/src/config/index.js`.

To install the Frontend UI on your machine follow the steps below:

## Project setup

``` sh
npm install
```

### Compiles and hot-reloads for development

``` sh
npm run serve
```

### Deployment

This deploys the UI to our Netlify staging site.

``` sh
npm run deploy:stage
```

This runs the github action to deploy directly onto the All-Inkl Hosting. See `.github/workflows/main.yml` for configuration options.

``` sh
npm run deploy:live
```

## Contribution guidelines

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

### We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)).

### Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

### References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)

## License

[MIT License](/LICENSE)