class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }
  execute() {
    const anySpent = this.inputUTXOs.some((x) => x.spent);
    if (anySpent) {
      throw new Error("Cannot include a spent UTXO");
    }

    const totalInputs = this.inputUTXOs.reduce((a, b) => a + b.amount, 0);
    const totalOutputs = this.outputUTXOs.reduce((a, b) => a + b.amount, 0);

    if (totalInputs < totalOutputs) {
      throw new Error("Not enough inputsUTXOs");
    }
    this.inputUTXOs.forEach((utxo) => {
      utxo.spend();
    });
    this.fee = totalInputs - totalOutputs;
  }
}

module.exports = Transaction;
