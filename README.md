# 🎭 Meme Generator

A React application that allows users to create custom memes by adding text to random meme templates and downloading them as images.

---

## 🌐 Demo

🔗 **Live Demo:** [Meme Generator](https://memepic.netlify.app/)

---

## Features

- Random meme template generation from Imgflip API
- Custom top and bottom text inputs
- Draggable text positioning (desktop and mobile support)
- Download memes as PNG images
- Real-time text updates
- Touch-friendly interface
  
 ---
## 🛠️ Installation

### Prerequisites

- Node.js **v14+**
- npm or yarn
---

## Setup
```bash
# Clone the repository
git clone https://github.com/balajixog/meme.git

# Navigate to project directory
cd meme

#install dependencies
npm install react react-dom html2canvas

# Start 
npm run dev
```

---
## Project Structure
```
meme/
├── src/
│   ├── App.jsx              # Main meme generator component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/
├── package.json
├── vite.config.js
└── README.md
```
---
## API

Uses Imgflip API: `https://api.imgflip.com/get_memes`

---

## Usage

1. Enter text in the top and bottom input fields
2. Click "Get a new meme image" for a random template
3. Drag text elements to reposition them
4. Click "download meme image" to save your creation

---   

## Technologies

- React
- html2canvas
- Imgflip API
- Pointer Events API

---
## Browser Support

Requires modern browser with ES6+, Canvas API, and Pointer Events support.

---
## Known Limitations

- Downloaded images may have quality limitations based on source template
- Text positioning resets when changing meme template
- CORS must be supported by the image source

---
## Future Enhancements

- Text size and color customization
- Font selection
- Multiple text fields
- Save favorite memes
- Share to social media
- Text stroke/outline options

---
## License

Available for educational and personal use.

---
## Acknowledgments

- Imgflip API for meme templates
- html2canvas library for image capture
- React team for the framework
