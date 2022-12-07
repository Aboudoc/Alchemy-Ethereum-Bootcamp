function verifyProof(proof, node, root, concat) {
  let data = node;
  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      data = concat(proof[i], data);
    } else {
      data = concat(data, proof[i]);
    }
  }
  return data === root;
}
module.exports = verifyProof;
