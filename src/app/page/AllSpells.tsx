// Import necessary modules and components
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SpellList, Spell } from 'app/components/types/types';
import { actionCreators } from 'app/redux/store';
import Spinner from 'app/components/spinner/Spinner';
import { Link } from 'react-router-dom';

// Define the props interface for the AllSpells component
interface AllSpellsProps {
  data: SpellList; // Data containing the list of spells
  isLoading: boolean; // Flag to indicate if data is still loading
  favSpell: []; // Array to store favorite spell indices
}

// Define the state interface for the Redux store
interface SpellState {
  spellData: {
    data: SpellList; // Data containing the list of spells
    error: boolean; // Flag to indicate if there was an error fetching the data
    isLoading: boolean; // Flag to indicate if data is still loading
    favoriteSpells: []; // Array to store favorite spell indices
  };
}

// Define the interface for dispatching actions to the Redux store
interface DispatchProps {
  fetchAllSpells: () => void; // Function to fetch all spells
  addSpellToFavorites: (spellIndex: string) => void; // Function to add a spell to favorites
  removeSpellFromFavorites: (spellIndex: string) => void; // Function to remove a spell from favorites
}

// Define the AllSpells component
const AllSpells: React.FC<AllSpellsProps & DispatchProps> = ({
  data,
  isLoading,
  fetchAllSpells,
  favSpell,
  addSpellToFavorites,
  removeSpellFromFavorites,
}) => {
  // State to store favorite spell indices
  const [favoriteSpells, setFavoriteSpells] =
    React.useState<string[]>(favSpell);

  // Fetch all spells when the component mounts
  React.useEffect(() => {
    fetchAllSpells();
  }, [fetchAllSpells]);

  // Update the favoriteSpells state when favSpell prop changes
  useEffect(() => {
    setFavoriteSpells(favSpell);
  }, [favSpell]);

  // Function to check if a spell is in favorites
  const isFavorite = (spellIndex: string) => {
    return favoriteSpells.includes(spellIndex);
  };

  // Function to toggle the favorite status of a spell
  const toggleFavorite = (spellIndex: string) => {
    if (isFavorite(spellIndex)) {
      removeSpellFromFavorites(spellIndex); // Dispatch the action to remove from favorites
    } else {
      addSpellToFavorites(spellIndex); // Dispatch the action to add to favorites
    }
  };

  // If data is still loading, show a loading spinner
  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <Spinner />
      </div>
    );
  }

  // If data is empty or undefined, show a loading spinner or a message indicating no spells found
  if (!data || !data.results || data.results.length === 0) {
    if (isLoading) {
      return (
        <div className='flex justify-center items-center h-full'>
          <Spinner />
        </div>
      );
    } else {
      return (
        <div className='bg-dark-background text-white text-center'>
          <h1 className='text-4xl font-bold mb-4'>All Spells</h1>
          <p>No spells found.</p>
        </div>
      );
    }
  }

  // If data has loaded, render the list of spells
  return (
    <div className='bg-dark-background text-white'>
      <h1 className='text-4xl font-bold mb-4'>All Spells</h1>

      <table className='table-auto w-full border-collapse border border-gray-500'>
        <thead>
          <tr className='bg-primaryCyan text-neutral-light-0'>
            <th className='border border-gray-500 px-4 py-2'>Index</th>
            <th className='border border-gray-500 px-4 py-2'>Name</th>
            <th className='border border-gray-500 px-4 py-2'>Favourite</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.results.map((spell: Spell, index: number) => (
              <tr
                key={spell.index}
                className={`${
                  index % 2 === 0
                    ? 'bg-neutral-dark-100'
                    : 'bg-neutral-dark-200'
                } hover:bg-primaryCyan hover:text-neutral-light-0`}
              >
                <td className='border border-gray-500 px-4 py-2'>
                  <Link to={`/${spell.index}`} className='w-full h-full block'>
                    {spell.index}
                  </Link>
                </td>
                <td className='border border-gray-500 px-4 py-2'>
                  {spell.name}
                </td>
                <td className='border border-gray-500 px-4 py-2'>
                  <button
                    onClick={() => toggleFavorite(spell.index)}
                    className={`${
                      isFavorite(spell.index)
                        ? 'text-yellow-light-500 fill-current'
                        : ''
                    }`}
                  >
                    {isFavorite(spell.index)
                      ? 'Remove from Favourite'
                      : 'Add to Favourite'}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

// Map the Redux state to component props
const mapStateToProps = (state: SpellState) => {
  return {
    data: state?.spellData?.data || { results: [] },
    isLoading: state?.spellData?.isLoading || false,
    favSpell: state?.spellData?.favoriteSpells,
  };
};

// Map the dispatch actions to component props
const mapDispatchToProps: DispatchProps = {
  fetchAllSpells: actionCreators.fetchAllSpells,
  addSpellToFavorites: actionCreators.addToFavorites,
  removeSpellFromFavorites: actionCreators.removeFromFavorites,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(AllSpells);
