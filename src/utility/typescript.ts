export type ExactlySameKeys<T extends {}> = { [key in keyof T]-?: any }

export interface Dictionary<T> {
  [Key: string]: T;
}