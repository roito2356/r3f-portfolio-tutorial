import { ContactShadows, Float, Html, OrbitControls, PresentationControls, Text, useGLTF } from '@react-three/drei';
import './App.css';
import { Canvas } from "react-three-fiber";

function App() {

  const macbook =  useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const coffee =  useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  );

  const donut =  useGLTF(
    "./donut.gltf"
  );

  return (
    <div>
      <Canvas camera={{fov: 45, near: 0.1, far:2000, position: [0, 1.5, 6] }}>
        {/*背景色*/}
        <color args={["#2a487c"]} attach="background" />
        {/* <OrbitControls /> */}
        <ambientLight />{/*周囲光*/}
        <directionalLight intensity={1.4} />{/*太陽光*/}
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
        {/* マウス操作 */}
        <PresentationControls
          global
          config={{mass: 2, tension:400}} // マウス操作した時の震動の大きさと速さ
          snap={{mass: 4, tension: 300}} // 初期位置に戻る時の震動の大きさと速さ
          polar={[-Math.PI / 27, Math.PI / 25]} // 垂直方向回転の制限{下限値, 上限値}
          azimuth={[-Math.PI / 2, Math.PI / 2]} // 水平方向回転の制限{下限値, 上限値}
        >
          {/*MacBookオブジェクト*/}
          <Float rotationIntensity={0.3}>{/*浮いてように表現する{傾きの強さ}*/}
            {/*薄い青いライト*/}
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive
              object={macbook.scene}
              position={[0, -1.5, 0]}
            >
              {/*MacBookのスクリーン*/}
              <Html
                position={[0, 1.56, -1.4]}
                distanceFactor={1.17}
                rotation-x={-0.256}
                transform
                wrapperClass="htmlScreen"
              >
                <iframe src="https://threejs-scroll.vercel.app/" frameborder="0"></iframe>
              </Html>
            </primitive>
          </Float>
          {/*コーヒーオブジェクト*/}
          <Float rotationIntensity={1.5}>
            {/*薄い青いライト*/}
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive
              object={coffee.scene}
              position={[-2.4, -1.3, 0.2]}
              scale={[2, 2, 2]}
            ></primitive>
          </Float>
          {/*ドーナツオブジェクト*/}
          <Float rotationIntensity={1.5}>
            {/*薄い青いライト*/}
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive
              object={donut.scene}
              position={[2.4, -1.3, 0.2]}
              scale={[3, 3, 3]}
              rotation-x={0.4}
            ></primitive>
          </Float>

          {/*テキストオブジェクト*/}
          <Text
            font='/RobotoSlab-Bold.ttf'
            fontSize={0.6}
            position={[0, 1.725, 0.75]}
          >
            React-Three-Fiber
          </Text>
        </PresentationControls>

        {/*影をつける*/}
        <ContactShadows scale={7} blur={2.4} opacity={0.7} position-y={-2.0} />
      </Canvas>
    </div>
  )
}

export default App
