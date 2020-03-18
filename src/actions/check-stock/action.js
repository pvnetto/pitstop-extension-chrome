(() => {
    const fetchStock = async (cnpj) => {
        const response = await fetch("http://localhost:3001/stock", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ cnpj })
        });

        const stockData = await response.json();
        console.log(stockData);
        return stockData;
    }

    const checkStock = async () => {
        const totalText = document.querySelector('.panel .panel-body p');
        let total = totalText.childNodes[1].textContent;
        total = parseInt(total);

        const breadcrumbItems = document.querySelectorAll('.breadcrumb li');
        const cnpjItem = [...breadcrumbItems].find(item => item.textContent.includes('000'));
        const cnpj = cnpjItem.textContent;

        fetchStock(cnpj);
    }

    checkStock();
})();
