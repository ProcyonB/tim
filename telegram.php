<?php

$name = $_POST['name'];
// $name = 'testttto name';
$email = $_POST['email'];
$message = $_POST['message'];
$token = "1367300579:AAFMH2Wd284m0qy4V_Mk2KBN9OVTBnF9pzw";
$chat_id = "-472328354";
$arr = array(
  'Name: ' => "$name",
  'Email: ' => $email,
  'Message' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

function sending ($txt, $token,$chat_id){
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt},"r");
  if ($sendToTelegram){return true;}
      
  else{return false;}
}
sending($txt, $token,$chat_id);


?>