// Wait for the page to fully load before running the script
window.addEventListener('DOMContentLoaded', function() {
  
  // Get all the elements we need from the HTML
  var filterForm = document.getElementById('filterForm');
  var keywordInput = document.getElementById('keywordInput');
  var categorySelect = document.getElementById('categorySelect');
  var locationInput = document.getElementById('locationInput');
  var filterButton = document.getElementById('filterButton');
  var resetButton = document.getElementById('resetButton');
  var tableBody = document.getElementById('tableBody');
  
  // Get all the table rows (except special header rows)
  var allRows = tableBody.getElementsByTagName('tr');
  
  // Function to filter events
  function filterEvents() {
    // Get the values from the form inputs
    var keyword = keywordInput.value.toLowerCase().trim();
    var category = categorySelect.value.toLowerCase();
    var location = locationInput.value.toLowerCase().trim();
    
    // Counter to track how many events are shown
    var visibleCount = 0;
    
    // Loop through each row in the table
    for (var i = 0; i < allRows.length; i++) {
      var row = allRows[i];
      
      // Skip special header rows (like "Summer Special Events")
      if (row.classList.contains('special-header')) {
        continue; // Skip this row and go to the next one
      }
      
      // Get the event data from this row
      var cells = row.getElementsByTagName('td');
      if (cells.length === 0) {
        continue; // Skip rows without data cells
      }
      
      // Get text from each column
      var eventName = cells[0].textContent.toLowerCase();
      var eventDate = cells[1].textContent.toLowerCase();
      var eventLocation = cells[2].textContent.toLowerCase();
      var eventCost = cells[3].textContent.toLowerCase();
      
      // Get the category from the data attribute
      var eventCategory = row.getAttribute('data-category');
      if (eventCategory === null) {
        eventCategory = '';
      }
      eventCategory = eventCategory.toLowerCase();
      
      // Check if this row matches all the filter criteria
      var matchesKeyword = true;
      var matchesCategory = true;
      var matchesLocation = true;
      
      // Check keyword filter (search in event name)
      if (keyword !== '') {
        if (eventName.indexOf(keyword) === -1) {
          matchesKeyword = false;
        }
      }
      
      // Check category filter
      if (category !== 'all' && category !== '') {
        if (eventCategory !== category) {
          matchesCategory = false;
        }
      }
      
      // Check location filter
      if (location !== '') {
        if (eventLocation.indexOf(location) === -1) {
          matchesLocation = false;
        }
      }
      
      // If all filters match, show this row, otherwise hide it
      if (matchesKeyword && matchesCategory && matchesLocation) {
        row.style.display = ''; // Show the row (default display)
        visibleCount = visibleCount + 1;
      } else {
        row.style.display = 'none'; // Hide the row
      }
    }
    
    // Show a message if no events match
    if (visibleCount === 0) {
      // You could add a message here if needed
      console.log('No events match your filters');
    }
  }
  
  // Function to reset all filters and show all events
  function resetFilters() {
    // Clear all input fields
    keywordInput.value = '';
    categorySelect.value = 'all';
    locationInput.value = '';
    
    // Show all rows again
    for (var i = 0; i < allRows.length; i++) {
      var row = allRows[i];
      row.style.display = ''; // Show the row
    }
  }
  
  // Add event listeners (what happens when user clicks buttons or types)
  
  // When user clicks the Filter button
  filterButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting
    filterEvents(); // Run the filter function
  });
  
  // When user clicks the Reset button
  resetButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting
    resetFilters(); // Run the reset function
  });
  
  // Optional: Filter as user types (real-time filtering)
  // Uncomment these if you want filtering to happen while typing
  /*
  keywordInput.addEventListener('input', filterEvents);
  categorySelect.addEventListener('change', filterEvents);
  locationInput.addEventListener('input', filterEvents);
  */
  
});
