# ClojureScript on a unikernel

This is an experimental work in progress to see how far one can get building
ClojureScript apps on Node.js running on a runtime.js unikernel, without giving
up on the REPL tooling.

    npm install
    curl -L https://github.com/clojure/clojurescript/releases/download/r1.7.170/cljs.jar > cljs.jar
    make run

## Roadmap

* [x] Running a ClojureScript app on a runtime.js unikernel
* [ ] Exposing a ClojureScript REPL from the unikernel taking advantage of bootstrapped ClojureScript (doesn't quite work yet)
