function reverseWords(s: string): string {
    let arrayS = s.split(' ')
    
    let i =0;
    let end = s.length - 1
    
    while(i<end) {
        let temp = arrayS[i];
        arrayS[i] = arrayS[end];
        arrayS[end] = temp;
        i++
        end--
    }
    
    
    return arrayS.join(' ').trim().replace(/\s+/g, ' ')
    };
    