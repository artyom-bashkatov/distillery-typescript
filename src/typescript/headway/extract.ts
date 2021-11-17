type Trip = 
| {
  origin: {
    uuid: string;
    city: string;
    state: string;
  }
} | { originUuid: string };

type TripWithOriginRef = Extract<Trip, { originUuid: string}>;
const tripOriginRef: TripWithOriginRef  = { originUuid: "123 "};

type TripWithOriginWhole = Extract<Trip, { origin: { uuid: string } }>;
const tripOriginWhole: TripWithOriginWhole = {
  origin: {
    uuid: "123",
    city: "Denver",
    state: "Colorado"
  }
}

const hasOriginRef  = (trip: Trip): trip is TripWithOriginRef => {
  return "originUuid" in trip;
};

const isRef = (trip: Trip): trip is TripWithOriginRef => {
  return "originUuid" in trip;
};

const result = [tripOriginRef, tripOriginWhole].filter(hasOriginRef);