(ns cljs-demo.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn -main [& args]
  (println "Starting repl...")
  (js/start_repl)
  (println "Hello world!"))

(set! *main-cli-fn* -main)
