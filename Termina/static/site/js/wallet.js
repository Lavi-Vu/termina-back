var ethereumButton = document.querySelector('.enableEthereumButton');
var showAccount = document.querySelector('.showAccount');
var sendEthButton = document.querySelector('.sendEthButton');
var account = []

// sendEthButton.addEventListener('click', () => {
//     ethereum
//       .request({
//         method: 'eth_sendTransaction',
//         params: [
//           {
//             from: '0x3ec0f4e5fe4118d4c822bc7317caf2f1e1a8168b',
//             to: '0x8187a225f5C2C799EB81593664451812EC7CA4c2',
//             value: '0x29a2241af62c0000',
//             gasPrice: '0x09184e72a000',
//             gas: '0x2710',
//           },
//         ],
//       })
//       .then((txHash) => console.log(txHash))
//       .catch((error) => console.error);
//   });
  ethereumButton.addEventListener('click', () => {
    getAccount();
  });
async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
}
