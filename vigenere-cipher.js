"use strict";
/*---------- Variable Definition ----------*/
let readline = require('readline-sync'),
    decision,
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    cipher_text = '';

console.log('-*-*-*-*-*-*-*-*-*- Welcome to Task 2 Encrypt/Decrypt App -*-*-*-*-*-*-*-*-*-');

do{
    /*---------- Getting input from user ----------*/
    decision = readline.question("Can You Select Your Decision, Decrypt/Encrypt/Exit - > d/e/x:");
    let info = getInfo();
    let message = info.message,
        key     = info.key;

    if(decision === 'd' || decision === 'D'){
        //Decryption Process
        console.log('--------------- Decryption ---------------'); // Welcome message for decryption
        let index = 0;
        do{
            for(var i = 0; i < key.length; i++){
                if(message[index] === ' '){
                    cipher_text += ' ';
                    i--;
                }else{
                    var message_letter_index = parseFloat(alphabet.indexOf(message[index])),
                        key_letter_index     = parseFloat(alphabet.indexOf(key[i])),
                        cipher_text_letter_index = message_letter_index - key_letter_index;
                    
                    cipher_text_letter_index < 0  ? cipher_text += alphabet[alphabet.length - (key_letter_index - message_letter_index)] : cipher_text += alphabet[cipher_text_letter_index];
                }
                index++;
                if(index === message.length) break
            }
        }while(index < message.length)
        console.log(`Your Orginal Message:${cipher_text}`);
        break;
    }else if(decision === 'e' || decision === 'E'){
        console.log('--------------- Encryption ---------------');
        let index = 0;
        do{
            for(var i = 0; i < key.length; i++){
                if(message[index] === ' '){
                    cipher_text += ' ';
                    i--;
                }else{
                    var message_letter_index = parseFloat(alphabet.indexOf(message[index])),
                        key_letter_index     = parseFloat(alphabet.indexOf(key[i])),
                        cipher_text_letter_index = message_letter_index + key_letter_index;
                    
                    cipher_text_letter_index <= (alphabet.length - 1)  ? cipher_text += alphabet[cipher_text_letter_index] : cipher_text += alphabet[cipher_text_letter_index - (alphabet.length)];
                }
                index++;
                if(index === message.length) break
            }
        }while(index < message.length)
        console.log(`Your Encrypted Message:${cipher_text}`);
        break;
    }else if(decision === 'x' || decision === 'X'){
        console.log('See You Again :)')
        break;
    }else{
        console.log('Invalid !!! Try Again...');
    }
}while(decision !== 'x' || decision !== 'X')

function getInfo(){
    let message = readline.question('Please enter the message:'),
        key     = readline.question('Please enter the key:').replace(/ /g, '');

    if(message.length <= 0){
        console.clear();
        console.log(`Invalid message. Your message length must be greater than 0, try again`);
    }if(key.length <= 0){
        console.clear();
        console.log(`Invalid key. Your key length must be greater than 0, try again`);
    }if(message.search(/[ğ/ü/ş/ç/ö]/i) !== -1 || message.search("İ") !== -1 || key.search(/[ğ/ü/ş/ç/ö]/i) !== -1 || key.search("İ") !== -1 || message.search('ı') !== -1 || key.search('ı') !== -1){
        console.clear();
        console.log('You used an invalid character!!!, try again');
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    return {
        message: message,
        key:     key
    }
}