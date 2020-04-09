<?php

    // Creating routes

    // Psr-7 Request and Response interfaces
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;


    // HOME ROUTE
    // 
    $app->get('/', function (Request $request, Response $response, $args)   {

        $vars = [
            'page' => [
            'title' => 'Welcome.',
            'description' => 'Welcome to the official page of Alpha'
            ],
        ];  


        return $this->view->render($response, 'home.twig', $vars);

    })->setName('home');




    // ABOUT ROUTE
    // 
/*     $app->get('/about', function (Request $request, Response $response, $args)   {

        $vars = [
            'page' => [
            'title' => 'About Us',
            'description' => 'We\'re a multi-national company specialized in high tech and robotics.'
            ],
        ];  

        return $this->view->render($response, 'about.twig', $vars);

    })->setName('about');

 */



    // ROUTE
    // 
   // $app->get('/contact', function (Request $request, Response $response, $args)   {
        //Mydex Callback
$app->get('/api/pds', function (Request $request, Response $response, $args)   {

    

        return $this->view->render($response);

    });