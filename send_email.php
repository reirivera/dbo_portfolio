<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $to_email = "dbortiz06@gmail.com";
    $subject = "New Contact Form Submission";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";
    
    // Send email
    if(mail($to_email, $subject, $email_message)){
        echo "Your message has been sent successfully.";
    } else{
        echo "Failed to send email. Please try again later.";
    }
}
?>
