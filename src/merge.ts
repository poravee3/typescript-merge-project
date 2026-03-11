export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
  
    const arr3 = [...collection_3].reverse();
  
    const merged12 = mergeTwo(collection_1, collection_2);
    return mergeTwo(merged12, arr3);
  }
  
  function mergeTwo(a: number[], b: number[]): number[] {
  
    const result: number[] = [];
  
    let i = 0;
    let j = 0;
  
    while (i < a.length && j < b.length) {

        if (a[i]! <= b[j]!) {
          result.push(a[i]!);
          i++;
        } else {
          result.push(b[j]!);
          j++;
        }
      
      }
      
      while (i < a.length) {
        result.push(a[i]!);
        i++;
      }
      
      while (j < b.length) {
        result.push(b[j]!);
        j++;
      }
  
    return result;
  }