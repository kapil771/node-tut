var _merge = require('lodash.merge');

let a = {
    "render": {
        "graph": {
            "type": "bar"
        }
    }
}

let b = {
    "render": {
        "graph": {
            "options": {
                "scales": {
                    "x": {
                        "grid": {
                            "display": "true"
                        }
                    }
                }
            }
        }
    }
}

let c = {
    "render": {
     "graph": {
      "options": {
       "scales": {
        "y": {
         "grid": {
          "display": "false"
         }
        }
       }
      }
     }
    }
   };

// _merge(a,b);
// _merge(a,c)
// console.log('a::',JSON.stringify(a));




 function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }
  
  
function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
  
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  
    return mergeDeep(target, ...sources);
  }

  const d = mergeDeep(a,b);
  const e = mergeDeep(d,c);

  console.log('c:::',JSON.stringify(d));