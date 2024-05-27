## Todo app

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

## Screenshots

[![photo-2024-05-27-22-27-28.jpg](https://i.postimg.cc/tCqv4Tr2/photo-2024-05-27-22-27-28.jpg)](https://postimg.cc/K4WD9ZhM)

## My process

Looking at it, it was a straightforward to-do app with some extra features like sorting the list into All, Active, and Completed. We also had to include drag and drop capability for it. 
The only component that I believe could be divided into sections was the create notes box and the background card where all new notes would be inserted, and when the window limit was exceeded, it would scroll down.
The next step was to make the note so that when checked, it would have a strikethrough over it.
I handled the features by creating an array of notes and adding each note to the array when it was formed. If we wish to delete it, simply alter the new array so that the specific note with that id is not present.

## Tech Stack

- React js
- Vanilla CSS


## What I learned

- how to add custom window with scroll bar
- playing with arrays
- Light/Dark theme switch


## Remaining Errors

- whenever we delete 2 or more notes by checking them and pressing the complete finished button, the notes get deleted, but the checked mark gets populated to the next set of notes (occuring due to arranging the notes in an array format)

- drag and drop functionality is remaining
- the CSS property on All, active and completed buttons whenever we switch between them

## Acknowledgments

I would like to acknowledge Frontend Mentor for providing such good level challeneges. This really helps me to understand in which part do I lack and how should I tackle it.

