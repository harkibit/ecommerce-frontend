/*
 * Display 2 decimals for a number
 */

export const formatDecimals = (number, fixed) =>
  parseFloat(number).toFixed(fixed);
