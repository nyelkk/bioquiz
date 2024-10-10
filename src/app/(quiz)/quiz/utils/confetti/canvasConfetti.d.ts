declare module 'canvas-confetti' {
  interface IConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    scalar?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    shapes?: string[];
    ticks?: number;
  }

  function confetti(options?: IConfettiOptions): Promise<null>;

  export = confetti;
}
