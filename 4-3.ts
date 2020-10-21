interface EventPayloads {
  start: {
    user: string;
  };
  stop: {
    user: string;
    after: number;
  };
  end: {};
}

type Spread<Ev, EvOrig, E> = Ev extends keyof E
  ? EvOrig[] extends Ev[]
    ? E[Ev]
    : never
  : never

class EventDischarger<E> {
  emit<Ev extends keyof E>(eventName: Ev, payload: Spread<Ev, Ev, E>) {
    // 省略
  }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();
ed.emit("start", {
  user: "user1"
});
ed.emit("stop", {
  user: "user1",
  after: 3
});
ed.emit("end", {});

// エラー例
ed.emit<"start" | "stop">("stop", {
  user: "user1"
});