import { bridge } from "../../electron/preload";

declare global {
  // eslint-disable-next-line
  interface Window {
    Bridge: typeof bridge
  }
}