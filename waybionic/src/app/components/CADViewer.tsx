import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

interface CADViewerProps {
  modelPath: string;
}

export default function CADViewer({ modelPath }: CADViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    while (containerRef.current.firstChild) { //clear existing/leftover canvases
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfce7f3); //light pink
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 4);

    //renderder setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    //env map used for the glass/clear look on the model
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-10, -10, -10);
    scene.add(directionalLight2);

    //object movement controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controlsRef.current = controls;

    //loading the glb model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.visible = false;
          }
        });

        //bounds filter
        const ARM_BOUNDS = {
          x: [0.5, 2.2],
          y: [0.5, 2.4],
          z: [1.2, 2.1],
        };

        const visibleBox = new THREE.Box3();
        let visibleCount = 0;

        // anything outside bounds is a stray part (was used to hide floating screws)
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const meshBox = new THREE.Box3().setFromObject(child);
            const center = meshBox.getCenter(new THREE.Vector3());

            const inBounds =
              center.x >= ARM_BOUNDS.x[0] && center.x <= ARM_BOUNDS.x[1] &&
              center.y >= ARM_BOUNDS.y[0] && center.y <= ARM_BOUNDS.y[1] &&
              center.z >= ARM_BOUNDS.z[0] && center.z <= ARM_BOUNDS.z[1];

            if (inBounds) {
              child.visible = true;
              visibleBox.union(meshBox);
              visibleCount++;

              //transparency and material effects
              child.material = new THREE.MeshPhysicalMaterial({
                color: 0x3a2066, //purple
                metalness: 0.0,
                roughness: 0.05,
                transmission: 0.92,
                thickness: 1.5,
                ior: 2,
                transparent: true,
                opacity: 0.7,
                envMapIntensity: 1.2,
              });
            }
          }
        });

        console.log(`Showing ${visibleCount} meshes in arm bounds`);

        //centering around midpoint of arm
        const center = visibleBox.getCenter(new THREE.Vector3());
        const size = visibleBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        model.position.set(-center.x, -center.y, -center.z);

        const fitDistance = (maxDim / 2) / Math.tan((Math.PI * 50) / 360) * 1.4;
        camera.position.set(0, 0, fitDistance);

        controls.target.set(0, 0, 0);
        controls.update();
      },
      (progress) => {
        console.log('Loading...', (progress.loaded / progress.total * 100).toFixed(1) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    //animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    //zooming in/out
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    //cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current?.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [modelPath]);

  return <div ref={containerRef} className="w-full h-full" />;
}