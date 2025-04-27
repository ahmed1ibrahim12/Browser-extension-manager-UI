document.addEventListener('DOMContentLoaded', function() {
  let extensions = [];
  const container = document.getElementById('extensions-container');
  const filterButtons = document.querySelectorAll('.filter-button');
  let currentFilter = 'all';

  // Load data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      extensions = data.map((ext, index) => ({ ...ext, originalIndex: index }));
      applyFilter(currentFilter);
      // Set 'all' button as active by default
      document.querySelector('.filter-button[data-filter="all"]').classList.add('active-filter');
    });

  // Render with current filter
  function applyFilter(filter) {
    currentFilter = filter;
    let filtered = [];
    
    if (filter === 'all') filtered = extensions;
    if (filter === 'active') filtered = extensions.filter(ext => ext.isActive);
    if (filter === 'inactive') filtered = extensions.filter(ext => !ext.isActive);
    
    renderExtensions(filtered);
  }

  // Render function
  function renderExtensions(extensionsToShow) {
    container.innerHTML = '';
    
    extensionsToShow.forEach(ext => {
      const card = document.createElement('div');
      card.className = 'extension';
      card.innerHTML = `
        <div class="info">
        <img class="extension-icon" src="${ext.logo}" alt="${ext.name}">
        <div class="extension-title">
          <h2>${ext.name}</h2>
          <p>${ext.description}</p>
        </div>
        </div>
        <div class="container">
          <button class="remove" data-id="${ext.originalIndex}">Remove</button>
          <input type="checkbox" id="check-${ext.originalIndex}" 
                 ${ext.isActive ? 'checked' : ''}
                 data-id="${ext.originalIndex}">
          <label for="check-${ext.originalIndex}" class="button"></label>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Event delegation for all interactions
  document.addEventListener('click', function(e) {
    // Filter buttons
    if (e.target.matches('.filter-button')) {
      filterButtons.forEach(btn => btn.classList.remove('active-filter'));
      e.target.classList.add('active-filter');
      applyFilter(e.target.dataset.filter);
    }
    
    // Remove buttons
    if (e.target.matches('.remove')) {
      const id = parseInt(e.target.dataset.id);
      extensions = extensions.filter(ext => ext.originalIndex !== id);
      applyFilter(currentFilter);
    }
  });

  // Checkbox changes
  document.addEventListener('change', function(e) {
    if (e.target.matches('input[type="checkbox"]')) {
      const id = parseInt(e.target.dataset.id);
      const extension = extensions.find(ext => ext.originalIndex === id);
      
      if (extension) {
        extension.isActive = e.target.checked;
        
        // If we're not in "all" view, reapply filter
        if (currentFilter !== 'all') {
          applyFilter(currentFilter);
        }
      }
    }
  });
});