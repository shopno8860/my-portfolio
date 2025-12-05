# Portfolio Website

A modern, fully responsive portfolio website built with React.js, Bootstrap, HTML, and JavaScript. This portfolio showcases your projects, skills, and provides a way for visitors to contact you.

## Features

- **Fully Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX**: Beautiful design with smooth animations and hover effects
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Multiple Sections**:
  - Home: Hero section with introduction
  - About Me: Personal information and statistics
  - Skills: Technical skills with progress bars
  - Projects: Project cards with GitHub links
  - Contact: Contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance Optimized**: Fast loading and efficient code

## Technologies Used

- React.js 18.2.0
- Bootstrap 5.3.2
- React Bootstrap 2.9.1
- Font Awesome 6.4.0
- Google Fonts (Poppins)

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Customization

### Personal Information

1. **Home Section** (`src/components/Home.js`):
   - Update your name, role, and description
   - Add your social media links
   - Update the CV download functionality

2. **About Section** (`src/components/About.js`):
   - Update the about text
   - Modify statistics numbers

3. **Skills Section** (`src/components/Skills.js`):
   - Update skills and proficiency levels
   - Add or remove skill categories

4. **Projects Section** (`src/components/Projects.js`):
   - Replace with your actual projects
   - Update GitHub repository URLs
   - Modify project descriptions and technologies

5. **Contact Section** (`src/components/Contact.js`):
   - Update contact information (email, phone, location)
   - Connect the form to your backend API (currently simulates submission)

### Styling

- Colors can be customized in `src/index.css` (CSS variables)
- Individual component styles are in their respective CSS files
- Bootstrap classes can be modified as needed

### SEO

Update meta tags in `public/index.html`:
- Title
- Description
- Keywords
- Author

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Navigation.css
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Contact Form Integration

The contact form currently simulates submission. To integrate with a backend:

1. Update the `handleSubmit` function in `src/components/Contact.js`
2. Replace the simulated API call with your actual endpoint
3. Handle success/error responses appropriately

Example:
```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

