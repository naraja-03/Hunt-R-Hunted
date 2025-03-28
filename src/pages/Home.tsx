import React, { useState, useRef } from "react";

const initialTigers: string[] = ["c1", "c4", "c5"];
const initialSheeps: string[] = [];
const validMoves: Record<string, string[]> = {
  c1: ["c3", "c4", "c5", "c6"],
  c2: ["c3", "c8"],
  c3: ["c2", "c4", "c8"],
  c4: ["c3", "c5", "c10"],
  c5: ["c4", "c6", "c11"],
  c6: ["c5", "c7", "c12"],
  c7: ["c6", "c13"],
  c8: ["c2", "c9", "c14"],
  c9: ["c8", "c10", "c17"],
  c10: ["c9", "c11", "c16"],
  c11: ["c10", "c12", "c17"],
  c12: ["c11", "c13", "c18"],
  c13: ["c12", "c7", "c19"],
  c14: ["c8", "c15"],
  c15: ["c14", "c9", "c16", "c20"],
  c16: ["c15", "c10", "c17", "c21"],
  c17: ["c16", "c11", "c18", "c22"],
  c18: ["c17", "c12", "c19", "c23"],
  c19: ["c18", "c13"],
  c20: ["c15", "c21"],
  c21: ["c20", "c16", "c22"],
  c22: ["c21", "c17", "c23"],
  c23: ["c22", "c18"]
};

