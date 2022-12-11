const provider = require("./provider");

async function getTotalBalance(addresses) {
  const response = await provider.send({
    jsonrpc: "2.0",
    id: 1,
    method: "",
    params: [],
  });

  // return the total balance of all the addresses
}

module.exports = getTotalBalance;
