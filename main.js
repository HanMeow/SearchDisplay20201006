
;(() => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.display = null;
    const form = document.querySelector('.container .form');
    const { search } = location;
    const searches = search.replace(/^\?/, '').split('&');
    searches.forEach(str => {
        const pair = str.split('=');
        const h2 = document.createElement('h2'); 
        const input = document.createElement('input');
        h2.innerText = pair[0] ?? '(none)';
        input.value = pair[1] ?? '(empty)';
        input.disabled = true;
        form.appendChild(h2);
        form.appendChild(input);
    })
})();