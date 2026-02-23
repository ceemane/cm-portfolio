"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const COLS = 10;
const ROWS = 20;
const CELL_SIZE = 32;
const TICK_MS_START = 800;
const TICK_MS_MIN = 100;

const PIECES = [
  { shape: [[1, 1, 1, 1]], color: "#b8860b" },                         // I
  { shape: [[1, 1], [1, 1]], color: "#d4a843" },                       // O
  { shape: [[0, 1, 0], [1, 1, 1]], color: "#a07808" },                 // T
  { shape: [[1, 0], [1, 0], [1, 1]], color: "#8b7355" },               // L
  { shape: [[0, 1], [0, 1], [1, 1]], color: "#c9a84c" },               // J
  { shape: [[0, 1, 1], [1, 1, 0]], color: "#9a8540" },                 // S
  { shape: [[1, 1, 0], [0, 1, 1]], color: "#bfa260" },                 // Z
];

type Cell = string | null;
type Board = Cell[][];
type Piece = { shape: number[][]; color: string };

function createBoard(): Board {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

function rotateShape(shape: number[][]): number[][] {
  const rows = shape.length;
  const cols = shape[0].length;
  const rotated: number[][] = Array.from({ length: cols }, () => Array(rows).fill(0));
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      rotated[c][rows - 1 - r] = shape[r][c];
    }
  }
  return rotated;
}

function randomPiece(): Piece {
  const p = PIECES[Math.floor(Math.random() * PIECES.length)];
  return { shape: p.shape.map((r) => [...r]), color: p.color };
}

function collides(board: Board, shape: number[][], row: number, col: number): boolean {
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[0].length; c++) {
      if (!shape[r][c]) continue;
      const nr = row + r;
      const nc = col + c;
      if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) return true;
      if (board[nr][nc]) return true;
    }
  }
  return false;
}

function lockPiece(board: Board, shape: number[][], row: number, col: number, color: string): Board {
  const newBoard = board.map((r) => [...r]);
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[0].length; c++) {
      if (shape[r][c]) {
        newBoard[row + r][col + c] = color;
      }
    }
  }
  return newBoard;
}

function clearLines(board: Board): { board: Board; cleared: number } {
  const kept = board.filter((row) => row.some((cell) => !cell));
  const cleared = ROWS - kept.length;
  const empty = Array.from({ length: cleared }, () => Array(COLS).fill(null) as Cell[]);
  return { board: [...empty, ...kept], cleared };
}

