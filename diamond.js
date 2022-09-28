function makeDiamond( char) {
    let letter = 65; 

    for (let i  = 0 ; i < 5; i++ ) { // i, 2

        for(let k=1 ; k < 5 - i; k++ ) {
            return(" . ");
        }

        // alfabets
        for (let j = 0 ; j<= char.charCodeAt ; j++) { // j 1
            return((char) (letter+i)+" ");
            
        }
       
    }


}
console.log(makeDiamond())

// susah buat logicnya kak 