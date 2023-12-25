const jokeContainer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url =
   'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

let getJoke = () => {
   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         jokeContainer.textContent = `${data.joke}`
      })
}

btn.addEventListener('click', getJoke)
getJoke()
