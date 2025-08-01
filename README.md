# AdManager - Advertising Campaign Management System

Modern web application for managing advertising campaigns with Google OAuth integration.

## 🚀 Features

- **🔐 Secure Authentication** via Google OAuth 2.0
- **📊 Dashboard** with analytics and metrics
- **🎯 Campaign Management** with detailed analytics
- **📈 Performance Monitoring** in real-time
- **🎨 Modern UI** based on Ant Design
- **📱 Responsive Design** for all devices

## 🛠 Technologies

- **React 19** - modern library for user interfaces
- **TypeScript** - typed JavaScript
- **Vite** - fast project bundler
- **Ant Design** - UI component library
- **Google OAuth 2.0** - secure authentication
- **React Router** - application routing

## 📦 Installation and Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Cloud Console project with configured OAuth 2.0

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd admanager
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
Create a `.env` file in the project root:
```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
VITE_REDIRECT_URI=http://localhost:5173
```

4. **Configure Google Cloud Console:**
   - Create a project in [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Google+ API
   - Create OAuth 2.0 Client ID of type "Web application"
   - Add `http://localhost:5173` to Authorized JavaScript origins
   - Add `http://localhost:5173` to Authorized redirect URIs

### Running

**Development mode:**
```bash
npm run dev
```

**Production build:**
```bash
npm run build
```

**Preview build:**
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── app/                    # Main application components
│   ├── App.tsx           # Root component
│   └── Layout.tsx        # Application layout
├── components/            # Reusable components
├── pages/                # Application pages
│   ├── auth/            # Authentication page
│   └── dashboard/       # Main dashboard
├── shared/              # Shared resources
│   ├── components/      # Shared components
│   ├── hooks/          # Custom hooks
│   ├── config/         # Configuration
│   └── types/          # TypeScript types
└── widgets/             # Dashboard widgets
```

## 🔐 Authentication

The application uses Google OAuth 2.0 for secure authentication:

- **Security**: All data is transmitted via HTTPS
- **Simplicity**: One-click sign-in with Google account
- **Reliability**: Uses official Google Identity Services API

## 🎨 UI/UX

- **Modern design** with gradients and shadows
- **Responsive layout** for all devices
- **Intuitive interface** with clear navigation
- **Fast loading** thanks to Vite optimization

## 🔧 Development

### Available Scripts

- `npm run dev` - run in development mode
- `npm run build` - build for production
- `npm run preview` - preview build
- `npm run lint` - code checking

### Component Structure

- **AuthProvider** - authentication state management
- **GoogleOAuthProvider** - Google OAuth integration
- **ProtectedRoute** - protected routes
- **Layout** - main application layout

## 🚀 Deployment

### Production Preparation

1. **Update environment variables:**
```env
VITE_GOOGLE_CLIENT_ID=your-production-client-id
VITE_REDIRECT_URI=https://your-domain.com
```

2. **Configure Google Cloud Console:**
   - Add your domain to Authorized JavaScript origins
   - Add your domain to Authorized redirect URIs

3. **Build the project:**
```bash
npm run build
```

### Deployment Platforms

- **Vercel** - recommended platform
- **Netlify** - alternative option
- **GitHub Pages** - for static sites

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Create a Pull Request

## 📞 Support

If you have questions or issues:

1. Check [Google OAuth documentation](https://developers.google.com/identity/protocols/oauth2)
2. Make sure Google Cloud Console settings are correct
3. Check browser console for errors

---

**AdManager** - modern solution for advertising campaign management 🚀 