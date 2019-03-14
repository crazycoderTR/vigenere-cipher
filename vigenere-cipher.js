"use strict";
/*---------- Variable Definition ----------*/
let readline = require('readline-sync'),
    decision,
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    cipher_text = '',
    index = 0; //For message letter
    
console.log('-*-*-*-*-*-*-*-*-*- Welcome to Task 2 Encrypt/Decrypt App -*-*-*-*-*-*-*-*-*-');

do{
    /*---------- Getting input from user ----------*/
    decision = readline.question("Can You Select Your Decision, Decrypt/Encrypt/Exit - > d/e/x:");
    let info = getInfo(); //We get info from user with the aid of function
    let message = info.message,
        key     = info.key;

    if(decision === 'd' || decision === 'D'){
        //Decryption Process
        console.log('--------------- Decryption ---------------'); // Welcome message for decryption
        do{
            for(var i = 0; i < key.length; i++){
                if(message[index] === ' '){
                    cipher_text += ' ';
                    i--;
                }else{
                    var message_letter_index = parseFloat(alphabet.indexOf(message[index])),
                        key_letter_index     = parseFloat(alphabet.indexOf(key[i])),
                        cipher_text_letter_index = message_letter_index - key_letter_index;
                    
                    /*
                        * We do encryption so we must to extraction message-letter-index and key_letter_index
                        * We must to check cipher_text_letter_index's positive or not
                        * If less than zero by rendering the opposite direction it should be key_letter_index - message_letter_index 
                        * Else should take the value corresponding to the transaction from alphabet
                        * Result should be addded to cipher_text
                    */
                    cipher_text_letter_index < 0  ? cipher_text += alphabet[alphabet.length - (key_letter_index - message_letter_index)] : cipher_text += alphabet[cipher_text_letter_index];
                }
                index++;
                // I'm checking to see if the loop inside does not exceed the word length.
                if(index === message.length) break
            }
        }while(index < message.length)
        console.log(`Your Orginal Message:${cipher_text}`);
        break;
    }else if(decision === 'e' || decision === 'E'){
        //Encryption Process
        console.log('--------------- Encryption ---------------');
        do{
            for(var i = 0; i < key.length; i++){
                if(message[index] === ' '){
                    cipher_text += ' ';
                    i--;
                }else{
                    var message_letter_index = parseFloat(alphabet.indexOf(message[index])),
                        key_letter_index     = parseFloat(alphabet.indexOf(key[i])),
                        cipher_text_letter_index = message_letter_index + key_letter_index;
                    /*
                        * We do encryption so we must to collection message-letter-index and key_letter_index
                        * We must add to the text the value of this collection in the alphabet
                        * I checked by I did 1 subtraction from the length of the alphabet becase arrays start from scratch
                        * In case the total is more than the length of the alphabet, I took out the smaller one to start the alphabet
                    */
                    cipher_text_letter_index <= (alphabet.length - 1)  ? cipher_text += alphabet[cipher_text_letter_index] : cipher_text += alphabet[cipher_text_letter_index - (alphabet.length)];
                }
                index++;
                // I'm checking to see if the loop inside does not exceed the word length.
                if(index === message.length) break
            }
        }while(index < message.length)
        console.log(`Your Encrypted Message:${cipher_text}`);
        break;
    }else if(decision === 'x' || decision === 'X'){
        //Exit Block
        console.log('See You Again :)')
        break;
    }else{
        //Incorrect Block
        console.log('Invalid !!! Try Again...');
    }
}while(decision !== 'x' || decision !== 'X')

function getInfo(){
    //We use function for not write the same code twice
    let message = readline.question('Please enter the message:'),
        key     = readline.question('Please enter the key:').replace(/ /g, '');

    //We check message and key for lengths to zero
    if(message.length <= 0){
        console.clear();
        console.log(`Invalid message. Your message length must be greater than 0, try again`);
    }if(key.length <= 0){
        console.clear();
        console.log(`Invalid key. Your key length must be greater than 0, try again`);
    }if(message.search(/[ğ/ü/ş/ç/ö]/i) !== -1 || message.search("İ") !== -1 || key.search(/[ğ/ü/ş/ç/ö]/i) !== -1 || key.search("İ") !== -1 || message.search('ı') !== -1 || key.search('ı') !== -1){
        //Control of foreign character
        console.clear();
        console.log('You used an invalid character!!!, try again');
    }
    //We take small cases for ease of operation
    message = message.toLowerCase();
    key = key.toLowerCase();
    return {
        message: message,
        key:     key
    }
}