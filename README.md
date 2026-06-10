# Elementum Website

A modern, fully responsive website built with **React**, **Vite**, and **Tailwind CSS**. Elementum delivers a seamless digital experience with engaging components, smooth animations, and optimized performance.

## 🚀 Features

- ⚡ **Lightning-fast** with Vite bundler
- 📱 **Fully responsive** design (mobile, tablet, desktop)
- 🎨 **Tailwind CSS** for modern styling
- 🔄 **HMR (Hot Module Replacement)** for instant dev updates
- ♿ **Accessible** and SEO-friendly
- 📊 **Performance optimized**
- 🎯 **Clean, maintainable code structure**

## 📋 Tech Stack

- **React 18+** - UI library
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript/JSX** - Programming language
- **ESLint** - Code quality tool

## 🏗️ Project Structure

```
elementum-website/
├── src/
│   ├── components/
│   │   ├── Services.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Header.jsx
│   │   └── ...other components
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd elementum-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

4. **Build for production**

```bash
npm run build
```

5. **Preview production build**

```bash
npm run preview
```

## 📦 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Create optimized production build |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint checks                 |

## 🎨 Customization

### Tailwind CSS Configuration

Edit `tailwind.config.js` to customize:

- Colors
- Spacing
- Typography
- Responsive breakpoints

### Colors Used

- **Primary Green**: `#a3e635`
- **Accent Red/Coral**: `#ff6b6b`
- **Dark Gray**: `#1f2937`, `#111827`
- **Light Gray**: `#f9fafb`, `#e5e7eb`

## 📱 Responsive Breakpoints

| Breakpoint | Min Width |
| ---------- | --------- |
| `sm`       | 640px     |
| `md`       | 768px     |
| `lg`       | 1024px    |
| `xl`       | 1280px    |
| `2xl`      | 1536px    |

## 🔍 Key Components

### Services

Displays service offerings with interactive hover effects and responsive layout.

**File**: `src/components/Services.jsx`

### Newsletter

Subscribe section with footer containing multiple resource links and company info.

**File**: `src/components/Newsletter.jsx`

### Header/Navigation

Responsive navigation bar with mobile menu support.

**File**: `src/components/Header.jsx`

## 🚀 Performance Optimization

- ✅ Code splitting with Vite
- ✅ Image optimization
- ✅ CSS purging with Tailwind
- ✅ Lazy loading components
- ✅ Minified production build

## 🐛 Common Issues & Solutions

### Issue: Page elements misaligned

**Solution**:

- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`npm run dev`)
- Check for conflicting CSS in `index.css`

### Issue: Tailwind styles not applying

**Solution**:

- Ensure `tailwind.config.js` includes correct content paths
- Rebuild: `npm run build`
- Verify class names are typed correctly

### Issue: Slow development server

**Solution**:

- Clear node_modules: `rm -rf node_modules && npm install`
- Update Vite: `npm update vite`

## 📖 Documentation Links

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite React Plugin](https://github.com/vitejs/vite-plugin-react)

## 🔐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 📄 License

This project is licensed under the **MIT License**.

## 👨‍💻 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For issues, feature requests, or questions:

- Open an issue on GitHub
- Contact: support@elementum.com

## 🎯 Roadmap

- [ ] Add dark mode support
- [ ] Implement animations library
- [ ] Add form validation
- [ ] Create blog section
- [ ] Integrate analytics
- [ ] Add multi-language support

---

**Made with ❤️ by Elementum Team**
