document.getElementById("chainVerifyButton").addEventListener("click", async () => {
    const userAddress = document.getElementById("userAddress").value;
    const container = document.getElementById("resultOutput");

    const web3Ethereum = new Web3("https://mainnet.infura.io/v3/b592ca9f7ae34ac99f039bb44c74c140");
    const web3Polygon = new Web3("https://polygon-mainnet.infura.io/v3/b592ca9f7ae34ac99f039bb44c74c140");

    async function checkTransactionActivity(address) {
      const ethereumTransactionCount = await web3Ethereum.eth.getTransactionCount(address);
      const polygonTransactionCount = await web3Polygon.eth.getTransactionCount(address);

      const activityThreshold = 5;

      if (ethereumTransactionCount >= activityThreshold || polygonTransactionCount >= activityThreshold) {
        // Display a green checkmark SVG
        container.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M10 50l25 25l35 -35" stroke="green" stroke-width="5" fill="none" /></svg>';
      } else {
        // Display a red X SVG
        container.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><line x1="10" y1="10" x2="90" y2="90" stroke="red" stroke-width="5" /><line x1="10" y1="90" x2="90" y2="10" stroke="red" stroke-width="5" /></svg>';
      }
    }

    checkTransactionActivity(userAddress);
  });
