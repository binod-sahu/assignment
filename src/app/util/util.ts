export function removeDuplicates(originalArray) {
    const newArray = originalArray.filter(function(item, pos) {
        return originalArray.indexOf(item) == pos;
    })
     return newArray;
}