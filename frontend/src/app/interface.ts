export class Station {
    id!: number;
    name!: string;
    location_string!: string;
    loc_stringify!: string;
    capacity!: number;
    area!: number
}

export class Driver {
    id!: number;
    name!: string;
    phone!: string;
    email!: string;
    trip!: string;
}

export class Fleet {
    id!: number;
    size!: number;
    brand!: string;
    fleet_type!: string;
    fleet_model!: string;
    station!: string;
}

export class Passenger {
    id!: number;
    name!: string;
    email!: string;
    dob!: string;
    gender!: string;
    subscription!: string;
}

export class Trip {
    id!: number;
    trip_from!: string;
    trip_to!: string;
    duration!: number;
    distance!: number;
}

