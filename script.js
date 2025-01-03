// Get filter elements
const colorFilter = document.getElementById('color');
const materialFilter = document.getElementById('material');
const textureFilter = document.getElementById('texture');

// Get all saree items
const sareeItems = document.querySelectorAll('.saree-item');

// Function to filter sarees based on selected options
function filterSarees() {
    const selectedColor = colorFilter.value;
    const selectedMaterial = materialFilter.value;
    const selectedTexture = textureFilter.value;

    sareeItems.forEach(item => {
        const itemColor = item.getAttribute('data-color');
        const itemMaterial = item.getAttribute('data-material');
        const itemTexture = item.getAttribute('data-texture');

        // Check if the saree matches the selected filters
        const matchesColor = selectedColor === 'all' || selectedColor === itemColor;
        const matchesMaterial = selectedMaterial === 'all' || selectedMaterial === itemMaterial;
        const matchesTexture = selectedTexture === 'all' || selectedTexture === itemTexture;

        // Show or hide item based on filter match
        if (matchesColor && matchesMaterial && matchesTexture) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add event listeners for filters
colorFilter.addEventListener('change', filterSarees);
materialFilter.addEventListener('change', filterSarees);
textureFilter.addEventListener('change', filterSarees);

// Run filter initially
filterSarees();