export default function BlockDropGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);

  const boardRef = useRef<Board>(createBoard());
  const currentRef = useRef<Piece>(randomPiece());
  const nextRef = useRef<Piece>(randomPiece());
  const posRef = useRef({ row: 0, col: 3 });
  const scoreRef = useRef(0);
  const linesRef = useRef(0);
  const levelRef = useRef(1);
  const gameOverRef = useRef(false);
  const lastTickRef = useRef(0);
  const rafRef = useRef<number>(0);

  const resetGame = useCallback(() => {
    boardRef.current = createBoard();
    currentRef.current = randomPiece();
    nextRef.current = randomPiece();
    posRef.current = { row: 0, col: Math.floor((COLS - currentRef.current.shape[0].length) / 2) };
    scoreRef.current = 0;
    linesRef.current = 0;
    levelRef.current = 1;
    gameOverRef.current = false;
    lastTickRef.current = 0;
    setScore(0);
    setLines(0);
    setLevel(1);
    setGameState("playing");
  }, []);

  const spawnPiece = useCallback(() => {
    currentRef.current = nextRef.current;
    nextRef.current = randomPiece();
    posRef.current = { row: 0, col: Math.floor((COLS - currentRef.current.shape[0].length) / 2) };
    if (collides(boardRef.current, currentRef.current.shape, posRef.current.row, posRef.current.col)) {
      gameOverRef.current = true;
      setGameState("over");
    }
  }, []);

  const lock = useCallback(() => {
    const { row, col } = posRef.current;
    boardRef.current = lockPiece(boardRef.current, currentRef.current.shape, row, col, currentRef.current.color);
    const { board, cleared } = clearLines(boardRef.current);
    boardRef.current = board;
    if (cleared > 0) {
      const pts = [0, 100, 300, 500, 800][cleared] * levelRef.current;
      scoreRef.current += pts;
      linesRef.current += cleared;
      levelRef.current = Math.floor(linesRef.current / 10) + 1;
      setScore(scoreRef.current);
      setLines(linesRef.current);
      setLevel(levelRef.current);
    }
    spawnPiece();
  }, [spawnPiece]);

  const moveDown = useCallback(() => {
    const { row, col } = posRef.current;
    if (!collides(boardRef.current, currentRef.current.shape, row + 1, col)) {
      posRef.current.row++;
    } else {
      lock();
    }
  }, [lock]);

  const moveLeft = useCallback(() => {
    const { row, col } = posRef.current;
    if (!collides(boardRef.current, currentRef.current.shape, row, col - 1)) {
      posRef.current.col--;
    }
  }, []);

  const moveRight = useCallback(() => {
    const { row, col } = posRef.current;
    if (!collides(boardRef.current, currentRef.current.shape, row, col + 1)) {
      posRef.current.col++;
    }
  }, []);

  const rotate = useCallback(() => {
    const rotated = rotateShape(currentRef.current.shape);
    const { row, col } = posRef.current;
    // Try normal rotation, then wall kicks
    for (const kick of [0, -1, 1, -2, 2]) {
      if (!collides(boardRef.current, rotated, row, col + kick)) {
        currentRef.current.shape = rotated;
        posRef.current.col += kick;
        return;
      }
    }
  }, []);

  const hardDrop = useCallback(() => {
    while (!collides(boardRef.current, currentRef.current.shape, posRef.current.row + 1, posRef.current.col)) {
      posRef.current.row++;
      scoreRef.current += 2;
    }
    setScore(scoreRef.current);
    lock();
  }, [lock]);

  // Drawing
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const boardW = COLS * CELL_SIZE;
    const boardH = ROWS * CELL_SIZE;
    const offsetX = 40;
    const offsetY = 40;

    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Board background
    ctx.fillStyle = "#111";
    ctx.fillRect(offsetX, offsetY, boardW, boardH);

    // Grid
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 0.5;
    for (let r = 0; r <= ROWS; r++) {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY + r * CELL_SIZE);
      ctx.lineTo(offsetX + boardW, offsetY + r * CELL_SIZE);
      ctx.stroke();
    }
    for (let c = 0; c <= COLS; c++) {
      ctx.beginPath();
      ctx.moveTo(offsetX + c * CELL_SIZE, offsetY);
      ctx.lineTo(offsetX + c * CELL_SIZE, offsetY + boardH);
      ctx.stroke();
    }

    // Placed blocks
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (boardRef.current[r][c]) {
          const x = offsetX + c * CELL_SIZE;
          const y = offsetY + r * CELL_SIZE;
          ctx.fillStyle = boardRef.current[r][c]!;
          ctx.fillRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
          ctx.strokeStyle = "rgba(255,255,255,0.1)";
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
        }
      }
    }

    // Ghost piece
    let ghostRow = posRef.current.row;
    while (!collides(boardRef.current, currentRef.current.shape, ghostRow + 1, posRef.current.col)) {
      ghostRow++;
    }
    for (let r = 0; r < currentRef.current.shape.length; r++) {
      for (let c = 0; c < currentRef.current.shape[0].length; c++) {
        if (currentRef.current.shape[r][c]) {
          const x = offsetX + (posRef.current.col + c) * CELL_SIZE;
          const y = offsetY + (ghostRow + r) * CELL_SIZE;
          ctx.strokeStyle = "rgba(184,134,11,0.3)";
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4);
        }
      }
    }

    // Current piece
    for (let r = 0; r < currentRef.current.shape.length; r++) {
      for (let c = 0; c < currentRef.current.shape[0].length; c++) {
        if (currentRef.current.shape[r][c]) {
          const x = offsetX + (posRef.current.col + c) * CELL_SIZE;
          const y = offsetY + (posRef.current.row + r) * CELL_SIZE;
          ctx.fillStyle = currentRef.current.color;
          ctx.fillRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
        }
      }
    }

    // Sidebar
    const sideX = offsetX + boardW + 30;

    // Next piece
    ctx.fillStyle = "#86868b";
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText("NEXT", sideX, offsetY + 15);
    const next = nextRef.current;
    for (let r = 0; r < next.shape.length; r++) {
      for (let c = 0; c < next.shape[0].length; c++) {
        if (next.shape[r][c]) {
          ctx.fillStyle = next.color;
          ctx.fillRect(sideX + c * 24, offsetY + 25 + r * 24, 22, 22);
        }
      }
    }

    // Score
    ctx.fillStyle = "#86868b";
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText("SCORE", sideX, offsetY + 130);
    ctx.fillStyle = "#b8860b";
    ctx.font = "bold 20px system-ui, sans-serif";
    ctx.fillText(String(scoreRef.current), sideX, offsetY + 155);

    // Lines
    ctx.fillStyle = "#86868b";
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText("LINES", sideX, offsetY + 200);
    ctx.fillStyle = "#b8860b";
    ctx.font = "bold 20px system-ui, sans-serif";
    ctx.fillText(String(linesRef.current), sideX, offsetY + 225);

    // Level
    ctx.fillStyle = "#86868b";
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText("LEVEL", sideX, offsetY + 270);
    ctx.fillStyle = "#b8860b";
    ctx.font = "bold 20px system-ui, sans-serif";
    ctx.fillText(String(levelRef.current), sideX, offsetY + 295);

    // Controls hint
    ctx.fillStyle = "#86868b";
    ctx.font = "11px system-ui, sans-serif";
    ctx.fillText("CONTROLS", sideX, offsetY + 370);
    ctx.fillStyle = "#555";
    ctx.font = "10px system-ui, sans-serif";
    const controls = [
      ["\u2190 \u2192  Move", 390],
      ["\u2191     Rotate", 405],
      ["\u2193     Soft drop", 420],
      ["Space  Hard drop", 435],
    ] as const;
    for (const [text, yOff] of controls) {
      ctx.fillText(text, sideX, offsetY + yOff - 370 + 370);
    }

    // Game over overlay
    if (gameOverRef.current) {
      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.fillRect(offsetX, offsetY, boardW, boardH);
      ctx.fillStyle = "#b8860b";
      ctx.font = "bold 28px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", offsetX + boardW / 2, offsetY + boardH / 2 - 20);
      ctx.fillStyle = "#86868b";
      ctx.font = "14px system-ui, sans-serif";
      ctx.fillText(`Score: ${scoreRef.current}`, offsetX + boardW / 2, offsetY + boardH / 2 + 15);
      ctx.fillText("Press ENTER to restart", offsetX + boardW / 2, offsetY + boardH / 2 + 45);
      ctx.textAlign = "left";
    }
  }, []);

  // Game loop
  useEffect(() => {
    if (gameState !== "playing") return;

    const loop = (time: number) => {
      if (gameOverRef.current) {
        draw();
        return;
      }

      const tickMs = Math.max(TICK_MS_MIN, TICK_MS_START - (levelRef.current - 1) * 60);
      if (time - lastTickRef.current > tickMs) {
        moveDown();
        lastTickRef.current = time;
      }

      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [gameState, draw, moveDown]);

  // Input
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameState === "idle" && e.key === "Enter") {
        resetGame();
        return;
      }
      if (gameState === "over" && e.key === "Enter") {
        resetGame();
        return;
      }
      if (gameState !== "playing" || gameOverRef.current) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          moveLeft();
          break;
        case "ArrowRight":
          e.preventDefault();
          moveRight();
          break;
        case "ArrowDown":
          e.preventDefault();
          moveDown();
          scoreRef.current += 1;
          setScore(scoreRef.current);
          break;
        case "ArrowUp":
          e.preventDefault();
          rotate();
          break;
        case " ":
          e.preventDefault();
          hardDrop();
          break;
      }
      draw();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState, resetGame, moveLeft, moveRight, moveDown, rotate, hardDrop, draw]);

  // Initial draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (gameState === "idle") {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#b8860b";
      ctx.font = "bold 36px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("BLOCK DROP", canvas.width / 2, canvas.height / 2 - 30);

      ctx.fillStyle = "#86868b";
      ctx.font = "16px system-ui, sans-serif";
      ctx.fillText("Press ENTER to start", canvas.width / 2, canvas.height / 2 + 20);

      ctx.fillStyle = "#555";
      ctx.font = "12px system-ui, sans-serif";
      ctx.fillText("\u2190 \u2192 Move  |  \u2191 Rotate  |  \u2193 Soft Drop  |  Space Hard Drop", canvas.width / 2, canvas.height / 2 + 60);
      ctx.textAlign = "left";
    }
  }, [gameState]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <canvas
          ref={canvasRef}
          width={520}
          height={720}
          className="rounded-lg border border-white/5"
          tabIndex={0}
          autoFocus
        />
        <p className="mt-4 text-xs text-[#86868b]">
          <a href="/" className="hover:text-[#b8860b] transition-colors">&larr; Back to portfolio</a>
        </p>
      </div>
    </div>
  );
}
