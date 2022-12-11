const provider = require("./provider");

async function getBlockNumber() {
  const response = await provider.send({
    jsonrpc: "2.0",
    id: 1,
    method: "",
  });
  return response.result;
}

module.exports = getBlockNumber;
