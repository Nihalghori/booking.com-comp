document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.autocomplete input');

    const suggestions = [
        ['Apple', 'Orange', 'Banana', 'Mango', 'Pineapple'],
        ['Red', 'Blue', 'Green', 'Yellow', 'Purple']
    ];

    inputs.forEach((input, index) => {
        const suggestionBox = document.getElementById(`suggestionBox${index + 1}`);

        input.addEventListener("input", function() {
            const inputValue = input.value.toLowerCase();
            suggestionBox.innerHTML = '';

            const filteredSuggestions = suggestions[index].filter(suggestion =>
                suggestion.toLowerCase().includes(inputValue)
            );

            filteredSuggestions.forEach(suggestion => {
                const div = document.createElement("div");
                div.textContent = suggestion;
                div.addEventListener("click", function() {
                    input.value = suggestion;
                    suggestionBox.style.display = 'none';
                });
                suggestionBox.appendChild(div);
            });

            if (inputValue === '') {
                suggestionBox.style.display = 'none';
            } else {
                suggestionBox.style.display = 'block';
            }
        });
    });
});
