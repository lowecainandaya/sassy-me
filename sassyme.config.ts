type hasVal<T extends any> = T extends undefined | null | never | unknown | void ? T : T;  

// type hasVal<T extends any> = T extends undefined ? undefined : T;  

interface SassyMeConfig {
  type: "plugin" | "app" | undefined,
  theme: "custom"|string
}

