###Exercise 1 - Stop Watch

1. Create a new React application, name it “stop-watch”.
2. Create a component called “StopWatch” and render it inside of your top level “App” component.
3. Your Stop Watch should render a timer that starts automatically when the View loads.
4. The timer should be in the format “mm:ss”. Eg. 01:15 (1 minute and 15 seconds). Do not worry about times over 1 hour.
5. The timer should update the view every second.
6. Display a button labeled “Pause”. This button pauses the timer.
7. When paused, button should display “Start”. Clicking on it restarts the timer.
8. Display a button labeled “Reset”. This button resets the timer to 0 and stops the timer.
9. When the timer is 0, the “Pause” button should be re-labeled as “Start”.
10. When the timer is 0 and the timer is not running, the Reset button should be disabled. Ensure that the button is also visibly disabled.
11. Make sure to test it, to avoid bugs. What happens if the Start button is clicked multiple times? How about if the Stop button is clicked multiple times?