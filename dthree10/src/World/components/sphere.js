import {
  SphereBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
} from '../../../../vendor/three.module.js';

const radiansPerSecond = MathUtils.degToRad(15);

function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    './src/assets/textures/uv-test-col.png',
  );

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function createSphere() {
  // create a geometry
  const geometry = new SphereBufferGeometry(0.5, 32, 32);

  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const sphere = new Mesh(geometry, material);


  // this method will be called once per frame
  sphere.tick = (delta) => {
    // increase the sphere's rotation each frame
    sphere.rotation.z += radiansPerSecond * delta;
    sphere.rotation.x += radiansPerSecond * delta;
    sphere.rotation.y += radiansPerSecond * delta;
  };
  
  return sphere;
}

export { createSphere };