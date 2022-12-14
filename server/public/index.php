<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../config/Db.php';

$app = AppFactory::create();

//Configurar o Cors
require __DIR__ . '/../config/cors.php';

$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Olá!");
    return $response;
});

//rota para usuários
require __DIR__ . '/../routes/usuarios.php';

$app->run();