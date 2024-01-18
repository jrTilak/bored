import degit from "degit";
import mainConfig from "../configs/main-config";
import chalk from "chalk";
// import { exec } from "child_process";
// import path from "path";
// import fs from "fs";

const { repo, owner, templates } = mainConfig;

export default class CloneHandler {
  constructor(template: string, target: string) {
    this.template = template;
    this.target = target;
  }
  template: string;
  target: string;
  public static async clone(template: string, target: string, options: any) {
    if (!templates.includes(template)) {
      console.log(chalk.red("Invalid template name."));
      console.log("Available templates:");
      console.log(chalk.green(templates.join(", ")));
      process.exit(1);
    }
    console.log(
      chalk.blue(`Creating a new project using ${template} template`)
    );
    const src = `${owner}/${repo}/templates/${template}`;
    const emitter = degit(src, {
      cache: false,
      force: true,
      verbose: false,
    });

    //ask from project name using commander

    try {
      await emitter.clone(target);
      console.log(`Successfully created ${template} template to ${target}`);

      //todo edit the project name in package.json
      // const projectName = path.basename(path.resolve(target));
      // const packageJsonPath = path.join(target, "package.json");
      // const packageJsonData = require(packageJsonPath);
      // packageJsonData.name = projectName;
      // fs.writeFile(
      //   packageJsonPath,
      //   JSON.stringify(packageJsonData, null, 2),
      //   (err: any) => {
      //     if (err) {
      //       console.log(chalk.red("Error writing package.json"));
      //       process.exit(1);
      //     }
      //   }
      // );

      // if (options.dev) {
      //   console.log(
      //     chalk.blue("Installing dependencies and running dev server...")
      //   );
      //   console.log(chalk.blue("cd", target));
      //   exec("cd " + target);
      //   console.log(chalk.blue("npm install"));
      //   exec("npm install");
      //   console.log(chalk.blue("npm run dev"));
      //   exec("npm run dev");
      //   console.log(chalk.blue("Done!"));
      // } else if (options.install) {
      //   console.log(chalk.blue("Installing dependencies..."));
      //   console.log(chalk.blue("cd", target));
      //   exec("cd " + target);
      //   console.log(chalk.blue("npm install"));
      //   exec("npm install");
      //   console.log(chalk.blue("Done!"));
      // }
      process.exit(0);
    } catch (err) {
      console.log(chalk.red("Error cloning template."));
      console.log(err);
      process.exit(1);
    }
  }
}
