async function fetchCryptoPrices() {
    try {
        // Fetching Bitcoin, Ethereum, and Binance Coin
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();

        // Update Bitcoin
        document.getElementById('btc-price').innerText = `$${data.bitcoin.usd.toLocaleString()}`;
        
        // Update Ethereum
        document.getElementById('eth-price').innerText = `$${data.ethereum.usd.toLocaleString()}`;

    } catch (error) {
        console.error("Price fetch failed:", error);
    }
}

// Run immediately, then every 30 seconds
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 30000);
