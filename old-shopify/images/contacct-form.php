<style>
/* Form Container Styling */
.contact-form-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 25px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Form Header */
.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.form-header h3 {
    color: #333;
    font-size: 24px;
    margin-bottom: 8px;
    font-weight: 600;
}

.form-header p {
    color: #666;
    font-size: 15px;
    margin: 0;
}

/* Form Styling */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Form Group */
.form-group {
    position: relative;
    width: 100%;
}

/* Input Fields */
.form-control {
    width: 100%;
    padding: 16px 15px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: white;
    box-sizing: border-box;
    transition: all 0.3s ease;
    color: #333;
}

.form-control:focus {
    outline: none;
    border-color: #990b6e;
    box-shadow: 0 0 0 3px rgba(153, 11, 110, 0.1);
}

/* Placeholder styling */
.form-control::placeholder {
    color: #888;
    opacity: 1;
}

/* Textarea specific */
.form-control.message {
    min-height: 150px;
    resize: vertical;
    font-family: inherit;
    line-height: 1.5;
}

/* Submit Button */
.submit-btn {
    background-color: #990b6e;
    color: white;
    border: none;
    padding: 16px 30px;
    font-size: 17px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 10px;
    width: 100%;
}

.submit-btn:hover {
    background-color: #870a61;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(153, 11, 110, 0.2);
}

.submit-btn:active {
    transform: translateY(0);
}

.submit-btn:disabled {
    background-color: #b5b5b5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

/* Status Messages */
.form-status {
    padding: 12px 15px;
    border-radius: 6px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 500;
    display: none;
}

.form-status.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    display: block;
}

.form-status.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    display: block;
}

/* Loading indicator */
.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    margin-right: 8px;
    vertical-align: middle;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .contact-form-wrapper {
        padding: 20px;
    }
    
    .form-header h3 {
        font-size: 22px;
    }
    
    .form-control {
        padding: 14px 12px;
        font-size: 15px;
    }
    
    .submit-btn {
        padding: 14px 20px;
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    .contact-form-wrapper {
        padding: 15px;
    }
    
    .form-header h3 {
        font-size: 20px;
    }
    
    .form-header p {
        font-size: 14px;
    }
}
</style>

<div class="contact-form-wrapper">
    <div class="form-header">
        <h3>Contact Us</h3>
        <p>Get in touch with us. We'll respond as soon as possible.</p>
    </div>
    
    <div class="form-status" id="formStatus"></div>
    
    <form class="contact-form" id="elementorContactForm">
        <div class="form-group">
            <input type="text" class="form-control" name="name" placeholder="Your Name" required>
        </div>
        
        <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="Your Email Address" required>
        </div>
        
        <div class="form-group">
            <input type="text" class="form-control" name="subject" placeholder="Subject" required>
        </div>
        
        <div class="form-group">
            <textarea class="form-control message" name="message" placeholder="Your Message" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn" id="submitBtn">
            Send Message
        </button>
    </form>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('elementorContactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const originalBtnText = submitBtn.innerHTML;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const subject = contactForm.querySelector('input[name="subject"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();
        
        if (!name || !email || !subject || !message) {
            showStatus('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showStatus('Please enter a valid email address.', 'error');
            return;
        }
        
        // Disable submit button and show loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        
        // Prepare form data
        const formData = new FormData();
        formData.append('action', 'elementor_contact_form');
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        
        // Send AJAX request to WordPress
        fetch('<?php echo admin_url("admin-ajax.php"); ?>', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showStatus(data.message, 'success');
                contactForm.reset();
            } else {
                showStatus(data.message || 'There was an error sending your message. Please try again.', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showStatus('There was a network error. Please try again.', 'error');
        })
        .finally(() => {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        });
    });
    
    function showStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = 'form-status ' + type;
        
        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
</script>

<?php
// This PHP code needs to be added to your theme's functions.php file
// or using a code snippets plugin for the form to work properly

add_action('wp_ajax_elementor_contact_form', 'handle_elementor_contact_form');
add_action('wp_ajax_nopriv_elementor_contact_form', 'handle_elementor_contact_form');

function handle_elementor_contact_form() {
    // Security check - nonce verification (optional but recommended)
    // if (!wp_verify_nonce($_POST['nonce'], 'elementor_contact_nonce')) {
    //     wp_send_json_error('Security check failed');
    // }
    
    // Get form data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $subject = sanitize_text_field($_POST['subject']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Basic validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        wp_send_json_error('All fields are required.');
    }
    
    if (!is_email($email)) {
        wp_send_json_error('Please provide a valid email address.');
    }
    
    // Get admin email
    $admin_email = get_option('admin_email');
    
    // Email headers
    $headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . $name . ' <' . $email . '>',
        'Reply-To: ' . $name . ' <' . $email . '>'
    );
    
    // Email subject
    $email_subject = "New Contact Form Message: " . $subject;
    
    // Email body
    $email_body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #990b6e; color: white; padding: 15px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #990b6e; display: inline-block; width: 80px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <div class='field'><span class='label'>Name:</span> $name</div>
                <div class='field'><span class='label'>Email:</span> $email</div>
                <div class='field'><span class='label'>Subject:</span> $subject</div>
                <div class='field'><span class='label'>Message:</span><br>$message</div>
                <div class='field'><span class='label'>Date:</span> " . date('F j, Y, g:i a') . "</div>
                <div class='field'><span class='label'>IP Address:</span> " . $_SERVER['REMOTE_ADDR'] . "</div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Send email
    $sent = wp_mail($admin_email, $email_subject, $email_body, $headers);
    
    if ($sent) {
        wp_send_json_success('Thank you! Your message has been sent successfully.');
    } else {
        wp_send_json_error('There was an error sending your message. Please try again later.');
    }
}