import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from '../../../../vendor/three.module.js';

function createCube2() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'purple' });

  // create a Mesh containing the geometry and material
  const cube2 = new Mesh(geometry, material);

  cube2.scale.x = 0.15;
  cube2.scale.y = 0.15;
  cube2.scale.z = 0.15;

  cube2.rotation.set(-0.5, -0.1, 0.8);

  cube2.position.set(2, 1, 2);

  return cube2;
}

export { createCube2 };