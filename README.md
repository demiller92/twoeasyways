# Daniel E Miller
### Smile Direct Club Coding Challenge

  - I'm hosting the coding challenge as a React webpage on Github: https://demiller92.github.io/twoeasyways/
  - Alternatively, you can clone and run the code locally from this repository
 
  ##### Install, build, and run
Requires [npm](https://npmjs.com/) to run.

```sh
$ cd twoeasyways
$ npm install
$ npm run build
$ npm start
```
Then, access the local instance at: http://localhost:3000/


### Approach
##### Planning
  - First I opened the Sketch file, and took note of all the design assets and parameters I would need later. 
  - For example, I wrote down all of the hex values for each asset and text, as well as the font, font-size, margins, and object size.
  - I did this to obtain pixel-perfect accuracy when it would come to styling.
 
##### Choosing React
  - Although this project could have been done in vanilla html/css, I wanted to be able to work with React because I enjoy writing in it, but I don't get to in my day-to-day work. 
  - I took stock of how I could componentize all of the elements in the prototype.
  - I decided that the page could be divided by the header, and the option tiles.
  - In order to further break down the components, I created the button as a separate component in the option tiles.

##### Resource Management
  - In order to provide less clutter, and more future-proof editability to the content, I decided to create a resource json file that houses all of the text content available on the page. I would pass this data into the app, and send each component only the props they need.
  - I stored all of the assets in an assets folder, including the necessary fonts and images. The images are loaded into an array in the app, and passed on as props to their corresponding option tile component.

##### Styling
  - Once all the content was being displayed correctly, it was time to style the css. This was made helpful by the pre-planning design notes I had.
  - I added in the font-face families, correct-font sizes, object sizes, margins, colors, etc.
  - The one thing that took me a little longer to figure out was getting the images in the tiles to expand over the container, so that it is overlaid on top of the transparent border. To do this, I had to add -2px (the border size) to the top and left of the image, and place it behind the div with a z-index of -1. 
  - Fun add-on: Including the SmileDirectClub favicon.ico

##### Would be nice to haves
  - If there was more time, and this was a full-scale project with more prototypes, I would add:
  - A map that iterates through the number of OptionTiles, in case there are ever more options than just the two.
  - Responsiveness to screen resolution

  
Thanks for taking the time to read and review this. I had fun working on it!
 

