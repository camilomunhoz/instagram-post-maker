# Instagram Post Maker

In order to automate the constant job I had of building Instagram posts using design softwares from the same template over and over again, this app handles the data in JSON format and generate everything effortlessly.

## How does it work

It works in a fun and hacky way, turning DOM elements into canvas with [html2canvas](https://html2canvas.hertzen.com/), then the canvas into .png.

All the processing is made entirely client-side, where the renderizations are made off screen (but totally visible).