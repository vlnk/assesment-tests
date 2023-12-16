;; npm install --prefix $(pwd)/.npm-packages -g typescript @angular/language-service@next @angular/language-server
((nil . ((eval . (setq lsp-clients-angular-language-server-command
                       '("node"
                         "/home/vlnk/src/tests/.npm-packages/lib/node_modules/@angular/language-server"
                         "--ngProbeLocations"
                         "/home/vlnk/src/tests/.npm-packages/lib/node_modules"
                         "--tsProbeLocations"
                         "/home/vlnk/src/tests/.npm-packages/lib/node_modules"
                         "--stdio")))
         (eval . (add-to-list 'eglot-server-programs
                              '(html-mode "node"
                                          "/home/vlnk/src/tests/.npm-packages/lib/node_modules/@angular/language-server"
                                          "--ngProbeLocations"
                                          "/home/vlnk/tests/.npm-packages/lib/node_modules"
                                          "--tsProbeLocations"
                                          "/home/vlnk/src/tests/.npm-packages/lib/node_modules"
                                          "--stdio"))))))
