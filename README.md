# Technical Assignment

## Bonus feature

- light / dark mode

## Ideas

If I had more time I would have liked to allow the user to drag on the progress bar instead of only clicking, improve the styling eg making the layout responsive

## Problems

- The video works on localhost but not when deployed, tried saving the file in the project but that didn't work when deployed either
- I tried to fetch the frontend_test.json but got a CORS error, so I tried adding {mode: 'no-cors'} but that did not solve the problem, so I saved the data to a file to continue with the project
- The instructions were unclear regarding the use of "RoI", I assumed they were pixel coordinates for the box overlapping the beaker on the video, eg [x1, y1, x2, y2] however I could not get this to look right using the numbers provided, so I hardcoded some values to use instead, which are percentage coordinates (percentages of the videos height / width)
