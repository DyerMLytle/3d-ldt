import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight,
} from '../../../../vendor/three.module.js';

function createLights() {
  const mainLight = new DirectionalLight('white', 5); 
  mainLight.position.set(10, 10, 10);

  const ambientLight = new AmbientLight('white', 2);
  
  return { ambientLight, mainLight };
}

export { createLights };