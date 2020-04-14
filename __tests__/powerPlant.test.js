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

  test('should correctly adjust all properties of the plant', () => {
    // Arrange
    let flower = { soil: 0, light: 0, water: 0 }

    // Act
    const hydratedFlower = hydrate(1)(flower);
    const fedFlower = feed(1)(hydratedFlower);
    const litFlower = giveLight(1)(fedFlower);
    const buggedOutFlower = giveBug(1)(litFlower);
    const neglectedFlower = hydrate(-4)(buggedOutFlower);

    // Assert
    expect(neglectedFlower.water).toEqual(-3);
    expect(neglectedFlower.soil).toEqual(1);
    expect(neglectedFlower.light).toEqual(1);
    expect(neglectedFlower.bug).toEqual(1);
  });
});