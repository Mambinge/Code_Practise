function mergeAlternately(word1: string, word2: string): string {

//  will return an array ['p', 'q', 'r'] containing each character of the string.
    const wordArray1  = word1.split('')
    console.log(wordArray1)

//  will return an array ['p', 'q', 'r'] containing each character of the string.
    const WordArray2 = word2.split('')
    console.log(WordArray2)

    const wordArray3 = []

    for(let i=0; i<wordArray1.length || i<WordArray2.length; i++) {
        wordArray3.push(wordArray1[i] as never, WordArray2[i] as never);
        }
        
 // Joining the characters in wordArray3 into a single string
 //remove commas from the string
    return wordArray3.join('')
};

