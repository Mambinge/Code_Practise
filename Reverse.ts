function reverseVowels(s: string):string {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Convert the string to an array
    let arrayS = s.split('');
  
    let i = 0;
    let end = arrayS.length - 1;
  
    while (i < end) {
      if (vowels.includes(arrayS[i].toLowerCase()) && vowels.includes(arrayS[end].toLowerCase())) {
        // Swap vowels
        let temp = arrayS[i];
        arrayS[i] = arrayS[end];
        arrayS[end] = temp;
        i++;
        end--;
      } else if (!vowels.includes(arrayS[i].toLowerCase())) {
        i++;
      } else if (!vowels.includes(arrayS[end].toLowerCase())) {
        end--;
      }
    }
  
    return arrayS.join('');
  }
  