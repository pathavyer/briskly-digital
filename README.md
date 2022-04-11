
# Briskly Digital Wordpress Theme

Wordpress theme powered by [Timber](https://timber.github.io/docs/getting-started/setup/). This theme is configured to run with Bedrock WordPress boilerplate infrastructure. To find out more, follow the links below

* [Bedrock Documentation](https://docs.roots.io/bedrock/master/installation/#what-is-bedrock) 
* [Bedrock Repository](https://github.com/roots/bedrock)

## Local development

### Tooling and softwares
#### Docker
Docker is a virtualization tool that allows developers to create "containers" on their local machines that are consistent with the environments their code is being deployed on. This removes a key risk factor in team development by ensuring everybody is using the same configuration, resources, and library of tools.

#### Lando
Lando is a tool that runs on top of Docker, and makes the configuration and administration of a Docker container much easier. Lando automates common commands and instructions that would otherwise require complicated Docker configuration files.

Lando can be installed using the instructions at: https://docs.lando.dev/basics/installation.html

If you're running MacOS or Windows, installing Lando will also install Docker Desktop for you. You may also install Docker yourself at https://docs.docker.com/v17.09/engine/installation/. **However it is recommended that you use the Docker installation provided with Lando, as that will ensure compatability**.

IMPORTANT: Once Lando is installed, you will need to trust the Lando certificate in order for the https protocol to work.

Here is the recipe for running Bedrock with lando 
[https://roots.io/guides/dockerize-local-bedrock-and-sage-development-with-lando/](https://roots.io/guides/dockerize-local-bedrock-and-sage-development-with-lando/)

## What's included the theme

* Timber template engine
* Timber ACF block plugin
* npm for managing front-end dependencies
* webpack for bundling JavaScript and managing assets
* Babel for compiling JavaScript
* Sass for compiling stylesheets
* Autoprefixer
* SVG optimization with svgo
* File name hashes for long term caching

## Installing the theme

Install this theme as you would any other, and be sure the Timber plugin is activated. But hey, let's break it down into some bullets:

1. Make sure you have installed the plugin for the [Timber Library](https://wordpress.org/plugins/timber-library/) (and Advanced Custom Fields - they [play quite nicely](https://timber.github.io/docs/guides/acf-cookbook/#nav) together). 
2. Download the zip for this theme (or clone it) and move it to `wp-content/themes` in your WordPress installation. 
3. Rename the folder to something that makes sense for your website (generally no spaces and all lowercase). You could keep the name `timber-starter-theme` but the point of a starter theme is to make it your own!
3. Update `publicPath` in `webpack.config.js` to point to correct theme folder after changing the theme name
4. Activate the theme in Appearance >  Themes.
5. Install and build frontend dependencies by navigating to theme folder and running `npm install && npx webpack -w`
6. Do your thing! And read [the docs](https://github.com/jarednova/timber/wiki).

## Building for production

Run `cd wp-content/themes/my-theme/ && npm install && npx webpack -p` to build minified files for production.

## What's included

`src/templates/` contains all of your Twig templates. These pretty much correspond 1 to 1 with the PHP files that respond to the WordPress template hierarchy. At the end of each PHP template, you'll notice a `Timber::render()` function whose first parameter is the Twig file where that data (or `$context`) will be used. Just an FYI.

## Other Resources

* [This branch](https://github.com/laras126/timber-starter-theme/tree/tackle-box) of the starter theme has some more example code with ACF and a slightly different set up.
* [Twig for Timber Cheatsheet](http://notlaura.com/the-twig-for-timber-cheatsheet/)
* [Timber and Twig Reignited My Love for WordPress](https://css-tricks.com/timber-and-twig-reignited-my-love-for-wordpress/) on CSS-Tricks
* [A real live Timber theme](https://github.com/laras126/yuling-theme).
* [Timber Video Tutorials](http://timber.github.io/timber/#video-tutorials) and [an incomplete set of screencasts](https://www.youtube.com/playlist?list=PLuIlodXmVQ6pkqWyR6mtQ5gQZ6BrnuFx-) for building a Timber theme from scratch.

## How can I copy assets like images and fonts to the `dist` folder?

With webpack, you don't need to. Just put your images and fonts under `src` and use relative path to the resource. webpack will automatically resolve the paths for you and copy the assets to the right place under `dist`. You can learn more about this by reading [this blog post](https://siipo.la/blog/use-webpack-to-process-static-assets-in-twig-templates-with-wordpress).

Like this with a font in a stylesheet:

```
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('./fonts/open-sans-v15-latin_latin-ext-regular.woff2')
      format('woff2'),
    url('./fonts/open-sans-v15-latin_latin-ext-regular.woff')
      format('woff');
}
```

It works even in twig files:

```
<img src="./images/logo.svg" alt="Logo">
```

## How can I inline SVGs?

You can use interpolation with `html-loader`and use webpack loader override syntax to get the file contents instead of a path to the file:

```
<div class="icon">
${require('!raw-loader!./images/logo.svg')}
</div>
```

## License

GPL v2 or later

This theme is based on the original [Timber Starter Theme](https://github.com/timber/starter-theme/tree/1.x) by Jared Novack and contributors, licensed under the MIT license
