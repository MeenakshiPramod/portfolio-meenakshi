# Meenakshi Pramod - AI/ML Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth scrolling, hover effects, and micro-interactions
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Performance**: Optimized for fast loading and smooth performance

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Contact Form**: EmailJS
- **Build Tool**: Vite

## 📧 EmailJS Setup

To enable the contact form functionality:

### 1. Create EmailJS Account
- Go to [EmailJS](https://emailjs.com) and create a free account
- Create a new email service (Gmail, Outlook, etc.)

### 2. Create Email Template
Create a template with these variables:
```
Subject: New message from {{from_name}} - {{subject}}

Hi Meenakshi,

You have received a new message from your portfolio:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### 3. Update Configuration
Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
const serviceId = 'your_service_id';
const templateId = 'your_template_id'; 
const publicKey = 'your_public_key';
```

### 4. Get Your Credentials
- **Service ID**: Found in EmailJS dashboard under "Email Services"
- **Template ID**: Found under "Email Templates" 
- **Public Key**: Found in "Account" > "General" > "Public Key"

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Experience timeline
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── utils/              # Utility functions
│   └── emailConfig.ts  # EmailJS configuration
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Blue tones
- **Secondary**: Gray tones  
- **Accent**: Purple tones

### Content
Update personal information in the respective component files:
- Contact details in `Contact.tsx`
- Experience in `Experience.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- Minimal bundle size with tree shaking
- Fast development with Vite

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Meenakshi Pramod