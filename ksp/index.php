<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request Page</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <input type="text" id="tokenInput" placeholder="X-Auth-Token">
        <button onclick="makeRequest()">Request</button>
        <div id="responseBlock"></div>
    </div>
    <script src="./script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</body>
</html>
