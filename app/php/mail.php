<?php

$recepient = "tohahagenn@mail.ru";
$sitename = "Crystaldance.ru";

$name = trim($_GET["name"]);
$surname = trim($_GET["surname"]);
$email = trim($_GET["e-mail"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nФамилия: $surname \nEmail: $email \nТелефон: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");