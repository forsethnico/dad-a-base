export const fetchJoke = () => {
    return fetch(
        'https://icanhazdadjoke.com/',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        })
        .then((response) => {
            if (!response.ok) {
              throw Error(response.status + ":" + response.text);
            } else {
              return response.json();
            }
          })
        }