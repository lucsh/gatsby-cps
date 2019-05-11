<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection
    // Added hidden input field to prevent SPAM
    // Added Russian filter

    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    function isRussian($text) {
        return preg_match('/[Ð-Ð¯Ð°-ÑÐÑ‘]/u', $text);
    }

    // Only process POST reqeusts and verify if field is empty && is not russian
    if (($_SERVER["REQUEST_METHOD"] == "POST") && empty($_POST['address']) && !isRussian($_POST['message'])) {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
                $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $company = strip_tags(trim($_POST["company"]));
                $company = str_replace(array("\r","\n"),array(" "," "),$company);
        $message = trim($_POST["message"]);


        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Data not valid, sorry";
            exit;
        }

        // Set the recipient email address.

        $recipient = "info@cpsamericas.com";

        // Set the email subject.
        $subject = "New contact from: $name - $company";

        // Build the email content.
        $email_content = "Name: $name - $company\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Response email
        $response_email_content = file_get_contents('thanks.html');
        $response_email_to = "$name <$email>";
        $response_email_subject = "Thanks for you message";

        // content-type
        $response_email_headers = "MIME-Version: 1.0" . "\r\n";
        $response_email_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $response_email_headers .= 'From: CPS <hello@cps.com>' . "\r\n";


        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            // http_response_code(200);
            echo "Thanks! you email was sent";
            mail($response_email_to,$response_email_subject,$response_email_content,$response_email_headers);
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Something happend, sorry";
        }
    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Not a POST request, sorry";
    }

?>
