const elliptic = require('elliptic')

const ec = new elliptic.ec('secp256k1')

const keyPair = ec.genKeyPair()

console.log('getPrivate:', keyPair.getPrivate('hex'))
console.log('getPublic:', keyPair.getPublic('hex'))

const signature = keyPair.sign()

console.log(signature.toDER())