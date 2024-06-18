// Get the select element
const selectElement = document.querySelector('select');

// Get the sections to display
const voiceSection = document.getElementById('demo-voice');
const textSection = document.getElementById('demo-text');

// Add an event listener to the select element
selectElement.addEventListener('change', function() {
    // Hide all sections
    voiceSection.style.display = 'none';
    textSection.style.display = 'none';

    // Show the selected section based on the option value
    const selectedValue = selectElement.value;
    if (selectedValue === 'voice') {
        voiceSection.style.display = 'block';
    } else if (selectedValue === 'text') {
        textSection.style.display = 'block';
    }
});