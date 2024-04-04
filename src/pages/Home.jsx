import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) { // small screen
      screenScale = [0.9, 0.9, 0.9];
    }
    else{
      screenScale = [1, 1, 1]; // default scale
    }
    
    return [screenScale, screenPosition, rotation];
  }
      
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        popup
      </div> */}

      <Canvas 
        className='w-full h-screen relative'
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          
          <directionalLight position={[1, 1, 1]} intensity={2}/> {/* i.e the sun in a direction or a flashlight*/}
          <ambientLight intensity={0.5}/> {/* casts light on all objects equally with no shadow*/}
          {/* <pointLight />  this one is like a sun, light in all directions from a single point*/}
          {/* <spotLight /> a cone shaped pointlight*/}
          <hemisphereLight skyColor="#b1e1ff" groundColor="000000" intensity={1}/> {/* a gradient colored light that is positioned above the scene */}

          <Bird />
          <Sky />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home