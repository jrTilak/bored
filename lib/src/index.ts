#!/usr/bin/env node

import HelloHandler from "./handlers/hello-handler";

const main = () => {
  HelloHandler.hello();
};

main();
