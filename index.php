<?php

require __DIR__ . '/vendor/autoload.php';

$authy_api = new Authy\AuthyApi('8jQ7xUdYP0CVs2tR14hIJJeuTJU75XVs');

$response = $authy_api->phoneVerificationStart('9377942288', '98', 'sms', 'en');
var_dump($response->message());
//$response = $authy_api->phoneVerificationCheck('9377942288', '98', '3583');

//var_dump($response->ok());


/**
 *
 * Created by PhpStorm.
 * User: yms
 * Date: 3/4/17
 * Time: 11:29 PM
 */