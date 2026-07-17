# Photographer Portfolio Website

A React + Vite portfolio website for adventure photography.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React icons

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Create your local env file:

```bash
cp .env.example .env
```

3. Update variables in `.env` (example below).

## Environment Variables

Use these variables in `.env`:

```env
VITE_PERSONAL_EMAIL=yourname@example.com
VITE_CONTACT_EMAIL=yourname@example.com
VITE_CONTACT_PHONE=+66 81 234 5678
VITE_CONTACT_LOCATION=City, Country
VITE_CONTACT_INSTAGRAM_URL=https://instagram.com/yourprofile
VITE_CONTACT_WEBSITE_URL=https://yourwebsite.com
VITE_CONTACT_X_URL=https://x.com/yourprofile
VITE_WEB3FORMS_ACCESS_KEY=
```

Notes:
- `VITE_PERSONAL_EMAIL`: main personal inbox shown in the contact section.
- `VITE_CONTACT_EMAIL`: fallback contact email for display.
- `VITE_CONTACT_PHONE`: phone number shown in contact section.
- `VITE_CONTACT_LOCATION`: location text shown in contact section.
- `VITE_CONTACT_INSTAGRAM_URL`: first social icon URL.
- `VITE_CONTACT_WEBSITE_URL`: second social icon URL.
- `VITE_CONTACT_X_URL`: third social icon URL.
- `VITE_WEB3FORMS_ACCESS_KEY`: required for contact form submission.

## Available Scripts

- Start development server:

```bash
npm run dev
```

- Build production assets:

```bash
npm run build
```

- Preview production build:

```bash
npm run preview
```

- Run linting:

```bash
npm run lint
```

## How Contact Form Works Now

Current behavior is Web3Forms API submission.

- The form collects name, email, service, and message.
- On submit, it sends data directly to Web3Forms.
- Success or error feedback is shown in the form.

## Web3Forms Setup (No Custom Backend)

This project uses Web3Forms by default:

1. Create an account at Web3Forms and generate an access key.
2. Put the key in `.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

3. Contact form submits to:

```text
https://api.web3forms.com/submit
```

4. Send payload fields:

- `access_key`
- `name`
- `email`
- `message`
- optional: `subject`, `botcheck`, `from_name`

5. Rebuild and deploy.

Example JSON payload:

```json
{
	"access_key": "YOUR_KEY",
	"name": "John Doe",
	"email": "john@example.com",
	"message": "Hello, I want to book a shoot.",
	"subject": "New Portfolio Inquiry"
}
```

## Deployment

Build first:

```bash
npm run build
```

Then deploy the `dist/` directory to your host (Netlify, Vercel, static hosting, etc.).

## Troubleshooting

- If styles look wrong, restart dev server after env/config changes.
- If using Web3Forms, verify your access key and destination email in Web3Forms dashboard.
