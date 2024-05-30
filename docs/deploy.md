# Deploy


## Build

```sh
$ npm run build
```


## CI GitHub Actions

This project is setup to automatically build and deploy to the `gh-pages` branch on Github. That branch is used to run the GitHub Pages site, managed in repo settings.

See the [workflow](/.github/workflows/main.yml) file to manage this.


## Configure GH Pages

After a successful build, you can configure your site to be served on GitHub Pages as follows:

1. Go to repo _Settings_.
1. Go to _GitHub Pages_ section.
1. Enable the site on `gh-pages` branch the `root` directory.
1. Wait for your site to build.
1. Check the _Actions_ tab on the repo for the status of the build.
1. Open the public URL when it is done.
