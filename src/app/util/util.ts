export function removeDuplicates(originalArray) {
    const newArray = originalArray.filter(function(item, pos) {
        return originalArray.indexOf(item) == pos;
    })
     return newArray;
}

export function deleteNullproperties(objwithNullValue) {
    for (var propName in objwithNullValue) {
      if (objwithNullValue[propName] === null ||
        objwithNullValue[propName] === undefined || objwithNullValue[propName] === "") {
        delete objwithNullValue[propName];
      }
    }
    return objwithNullValue;
  }
