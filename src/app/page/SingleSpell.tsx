import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleSpell } from 'app/redux/store/reducers/action-creators';
import { SpellData } from 'app/components/types/types';
import { actionCreators } from 'app/redux/store';

interface SingleSpellProps {
  singleSpell: SpellData | null;
  isLoading: boolean;
  fetchSingleSpell: (index: string) => void;
}

interface SpellState {
  spellData: {
    singleSpell: SpellData;
    isLoading: boolean;
  };
}

interface DispatchProps {
  fetchSingleSpell: (spellIndex: string) => void;
}

const SingleSpell: React.FC<SingleSpellProps> = ({
  singleSpell,
  isLoading,
  fetchSingleSpell,
}) => {
  const { index } = useParams();

  useEffect(() => {
    if (index) {
      fetchSingleSpell(index);
    }
  }, [fetchSingleSpell, index]);

  if (isLoading || !singleSpell) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-full bg-dark-background text-neutral-light-0 p-6'>
      <h2 className='text-2xl font-bold mb-4 text-primaryCyan'>
        {singleSpell.name}
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
      {/* Duration Chip */}
      {singleSpell.duration && (
        <div className='inline-flex items-center bg-primaryDark-700 text-primaryLight-800 text-xs px-2 py-1 rounded-md mt-2'>
          Duration: {singleSpell.duration}
        </div>
      )}
      {/* Concentration Chip */}
      {typeof singleSpell.concentration === 'boolean' && (
        <div className='inline-flex items-center bg-primaryLight-900 text-primaryDark-800 text-xs px-2 py-1 rounded-md mt-2'>
          Concentration: {singleSpell.concentration ? 'Yes' : 'No'}
        </div>
      )}
      {/* Damage Type Chip */}
      {singleSpell.damage?.damage_type && (
        <div className='inline-flex items-center bg-primaryDark-700 text-primaryLight-800 text-xs px-2 py-1 rounded-md mt-4'>
          Damage Type: {singleSpell.damage.damage_type.name} (
          {singleSpell.damage.damage_type.index})
        </div>
      )}
      {/* Damage at Character Level Chip */}
      {singleSpell.damage?.damage_at_character_level && (
        <div className='inline-flex items-center bg-primaryDark-700 text-primaryLight-800 text-xs px-2 py-1 rounded-md mt-2'>
          Damage: {singleSpell.damage.damage_at_character_level[1]} at level 1,{' '}
          {singleSpell.damage.damage_at_character_level[5]} at level 5,{' '}
          {singleSpell.damage.damage_at_character_level[11]} at level 11,{' '}
          {singleSpell.damage.damage_at_character_level[17]} at level 17
        </div>
      )}
      {/* DC Type Chip */}
      {singleSpell.dc?.dc_type && (
        <div className='inline-flex items-center bg-primaryLight-800 text-primaryDark-800 text-xs px-2 py-1 rounded-md mt-2'>
          DC Type: {singleSpell.dc.dc_type.name} ({singleSpell.dc.dc_type.index}
          )
        </div>
      )}
      {/* DC Success Chip */}
      {singleSpell.dc?.dc_success && (
        <div className='inline-flex items-center bg-primaryDark-800 text-primaryLight-800 text-xs px-2 py-1 rounded-md mt-2'>
          DC Success: {singleSpell.dc.dc_success}
        </div>
      )}
      {/* School Chip */}
      {singleSpell.school && (
        <div className='inline-flex items-center bg-primaryLight-800 text-primaryDark-800 text-xs px-2 py-1 rounded-md mt-2'>
          School: {singleSpell.school.name} ({singleSpell.school.index})
        </div>
      )}
      {/* Classes Chip */}
      {singleSpell.classes && singleSpell.classes.length > 0 && (
        <div className='inline-flex items-center bg-primaryLight-800 text-primaryDark-800 text-xs px-2 py-1 rounded-md mt-2'>
          Classes: {singleSpell.classes.map((cls) => cls.name).join(', ')}
        </div>
      )}
      {/* Subclasses Chip */}
      {singleSpell.subclasses && singleSpell.subclasses.length > 0 && (
        <div className='inline-flex items-center bg-primaryDark-800 text-primaryLight-800 text-xs px-2 py-1 rounded-md mt-2'>
          Subclasses:{' '}
          {singleSpell.subclasses.map((subclass) => subclass.name).join(', ')}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: SpellState) => {
  return {
    singleSpell: state.spellData.singleSpell,
    isLoading: state.spellData.isLoading,
  };
};

const mapDispatchToProps: DispatchProps = {
  fetchSingleSpell: (index: string) => actionCreators.fetchSingleSpell(index),
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSpell);
