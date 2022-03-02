# Which Oscar Winning Movie Should I Watch? 

### Author details

Author: Matthew Clark 

Date of publication: 2 March 2022

Twitter: [@MattDoesRails](https://twitter.com/MattDoesRails)

### Description

If you're not sure what movie you want to watch, click the button: `Generate a film!`, and the application will randomly generate the movie poster of a movie that has won an Oscar for "Best Picture". 

This application was made in Ruby on Rails. 

Upon clicking on `Generate a film!`, a Javascript function is called using stimulus. 

The Javascript function has two steps. 

##### Step one 
1. Makes an API call to the Wikipedia API (MediaWiki)
2. Parses the list of all movies that won an Oscar for "Best Picture", and; 
3. Randomly selects one of the films in this list.  

##### Step two
1. Then, the name of the selected film is isolated 
2. A call to the OMBd API searches the database using the name, and; 
3. The movie poster image found is injected into the HTML. 

### Style

The background is an embedded video from youtube, using the following playerVars: 
```
       playerVars: {
        controls: '0',
        autoplay: '1',
        loop: '1',
        playlist: '{video_id}',
        mute: '1',
        showinfo: '0',
        autohide: '1',
        modestbranding: '1',
        start: '{between 20 and 500}'
        }
```

### Collaboration

The goal of this project is to add to my portfolio of projects for prospective employers.  

If you would like to collaborate on this project, you can contact me on [Twitter](https://twitter.com/MattDoesRails), [LinkedIn](https://www.linkedin.com/in/clarkm02/) or [Malt](https://www.malt.fr/profile/matthewclark)

Otherwise, if you would like to collaborate on a different project, I am `#OpenToWork`!
