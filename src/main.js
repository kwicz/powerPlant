import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { hydrate, feed, giveLight, giveBug, storeState, bestWater } from './powerPlant.js';


$(document).ready(function() {
  const initialState = { soil: 0, light: 0, water: 0 };
  const flower = storeState(initialState);

  $("#waterBW").click(function() {
    const updatedFlower = (flower(bestWater));
    $("#water-value").text(updatedFlower.water);
  });
  $("#water").click(function() {
    const updatedFlower = (flower(hydrate));
    $("#water-value").text(updatedFlower.water);
  });
  $("#soil").click(function() {
    const updatedFlower = (flower(feed));
    $("#soil-value").text(updatedFlower.soil);
  });
  $("#light").click(function() {
    const updatedFlower = (flower(feed));
    $("#light-value").text(updatedFlower.light);
  });
});
