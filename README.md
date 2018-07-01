# Writing a Simulation (Pair Programming)

This is meant to be a _pair programming_ exercise. This is not meant to be a programming technique to be used all day everyday, but it is an important team practice that some companies adopt, especially for their hiring process and for developer orientation. Being so, you will need to keep the following rules in mind.

1. The `driver` is the person drafting the code while the `navigator` constantly vets and plans ahead. However, the driver must also be aware of the navigator's plans and be convinced by it.

2. As you can imagine, communication is key here.

    - As the driver, ask clarification questions and ask them often, e.g. "I don't understand the plan, could you draw me a flowchart describing what this loop needs to do?". As the navigator, vocalize your thought process and vocalize it clearly and succinctly. If you're unsure that your driver's code does what you intended, ask your driver how that block of code works. Unless there is a clear and valuable reason to do so, you should not dictate all the details of the code to the driver. For example, mentioning that you need to check the elements of an array for odd numbers is ok. Specifying that the driver must implement this using a forEach method instead of a for loop can be counterproductive.

    - Respect each other's questions and ideas. Do not interrupt or talk over your partner, and do not monopolize the conversation. A good guideline to go by is that your idea must be put across in less than 10 seconds. Give each other, and yourself, time to think through each idea.

3. Swap roles every 15 minutes.

4. For this exercise, as the driver, you are not to contribute ideas, only to clarify your navigator's intentions. In practice, drivers cede keyboard control over to the navigator as soon as both agree that it's the driver's turn to contribute an idea. The rule is that in order for an idea to be implemented, it must be written by the other party's hand so that all ideas are filtered through a partner.

# The Simulation: Escape from a Grid

Write a command line app that takes in 1 argument, a number. This number is to be the size of the grid, e.g. `node grid 5` would run the app on a 5x5 grid. Your app will need to do the following.

1. Construct the grid of the correct size, e.g. as a 2-dimensional array.

2. At the start, each cell should be randomly populated with something that indicates one of the 4 directions - up, down, left, and right. You may use strings, numbers, any javascript object or data structure that your partner and you see fit.

3. Starting at a random cell in the grid...

    a. move in 1 cell in the direction indicated by that cell

    b. if this move takes you *outside* the grid, end the simulation and record the number of moves you've taken, otherwise...

    c. ...turn the direction of your previous cell 90 degrees clockwise. For example, if you started in a cell that indicated right, you would move 1 cell to the right, then change the direction of your starting cell to indicate down. You might want to console.log the entire grid at each turn to visualize whether your code is working as intended.

    d. repeat this until you escape the grid.

If you've completed your app, use it to answer the following questions:

1. On the average, how many turns does it take to escape a 2x2 grid?

2. ... a 3x3 grid?

3. ... a 5x5 grid?

4. ... a 9x9 grid?

5. As the grid size increases, how fast does the number of turns needed to escape the grid grow?