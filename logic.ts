type Field = string[][];

type Position = [number, number];

const CELL_TYPE = {
  WALL: "*",
  BALL: "o",
  WAY_OPEN: " ",
  WAY_CLOSE: "-",
};

const DIRS: [string, Position][] = [
  ["→", [1, 0]],
  ["←", [-1, 0]],
  ["↓", [0, 1]],
  ["↑", [0, -1]],
];

const WAY_SET = new Set([
  CELL_TYPE.BALL,
  CELL_TYPE.WAY_OPEN,
  CELL_TYPE.WAY_CLOSE,
]);

const cloneField = (field: Field): Field => {
  return JSON.parse(JSON.stringify(field));
};

const getFieldKey = (field: Field): string => {
  return field.flat().join("");
};

const checkAllWayClosed = (field: Field): boolean => {
  return !field.flat().some((s) => s === CELL_TYPE.WAY_OPEN);
};

export const main = (lines: string[]) => {
  const field = lines.map((line) => line.split(""));
  const markSet = new Set();

  let resultDirs: number[] = [];
  let resultDirsLen = Infinity;

  const dig = (
    field: string[][],
    ballPos: Position,
    selectedDirs: number[]
  ) => {
    const fieldKey = getFieldKey(field);
    if (markSet.has(fieldKey)) return;
    markSet.add(fieldKey);
    if (selectedDirs.length > resultDirsLen) return;
    if (checkAllWayClosed(field)) {
      resultDirs = selectedDirs;
      resultDirsLen = selectedDirs.length;
      return;
    }
    DIRS.forEach(([_, [dX, dY]], dirI) => {
      const newField = cloneField(field);
      let newBallPos: Position = [...ballPos];
      let moved = false;
      while (true) {
        const [bX, bY] = newBallPos;
        if (WAY_SET.has(newField[bY][bX])) {
          newField[bY][bX] = CELL_TYPE.WAY_CLOSE;
          newBallPos = [bX + dX, bY + dY];
          moved = true;
        } else {
          if (!moved) return;
          newBallPos = [bX - dX, bY - dY];
          newField[newBallPos[1]][newBallPos[0]] = CELL_TYPE.BALL;
          break;
        }
      }
      dig(newField, newBallPos, [...selectedDirs, dirI]);
    });
  };

  const getBallPosFromField = (field: string[][]): Position => {
    for (let y = 0; y < field.length; y++) {
      for (let x = 0; x < field[y].length; x++) {
        if (field[y][x] === CELL_TYPE.BALL) {
          return [x, y];
        }
      }
    }
    throw new Error("ball not found");
  };

  dig(field, getBallPosFromField(field), []);
  return resultDirs.map((way) => DIRS[way][0]);
};
