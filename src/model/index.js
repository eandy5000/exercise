import data from "./item-data.json";

export default function getData() {
  return new Promise(function(resolve, reject) {
    resolve(data);
  });
}
