# Habit Tracker App
This is a full-stack Habit Tracker app built using Node.js, EJS, and MongoDB. The app allows users to define habits and track their progress on a daily basis. Users can mark habits as "Done," "Not done," or "None" for each day. The app also provides views to show all current habits, display the last 7 days' progress for each habit, and allows users to toggle between habit statuses.

## Features
1. Add Habits: Users can add multiple habits to track, such as reading a book, going to the gym, meditating, etc.
2. Daily Habit Tracking: Users can track each habit every day. There are three statuses for each habit:
3. Done: Mark the habit as done for a day.
4. Not done: Mark the habit as not done for a day.
5. None: User did not take any action on a habit for a day.
6. View Current Habits: The app provides a view to show all current habits. There is an "Add" button where users can add a new habit to track.
7. Toggle Habit Status: Users can toggle between the three statuses of a habit for today. They can change today's status as done, not done, or none anytime Additionally, users can modify the status of a habit for any previous day

## Technology User
1. Node.js
2. MongoDB
3. Express
4. Html, css and js
5. bootstrap 5
6. express-ejs-layouts

## file structure

habit-tracker-app/
|-- node_modules/
|-- views/
|   |-- layout.ejs
|   |-- week.ejs
|   |-- _header.ejs
|   |-- details.ejs
|   |-- addHabits.ejs
|
|-- controllers/
|   |-- details_controller.js
|
|-- models/
|   |-- habit.js
|   |-- habitStatus.js
|
|-- routes/
|   |-- index.js
|   |-- details_router.js
|
|-- config
|   |--mongoose.js
|
|--assets
|  |--css
|  |  |--addHabits.css
|  |  |--details.css
|  |  |--week.css
|  |
|  |--images
|
|-- index.js
|-- package.json
|-- package-lock.json
|-- .gitignore
|-- README.md


## Screenshots
1. Week View
[Week View][assets/images/img1.png]

2. Add Task
[Week View][assets/images/img2.png]

3. Daily View
[Daily View][assets/images/img3.png]

## Demo Video
You can watch the demo video of the Habit Tracker app on YouTube: [Link to the Demo Video]()