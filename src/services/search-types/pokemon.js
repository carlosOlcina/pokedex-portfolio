export function pokemon (query) {
  const pokemon = {
    name: query.name,
    image: query.sprites.front_default,
    abilities: query.abilities,
    moves: query.moves.map(move=>({
      name: move.move.name,
      learnMethod: move.version_group_details[move.version_group_details.length-1].move_learn_method.name
    })),
    types: query.types,
  }
  return pokemon
}