import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight,
} from '../../../../vendor/three.module.js';

function createLights() {
  const mainLight = new DirectionalLight('white', 5); 
  mainLight.position.set(10, 10, 10);

  const hemisphereLight = new HemisphereLight('white', 'green', 5);
  
  return { hemisphereLight, mainLight };
}

export { createLights };