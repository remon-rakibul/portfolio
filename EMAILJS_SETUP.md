# EmailJS Setup Instructions

The contact form uses EmailJS to send emails. To enable email functionality, you need to:

1. **Create an EmailJS account** at https://www.emailjs.com/

2. **Create an Email Service**:
   - Go to Email Services in your EmailJS dashboard
   - Add a new service (e.g., Gmail)
   - Follow the setup instructions

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template named "template_contact"
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Set the "To Email" field to: `remon.rakibul.star@gmail.com`

4. **Get your Public Key**:
   - Go to Account > API Keys
   - Copy your Public Key

5. **Set Environment Variables**:
   Create a `.env` file in the root directory with:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Update the contact component** if you used different names for your service or template.

Alternatively, you can hardcode these values directly in `src/components/contact.tsx` (not recommended for production).

Note: The contact form will show an error message if EmailJS is not configured, but users can still see your direct email address.
