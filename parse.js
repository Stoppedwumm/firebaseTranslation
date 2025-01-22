const fs = require("fs")
let config = require("./firebase-js-sdk/lerna.json")

// remove useWorkspaces
delete config["useWorkspaces"]

fs.writeFileSync("./firebase-js-sdk/lerna.json", JSON.stringify(config, null, 2))