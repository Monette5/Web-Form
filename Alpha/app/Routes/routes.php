<?php

    // Creating routes

    // Psr-7 Request and Response interfaces
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;

    // ROUTE
    // 
   // $app->get('/contact', function (Request $request, Response $response, $args)   {
        //Mydex Callback
$app->get('/api/pds', function (Request $request, Response $response, $args)   {

    

        return $this->view->render($response);

    });