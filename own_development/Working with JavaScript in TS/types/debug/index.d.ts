declare interface Debug {
  (namespace: string): Debugger;
}
declare interface Debugger {
  (...args: string[]): void;
  enabled: boolean;
}
declare const debug: { default: Debug };
export = debug;
