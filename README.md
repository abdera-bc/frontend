# Abdera Website

The Abdera Website is a VueJS powered SPA. The contents are fetched from a headless Wordpress backend (WP REST API) located at (https://backend.abdera-bc.de).

You can change the `API_LOCATION` in `/src/config/index.js`.

To install the Frontend UI on your machine follow the steps below:

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Deployment

This deploys to our Netlify staging site.
```
npm run deploy:stage
```

This runs teh github action to deploy directly onto the All-Inkl Hosting. See `.github/workflows/main.yml` for configuration options.
```
npm run deploy:live
```
