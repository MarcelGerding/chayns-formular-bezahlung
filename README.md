[![license](https://img.shields.io/github/license/TobitSoftware/chayns-template-esnext-react.svg)]() [![GitHub pull requests](https://img.shields.io/github/issues-pr/TobitSoftware/chayns-template-esnext-react.svg)]() [![](https://img.shields.io/github/issues-pr-closed-raw/TobitSoftware/chayns-template-esnext-react.svg)]()

chayns forms with React + ES.NEXT - Template
===================
This template was made for building chayns form tapps using the tobit-chayns_components npmjs package.<br>
The version 1.0.41 is required as minimum version.


This template will help you getting started with building forms Tapps for your chayns®-Website with React and ES.Next. First of all you have to make sure, that you have the latest version of [node.js][1] installed.

Development
-------------
1. Install all project dependencies with  `npm i`
2. Start your webpack-dev-server for debugging your project with `npm start`
    * The webpack-dev-server is now running on your localhost on the port 8080. If the port is not available you can change it in the dev.babel.js in the webpack folder.

3. Implement the example Tapp to your chayns® site .
    1. Go to configuration -> Tapps
    2. Click `Add Tapp`
    3. Use external content
    4. Give the Tapp a name and type in the following URL : `http://localhost:8080`
    5. Click `add`
4. Start development.

> **Hint:** Writing Tapps with React? You might also want to take a look at our [React Style Guide][2].


Building
---------
You can build this project via `npm run build`.

You can also build this project with sourceMaps for testing via `npm run build:qa`.


 [1]: https://nodejs.org/en/
 [2]: https://github.com/TobitSoftware/chayns-guides/blob/master/TobitReactJsxStyleGuide.md

#