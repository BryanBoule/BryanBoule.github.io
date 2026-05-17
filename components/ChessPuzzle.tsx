'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { CV } from '@/lib/cv-data';

// Daily chess puzzle - mate-in-1.
// Pieces: K/Q/R/B/N/P uppercase = white, lowercase = black, '.' = empty.

interface Puzzle {
  id: string;
  board: string[];
  solution: string;
  hint: { fr: string; en: string };
  san: string;
}

const PUZZLES: Puzzle[] = [
  {
    id: 'back-rank',
    board: ['......k.', '.....ppp', '........', '........', '........', '........', '.....PPP', 'R......K'],
    solution: 'a1a8',
    hint: { fr: 'Mat du couloir.', en: 'Back-rank mate.' },
    san: 'Ra8#',
  },
  {
    id: 'queen-corner',
    board: ['.......k', '......pp', '.....N..', '.......Q', '........', '........', '........', '.......K'],
    solution: 'h5h7',
    hint: { fr: 'La Dame s\'invite près du Roi.', en: 'Queen joins the King.' },
    san: 'Qxh7#',
  },
  {
    id: 'rook-roll',
    board: ['.....rk.', '.....pp.', '........', '........', '........', '.......R', '......PR', '.......K'],
    solution: 'h3h8',
    hint: { fr: 'Le couloir-h est ouvert.', en: 'The h-file is open.' },
    san: 'Rh8#',
  },
];

const PIECE_GLYPH: Record<string, string> = {
  K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙',
  k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟',
};

function todaysPuzzle(): Puzzle {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const day = Math.floor(diff / 86400000);
  return PUZZLES[day % PUZZLES.length];
}

function sqName(r: number, c: number) {
  return 'abcdefgh'[c] + (8 - r);
}

