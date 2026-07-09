# Coffee Tube Recipe Book

## Project Description

Coffee Tube Recipe Book is a React web application developed to allow users to browse and explore different coffee and beverage recipes. The application provides recipe details, ingredients, preparation instructions, and drink categories. Users can also search for drinks, save favorite recipes, and add new recipes.

## Objectives

The objectives of this project are to:

- Develop a single-page application using React.
- Implement page navigation using React Router.
- Display drink recipes with detailed information.
- Apply reusable React components.
- Manage application data using React Context.
- Create a responsive and user-friendly interface.

## Features

- Home page
- Menu page
- Drink details page
- Favorites page
- Add Recipe page
- About page
- Search functionality
- Drink categories
- Recipe descriptions
- Ingredients and preparation steps

## Technologies Used

- React
- Vite
- React Router DOM
- JavaScript
- HTML
- CSS

## Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── DrinkCard.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── DrinkDetails.jsx
│   ├── Favorites.jsx
│   ├── AddRecipe.jsx
│   └── About.jsx
│
├── context/
│   └── DrinkContext.jsx
│
├── data/
│   └── drinks.js
│
├── App.jsx
└── main.jsx
```

## Installation

1. Clone the repository.

```bash
git clone https://github.com/your-username/Tube-Recipe-Book.git
```

2. Navigate to the project folder.

```bash
cd Tube-Recipe-Book
```

3. Install dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

5. Open the application in your browser.

```
http://localhost:5173
```

## Pages

### Home
Displays an introduction to the application and featured drinks.

### Menu
Displays all available drink recipes organized by category.

### Drink Details
Displays the selected drink, including its image, description, ingredients, and preparation instructions.

### Favorites
Displays drinks saved by the user.

### Add Recipe
Allows users to add a new drink recipe.

### About
Provides information about the purpose of the project and its development.

## Future Improvements

- User authentication
- Database integration
- Image upload support
- Recipe ratings and reviews
- Advanced filtering and sorting

## Author

Contributors

This project was developed by:

Onimaru Mika
Rith Monyleaphea
Bun Long Kouch

Course: Web development II

Institution: American University of Phnom Penh

Date: 06 July 2026

## License

This project was developed for educational purposes only.