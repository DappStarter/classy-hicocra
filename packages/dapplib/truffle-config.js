require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name reflect pitch hospital gloom narrow equal genuine'; 
let testAccounts = [
"0xcb664cef43574c8f8decac13993bd5e983a9845b3525e608d7908f8904c613c6",
"0x5a459eceaa4b1a62a761e2ec65ccbfc9e78bfd5172417a86c43161b01ac795be",
"0x3b782f5570e7425b495ca7acc3db505560dbb8650e632d761309d31792533f8d",
"0x7ba6477cc3b7c82b61c00259456fa145654e850a868cd3e644ab462a672f8ab7",
"0x3f39a70357e2cc0c74bb2eea4e46f9793436ab9d0f0eb5b16509380c358b7012",
"0x7a7333760c8e5ab5289a52e85615d37f95012138735bd20b2401d4077eee06c0",
"0xa6314f513791d3791919c0043b7750fe45de9b859a06967d81f8d9e12d64ab34",
"0xad213d445c36104af9783d0dd3f436623d31fa9da4cbb71b08d9bcdffb0622c3",
"0xdf92b4d03dce3e56a03722a6546370ba73a0a3e37099b2e5be058a81af6467f4",
"0xcdaa598eba49afc1356e84767773b71c53f5999e8b420c1a56c3e1125fc97184"
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
