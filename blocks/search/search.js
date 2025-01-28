export default function decorate(block) {

    // Create a <form> element
    const form = document.createElement('form');
    form.setAttribute('role', 'search');

    // Create the <button> element
    const button = document.createElement('button');
    button.setAttribute('title', 'Search Icon');
    button.setAttribute('type', 'submit');
    button.innerHTML = block.innerHTML;

    // Create the <span> element for the icon
    const span = document.createElement('span');
    span.className = 'icon icon-search';

    // Append the <span> to the <button>
    button.appendChild(span);

    // Create the <input> element
    const input = document.createElement('input');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('type', 'search');
    input.setAttribute('role', 'searchbox');
    input.setAttribute('id', 'secondary-search');
    input.setAttribute('value', '');
    input.setAttribute('placeholder', 'placeholder');

    // Append the <button> and <input> to the <form>
    form.appendChild(input);
    form.appendChild(button);

    block.innerHTML = '';
    block.appendChild(form);


    // Handle the form's submit event
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Get the input value
        const query = input.value;
    
        // Log or handle the form data
        console.log('Search query:', query);
    
        // Example: Perform an action (e.g., sending data to a server or navigating)
        if (query) {
        alert(`Searching for: ${query}`);
        // Example: Redirect or send data
        // window.location.href = `/search?query=${encodeURIComponent(query)}`;
        } else {
        alert('Please enter a search query.');
        }
    });
}