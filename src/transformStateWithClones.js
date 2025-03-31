'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  let CURRENT_STATE = { ...state };
  const RESULT = [];

  for (const action of actions) {
    switch (action.type) {
      case `addProperties`:
        CURRENT_STATE = { ...CURRENT_STATE, ...action.extraData };
        break;

      case 'removeProperties':
        CURRENT_STATE = { ...CURRENT_STATE };
        action.keysToRemove.forEach((key) => delete CURRENT_STATE[key]);
        break;

      case 'clear':
        CURRENT_STATE = {};
        break;
    }

    RESULT.push({ ...CURRENT_STATE });
  }

  return RESULT;
}

module.exports = transformStateWithClones;
