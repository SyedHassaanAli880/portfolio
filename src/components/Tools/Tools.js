import React, { Suspense } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import adodotnet from './adonet.png';
import entityframeworkcoreLogo from './entityframeworkcore.png';
import postmanLogo from './postman.png';
import reactLogo from './react.png';
import restapiLogo from './restapi.png';
import sqlserverLogo from './sqlserver.png';
import githubdesktopLogo from './GitHubDesktop.png';
import csharp from './c#.png';
import javascript from './JS.png';
import vscodeLogo from './vscode.png';
import visualstudioLogo from './visualstudio.png';

function DotNetCore3DLogo() {
  const texture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL + '/dotnetcore.png');
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function React3DLogo() {
  const texture = useLoader(THREE.TextureLoader, reactLogo);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function SqlServer3DLogo() {
  const texture = useLoader(THREE.TextureLoader, sqlserverLogo);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function Postman3DLogo() {
  const texture = useLoader(THREE.TextureLoader, postmanLogo);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function EntityFramework3DLogo() {
  const texture = useLoader(THREE.TextureLoader, entityframeworkcoreLogo);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function VisualStudio3DLogo() {
  const texture = useLoader(THREE.TextureLoader, visualstudioLogo);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function GithubDesktop3DLogo() {
  const texture = useLoader(THREE.TextureLoader, githubdesktopLogo);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function RestApi3DLogo() {
  const texture = useLoader(THREE.TextureLoader, restapiLogo);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function VSCode3DLogo() {
  const texture = useLoader(THREE.TextureLoader, vscodeLogo);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function AdoNet3DLogo() {
  const texture = useLoader(THREE.TextureLoader, adodotnet);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function CSharp3DLogo() {
  const texture = useLoader(THREE.TextureLoader, csharp);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

function Javascript3DLogo() {
  const texture = useLoader(THREE.TextureLoader, javascript);
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}

const Tools = () => {
  const toolsData = [
    { id: 1, imageUrl: process.env.PUBLIC_URL + '/dotnetcore.png', is3D: 'dotnet' },
    { id: 2, imageUrl: reactLogo, is3D: 'react' },
    { id: 3, imageUrl: sqlserverLogo, is3D: 'sqlserver' },
    { id: 4, imageUrl: postmanLogo, is3D: 'postman' },
    { id: 5, imageUrl: entityframeworkcoreLogo, is3D: 'entityframework' },
    { id: 6, imageUrl: visualstudioLogo, is3D: 'visualstudio' },
    { id: 7, imageUrl: githubdesktopLogo, is3D: 'githubdesktop' },
    { id: 8, imageUrl: restapiLogo, is3D: 'restapi' },
    { id: 9, imageUrl: vscodeLogo, is3D: 'vscode' },
    { id: 10, imageUrl: adodotnet, is3D: 'adodotnet' },
    { id: 11, imageUrl: csharp, is3D: 'csharp' },
    { id: 12, imageUrl: javascript, is3D: 'javascript' }
  ];

  return (
    <section id="tools" className="py-5 text-light">
      <Container>
        <h2 className="mb-5 text-center">TOOLS, LANGUAGES & FRAMEWORKS</h2>
        <Row className="g-4 justify-content-center">
          {toolsData.map((tool, idx) => (
            <Col key={tool.id || idx} xs={12} sm={6} md={4} lg={3} xl={2}>
              {tool.is3D === 'dotnet' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <DotNetCore3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">.NET Core</div>
                </div>
              ) : tool.is3D === 'react' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <React3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">React.js</div>
                </div>
              ) : tool.is3D === 'sqlserver' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <SqlServer3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">MS SQL Server</div>
                </div>
              ) : tool.is3D === 'postman' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <Postman3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">Postman</div>
                </div>
              ) : tool.is3D === 'entityframework' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <EntityFramework3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">Entity Framework Core</div>
                </div>
              ) : tool.is3D === 'visualstudio' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <VisualStudio3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">Visual Studio</div>
                </div>
              ) : tool.is3D === 'githubdesktop' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <GithubDesktop3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">Github Desktop</div>
                </div>
              ) : tool.is3D === 'restapi' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <RestApi3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">Rest API</div>
                </div>
              ) : tool.is3D === 'vscode' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <VSCode3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">Visual Studio Code</div>
                </div>
              ) : tool.is3D === 'adodotnet' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <AdoNet3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">ADO .NET</div>
                </div>
              ) : tool.is3D === 'csharp' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <CSharp3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">C#</div>
                </div>
              ) : tool.is3D === 'javascript' ? (
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', flexDirection: 'column' }}>
                  <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '120px', width: '120px', background: 'transparent' }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 2, 2]} intensity={0.7} />
                    <Suspense fallback={null}>
                      <Javascript3DLogo />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                  <div className="fs-6 mt-3">Javascript</div>
                </div>
              ) : (
                <Card className="h-100 shadow-sm text-center">
                  <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
                    <img src={tool.imageUrl} alt={tool.title} style={{ height: '100px', objectFit: 'contain', padding: '1rem', maxWidth: '100%' }} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-6">{tool.title}</Card.Title>
                  </Card.Body>
                </Card>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Tools;