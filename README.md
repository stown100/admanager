# ROIable - Advertising Campaign Management System

A modern React-based dashboard for managing advertising campaigns across multiple platforms (Meta Ads, Google Ads, TikTok Ads) with AI-powered insights and recommendations.

## Features

- **Multi-Platform Integration**: Connect and manage campaigns from Meta Ads, Google Ads, and TikTok Ads
- **AI-Powered Insights**: Get intelligent recommendations for campaign optimization
- **Real-time Analytics**: Monitor performance metrics across all platforms
- **Campaign Management**: Create, edit, and optimize campaigns from one dashboard
- **Performance Tracking**: Track ROI, CTR, CPC, and other key metrics
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: React 19, TypeScript, Material-UI
- **Build Tool**: Vite
- **Authentication**: Google OAuth 2.0, Facebook Login
- **Charts**: Recharts
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

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

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
```
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_FACEBOOK_APP_ID=your_facebook_app_id
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── app/                    # App-level components
├── components/             # Reusable UI components
├── pages/                  # Page components
├── shared/                 # Shared utilities and hooks
│   ├── api/               # API services
│   ├── config/            # Configuration files
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   └── ui/                # UI components
└── widgets/               # Dashboard widgets
```

## Authentication Setup

### Google OAuth 2.0
See [GOOGLE_OAUTH_SETUP.md](./GOOGLE_OAUTH_SETUP.md) for detailed instructions.

### Facebook Login
See [FACEBOOK_APP_SETUP.md](./FACEBOOK_APP_SETUP.md) for detailed instructions.

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