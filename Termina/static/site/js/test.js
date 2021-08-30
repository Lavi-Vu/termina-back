var ethereumButton = document.querySelector('.enableEthereumButton');
if (ethereumButton){ethereumButton.addEventListener('click', () => {
  getAccount();
});}

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(account);
//   Get accont address send to server
  $.ajax({
    type: "GET",
    url: '/test',
    data: {
        "account": account,
    },
    dataType: "json",
    success: function (data) {
        // any process in data
        alert("successfull")
    },
    failure: function () {
        alert("failure");
    }
});
}