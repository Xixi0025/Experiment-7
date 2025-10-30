# Dynamic Content Filtering - Experiment 7

A real-time search and filter application demonstrating JavaScript array methods and DOM manipulation for dynamic content filtering.

## Project Overview

This project implements a functional search interface where users can filter through a list of movies and products in real-time. As you type in the search input, the list updates instantly to display only matching items, showcasing practical use of JavaScript's `filter()` and `includes()` methods.

## Features

- **Real-Time Filtering**: Results update instantly as you type (case-insensitive)
- **Array Methods**: Uses JavaScript `filter()` and `includes()` for efficient searching
- **Result Counter**: Displays the number of items found
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **User-Friendly UI**: Clean, modern interface with smooth animations and hover effects
- **Empty State Handling**: Shows "No results found" when search yields no matches

## How to Use

1. **Open the Application**: Open `index.html` in any modern web browser
2. **Search**: Type in the search input field at the top
3. **View Results**: The item list automatically filters to show matching products and movies
4. **Clear Search**: Clear the input field to view all items again

### Example Searches

- Type "matrix" to find "The Matrix"
- Type "phone" to find "iPhone 15"
- Type "air" to find "Interstellar", "iPad Air", and "AirPods Pro"
- Type "dark" to find "The Dark Knight"

## How to Run

### Locally on Your Computer

1. Clone or download this repository
2. Navigate to the project folder
3. Double-click `index.html` or right-click and select "Open with Browser"
4. The application will load immediately in your browser

### Using a Local Server (Optional)

If you prefer to run with a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using VS Code Live Server
# Install the "Live Server" extension and right-click index.html → "Open with Live Server"
```

Then navigate to `http://localhost:8000` in your browser.

## File Structure

```
├── index.html       # HTML structure and item list
├── style.css        # Styling and responsive design
├── script.js        # JavaScript filtering logic
└── README.md        # This file
```

## Technical Details

- **HTML5**: Semantic markup for search interface and list container
- **CSS3**: Flexbox layout, transitions, and responsive design
- **JavaScript (ES6)**: Array methods (filter, includes), event listeners, DOM manipulation

### Key Code Snippet

```javascript
function filterItems() {
  const searchValue = searchInput.value.toLowerCase();
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );
  displayItems(filtered);
}
```

## Browser Compatibility

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learning Outcomes

This experiment demonstrates:
- ✅ Working with JavaScript arrays and array methods
- ✅ Real-time DOM updates based on user input
- ✅ Event-driven programming
- ✅ String methods (toLowerCase, includes)
- ✅ Responsive web design principles

