import React from 'react';

const SquareGenerator = ({ width, height, numColors }) => {

  const  generateColors=()=>['red','Black','blue','green']
  const calculateBiggestArea = (grid) => {
    const visited = new Set();
    let maxArea = 0;

    const dfs = (row, col, color) => {
      if (
        row < 0 ||
        row >= height ||
        col < 0 ||
        col >= width ||
        visited.has(`${row}-${col}`) ||
        grid[row][col] !== color
      ) {
        return 0;
      }

      visited.add(`${row}-${col}`);

      let area = 1;
      area += dfs(row - 1, col, color); // Up
      area += dfs(row + 1, col, color); // Down
      area += dfs(row, col - 1, color); // Left
      area += dfs(row, col + 1, color); // Right

      return area;
    };

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const color = grid[i][j];
        if (!visited.has(`${i}-${j}`)) {
          const area = dfs(i, j, color);
          if (area > maxArea) {
            maxArea = area;
          }
        }
      }
    }

    return maxArea;
  };

  const renderSquare = () => {
    const colors = generateColors();
    const grid = [];

    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        const color = colors[Math.floor(Math.random() * numColors)];
        row.push(color);
      }
      grid.push(row);
    }

    const biggestArea = calculateBiggestArea(grid);

    const square = grid.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((color, colIndex) => {
          const cellStyle = {
            backgroundColor: color,
            width: '50px',
            height: '50px',
            display: 'inline-block',
            margin: '1px',
            textAlign: 'center',
            lineHeight: '50px',
          };
          const area = calculateBiggestArea(grid);
                 
          const cellValue =
             
            area > 0 && row.length * grid.length === area ? area : '';
            
         // console.log(cellValue);
          return (
            <div key={`${rowIndex}-${colIndex}`} style={cellStyle}>
              {cellValue}
            </div>
          );
        })}
      </div>
    ));

    return (
      <div >
      
        <p >Biggest Area: {biggestArea}</p>
        {square}
   
      </div>
    );
  };

  return <div>{renderSquare()}</div>;
};

export default SquareGenerator;
