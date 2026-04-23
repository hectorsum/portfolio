# Contact Form Email Setup

Your contact form is now integrated with **EmailJS** and can send emails directly to your Gmail inbox!

## ⚡ Quick Setup (5 minutes)

### 1. Create EmailJS Account
Go to [emailjs.com](https://www.emailjs.com) and sign up with your Google account.

### 2. Connect Gmail
- Click **Email Services** → **Add Service**
- Select **Gmail**
- Click **Connect Account** and authorize with your Gmail

### 3. Create Email Template
- Go to **Email Templates** → **Create New Template**
- Set **Template Name** to: `contact_form`
- Set **Subject** to: `New message from {{name}} - {{subject}}`
- Set **HTML Content** to:

```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

- Click **Save**

### 4. Get Your Credentials
Go to **Account** → **API Keys** and copy:
- **Service ID** (looks like: `service_abc123...`)
- **Public Key** (looks like: `abc123xyz...`)

### 5. Add to Your Project
Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=service_abc123...
VITE_EMAILJS_TEMPLATE_ID=contact_form
VITE_EMAILJS_PUBLIC_KEY=abc123xyz...
```

**Don't forget:** Restart your dev server after creating `.env`!

```bash
npm run dev
```

### 6. Test It!
- Go to http://localhost:5173
- Click "Contact" page
- Fill out the form and submit
- Check your Gmail inbox! 📧

## What Happens When Form is Submitted

1. Form validates all fields are filled
2. Shows "Sending..." on the button
3. Sends email via EmailJS
4. Shows success message
5. Auto-clears form
6. Success message disappears after 5 seconds

## Features

✅ Form validation (all fields required)
✅ Loading state while sending
✅ Error messages if something fails
✅ Success confirmation
✅ Auto-clear form after sending
✅ Responsive design
✅ Works in all browsers

## Security

- Your **Public Key** is safe to expose in the browser (it's meant to be)
- The key is restricted to only send via your template
- Emails only go to `sumhector@gmail.com` (hardcoded in component)

## Troubleshooting

### Emails not sending?
1. Check browser Console (F12) for error messages
2. Verify all three credentials in `.env` are correct
3. Make sure you created the `contact_form` template

### Emails going to spam?
- Check your Gmail spam folder
- Create a filter to whitelist `noreply@emailjs.com`

### Still having issues?
- Make sure `.env` is in the project root (not in src/)
- Restart dev server after adding `.env`
- Check EmailJS dashboard for any rate limits

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

2. These will be automatically loaded when you build

## Alternative Approaches

If EmailJS doesn't work for you, alternatives include:
- **Formspree** — simpler but less control
- **Netlify Forms** — if deployed on Netlify
- **Custom backend** — more control but requires server

See `EMAIL_SETUP.md` for more details.
