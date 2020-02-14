// (() => {

//     const fetchStock = (cnpj) => {
//         const body = {
//             Email: 'suporte@autoforce.com.br',
//             Senha: '@utF.9971',
//             CNPJ: '03.935.677/0001-00',
//             Tipo: 'Usado',
//             Publicado: 'S',
//             Hash: 'S'
//         };

//         fetch('https://adset.com.br/integrador/api/estoqueveiculos', { method: 'POST', body: JSON.stringify(body) })
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//     }

//     const checkStock = () => {
//         const totalText = document.querySelector('.panel .panel-body p');
//         let total = totalText.childNodes[1].textContent;
//         total = parseInt(total);

//         const breadcrumbItems = document.querySelectorAll('.breadcrumb li');
//         const cnpjItem = [...breadcrumbItems].find(item => item.textContent.includes('0001'));
//         const cnpj = cnpjItem.textContent;

//         fetchStock(cnpj);
//     }

//     checkStock();

// })();
