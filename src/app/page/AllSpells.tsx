import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SpellList, Spell } from 'app/components/types/types';
import { actionCreators } from 'app/redux/store';
import Spinner from 'app/components/spinner/Spinner';
import { Link } from 'react-router-dom';

interface AllSpellsProps {
  data: SpellList;
  isLoading: boolean;
  favSpell: [];
}

interface SpellState {
  spellData: {
    data: SpellList;
    error: boolean;
    isLoading: boolean;
    favoriteSpells: [];
  };
}

interface DispatchProps {
  fetchAllSpells: () => void;
  addSpellToFavorites: (spellIndex: string) => void; // Add this line to include the function for adding spells to favorites
  removeSpellFromFavorites: (spellIndex: string) => void; // Add this line to include the function for removing spells from favorites
}

const AllSpells: React.FC<AllSpellsProps & DispatchProps> = ({
  data,
  isLoading,
  fetchAllSpells,
  favSpell,
  addSpellToFavorites,
  removeSpellFromFavorites,
}) => {
  const [favoriteSpells, setFavoriteSpells] =
    React.useState<string[]>(favSpell);
  React.useEffect(() => {
    fetchAllSpells(); // Dispatch the fetchAllSpells action on component mount
  }, [fetchAllSpells]);

  useEffect(() => {
    setFavoriteSpells(favSpell);
  }, [favSpell]);

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

  return (
    <div className='bg-dark-background text-white'>
      <h1 className='text-4xl font-bold mb-4'>All Spells</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <table className='table-auto w-full border-collapse border border-gray-500'>
          <thead>
            <tr className='bg-primaryCyan text-neutral-light-0'>
              <th className='border border-gray-500 px-4 py-2'>Index</th>
              <th className='border border-gray-500 px-4 py-2'>Name</th>
              <th className='border border-gray-500 px-4 py-2'>Favourite</th>
            </tr>
          </thead>
          <tbody>
            {data.results.map((spell: Spell, index: number) => (
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
      )}
    </div>
  );
};

const mapStateToProps = (state: SpellState) => {
  return {
    data: state?.spellData?.data || { results: [] },
    isLoading: state?.spellData?.isLoading || false,
    favSpell: state?.spellData?.favoriteSpells,
  };
};

const mapDispatchToProps: DispatchProps = {
  fetchAllSpells: actionCreators.fetchAllSpells,
  addSpellToFavorites: actionCreators.addToFavorites,
  removeSpellFromFavorites: actionCreators.removeFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllSpells);
