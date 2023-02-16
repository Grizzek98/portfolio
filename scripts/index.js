const jokeAPI = `https://dad-jokes.p.rapidapi.com/random/joke`
const jokeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5660a7f3b9msh3c46852ac0a20efp185837jsnbbbdb53c51a5',
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
    }
};
const adviceAPI = `https://api.adviceslip.com/advice`

async function fetchAPI(api, options = null) {
    let res = await fetch(api, options);
    const data = await res.json();
    // console.log(res);
    return data;
}

// change to insult stuff when api is working
async function getJoke() {
    const data = await fetchAPI(jokeAPI, jokeOptions);
    // console.log(data['body']['0']['setup']);
    // console.log(data['body']['0']['punchline']);
    document.querySelector('#joke-title').innerHTML = data['body']['0']['setup'] + '\n' + data['body']['0']['punchline'];
}

async function getAdvice() {
    const data = await fetchAPI(adviceAPI);
    // console.log(data['slip']['advice']);
    document.querySelector('#advice-title').innerHTML = data['slip']['advice'];
}

document.getElementById('joke-button').addEventListener("click", getJoke);
document.getElementById('advice-button').addEventListener("click", getAdvice);
