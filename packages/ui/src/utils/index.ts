export function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function mergeProps(defaults: any = {}, props: any = {}) {
  return {
    ...defaults,
    ...props,
  };
}

export function getConfigValue(config: any, key: any, fallback?: any) {
  return config[key] ?? config[fallback];
}
