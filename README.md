# MAPP APP

+ vanillaJS interactive mobile app template based on **Webpack** and **Pug**
+ [preview](https://ledanielh.github.io/mapp-app/)

## HOW TO
1. dependencies
	+ [install Node.js](https://nodejs.org/en/)
	+ run `node -v` and `npm -v` just to make sure you have Node and NPM on your PC
	+ run `npm i webpack -g`
	+ go to root of this project and run `npm install`

2. run `npm start`
	+ this should open your browser window and generate `dist` folder with generated project files
	+ do what you please in the `src` folder
	+ data for the template are in the `./src/data/data.js. It is not a json as it is easier to write html in ES6 `.js` files

3. run `npm run build` for production


### EXTRA
if you want to see live reloads in real time both on your PC and mobile for example, do the following
	+ run `ipconfig` in your CLI and save your ip4 number
    + go to `webpack.config.babel.js` find `devServer` and add `host` option => add ip4 number as your `host`