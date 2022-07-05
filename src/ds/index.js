// window.onload = function getUser() {
//   fetch("./design-tokens.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Error status: ${response.status}`);
//       }

//       return response.json();
//     })
//     .then((ds) => {
//       //called with every property and its value
//       function process(key, value) {
//         if (key === "value" || key === "utility" || key === "description") {
//           console.log(key + " : " + value);
//           //console.log(typeof(key) + " : "+ typeof(value));
//         } else {
//           console.log(value);
//           console.log(typeof value);
//         }
//       }

//       function traverse(ds, func) {
//         for (var i in ds) {
//           func.apply(this, [i, ds[i]]);
//           if (ds[i] !== null && typeof ds[i] == "object") {
//             //going one step down in the object tree!!
//             traverse(ds[i], func);
//           }
//         }
//       }

//       traverse(ds, process);
//     })

//     .catch((err) => console.log(err));
// };

import examples from "./temp.json";

examples.map((example) => console.log(example.value.value.value.value));
