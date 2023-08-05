# Spellbook - React TypeScript App

Spellbook is a React app built with TypeScript that allows users to explore and manage a list of spells. The app displays a list of all spells, allows users to view detailed information for each spell, and enables users to save spells to a list of favorites.

## Features

- Display a list of all spells with their names and indices.
- View detailed information for each spell, including level, range, description, components, and casting time.
- Add spells to the list of favorites.
- Remove spells from the list of favorites.
- Loading spinner to indicate when data is being fetched.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/alexblaze/proshore.git
   ```
2. Navigate to the project directory:
   ```
   cd spellbook
   ```
3. Install dependencies using npm or yarn:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```
2. Open the app in your web browser by navigating to `http://localhost:3000`.

## Components

### AllSpells

- Displays a list of all spells.
- Allows the user to view detailed information for each spell.
- Allows the user to save spells to a list of favorites.

### SingleSpell

- Displays detailed information for a single spell.
- Shows the spell's level, range, description, components, and casting time.
- Allows the user to add or remove the spell from the list of favorites.

### AppLayout

- Provides the layout structure for the entire app.
- Contains the header and footer components.

### Spinner

- Shows a loading spinner when data is being fetched.

## Redux Store

The app uses Redux to manage the state. The Redux store contains the following state slices:

- `spellData`: Manages the data related to spells, including the list of all spells, favorite spells, and the currently viewed single spell.

## Redux Actions

The app defines several Redux actions to interact with the store:

- `fetchAllSpells`: Fetches all spells from the API and updates the store.
- `fetchSingleSpell`: Fetches a single spell based on its index and updates the store.
- `setLoading`: Updates the loading status in the store.
- `addToFavorites`: Adds a spell to the list of favorites.
- `removeFromFavorites`: Removes a spell from the list of favorites.

## API Integration

The app uses an API to fetch spell data. The API provides a list of spells with their details, which is used to populate the app's data.

## Technologies Used

- React: JavaScript library for building user interfaces.
- TypeScript: Adds type safety to JavaScript code.
- Redux: State management library for React apps.
- React Router: Handles navigation and routing in the app.
- Redux Thunk: Middleware for asynchronous actions in Redux.
- Tailwind CSS: Utility-first CSS framework for styling the app.

## Credits

This app is inspired by the Dungeons & Dragons spell system. The spell data used in the app is fetched from an external API, which provides a list of spells and their details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Spellbook is created and maintained by Sanjay Thakur(https://github.com/alexblaze).

---

Thank you for using Spellbook! We hope you enjoy exploring and managing the world of spells in your own magical way. If you encounter any issues or have suggestions for improvements, please feel free to submit them in the Issues section of the repository. Happy spellcasting! 🧙‍♂️🌟
