
const connectWalletButton = document.getElementById("connect");

connectWalletButton.addEventListener("click", () => {
  // Check if MetaMask is installed
  if (typeof window.ethereum !== "undefined") {
    // Connect to MetaMask
    window.ethereum.request({
      method: "eth_requestAccounts",
    }).then((accounts) => {
      // Get the user's first account
      const account = accounts[0];

      // Do something with the user's account
      console.log("The user's account address is: ", account);
	  
	  
    
	  
  // Remove the div when the user's account is in the console
      const hiDiv = document.getElementById("hi");
      if (hiDiv) {
        hiDiv.remove();
	  
	      }
  
 
  // Remove the div when the user's account is in the console
      const connectdiv = document.getElementById("connect");
      if (connectdiv) {
        connectdiv.remove();
	  
	      }
 
 
   // Remove the div when the user's account is in the console
     const accountdiv = document.getElementById("account");
      if (accountdiv) {
        accountdiv.classList.remove("new");
        accountdiv.classList.add("new2")
	  
	      }
 
const connectedDiv = document.createElement("div");
connectedDiv.id = "connected";
connectedDiv.textContent = account;
document.body.appendChild(connectedDiv);

window.addEventListener("MetaMaskConnected", async () => {
  if (!connectedDiv) {
    connectedDiv = document.createElement("div");
    connectedDiv.id = "connected";
    connectedDiv.textContent = account;
    document.body.appendChild(connectedDiv);
  }
});
 
 const connectedDiv = document.getElementById("connected");

window.addEventListener("accountsChanged", async () => {
  if (connectedDiv) {
    connectedDiv.remove();
  }
});

 
 
 
    });




const isMetamaskConnected = () => {
  const ethereum = window.ethereum;
  if (ethereum && ethereum.isConnected()) {
    return true;
  } else {
    return false;
  }
};

const onPageLoad = () => {
  if (isMetamaskConnected()) {
    console.log('connected');
  }
};

window.addEventListener('load', onPageLoad);


	  
  } else {
    // Prompt the user to install MetaMask
    window.location.href = "https://metamask.io/";
  }
});
