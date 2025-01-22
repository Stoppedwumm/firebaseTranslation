const fs = require("fs")
let config = require("./firebase-js-sdk/lerna.json")

config.useWorkspaces = false

fs.writeFileSync("./firebase-js-sdk/lerna.json", JSON.stringify(config, null, 2))