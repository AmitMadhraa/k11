# Snake Plants Website

A modern website for Snake Plants built with 11ty, TailwindCSS, and Nunjucks templates.

## Features

- Responsive design
- Modern UI with TailwindCSS
- Fast static site generation with 11ty
- SEO-friendly
- Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd K11
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080`

### Building for Production

To build the site for production:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
K11/
├── src/
│   ├── _includes/      # Reusable components
│   ├── _layouts/       # Base layouts
│   ├── assets/         # Static assets
│   │   ├── images/
│   │   └── js/
│   └── styles/         # CSS files
├── .eleventy.js        # 11ty configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
