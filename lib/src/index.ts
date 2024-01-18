#!/usr/bin/env node
import chalk from "chalk";
import CloneHandler from "./handlers/clone-handler";
import { Command } from "commander";

const program = new Command();

if (!process.argv.slice(2).length) {
  console.log(chalk.blue("Welcome to the Bored CLI!"));
  console.log(
    chalk.bold("Use init to create a new project or --help for help.")
  );
  process.exit(0);
}

program
  .command("clone <template> <target>")
  .alias("c")
  .option("-i, --install", "Install dependencies after cloning the template")
  .option(
    "-d, --dev",
    "Install teh dev dependencies and run the development server"
  )
  .description("clone a repository into the target directory")
  .action((template, target, options) => {
    CloneHandler.clone(template, target, options);
  });

program.parse(process.argv);
