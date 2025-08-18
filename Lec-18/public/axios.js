console.log(axios);
async function getData() {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data); 
    } catch (err) {
        console.error(err);
    }
}
getData();