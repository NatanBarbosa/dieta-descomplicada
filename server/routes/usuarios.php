<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

$app = AppFactory::create();



$app->get('/usuarios/logar/{email}/{senha}', function (Request $request, Response $response, $args){
    try{
        $db = new Db();
        $db = $db->connect();

        $query = "select * from usuarios where id_usuario = :id";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':id', $args['id']);
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_OBJ);

        $response->getBody()->write(json_encode($users));
        return $response
            ->withHeader('content-type', 'application/json')
            ->withStatus(200);
    } catch (PDOException $err){
        $response->getBody()->write(json_encode(['err_msg' => $err->getMessage()]));
        return $response
            ->withHeader('content-type', 'application/json')
            ->withStatus(500);
    }
});

$app->post('/usuarios/cadastrar', function (Request $request, Response $response, $args){
    $post = $request->getParsedBody();
    $response->getBody()->write(json_encode($post));
    return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
});