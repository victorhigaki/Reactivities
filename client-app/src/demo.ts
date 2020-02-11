// let data = 42;
// data = "42";

// let data;
// data = "42";

// let data: number;
// data = "42";

// let data: any;
// data = "42";

// let data: number | string;
// data = "42";

let data = 42;
data = 10;

// const car1 = {
//   color: "blue",
//   model: "BMW"
// };
// const car2 = {
//   color: "red",
//   model: "Mercedes",
//   topSpeed: 100
// };

// interface ICar {
//   color: string;
//   model: string;
// }
// const car1: ICar = {
//   color: "blue",
//   model: "BMW"
// };
// const car2: ICar = {
//   color: "red",
//   model: "Mercedes",
//   topSpeed: 100
// };

export interface ICar {
  color: string;
  model: string;
  topSpeed?: number;
}

const car1: ICar = {
  color: "blue",
  model: "BMW"
};

const car2: ICar = {
  color: "red",
  model: "Mercedes",
  topSpeed: 100
};

export const cars = [car1, car2]

// const multiply = (x: any, y: any) => {
//   return x * y;
// };

// const multiply = (x: number, y: number) => {
//   return x * y;
// };

// const multiply = (x: number, y: number): string => {
//   return (x * y).toString();
// };

// const multiply = (x: number, y: number): void => {
//   x * y;
// };

const multiply = (x: number, y: number) => {
  x * y;
};
