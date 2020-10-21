// 使用例
type PartiallyPartial<T, K extends keyof T>
  = Partial<Pick<T, K>> &
    Pick<T, Exclude<keyof T, K>>

// 元のデータ
interface Data {
  foo: number;
  bar: string;
  baz: string;
}
/*
 * T1は { foo?: number; bar?: string; baz: string } 型
 */
type T1 = PartiallyPartial<Data, "foo" | "bar">;