# ROIable - Advertising Campaign Management System

A modern React-based dashboard for managing advertising campaigns across multiple platforms (Meta Ads, Google Ads, TikTok Ads) with AI-powered insights and recommendations.

## Features

- **Multi-Platform Integration**: Connect and manage campaigns from Meta Ads, Google Ads, and TikTok Ads
- **AI-Powered Insights**: Get intelligent recommendations for campaign optimization
- **Real-time Analytics**: Monitor performance metrics across all platforms
- **Campaign Management**: Create, edit, and optimize campaigns from one dashboard
- **Performance Tracking**: Track ROI, CTR, CPC, and other key metrics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Secure Authentication**: Firebase Authentication with Google OAuth and email verification
- **Email Verification**: Automatic email verification for new users

## Tech Stack

- **Frontend**: React 19, TypeScript, Material-UI
- **Build Tool**: Vite
- **Authentication**: Firebase Authentication with Google OAuth
- **Charts**: Recharts
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/roiable.git
cd roiable
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Follow the instructions in [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
   - Create a Firebase project and configure authentication

4. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
```env
# Google OAuth (Firebase)
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173`

## Authentication Features

### Firebase Authentication
- **Google OAuth**: Secure sign-in with Google accounts
- **Email Verification**: Automatic email verification for new users
- **User Management**: Firebase handles user sessions and data
- **Security**: Built-in security features from Firebase

### New User Experience
- Welcome message for first-time users
- Automatic email verification request
- Ability to resend verification emails
- Status tracking for email verification

## Project Structure

```
src/
├── app/                    # App-level components
├── components/             # Reusable UI components
│   ├── EmailVerification.tsx  # Email verification component
│   └── WelcomeMessage.tsx     # Welcome message for new users
├── pages/                  # Page components
├── shared/                 # Shared utilities and hooks
│   ├── config/            # Configuration files
│   │   └── firebase.ts    # Firebase configuration
│   ├── hooks/             # Custom React hooks
│   │   └── useAuth.tsx    # Authentication hook
│   ├── types/             # TypeScript type definitions
│   │   └── firebase.d.ts  # Firebase types
│   └── ui/                # UI components
└── widgets/               # Dashboard widgets
```

## Firebase Setup

See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed instructions on setting up Firebase Authentication.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please open an issue on GitHub.

---

**ROIable** - modern solution for advertising campaign management 🚀 