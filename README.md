# ChatSites MVP

## 🚀 Overview

ChatSites is an AI-powered chat assistant platform designed to enhance user engagement and streamline business communication. This MVP (Minimum Viable Product) serves as a foundation for interactive, voice-first, and text-based AI assistants integrated seamlessly into websites.

## 📂 Project Structure

```
chat-sites-mvp/
│── app/                    # Application-level logic (if using Next.js App Router)
│── components/             # Reusable React components
│── public/                 # Static assets (icons, images, etc.)
│── styles/                 # Global styles (Tailwind CSS, custom styles)
│── pages/                  # Next.js page components (if using Pages Router)
│── .gitignore              # Git ignore file
│── next.config.ts          # Next.js configuration
│── tailwind.config.ts      # Tailwind CSS configuration
│── package.json            # Project dependencies and scripts
│── tsconfig.json           # TypeScript configuration
│── README.md               # Project documentation
```

## 🛠️ Tech Stack

- **Next.js** - React-based framework for SSR and SSG
- **TypeScript** - Static typing for improved code reliability
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Hooks** - State and effect management
- **Vercel** - Deployment and hosting

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rjewett459/chat-sites-mvp.git
cd chat-sites-mvp
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the app.

### 4️⃣ Build for Production

```bash
npm run build
npm start
```

## ✨ Features

- **Draggable Chat Bubble & Interface**: Interactive chat assistant that can be moved across the screen.
- **AI-Powered Conversations**: Integrated chatbot functionality.
- **Toggle Switch for Text & Voice**: Users can switch between text-based and voice-enabled interaction.
- **Dark Mode Support**: The application adapts to dark/light modes.
- **Mobile-First Design**: Fully responsive UI for various devices.

## 📌 Environment Variables

Ensure you have a `.env.local` file for storing API keys and other secrets:

```bash
NEXT_PUBLIC_API_URL=https://your-api-endpoint.com
NEXT_PUBLIC_CHATBOT_ID=your-chatbot-id
```

## 🚀 Deployment

### Deploy on **Vercel**

```bash
vercel
```

Or manually via Vercel dashboard by connecting the GitHub repository.

## 🛠️ Troubleshooting

- **Tailwind Not Working?** Ensure Tailwind directives are included in `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- **GitHub Repository Not Updating?**

```bash
git pull origin main
git add .
git commit -m "Updated changes"
git push origin main
```

## 👥 Contributors

- **Rick Jewett** - Co-Founder, AI Systems Development & Innovator
- **Jimmy Pavlatos** - Co-Founder, Marketing & MicroSaaS Development
- **ChatSites Team** - AI & Web Development

## 📜 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 📞 Contact

For support, reach out via:

- **Website**: [ChatSites.ai](https://chatsites.ai/)
- **Email**: [info@chatsites.ai](mailto\:info@chatsites.ai)
- **GitHub Issues**: [Report a Bug](https://github.com/rjewett459/chat-sites-mvp/issues)

