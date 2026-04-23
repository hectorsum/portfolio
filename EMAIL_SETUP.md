# Email Setup Guide (EmailJS)

Your contact form can send emails directly to your Gmail inbox using EmailJS—no backend server needed!

## Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up with your Google account or email
3. Verify your email

## Step 2: Add Gmail as Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Click **Connect Account**
5. Sign in with your Gmail account (sumhector@gmail.com)
6. Authorize EmailJS to send emails
7. Copy your **Service ID** (looks like: `service_xxxxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Fill in:
   - **Template Name**: `contact_form` (or any name)
   - **Subject**: `New message from {{name}} - {{subject}}`
   - **HTML Content**:
   ```html
   <h2>New Contact Form Submission</h2>
   <p><strong>Name:</strong> {{name}}</p>
   <p><strong>Email:</strong> {{email}}</p>
   <p><strong>Subject:</strong> {{subject}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>
   ```
4. Click **Save**
5. Copy your **Template ID** (looks like: `template_xxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Add Credentials to Your App

Create a file: `src/config/emailjs.js`

```javascript
export const emailConfig = {
  SERVICE_ID: 'service_xxxxxxxxx',      // Replace with your Service ID
  TEMPLATE_ID: 'contact_form',           // Replace with your Template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your Public Key
};
```

## Step 6: Test It!

1. Run `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your Gmail inbox!

## Important Security Notes

- ⚠️ Your Public Key will be visible in the browser (this is OK, it's meant to be public)
- The Public Key is restricted to only send emails via your template
- For production, consider environment variables:

```javascript
// Use environment variables instead:
export const emailConfig = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
```

Then create a `.env` file:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=contact_form
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

## Troubleshooting

**Form won't send?**
- Check Console (F12) for error messages
- Verify Service ID, Template ID, and Public Key are correct
- Make sure Gmail account is authorized in EmailJS

**Emails going to spam?**
- Check your Gmail spam folder
- Add "noreply@emailjs.com" to your contacts

**Template variables not working?**
- Make sure template uses `{{variableName}}` format
- Check spelling matches form field names exactly
