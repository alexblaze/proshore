import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleSpell } from 'app/redux/store/reducers/action-creators';
import { SpellData } from 'app/components/types/types';
import { actionCreators } from 'app/redux/store';
import Spinner from 'app/components/spinner/Spinner';

// Props interface for SingleSpell component
interface SingleSpellProps {
  singleSpell: SpellData | null;
  isLoading: boolean;
  fetchSingleSpell: (index: string) => void;
  favSpell: string[];
}

// State interface for SingleSpell component
interface SpellState {
  spellData: {
    singleSpell: SpellData;
    isLoading: boolean;
    favoriteSpells: string[];
  };
}

// DispatchProps interface for SingleSpell component
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
  const navigate = useNavigate();

  // Fetch the single spell data and check if it's in favorites on component mount
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

  // Show a loading spinner if data is still loading or singleSpell is null
  if (isLoading || !singleSpell) {
    return (
      <div className='flex justify-center items-center h-full'>
        <Spinner />
      </div>
    );
  }
  return (
    <div className='h-full bg-dark-background text-neutral-light-0 p-6 animate-fade-in'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center space-x-2'>
          <button
            onClick={() => navigate(-1)}
            className='text-primaryCyan text-4xl md:text-5xl transition-transform transform hover:scale-110'
          >
            &#8678;
          </button>
          <h2 className='flex justify-between items-center text-5xl md:text-6xl font-bold text-primaryCyan'>
            {singleSpell.name}
          </h2>
        </div>

        <div>
          <h2 className='flex justify-between items-center text-5xl md:text-6xl font-bold text-primaryCyan'>
            {isFavourite && (
              <span className='text-yellow-light-500 text-3xl md:text-4xl'>
                Favourite Spell⭐
              </span>
            )}
          </h2>
        </div>
      </div>
      {/* Level Chip */}
      {singleSpell.level && (
        <div className='inline-flex items-center bg-primaryDark-600 text-green-300 text-base md:text-lg px-2 py-1 rounded-md mt-2'>
          Level: {singleSpell.level}
        </div>
      )}
      {/* Range Chip */}
      {singleSpell.range && (
        <div className='inline-flex items-center bg-primaryLight-600 text-yellow-300 text-base md:text-lg px-2 py-1 rounded-md mt-2'>
          Range: {singleSpell.range}
        </div>
      )}
      {/* Description Chips */}
      {singleSpell.desc && singleSpell.desc[0] && (
        <div className='bg-primaryDark-500 text-blue-300 text-lg md:text-xl px-4 py-2 rounded-md mt-4'>
          {singleSpell.desc[0]}
        </div>
      )}
      {singleSpell.desc && singleSpell.desc[1] && (
        <div className='bg-primaryDark-500 text-primaryLight-800 text-lg md:text-xl px-4 py-2 rounded-md mt-2'>
          {singleSpell.desc[1]}
        </div>
      )}
      {/* Components Chip */}
      {singleSpell.components && singleSpell.components.length > 0 && (
        <div className='inline-flex items-center bg-primaryLight-700 text-primaryDark-800 text-base md:text-lg px-2 py-1 rounded-md mt-4'>
          Components: {singleSpell.components.join(', ')}
        </div>
      )}
      {/* Casting Time Chip */}
      {singleSpell.casting_time && (
        <div className='inline-flex items-center bg-primaryLight-700 text-primaryDark-800 text-base md:text-lg px-2 py-1 rounded-md mt-2'>
          Casting Time: {singleSpell.casting_time}
        </div>
      )}
    </div>
  );
};

// Map the state to props for SingleSpell component
const mapStateToProps = (state: SpellState) => {
  return {
    singleSpell: state.spellData.singleSpell,
    isLoading: state.spellData.isLoading,
    favSpell: state?.spellData?.favoriteSpells,
  };
};

// Map the dispatch functions to props for SingleSpell component
const mapDispatchToProps: DispatchProps = {
  fetchSingleSpell: (index: string) => actionCreators.fetchSingleSpell(index),
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSpell);
