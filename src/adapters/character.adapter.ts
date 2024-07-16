import { CharacterInfo } from '../models/character.model';

export const CharacterAdapter = (characterInfo: CharacterInfo) => {
  return characterInfo.results;
};
