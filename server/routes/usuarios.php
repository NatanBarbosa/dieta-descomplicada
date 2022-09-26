<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

$app = AppFactory::create();

$app->get('/usuarios/all', function (Request $request, Response $response){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://jsonplaceholder.typicode.com/users/");
    $users = curl_exec($curl);

    $response->getBody()->write(json_encode($users));
    return $response->withHeader('content-type', 'application/json');

    curl_close($curl);
});