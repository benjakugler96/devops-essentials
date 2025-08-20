const fs = require("fs");
const version = require("../package.json").version;

fs.writeFileSync("dist/version.json", JSON.stringify({ version }, null, 2));
