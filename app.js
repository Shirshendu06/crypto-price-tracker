let apiKey = "ENTER_YOUR_API_KEY_HERE";
let apiUrl = "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin,ethereum,dogecoin&x_cg_demo_api_key=";

async function checkCurrencyValue() {
    try {
        const response = await fetch(
            `${apiUrl}${apiKey}`
        )

        if (!response.ok)
            throw new Error("Some error occured");

        const data = await response.json();

        console.log(data);

        document.getElementById("bitcoin-price").innerText = "$" + data.bitcoin.usd;
        document.getElementById("ethereum-price").innerText = "$" + data.ethereum.usd;
        document.getElementById("dogecoin-price").innerText = "$" + data.dogecoin.usd;
    } catch (error) {
        console.error("Error fetching crypto prices : ", error);
    }

}

checkCurrencyValue();

setInterval(() => {
    checkCurrencyValue();
}, 30000);