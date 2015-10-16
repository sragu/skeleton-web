A skeleton web project.

Idea is to introduce a layout and structure that could be used along
with any web-app (built with java/clojure/nancyfx)


##Tasks

* npm test
* npm start

##Tools:

* ES6
* JSPM w/ Babel
* EditorConfig for code format consistency
* Sass: node-sass
* Javascript Tests: Karma, mocha w/chai
* Javascript Domain Tests: mocha w/chai (nodejs/no-browser)
* Dev Setup: connect for live-reload
* Code Standards: standard, sass-lint
* Code Beautify: esformatter, sassbeautify

##Todo:

* javascript build setup to create distribution of assets
* sample with fetch api
* sample with promises and adding chai-as-promised with karma
* docs or styleguide for sass

##Todo:

For Javascript testing, I have two workflow. One runs the domain object tests under mocha, this is a nice way to make sure your domain objects don't end up using dom interaction. Then an test workflow with karma which uses browser so you can test all dom interaction and all other things on a env close to the client.