export default function ChessPuzzle({ onSolve }: { onSolve?: () => void }) {
  const { lang } = useLang();
  const ui = CV.ui;

  // Deterministic on first render - recompute once on the client side.
  const [puzzle, setPuzzle] = useState<Puzzle>(PUZZLES[0]);
  useEffect(() => setPuzzle(todaysPuzzle()), []);

  const initialBoard = useMemo(() => puzzle.board.map((r) => r.split('')), [puzzle]);
  const [board, setBoard] = useState<string[][]>(initialBoard);
  const [sel, setSel] = useState<[number, number] | null>(null);
  const [status, setStatus] = useState<'idle' | 'wrong' | 'solved'>('idle');
  const [showHint, setShowHint] = useState(false);

  // Reset when the puzzle of the day changes.
  useEffect(() => {
    setBoard(initialBoard);
    setSel(null);
    setStatus('idle');
    setShowHint(false);
  }, [initialBoard]);

  useEffect(() => {
    if (status === 'solved') onSolve?.();
  }, [status, onSolve]);

  function clickSquare(r: number, c: number) {
    if (status === 'solved') return;
    const piece = board[r][c];
    if (sel === null) {
      if (piece !== '.' && piece === piece.toUpperCase()) setSel([r, c]);
      return;
    }
    if (sel[0] === r && sel[1] === c) {
      setSel(null);
      return;
    }
    const from = sqName(sel[0], sel[1]);
    const to = sqName(r, c);
    if (from + to === puzzle.solution) {
      const next = board.map((row) => row.slice());
      next[r][c] = next[sel[0]][sel[1]];
      next[sel[0]][sel[1]] = '.';
      setBoard(next);
      setSel(null);
      setStatus('solved');
    } else {
      setSel(null);
      setStatus('wrong');
      setTimeout(() => setStatus('idle'), 1200);
    }
  }

  function reset() {
    setBoard(initialBoard);
    setSel(null);
    setStatus('idle');
    setShowHint(false);
  }

  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-[11px] tracking-widest uppercase text-ink-500">
          {ui.today[lang]} · {puzzle.id}
        </span>
        <span className="text-[11px] tracking-wide text-accent font-mono">
          {ui.chess_hint[lang]}
        </span>
      </div>

      <div className="relative inline-block">
        <div
          className="grid border border-ink-800"
          style={{
            gridTemplateColumns: 'repeat(8, 44px)',
            gridTemplateRows: 'repeat(8, 44px)',
            boxShadow: '0 24px 60px -20px rgba(0,0,0,0.8)',
          }}
        >
          {board.map((row, r) =>
            row.map((piece, c) => {
              const isLight = (r + c) % 2 === 0;
              const isSel = sel && sel[0] === r && sel[1] === c;
              const isWhitePiece = piece !== '.' && piece === piece.toUpperCase();
              return (
                <button
                  key={`${r}-${c}`}
                  type="button"
                  onClick={() => clickSquare(r, c)}
                  className="relative border-0 p-0 transition-colors"
                  style={{
                    background: isLight ? '#1a1a1a' : '#0a0a0a',
                    fontSize: 30,
                    lineHeight: '44px',
                    color: isWhitePiece ? '#f5f5f5' : '#737373',
                    fontFamily: '"Segoe UI Symbol", system-ui',
                    cursor: status === 'solved' ? 'default' : 'pointer',
                    outline: isSel ? '2px solid rgb(var(--accent))' : 'none',
                    outlineOffset: '-2px',
                    boxShadow: isSel ? 'inset 0 0 0 44px rgb(var(--accent) / 0.13)' : 'none',
                  }}
                >
                  {piece !== '.' ? PIECE_GLYPH[piece] : ''}
                </button>
              );
            }),
          )}
        </div>
        {/* File labels (a-h) */}
        <div className="grid mt-1" style={{ gridTemplateColumns: 'repeat(8, 44px)' }}>
          {'abcdefgh'.split('').map((f) => (
            <div
              key={f}
              className="text-center text-[10px] text-ink-700 font-mono"
            >
              {f}
            </div>
          ))}
        </div>
        {/* Rank labels (1-8) */}
        <div
          className="absolute -left-4 top-0 grid"
          style={{ gridTemplateRows: 'repeat(8, 44px)' }}
        >
          {[8, 7, 6, 5, 4, 3, 2, 1].map((n) => (
            <div
              key={n}
              className="flex items-center text-[10px] text-ink-700 font-mono"
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[24px] flex items-center gap-3 flex-wrap">
        {status === 'idle' && (
          <span className="text-[13px] text-ink-500">
            {sel
              ? lang === 'fr'
                ? "Choisis la case d'arrivée…"
                : 'Pick destination square…'
              : lang === 'fr'
              ? 'Clique une pièce blanche.'
              : 'Click a white piece.'}
          </span>
        )}
        {status === 'wrong' && (
          <span className="text-[13px] text-red-400 font-mono">✗ {ui.chess_try[lang]}</span>
        )}
        {status === 'solved' && (
          <span className="text-[13px] text-accent font-mono font-semibold">
            ✓ {puzzle.san} - {ui.chess_solved[lang]}
          </span>
        )}
        <button
          type="button"
          onClick={reset}
          className="text-[11px] uppercase tracking-widest bg-transparent border border-ink-800 text-ink-400 px-2.5 py-1.5 font-mono hover:text-ink-200 hover:border-ink-600"
        >
          {ui.chess_reset[lang]}
        </button>
        {!showHint && status !== 'solved' && (
          <button
            type="button"
            onClick={() => setShowHint(true)}
            className="text-[11px] uppercase tracking-widest bg-transparent border-0 text-ink-500 font-mono underline"
          >
            {lang === 'fr' ? 'Indice' : 'Hint'}
          </button>
        )}
        {showHint && status !== 'solved' && (
          <span className="text-xs text-ink-400 italic">{puzzle.hint[lang]}</span>
        )}
      </div>
    </div>
  );
}
