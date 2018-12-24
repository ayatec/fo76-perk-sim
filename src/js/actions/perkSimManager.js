
export const OPEN_SPECIAL = 'OPEN_SPECIAL';
export const CLOSE_SPECIAL = 'CLOSE_SPECIAL';

// Action Creators
export const openSpecial = (
  special,
) => ({
  type: OPEN_SPECIAL,
  special,
});

export const closeSpecial = (
) => ({
  type: CLOSE_SPECIAL,
});
