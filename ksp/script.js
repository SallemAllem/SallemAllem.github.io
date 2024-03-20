function makeRequest() {
    const token = document.getElementById('tokenInput').value;
    const url = `https://kaspi.kz/shop/api/v2/orders?page[number]=0&page[size]=20&filter[orders][state]=ARCHIVE&filter[orders][creationDate][$ge]=1706841836000&filter[orders][creationDate][$le]=1707965036000&filter[orders][status]=COMPLETED&filter[orders][deliveryType]=DELIVERY&filter[orders][signatureRequired]=false&include[orders]=user`;

    fetch(url, {
        headers: {
            'X-Auth-Token': token
        }
    })
    .then(response => response.json())
    .then(data => {
        // Отображаем ответ в блоке для ответов
        const responseBlock = document.getElementById('responseBlock');
        responseBlock.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
