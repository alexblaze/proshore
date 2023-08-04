import React from "react";
import { connect } from "react-redux";
import {
  SpellState,
  DispatchProps,
  SpellList,
  Spell,
} from "app/components/types/types";
import { actionCreators } from "app/redux/store";
import Spinner from "app/components/spinner/Spinner";

interface AllSpellsProps {
  data: SpellList;
  isLoading: boolean;
}

const AllSpells: React.FC<AllSpellsProps & DispatchProps> = ({
  data,
  isLoading,
  fetchAllSpells,
}) => {
  const [favoriteSpells, setFavoriteSpells] = React.useState<string[]>([]);
  React.useEffect(() => {
    fetchAllSpells(); // Dispatch the fetchAllSpells action on component mount
  }, [fetchAllSpells]);

  const isFavorite = (spellIndex: string) => {
    return favoriteSpells.includes(spellIndex);
  };

  // Function to toggle the favorite status of a spell
  const toggleFavorite = (spellIndex: string) => {
    setFavoriteSpells((prevFavoriteSpells) =>
      prevFavoriteSpells.includes(spellIndex)
        ? prevFavoriteSpells.filter((index) => index !== spellIndex)
        : [...prevFavoriteSpells, spellIndex]
    );
  };

  return (
    <div className="bg-dark-background text-white">
      <h1 className="text-2xl font-bold mb-4">All Spells</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-500">
          {/* ... (table header) */}
          <tbody>
            {data.results.map((spell: Spell, index: number) => (
              <tr
                key={spell.index}
                className={`${
                  index % 2 === 0
                    ? "bg-neutral-dark-100"
                    : "bg-neutral-dark-200"
                }`}
              >
                <td className="border border-gray-500 px-4 py-2">
                  {spell.index}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {spell.name}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <button
                    onClick={() => toggleFavorite(spell.index)}
                    className={`text-yellow-light-500 ${
                      isFavorite(spell.index) ? "fill-current" : ""
                    }`}
                  >
                    {/* ... (star icon SVG) */}
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
  };
};

const mapDispatchToProps: DispatchProps = {
  fetchAllSpells: actionCreators.fetchAllSpells,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllSpells);
