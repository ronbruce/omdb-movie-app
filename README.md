READ.ME for Movie App Project

This README provides an overview of the movie app project, its functionalities, and some key technical implementations.

Project Description:
This is a movie app that allows users to search for movies by title. It displays search results in a user-friendly card format and allows users to mark movies as favorites.

Technologies Used:
HTML
CSS (Bootstrap)
JavaScript (Fetch API, Async/Await, DOM manipulation)

Key Functionalities:
Search: Users can enter a movie title in a search bar. The app fetches data from an API and displays relevant results.
Display: Search results are displayed as cards with movie title, year, and poster image.
Favorites: Users can mark movies as favorites by clicking a "Favorites" button. (Comment functionality is also implemented but it is still undergoing...)
Error Handling: The app handles potential errors during API calls and displays an error message to the user.

Technical Implementations:
reduce Method: The reduce method is used to efficiently iterate over search results and build the HTML structure dynamically.
Async/Await: Async/Await syntax is used for asynchronous operations like fetching data from the API.
Event Listeners: Event listeners are used to capture user interactions with the search bar and favorite buttons.

Next Steps:
Implement a user-friendly favorites section: Create a dedicated area for displaying favorite movies, potentially in a sidebar or modal for better accessibility.
Enhance error handling with more informative messages.
Consider user interface improvements and responsiveness.
Further Exploration:
Implement user authentication and persistent storage of favorite movies.
Explore integrating additional movie information and functionalities (e.g., trailers, reviews).

