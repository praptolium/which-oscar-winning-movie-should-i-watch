// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  greet() {
    var $html = document.createElement('html');
    const $ul = document.querySelector('ul');
    const oscarWinnerUrl = `https://en.wikipedia.org/w/api.php?${new URLSearchParams({
      origin: '*',
      action: "parse",
      page: "Academy Award for Best Picture",
      prop: "text",
      formatversion: 2,
      format: "json"
    })}`
    const OMDB_API_KEY = $ul.dataset.ombdApiKey
    fetch(oscarWinnerUrl)
      .then(response => response.json())
      .then((data) => {
        $html.innerHTML = `${data.parse.text.replaceAll('style=\"background:#FAEB86\"', 'class="winner"')}`
        const movies = [...$html.querySelectorAll(".winner")].map((e) => e.childNodes[1].innerText);
        const randomMovieName = movies[Math.floor(Math.random() * movies.length)]
        console.log(randomMovieName)
        fetch(`https://www.omdbapi.com/?s=${randomMovieName}&apikey=${OMDB_API_KEY}`)
          .then(response => response.json())
          .then((data) => {
            const movie = `<li class="list-inline-item">
              <img src="${data.Search[0]["Poster"]}" alt="">
              <p class="text-center">${data.Search[0]["Title"]}</p>
              <!-- ${randomMovieName} -->
              </li>`;
            $ul.innerHTML = ""
            $ul.insertAdjacentHTML('beforeend', movie);
          });
      })
  }
}
