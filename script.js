// Get filter elements
const colorFilter = document.getElementById('color');
const materialFilter = document.getElementById('material');

// Get all saree items
const sareeItems = document.querySelectorAll('.saree-item');

// Function to filter sarees based on selected options
function filterSarees() {
    const selectedColor = colorFilter.value;
    const selectedMaterial = materialFilter.value;

    sareeItems.forEach(item => {
        const itemColor = item.getAttribute('data-color');
        const itemMaterial = item.getAttribute('data-material');

        // Check if the saree matches the selected filters
        const matchesColor = selectedColor === 'all' || selectedColor === itemColor;
        const matchesMaterial = selectedMaterial === 'all' || selectedMaterial === itemMaterial;

        // Show or hide item based on filter match
        if (matchesColor && matchesMaterial) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add event listeners for filters
colorFilter.addEventListener('change', filterSarees);
materialFilter.addEventListener('change', filterSarees);

// Run filter initially
filterSarees();
