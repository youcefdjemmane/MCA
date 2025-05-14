
import { useEffect, useRef } from 'react';
import * as Marzipano from 'marzipano';

const VirtualTourViewer = () => {
  const panoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!panoRef.current) return;
    
    // Initialize viewer
    const viewerOpts = {
      controls: {
        mouseViewMode: 'drag' // Enable mouse drag to rotate the view
      }
    };
    
    const viewer = new Marzipano.Viewer(panoRef.current, viewerOpts);
    
    // Create and configure the scene
    const createScene = (viewer: any, source: any, initialView: any) => {
      // Create geometry for the scene
      const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
      
      // Create view for the scene
      const limiter = Marzipano.RectilinearView.limit.traditional(
        3072, // max width
        100 * Math.PI / 180 // max pitch
      );
      const view = new Marzipano.RectilinearView(initialView, limiter);
      
      // Create scene
      const scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true
      });
      
      return scene;
    };
    
    // Source image (Using a placeholder for the demo)
    const source = Marzipano.ImageUrlSource.fromString(
      "https://source.unsplash.com/random/4000x2000/?museum,hall,panorama"
    );
    
    // Initial view parameters
    const initialViewParams = {
      yaw: 0, // Initial horizontal angle
      pitch: 0, // Initial vertical angle
      fov: 1.5 // Initial field of view (smaller = more zoomed in)
    };
    
    // Create and display the scene
    const scene = createScene(viewer, source, initialViewParams);
    scene.switchTo();
    
    // Create and add navigation hotspots
    const hotspots = [
      {
        id: 'hotspot-1',
        yaw: 0.2,
        pitch: 0,
        title: 'Egyptian Room',
        description: 'Explore ancient Egyptian artifacts'
      },
      {
        id: 'hotspot-2',
        yaw: -1.0,
        pitch: 0.1,
        title: 'Greek Gallery',
        description: 'View classical Greek sculptures'
      },
      {
        id: 'hotspot-3',
        yaw: 1.2,
        pitch: -0.2,
        title: 'Asian Collection',
        description: 'Discover artifacts from across Asia'
      }
    ];
    
    // Create hotspot elements
    hotspots.forEach(hotspot => {
      // Create wrapper element
      const wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      
      // Create hotspot element
      const element = document.createElement('div');
      element.classList.add('hotspot-dot');
      
      // Create tooltip
      const tooltip = document.createElement('div');
      tooltip.classList.add('hotspot-tooltip');
      
      // Add title
      const title = document.createElement('h3');
      title.textContent = hotspot.title;
      tooltip.appendChild(title);
      
      // Add description
      const description = document.createElement('p');
      description.textContent = hotspot.description;
      tooltip.appendChild(description);
      
      // Assemble hotspot
      wrapper.appendChild(element);
      wrapper.appendChild(tooltip);
      
      // Add hotspot to scene
      scene.hotspotContainer().createHotspot(wrapper, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });
    
    // Clean up on component unmount
    return () => {
      viewer.destroy();
    };
  }, []);
  
  return (
    <div className="relative">
      <div 
        ref={panoRef} 
        id="pano" 
        className="h-[80vh] w-full bg-gray-900"
      ></div>
      <style>
        {`
        .hotspot {
          position: relative;
        }
        .hotspot-dot {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(212, 175, 55, 0.8);
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.3);
          transition: transform 0.3s;
          animation: pulse 2s infinite;
        }
        .hotspot-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 10px;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 12px;
          border-radius: 4px;
          width: 200px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
          text-align: center;
        }
        .hotspot:hover .hotspot-tooltip {
          opacity: 1;
        }
        .hotspot:hover .hotspot-dot {
          transform: scale(1.2);
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.6);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
          }
        }
        `}
      </style>
    </div>
  );
};

export default VirtualTourViewer;
