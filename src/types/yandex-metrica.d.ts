declare global {
  interface Window {
    ym: (
      counterId: number,
      event: "reachGoal" | "hit" | string,
      goalId?: string | object,
      params?: object,
      callback?: () => void
    ) => void;
  }
}

export {};
