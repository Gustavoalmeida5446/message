document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
    
    document.getElementById('copy-button').addEventListener('click', copy => {
        navigator.clipboard.writeText(linkInput.value);
        alert("Copied the text: " + linkInput.value);
    }) 

});
