(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main 'cljs-demo.core
   :optimizations :advanced
   :output-to "out/main.js"
   :target :nodejs})

(System/exit 0)
