<?php
if( isset($_POST['pnombre']) && isset($_POST['snombre']) && isset($_POST['correo']) && isset($_POST['telefono']) && isset($_POST['pais']) && isset($_POST['iservicio']) && isset($_POST['cservicio']) && isset($_POST['bservicio']) && isset($_POST['aservicio']) && isset($_POST['eproducto']) && isset($_POST['mproducto']) && isset($_POST['m'])  ){
	$pnombre = $_POST['pnombre']; // HINT: use preg_replace() to filter the data
	$snombre = $_POST['snombre'];
	$correo = $_POST['correo'];
	$telefono = $_POST['telefono'];
	$pais = $_POST['pais'];
	$iservicio = $_POST['iservicio'];
	$cservicio = $_POST['cservicio'];
	$bservicio = $_POST['bservicio'];
	$aservicio = $_POST['aservicio'];
	$eproducto = $_POST['eproducto'];
	$mproducto = $_POST['mproducto'];
	$m = nl2br($_POST['m']);
	$to = "achuryjaramillo@gmail.com";	
	$from = $correo;
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$pnombre.' <br><b>Email:</b> '.$correo.' <p>'.$m.'</p>' ;
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>