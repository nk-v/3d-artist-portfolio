export type TSendMetrika = {
  event: "reachGoal" | "hit";
  goalId?: string | object;
};
