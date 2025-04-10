import { YANDEX_METRIKA_COUNTER_ID } from "./constants";
import { TSendMetrika } from "./types";

export const sendMetrika = ({ event, goalId }: TSendMetrika) => {
  window.ym(YANDEX_METRIKA_COUNTER_ID, event, goalId);
};
