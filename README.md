# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Guerline Pedilus**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/gilded-cerulean-child?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] List anything else that you can get done to improve the app!
- I could improve the style of the game so that it looks more visually pleasing
- I could add a pause button
- I could have the sequence repeat itself when the user makes an error
- I could include difficulty levels from easy to hard for the user to choose
- I could have different sets of sounds for the user to choose 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![gameWon](https://user-images.githubusercontent.com/32109441/161356254-5686041d-b120-4436-bcc6-626bd314d9d5.gif)
![gameLost](https://user-images.githubusercontent.com/32109441/161356260-547fb0ff-7ca7-4457-9c72-f09d26fd44be.gif)
![outOfTimeLost](https://user-images.githubusercontent.com/32109441/161356262-ec2743bd-5684-4e40-bb26-73492f613a39.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I encountered in creating this submission was understanding the JavaScript functions and learning how it interacted with HTML and CSS. After reading through the prework tasks and recreating the sound and memory light game from the tutorial, I spent the first hour reading more about JavaScript, CSS, and HTML on w3schools and tried out their examples before attempting to implement the optional features. For example, when I wanted to learn how to add an image inside the button I had to read about background-image, background-position, and background-repeat in CSS. And when I implemented the ticking clock feature I had to read up on clearInterval to stop and reset the timer whenever the game ended. Doing this helped me overcome my problems and gave me a better understanding of the programming languages.

Another challenge I faced was changing the speed of the sequence so that it sped up every time the user guessed the right pattern. When I first started to develop the feature, I noticed that the sequence wouldn’t show after some time, or the sequence would be too fast to copy. I overcame this by using the console.log() method. This gave me a better insight into what was happening as the game progressed and helped me identify where the error was happening. I fixed the problem by making sure clueHoldTime didn’t go below 0 and by resetting the variable back to its original value when the game resets.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
When I was programming, using console.log() really helped with my development and so I want to know what are some other debugging tools that I could use when doing web development? 
Creating the sound and memory game was also fun and so I would also like to know what are some other projects that could be created using HTML, CSS, and JavaScript? What are the main usages for these programming languages? And if I wanted to learn more about web development, where should I start? 
I also learned about frameworks such as Bootstrap that helps make web development easier and so I want to know what are some other frameworks that a web developer should know how to use?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project I would spend that time implementing more sounds into the game. For example, I would create more diverse sounds so that it was as if the sounds were being played on different instruments. And I would create custom sequences to mimic popular songs and soundtracks. If I had more time, I would also look for more efficient ways to implement my functions. For example, I would add a callback function so that the timer wouldn’t start until after the sequence was finished. And use the toggle() method to show or hide my tags.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
