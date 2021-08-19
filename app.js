const InDecInputs = (InDecPara, addMatch) => {
    const InDecInput = parseInt(document.getElementById(InDecPara).value);
    addMatch ?
    document.getElementById(InDecPara).value = InDecInput - 1 : document.getElementById(InDecPara).value = InDecInput + 1;
};

const InDecPrice = (InDecPara, addMatchPrice) => {
    const InDecInputss = parseInt(document.getElementById("InDecInput").value);
    const InDecPricez = parseFloat(document.getElementById(InDecPara).innerText);
    addMatchPrice ? document.getElementById(InDecPara).innerText = 1219 * InDecInputss : document.getElementById(InDecPara).innerText = InDecPricez - 1219;
};

const totalPrice = () => {
    const InDecPricez = parseFloat(document.getElementById('InDecPrice').innerText);
    const total = document.getElementById("total").innerText = InDecPricez;
    const vad = document.getElementById("vad").innerText = InDecPricez / 10;
    document.getElementById("mainTotal").innerText = total + vad;
};

document.getElementById("DecreBtn").addEventListener("click", () => {
    const decrement = parseInt(document.getElementById("InDecInput").value);
    if (decrement > 0)
    {
        InDecInputs("InDecInput", true);
        InDecPrice("InDecPrice", false);
        totalPrice('InDecPrice');
    }
});

document.getElementById("IncreBtn").addEventListener("click", () => {

    InDecInputs("InDecInput", false);
    InDecPrice("InDecPrice", true);
    totalPrice('InDecPrice');
});










