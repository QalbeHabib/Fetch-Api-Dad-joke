const jokeEl = document.getElementById('joke')

// console.log( jokeEl.innerHTML)

const jokeBtn = document.getElementById('jokebtn')
jokeBtn.addEventListener('click' , genereateJoke)


// Click By using Arrw Function

// jokeBtn.onclick = ()=>{
//   genereateJoke()
// }

// console.log( jokebtn.innerHTML)

genereateJoke()


function genereateJoke(){

  const config = {
    headers:{
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
  .then( (apidata) =>apidata.json() )
  .then((data) => {
    console.log(data)
    jokeEl.innerHTML = data.joke
  } )  
}
