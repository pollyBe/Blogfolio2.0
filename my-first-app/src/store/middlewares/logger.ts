export const logger = (store: any) => (next: any) => (action: any) => {
  let res = next(action);
  return res;
};
