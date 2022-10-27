export const fetchJoke = () => {
    return fetch(
        'https://icanhazdadjoke.com/',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        })
    .then(response => response.json())
}