<?php
header("Access-Control-Allow-Origin: *"); header("Access-Control-Allow-Headers: *"); 
// header("X-Auth-Token: y/fBA4slsti4mDq5G7m0Ok7CXY3qBxy8O30lSb2nnfE=");


if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $token = "y/fBA4slsti4mDq5G7m0Ok7CXY3qBxy8O30lSb2nnfE=";
    // $data = file_get_contents("https://kaspi.kz/shop/api/v2/orders?page[number]=0&page[size]=20&filter[orders][state]=ARCHIVE&filter[orders][creationDate][\$ge]=1706841836000&filter[orders][creationDate][\$le]=1707965036000&filter[orders][status]=COMPLETED&filter[orders][deliveryType]=DELIVERY&filter[orders][signatureRequired]=false&include[orders]=user");
    $url = "https://kaspi.kz/shop/api/v2/orders?page[number]=0&page[size]=20&filter[orders][state]=ARCHIVE&filter[orders][creationDate][\$ge]=1706841836000&filter[orders][creationDate][\$le]=1707965036000&filter[orders][status]=COMPLETED&filter[orders][deliveryType]=DELIVERY&filter[orders][signatureRequired]=false&include[orders]=user";
    // $data_raw = json_decode($data, TRUE);

    // print_r(json_encode($data_raw));

    $options = array(
        'http' => array(
            // 'header' => "Authorization: Bearer " . $token
            'header' => "X-Auth-Token: y/fBA4slsti4mDq5G7m0Ok7CXY3qBxy8O30lSb2nnfE="
        )
    );
    $context = stream_context_create($options);
    $data = file_get_contents($url, false, $context);
    $data_raw = json_decode($data, TRUE);

    print_r(json_encode($data_raw));
}