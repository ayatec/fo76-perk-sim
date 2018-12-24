
import {
  STRENGTH,
  PERCEPTION,
  ENDURANCE,
  CHARISMA,
  INTELLIGENCE,
  AGILITY,
  LUCK,
  UNDEFINED,
} from 'constants/Special';

const generateCard = (
  special,
  cost,
  name,
  description,
  image,
) => ({
  special: special || UNDEFINED,
  cost: cost || null,
  name: name || null,
  description: description || null,
  image: image || null,
});

export const CARDS_STRENGTH = [
  [
    generateCard(STRENGTH, 1, 'test', 'desc STRENGTH'),
    generateCard(STRENGTH, 2, 'test', 'desc'),
    generateCard(STRENGTH, 3, 'test', 'desc'),
  ],
  [
    generateCard(STRENGTH, 1, 'test2', 'desc2'),
    generateCard(STRENGTH, 2, 'test2', 'desc2 STRENGTH'),
    generateCard(STRENGTH, 3, 'test2', 'desc2'),
  ],
];

export const CARDS_PERCEPTION = [
  [
    generateCard(PERCEPTION, 1, 'test', 'desc PERCEPTION'),
    generateCard(PERCEPTION, 2, 'test', 'desc'),
    generateCard(PERCEPTION, 3, 'test', 'desc'),
  ],
  [
    generateCard(PERCEPTION, 1, 'test2', 'desc2'),
    generateCard(PERCEPTION, 2, 'test2', 'desc2 PERCEPTION'),
    generateCard(PERCEPTION, 3, 'test2', 'desc2'),
  ],
];

export const CARDS_ENDURANCE = [
  [
    generateCard(ENDURANCE, 1, 'test', 'desc ENDURANCE'),
    generateCard(ENDURANCE, 2, 'test', 'desc'),
    generateCard(ENDURANCE, 3, 'test', 'desc'),
  ],
  [
    generateCard(ENDURANCE, 1, 'test2', 'desc2'),
    generateCard(ENDURANCE, 2, 'test2', 'desc2 ENDURANCE'),
    generateCard(ENDURANCE, 3, 'test2', 'desc2'),
  ],
];

export const CARDS_CHARISMA = [
  [
    generateCard(CHARISMA, 1, 'test', 'desc CHARISMA'),
    generateCard(CHARISMA, 2, 'test', 'desc'),
    generateCard(CHARISMA, 3, 'test', 'desc'),
  ],
  [
    generateCard(CHARISMA, 1, 'test2', 'desc2'),
    generateCard(CHARISMA, 2, 'test2', 'desc2 CHARISMA'),
    generateCard(CHARISMA, 3, 'test2', 'desc2'),
  ],
];

export const CARDS_INTELLIGENCE = [
  [
    generateCard(INTELLIGENCE, 1, 'test', 'desc INTELLIGENCE'),
    generateCard(INTELLIGENCE, 2, 'test', 'desc'),
    generateCard(INTELLIGENCE, 3, 'test', 'desc'),
  ],
  [
    generateCard(INTELLIGENCE, 1, 'test2', 'desc2'),
    generateCard(INTELLIGENCE, 2, 'test2', 'desc2 INTELLIGENCE'),
    generateCard(INTELLIGENCE, 3, 'test2', 'desc2'),
  ],
];

export const CARDS_AGILITY = [
  [
    generateCard(AGILITY, 1, 'test', 'desc AGILITY'),
    generateCard(AGILITY, 2, 'test', 'desc'),
    generateCard(AGILITY, 3, 'test', 'desc'),
  ],
  [
    generateCard(AGILITY, 1, 'test2', 'desc2'),
    generateCard(AGILITY, 2, 'test2', 'desc2 AGILITY'),
    generateCard(AGILITY, 3, 'test2', 'desc2'),
  ],
];

export const CARDS_LUCK = [
  [
    generateCard(LUCK, 1, 'test', 'desc LUCK'),
    generateCard(LUCK, 2, 'test', 'desc'),
    generateCard(LUCK, 3, 'test', 'desc'),
  ],
  [
    generateCard(LUCK, 1, 'test2', 'desc2'),
    generateCard(LUCK, 2, 'test2', 'desc2 LUCK'),
    generateCard(LUCK, 3, 'test2', 'desc2'),
  ],
];

export default [
  CARDS_STRENGTH,
  CARDS_PERCEPTION,
  CARDS_ENDURANCE,
  CARDS_CHARISMA,
  CARDS_INTELLIGENCE,
  CARDS_AGILITY,
  CARDS_LUCK,
];
