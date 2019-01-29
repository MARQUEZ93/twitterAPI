# [twitterFlickrAPI](https://twitterflickrapi.herokuapp.com/)

Use the Twitter and Flickr APIs to return all photos with a #dctech hashtag within the last month and rank them by the number of retweets for twitter and number of comments for flickr.

Live link: https://twitterflickrapi.herokuapp.com/

## Getting Started

* ``` git clone https://github.com/MARQUEZ93/twitterFlickrAPI.git ```
* ``` cd twitterFlickrAPI ```
* ``` npm install ```
* ``` npm run webpack ```
* ``` bundle install ```
* ``` rails s ```
* The project will available on http://localhost:3000/

## Code Snippet
* This class makes an API call to the Flickr server.
* The ENV variables are set for authorization.
* The [FlickRaw](https://rubygems.org/gems/flickraw/versions/0.9.9) gem is implemented.
* Search for flicks within the last month.
* Parse response data in format desired by the frontend.

<p align="center"><img src="https://i.imgur.com/VapudwH.png" width="800px" /></p>

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The frontend framework used.
* [Rails](https://guides.rubyonrails.org/) - The backend framework used.
* [FlickRaw](https://rubygems.org/gems/flickraw/versions/0.9.9) - Ruby gem to make API calls to the Flickr API.
* [Heroku](https://twitterflickrapi.herokuapp.com/) - Cloud platform that hosts the application.
* [Postman](https://www.getpostman.com/) - Allowed me to test API calls before writing the code in Rails.
* [Bootstrap](https://www.npmjs.com/package/react-bootstrap-table-next) - Styled the data in a table.

## My Thoughts
* This was my first experience with OAuth.
* I used env variables in both development and production. This protects the API keys as I pushed the code to Github.
* I published on Heroku because it was easy & free to do so. Makes it easier for you guys to see my work.
* I had fun doing this. There was a lot of console logging, and putting API responses.
* One big lesson I learned was to cross reference Github documentation with documentation on the npm/gem etc. site.
* sandbox max results 100
