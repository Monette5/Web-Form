<?php

namespace App\Controllers;

class APIController
{
    public function mydexCallBack($request, $response){
        $data = $request->getParsedBody();
        /** @var Container $this */
       /** @var LoggerInterface $logger */
    //    $logger = $this->container->get('logger');
    //    $logger->error($data);


       // log the user 
    }

    public function mydexPut($request, $response){
        $URL_REF = parse_url($_SERVER['HTTP_REFERER']);
        $URL_REF_HOST =   $URL_REF['host'];
    
        $_SERVER['REQUEST_URI'];
        echo($URL_REF_HOST);
    
    
        echo "This is a test";
    }


}