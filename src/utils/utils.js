/**
 * Random number generation
 * @param max
 * @param min
 * @returns {number}
 */
export function randomNumberGeneration(max, min) {
  return Math.random() * (max - min) + min;
}
