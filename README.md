# Github Language Pie Chart

A React application that visualizes programming language distribution in popular TypeScript repositories on GitHub using interactive pie charts.

## Features

- Fetches 10 most popular TypeScript repositories from GitHub
- Displays language distribution in an interactive pie chart
- Modern UI with dialog-based interface
- Real-time data visualization

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **State Management:** 
  - Jotai for global state
  - React Query for server state
- **UI Components:**
  - Radix UI primitives
  - Tailwind CSS for styling
  - Recharts for data visualization
- **Development Tools:**
  - pnpm for package management
  - ESLint for linting
  - Prettier for code formatting

## Getting Started

### Prerequisites

Make sure you have [pnpm](https://pnpm.io/) installed on your system.

### Installation

```bash
# Install dependencies
pnpm install

```

### Development

```bash
# Start development server
pnpm dev
```

This will start the development server at `http://localhost:5173`

### Building for Production

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/    # UI components
├── utils/        # Utility functions and hooks
├── lib/          # Shared libraries
└── atoms/        # Jotai atoms for state management
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.