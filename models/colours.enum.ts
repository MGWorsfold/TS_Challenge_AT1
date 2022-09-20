export enum Colours {
  Red,
  Blue,
  Yellow,
  Green
}

// : implement a ColoursHelper class as shown in BodyParts
export class ColoursHelper {

  static bodyParts: Colours[] = [
    Colours.Red,
    Colours.Blue,
    Colours.Yellow,
    Colours.Green
  ];

  constructor() {}

  static get(key: string): Colours {
    switch (key) {
      case "Red":
        return Colours.Red;
      case "Blue":
          return Colours.Blue;
      case "Yellow":
        return Colours.Yellow;
      case "Green":
        return Colours.Green;
    }
  }
}