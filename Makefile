all: initrd

run: initrd
	runtime-qemu ./initrd

initrd: out/init.js
	runtimeify out/init.js -o initrd

out/init.js: build.clj src/cljs_demo/core.cljs js/repl.js js/socket_repl.js
	java -cp cljs.jar:src clojure.main build.clj
	sed -i .bak 's/^#!.*$$//' out/main.js
	cat js/socket_repl.js js/repl.js out/main.js > out/init.js

clean:
	rm -fr out initrd
