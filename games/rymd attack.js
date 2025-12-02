import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Spelare from "./Spelare/Spelare.js";
import Robot from "./Robot/Robot.js";
import Ammo from "./Ammo/Ammo.js";
import Planet from "./Planet/Planet.js";
import Easy from "./Easy/Easy.js";
import Medium from "./Medium/Medium.js";
import Hard from "./Hard/Hard.js";
import Box from "./Box/Box.js";
import Boss from "./Boss/Boss.js";
import Stats from "./Stats/Stats.js";
import Play from "./Play/Play.js";
import Endless from "./Endless/Endless.js";
import ResetStats from "./ResetStats/ResetStats.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Spelare: new Spelare({
    x: 0,
    y: -120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 50,
    visible: true,
    layerOrder: 1,
  }),
  Robot: new Robot({
    x: -94,
    y: -132,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 2,
  }),
  Ammo: new Ammo({
    x: -65,
    y: 160,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 63.218397734455436,
    visible: false,
    layerOrder: 3,
  }),
  Planet: new Planet({
    x: -173,
    y: -146,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 4,
  }),
  Easy: new Easy({
    x: -150,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  Medium: new Medium({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 8,
  }),
  Hard: new Hard({
    x: 150,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 7,
  }),
  Box: new Box({
    x: 60,
    y: -159,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  Boss: new Boss({
    x: 0,
    y: 150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 10,
  }),
  Stats: new Stats({
    x: 0,
    y: 75,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 12,
  }),
  Play: new Play({
    x: 0,
    y: 75,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 13,
  }),
  Endless: new Endless({
    x: 150,
    y: 75,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6,
  }),
  ResetStats: new ResetStats({
    x: 150,
    y: 75,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 11,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
