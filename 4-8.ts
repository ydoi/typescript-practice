type PickUndefined<Obj> = {
  [K in keyof Obj]-?: undefined extends Obj[K] ? K : never;
}[keyof Obj]

type MapToNever<Obj> = {
  [K in keyof Obj]: never
}

type O = MapToNever<Data3>;

type OptionalKeys<Obj> = PickUndefined<MapToNever<Data3>>;

// 使用例
type Data3 = {
  foo: string;
  bar?: number;
  baz?: boolean;

  hoge: undefined;
  piyo?: undefined;
};

// "bar" | "baz" | "piyo"
type T = OptionalKeys<Data3>;