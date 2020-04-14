import { hydrate, feed, giveLight, giveBug } from './../src/powerPlant.js';

describe('Plant', () => {

  test('should correctly adjust the hydration of the plant', () => {
    // Arrange
    let flower = { soil: 0, light: 0, water: 0 }

    // Act
    const newFlower = hydrate(1)(flower);

    // Assert
    expect(newFlower.water).toEqual(1);
  });
});