require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember mistake hope enroll food skirt'; 
let testAccounts = [
"0x76e8a2fb92e37c669eaf0ff4cd7355b5a70839facdde30a9618e40bf97b3d0d9",
"0x5df2ea3056d29cfa4c7272e5a86784fa58d230e8fdbab8bc2c0978252146fa38",
"0x15f55b5e79428e4997c93aa927e4acbee23200b65fdf6deefc355d64bfafee72",
"0x0c6a63512825b042e91070e0ec035fee1aa71bea4717d7d709a16f9313af1de4",
"0x4737a2c468a5893922728b77e5299396a3fac72457832676e0b05b6d1ae1b8e3",
"0xf58493bc163ce5ab7b9cdce0cb28010ed1cc464aeecdce854bbdafe5080dc056",
"0x6bbe223a5baf72ab6abd962943d0609b9d536a8cad0f72bb05128f0ebd71a8f6",
"0xaaefe7100641d458788d90db635f725ffe8fab862db187e31faff271f8dd6bc1",
"0xd2ba28c6d596efe26875a9800fbe2ade3efb3e7470ac9a961df5aa1b90847ac4",
"0x18094ee2fc30ce5c55d8904c5240762105bb005a6f7eaac2663d7270204b685c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
