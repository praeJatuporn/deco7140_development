/*receive the data from postFormData and work together*/
const fetchGetData = (url, headers = {}) => {
    return fetch(url, {
        method: 'GET',
        headers: headers,
    })

    /*check the response*/
    .then(response => {
        if (!response.ok) {
            throw new Error('Server returned an error.');
        }
        return response.json();
    })


    .catch(error => {
        console.error('Error fetching data:', error);
        return null;
    });
};

export { fetchGetData };