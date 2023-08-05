import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleSpell } from 'app/redux/store/reducers/action-creators';
import { SpellData } from 'app/components/types/types';
import { actionCreators } from 'app/redux/store';

interface SingleSpellProps {
  singleSpell: SpellData | null;
  isLoading: boolean;
  fetchSingleSpell: (index: string) => void;
  favSpell: string[];
}

interface SpellState {
  spellData: {
    singleSpell: SpellData;
    isLoading: boolean;
    favoriteSpells: string[];
  };
}

interface DispatchProps {
  fetchSingleSpell: (spellIndex: string) => void;
}

const SingleSpell: React.FC<SingleSpellProps> = ({
  singleSpell,
  isLoading,
  favSpell,
  fetchSingleSpell,
}) => {
  const { index } = useParams();
  const [isFavourite, setIsFavourite] = useState<boolean>();

  useEffect(() => {
    if (index) {
      fetchSingleSpell(index);
      if (favSpell.includes(index)) {
        setIsFavourite(true);
      } else {
        setIsFavourite(false);
      }
    }
  }, [fetchSingleSpell, index, favSpell]);

  if (isLoading || !singleSpell) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-full bg-dark-background text-neutral-light-0 p-6'>
      <h2 className=' flex text-4xl font-bold mb-4 text-primaryCyan'>
        {singleSpell.name}
        {isFavourite && (
          <span className='text-yellow-light-500 text-2xl'>
            Favourite Spell⭐
          </span>
        )}
      </h2>
      {/* Level Chip */}
      {singleSpell.level && (
        <div className='inline-flex items-center bg-primaryDark-600 text-primaryLight-800 text-xs px-2 py-1 rounded-md mt-2'>
          Level: {singleSpell.level}
        </div>
      )}
      {/* Range Chip */}
      {singleSpell.range && (
        <div className='inline-flex items-center bg-primaryLight-600 text-primaryDark-800 text-xs px-2 py-1 rounded-md mt-2'>
          Range: {singleSpell.range}
        </div>
      )}
      {/* Description Chips */}
      {singleSpell.desc && singleSpell.desc[0] && (
        <div className='bg-primaryDark-500 text-primaryLight-800 text-sm px-4 py-2 rounded-md mt-4'>
          {singleSpell.desc[0]}
        </div>
      )}
      {singleSpell.desc && singleSpell.desc[1] && (
        <div className='bg-primaryDark-500 text-primaryLight-800 text-sm px-4 py-2 rounded-md mt-2'>
          {singleSpell.desc[1]}
        </div>
      )}
      {/* Components Chip */}
      {singleSpell.components && singleSpell.components.length > 0 && (
        <div className='inline-flex items-center bg-primaryLight-700 text-primaryDark-800 text-xs px-2 py-1 rounded-md mt-4'>
          Components: {singleSpell.components.join(', ')}
        </div>
      )}
      {/* Casting Time Chip */}
      {singleSpell.casting_time && (
        <div className='inline-flex items-center bg-primaryLight-700 text-primaryDark-800 text-xs px-2 py-1 rounded-md mt-2'>
          Casting Time: {singleSpell.casting_time}
        </div>
      )}
      {/* ... (rest of the UI) */}
      {/* Custom Favourite Button */}
      {/* <button
        onClick={() => toggleFavorite(index)}
        className={`px-4 py-2 mt-4 rounded-md ${
          isFavourite
            ? 'bg-primaryLight-500 text-primaryDark-800'
            : 'bg-primaryDark-800 text-primaryLight-800'
        }`}
      >
        {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button> */}
    </div>
  );
};

const mapStateToProps = (state: SpellState) => {
  return {
    singleSpell: state.spellData.singleSpell,
    isLoading: state.spellData.isLoading,
    favSpell: state?.spellData?.favoriteSpells,
  };
};

const mapDispatchToProps: DispatchProps = {
  fetchSingleSpell: (index: string) => actionCreators.fetchSingleSpell(index),
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSpell);
