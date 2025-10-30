// Data array containing movies and products
const items = [
  { name: "The Matrix", category: "Movie" },
  { name: "Inception", category: "Movie" },
  { name: "Interstellar", category: "Movie" },
  { name: "The Dark Knight", category: "Movie" },
  { name: "Avengers: Endgame", category: "Movie" },
  { name: "Dune", category: "Movie" },
  { name: "Avatar", category: "Movie" },
  { name: "Oppenheimer", category: "Movie" },
  { name: "Tenet", category: "Movie" },
  { name: "Pulp Fiction", category: "Movie" },
  { name: "The Godfather", category: "Movie" },
  { name: "Forrest Gump", category: "Movie" },
  { name: "iPhone 15", category: "Product" },
  { name: "AirPods Pro", category: "Product" },
  { name: "MacBook Pro", category: "Product" },
  { name: "iPad Air", category: "Product" },
  { name: "Apple Watch", category: "Product" },
  { name: "Sony WH-1000XM4", category: "Product" },
  { name: "Samsung Galaxy S24", category: "Product" },
  { name: "Dell XPS 13", category: "Product" },
  { name: "Canon EOS R5", category: "Product" },
  { name: "DJI Air 3", category: "Product" }
];

// DOM element references
const searchInput = document.getElementById('searchInput');
const itemsContainer = document.getElementById('itemsContainer');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const clearBtn = document.getElementById('clearBtn');

/**
 * Renders the filtered items to the DOM
 * @param {Array} itemsToDisplay - Array of items to display
 */
function renderItems(itemsToDisplay) {
  // Clear existing items
  itemsContainer.innerHTML = '';

  // Check if there are items to display
  if (itemsToDisplay.length === 0) {
    noResults.classList.remove('hidden');
    resultsCount.textContent = '0 results found';
    return;
  }

  // Hide no results message
  noResults.classList.add('hidden');

  // Update results count
  const resultText = itemsToDisplay.length === 1 ? 'result' : 'results';
  resultsCount.textContent = `${itemsToDisplay.length} ${resultText} found`;

  // Create and append item cards
  itemsToDisplay.forEach(item => {
    const itemCard = createItemCard(item);
    itemsContainer.appendChild(itemCard);
  });
}

/**
 * Creates a DOM element for an item card
 * @param {Object} item - Item object with name and category
 * @returns {HTMLElement} - Item card element
 */
function createItemCard(item) {
  const card = document.createElement('div');
  card.className = 'item-card';

  const header = document.createElement('div');
  header.className = 'item-header';

  const name = document.createElement('h3');
  name.className = 'item-name';
  name.textContent = item.name;

  const category = document.createElement('span');
  category.className = `item-category ${item.category.toLowerCase()}`;
  category.textContent = item.category;

  header.appendChild(name);
  header.appendChild(category);
  card.appendChild(header);

  return card;
}

/**
 * Filters items based on search query
 * Uses filter() and includes() array methods for case-insensitive matching
 * @param {string} query - Search query from input field
 * @returns {Array} - Filtered array of items
 */
function filterItems(query) {
  // If query is empty, return all items
  if (!query.trim()) {
    return items;
  }

  // Convert query to lowercase for case-insensitive comparison
  const lowerQuery = query.toLowerCase();

  // Use filter() method to filter items
  // Use includes() method for partial text matching
  const filteredItems = items.filter(item => {
    const itemName = item.name.toLowerCase();
    const itemCategory = item.category.toLowerCase();
    
    // Check if query matches name or category
    return itemName.includes(lowerQuery) || itemCategory.includes(lowerQuery);
  });

  return filteredItems;
}

/**
 * Handles search input events
 * Filters and renders items in real-time
 */
function handleSearch() {
  const query = searchInput.value;
  
  // Show or hide clear button
  if (query.length > 0) {
    clearBtn.classList.add('visible');
  } else {
    clearBtn.classList.remove('visible');
  }

  // Filter items using the filter function
  const filteredItems = filterItems(query);

  // Render the filtered items
  renderItems(filteredItems);
}

/**
 * Clears the search input and resets the display
 */
function clearSearch() {
  searchInput.value = '';
  clearBtn.classList.remove('visible');
  searchInput.focus();
  renderItems(items);
}

/**
 * Initializes the application
 * Sets up event listeners and displays initial items
 */
function init() {
  // Add input event listener for real-time filtering
  searchInput.addEventListener('input', handleSearch);

  // Add click event listener to clear button
  clearBtn.addEventListener('click', clearSearch);

  // Display all items initially
  renderItems(items);

  // Focus the search input on page load
  searchInput.focus();
}

// Initialize the application when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}