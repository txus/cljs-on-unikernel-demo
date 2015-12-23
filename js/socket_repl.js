socket_repl = function socket_repl(socket) {
    var node_readline = require("readline");
    var rl = node_readline.createInterface({"input":socket, "output":socket});
    var G__6251 = rl;
    G__6251.setPrompt(cljs_bootstrap.core.get_prompt());
    G__6251.on("line", function(G__6251, node_readline, rl) {
        return function(cmd) {
            return cljs_bootstrap.core.read_eval_print.cljs$core$IFn$_invoke$arity$2(cmd, function(G__6251, node_readline, rl) {
                return function(res, data) {
                    if (cljs.core.truth_(res)) {
                        socket.write(cljs.core.str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)));
                    } else {
                        socket.write(cljs_bootstrap.core.print_error("ERROR:", data));
                    }
                    rl.setPrompt(cljs_bootstrap.core.get_prompt());
                    return rl.prompt();
                };
            }(G__6251, node_readline, rl));
        };
    }(G__6251, node_readline, rl));
    G__6251.prompt();
    return G__6251;
};

