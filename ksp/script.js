async function makeRequest() {
    // const token = document.getElementById('tokenInput').value;
    const token = "y/fBA4slsti4mDq5G7m0Ok7CXY3qBxy8O30lSb2nnfE=";
    // const proxyUrl = 'http://localhost:8080';
    // const url = `server.php`;

    // const fullUrl = new URL(url, proxyUrl);

    try {
        const response = await axios.get("server.php", {
            headers: {
                'X-Auth-Token': token
            }
        });

        // Отображаем ответ в блоке для ответов
        const responseBlock = document.getElementById('responseBlock');
        responseBlock.innerHTML = JSON.stringify(response.data, null, 2);
        console.log(response.data)
    } catch (error) {
        console.error('Error:', error);
    }
}






// function makeRequest() {
//     const token = document.getElementById('tokenInput').value;
//     const proxyUrl = 'http://localhost:8080';
//     const url = `https://kaspi.kz/shop/api/v2/orders?page[number]=0&page[size]=20&filter[orders][state]=ARCHIVE&filter[orders][creationDate][$ge]=1706841836000&filter[orders][creationDate][$le]=1707965036000&filter[orders][status]=COMPLETED&filter[orders][deliveryType]=DELIVERY&filter[orders][signatureRequired]=false&include[orders]=user`;

//     const fullUrl = new URL(url, proxyUrl);

//     fetch(fullUrl, {
//         headers: {
//             'X-Auth-Token': token
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Отображаем ответ в блоке для ответов
//         const responseBlock = document.getElementById('responseBlock');
//         responseBlock.innerHTML = JSON.stringify(data, null, 2);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// async function getCurr(url) {
//     const promise = await axios.get(url)

//     const {data} = promise

//     return data
// }