const HomePage: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const [tigers, setTigers] = useState(initialTigers);
  const [sheeps, setsheeps] = useState(initialSheeps);
  // const [sheepsLeft, setsheepsLeft] = useState(15);
  const [currentPlayer, setCurrentPlayer] = useState('SHEEP')

  const handlePlayerInput = (event: React.MouseEvent<SVGElement>) => {
    const circleId = (event.target as SVGElement).id;
    if (!circleId) return;

    if (tigers.includes(circleId) || sheeps.includes(circleId)) {
      if (validMoves[circleId]) {
        validMoves[circleId].forEach((move: string) => {
          if (currentPlayer === 'SHEEP' && !tigers.includes(move) && !sheeps.includes(move)) {
            updateCircleClass(move, "sheep");
          } else if (currentPlayer === 'TIGER' && !tigers.includes(move)) {
            updateCircleClass(move, "tiger");
          }

        });
      }
      return; // Prevents placing a new piece in an occupied position
    }

    if (currentPlayer === 'SHEEP') {
      setsheeps(prevSheeps => [...prevSheeps, circleId]);
      updateCircleClass(circleId, "sheep");
      setCurrentPlayer('TIGER');
    } else {
      setTigers(prevTigers => [...prevTigers, circleId]);
      updateCircleClass(circleId, "tiger");
      setCurrentPlayer('SHEEP');
    }
  };

  const updateCircleClass = (circleId: string, newClass: string) => {
    if (svgRef.current) {
      const circleElement = svgRef.current.querySelector(`#${circleId}`) as SVGElement | null;
      if (circleElement) {
        circleElement.setAttribute("class", newClass);
      }
    }
  };


  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <svg ref={svgRef} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="98%" >
        <title>New Project</title>
        <style>
          {`.s0 { fill: none; stroke: #808080; stroke-miterlimit: 100; stroke-width: 16; }
           .point { fill: red; r: 8; }
           .movable-points { fill: blue; r: 12;}
           .sheep { fill: wheat; r: 16; }
          .tiger { fill: orange; r: 24; }
           `}
        </style>
        <path id="Shape 47" className="s0" d="m660.4 307.5l-120.4-235.5" />
        <path id="Shape 46" className="s0" d="m540 72l62 235.5" />
        <path id="Shape 45" className="s0" d="m540 72l-57 235.5" />
        <path id="Shape 44" className="s0" d="m540 72" />
        <path id="Shape 43" className="s0" d="m540 72l-116 235.5" />
        <path id="Shape 42" className="s0" d="m1006.6 307.5h-346.2" />
        <path id="Shape 41" className="s0" d="m602 307.5h58.4" />
        <path id="Shape 40" className="s0" d="m486 307.5h116" />
        <path id="Shape 39" className="s0" d="m424 307.5h60" />
        <path id="Shape 38" className="s0" d="m72.8 307.5h351.2" />
        <path id="Shape 37" className="s0" d="m1006.6 540v-232.5" />
        <path id="Shape 36" className="s0" d="m771.8 540l-111.4-232.5" />
        <path id="Shape 35" className="s0" d="m660.4 540l-58.4-232.5" />
        <path id="Shape 34" className="s0" d="m424 540l59-232.5" />
        <path id="Shape 33" className="s0" d="m305.4 540l118.6-232.5" />
        <path id="Shape 32" className="s0" d="m305.4 540" />
        <path id="Shape 31" className="s0" d="m72.8 540v-232.5" />
        <path id="Shape 30" className="s0" d="m72.8 540" />
        <path id="Shape 29" className="s0" d="m305.4 540h-232.6" />
        <path id="Shape 28" className="s0" d="m424 540h-118.6" />
        <path id="Shape 27" className="s0" d="m665 540h-241" />
        <path id="Shape 26" className="s0" d="m771.8 540h-111.4" />
        <path id="Shape 25" className="s0" d="m1006.6 540h-234.8" />
        <path id="Shape 24" className="s0" d="m1006.6 772.8v-232.8" />
        <path id="Shape 23" className="s0" d="m896.4 772.8l-124.6-232.8" />
        <path id="Shape 22" className="s0" d="m715.6 772.8l-55.2-232.8" />
        <path id="Shape 21" className="s0" d="m363.8 772.8l60.2-232.8" />
        <path id="Shape 20" className="s0" d="m186.3 772.8l119.1-232.8" />
        <path id="Shape 19" className="s0" d="m72.8 772.8v-232.8" />
        <path id="Shape 18" className="s0" d="m186.3 772.8h-113.5" />
        <path id="Shape 17" className="s0" d="m363.8 772.8h-177.5" />
        <path id="Shape 16" className="s0" d="m722 772.8h-358.2" />
        <path id="Shape 15" className="s0" d="m896.4 772.8h-180.8" />
        <path id="Shape 14" className="s0" d="m1006.6 772.8h-110.2" />
        <path id="Shape 13" className="s0" d="m1006.6 1008.7l-110.2-235.9" />
        <path id="Shape 12" className="s0" d="m771.8 1008.7l-56.2-235.9" />
        <path id="Shape 11" className="s0" d="m305.4 1008.7l58.4-235.9" />
        <path id="Shape 10" className="s0" d="m72.8 1008.7l113.5-235.9" />
        <path id="Shape 9" className="s0" d="m305.4 1008.7h-232.6" />
        <path id="Shape 8" className="s0" d="m771.8 1008.7h-466.4" />
        <path id="Shape 7" className="s0" d="m1006.6 1008.7h-234.8" />
        <circle id="c1" className="tiger" cx="540" cy="72" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c2" className="point" cx="72.8" cy="307.5" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c3" className="point" cx="424" cy="307.5" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c4" className="tiger" cx="486" cy="307.5" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c5" className="tiger" cx="602" cy="307.5" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c6" className="point" cx="660.4" cy="307.5" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c7" className="point" cx="1006.7" cy="307.5" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c8" className="point" cx="72.8" cy="540" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c9" className="point" cx="305.4" cy="540" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c10" className="point" cx="424" cy="540" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c11" className="point" cx="665" cy="540" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c12" className="point" cx="771.8" cy="540" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c13" className="point" cx="1006.6" cy="540" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c14" className="point" cx="72.8" cy="772.8" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c15" className="point" cx="186.3" cy="772.8" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c16" className="point" cx="363.8" cy="772.8" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c17" className="point" cx="722" cy="772.8" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c18" className="point" cx="896.4" cy="772.8" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c19" className="point" cx="1006.6" cy="772.8" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c20" className="point" cx="72.8" cy="1008.7" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c21" className="point" cx="305.4" cy="1008.7" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c22" className="point" cx="771.8" cy="1008.7" r="8" onClick={(e) => handlePlayerInput(e)} />
        <circle id="c23" className="point" cx="1006.6" cy="1008.7" r="8" onClick={(e) => handlePlayerInput(e)} />
      </svg>
    </div>
  );
};

export default HomePage;
