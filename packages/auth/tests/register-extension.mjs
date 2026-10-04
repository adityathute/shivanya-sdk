import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./resolve-extension.mjs", pathToFileURL("./"));
