# website
Website for Waybionic

## Contact Form Setup

The contact form requires SMTP configuration to send emails. To set this up:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Configure the SMTP settings in `.env.local` with your email provider details:
   - `SMTP_HOST`: SMTP server hostname (e.g., smtp.gmail.com)
   - `SMTP_PORT`: SMTP port (465 for SSL, 587 for TLS)
   - `SMTP_USER`: SMTP username (usually your email)
   - `SMTP_PASS`: SMTP password or app-specific password
   - `SMTP_SECURE`: Set to "true" for port 465, leave unset for port 587
   - `CONTACT_TO`: Email address to receive contact form submissions
   - `CONTACT_FROM`: (Optional) From address for emails

### Gmail Configuration Example

For Gmail, you'll need to:
1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password at https://myaccount.google.com/apppasswords
3. Use these settings:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-specific-password
   ```

**Note**: The contact form currently has no rate limiting. Consider implementing additional protection (e.g., CAPTCHA) before deploying to production to prevent spam and abuse.

