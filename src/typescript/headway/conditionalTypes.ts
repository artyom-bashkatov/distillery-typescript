type Diesel = {
  type: "petroleum" | "bio" | "synthetic";
};

type Gasoline = {
  type: "hybrid" | "conventional";
}

type Bus = {
  engine: Diesel;
}

type Car5 = {
  engine: Gasoline;
}

type Bicycle = {
  power: "limbs";
}


type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;
type BusEngine = Engine<Bus>;

type NoEngine = Engine<Bicycle>;

// const noEngine: NoEngine = { type: "limbs"}; - тип Never, так как у велосипеда нет engine

const busEngine: BusEngine = {
  type: "bio"
}

const carEngine: Engine<Car5> = {
  type: "hybrid"
}

// invalid case
/* const invalid: Engine<Car5> = {
  type: "bio"
} */