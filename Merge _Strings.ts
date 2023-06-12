function mergeAlternately(word1: string, word2: string): string {

    const wordArray1  = word1.split('')
    console.log(wordArray1)

    const WordArray2 = word2.split('')
    console.log(WordArray2)

    const wordArray3 = []

    for(let i=0; i<wordArray1.length || i<WordArray2.length; i++) {
        wordArray3.push(wordArray1[i] as never, WordArray2[i] as never);
        }
    
 
    return wordArray3.join('')
};

