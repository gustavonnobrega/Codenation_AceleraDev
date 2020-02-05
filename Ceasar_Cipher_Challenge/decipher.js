// --- Function Declarations --- //
// ---    Developed by Me    --- //

const decript = (string, number) => {

    let stringCyphered = "";
    let charCode = 0;
    
    // The decript function assumes number as an integer, <= 1;
    
    for (let i = 0; i < string.length; i++){
		charCode = string.charCodeAt(i);
  
		let finalCode = charCode - number;
      
		let isLetter = charCode >= 97 && charCode <= 122; // ASCII: a = 97, z = 122
      
		if (!isLetter){ // is a symbol or number, not a letter
			stringCyphered += string[i];
		}
		else if (finalCode >= 97 && finalCode <= 122){ // ASCII: a = 97, z = 122
			stringCyphered += String.fromCharCode(charCode - number);
		}
		else if (finalCode <= 97){ // Go back to z after crossing past letter a 
			stringCyphered += String.fromCharCode(122 - (97 - finalCode) + 1);
		}
		else if (finalCode >= 122){ // Go back to a after crossing past letter z
			stringCyphered += String.fromCharCode(97 + (finalCode - 122) - 1);
		}
    }
	
    return stringCyphered;
}
  
const requestJSON = (url) => {

    // If not previously installed, run prior: npm install xmlhttprequest
    // If testing at JSbin.com, comment the line below.
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", url, false); // Select false for a synchronous request
    // xhttp.open("GET", url, true); // Select true an asynchronous request
	
    xhttp.onreadystatechange = function(){ // function will executed after the Server's Request has returned
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) { // Check if Server Connection was successful
            // console.log("JSON Recebido com Sucesso");
            // console.log(xhttp.responseText);
		}
    }
    
	// The Script will continue even if the requisition hasn't returned from the Server
    xhttp.send();	

	// The contents of xhttp.response will be captured and saved in an answer.json file 
    return xhttp.responseText; 
}

// -------------------------------------------------

// --- SHA-1 HASH Function Import --- //
// ---  http://webtoolkit.info/   --- //

/**
*
*  Secure Hash Algorithm (SHA1)
*  http://www.webtoolkit.info/
*
**/

function SHA1 (msg) {
  function rotate_left(n,s) {
	  var t4 = ( n<<s ) | (n>>>(32-s));
	  return t4;
  };
  function lsb_hex(val) {
	  var str="";
	  var i;
	  var vh;
	  var vl;
	  for( i=0; i<=6; i+=2 ) {
		  vh = (val>>>(i*4+4))&0x0f;
		  vl = (val>>>(i*4))&0x0f;
		  str += vh.toString(16) + vl.toString(16);
	  }
	  return str;
  };
  function cvt_hex(val) {
	  var str="";
	  var i;
	  var v;
	  for( i=7; i>=0; i-- ) {
		  v = (val>>>(i*4))&0x0f;
		  str += v.toString(16);
	  }
	  return str;
  };
  function Utf8Encode(string) {
	  string = string.replace(/\r\n/g,"\n");
	  var utftext = "";
	  for (var n = 0; n < string.length; n++) {
		  var c = string.charCodeAt(n);
		  if (c < 128) {
			  utftext += String.fromCharCode(c);
		  }
		  else if((c > 127) && (c < 2048)) {
			  utftext += String.fromCharCode((c >> 6) | 192);
			  utftext += String.fromCharCode((c & 63) | 128);
		  }
		  else {
			  utftext += String.fromCharCode((c >> 12) | 224);
			  utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			  utftext += String.fromCharCode((c & 63) | 128);
		  }
	  }
	  return utftext;
  };
  var blockstart;
  var i, j;
  var W = new Array(80);
  var H0 = 0x67452301;
  var H1 = 0xEFCDAB89;
  var H2 = 0x98BADCFE;
  var H3 = 0x10325476;
  var H4 = 0xC3D2E1F0;
  var A, B, C, D, E;
  var temp;
  msg = Utf8Encode(msg);
  var msg_len = msg.length;
  var word_array = new Array();
  for( i=0; i<msg_len-3; i+=4 ) {
	  j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
	  msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
	  word_array.push( j );
  }
  switch( msg_len % 4 ) {
	  case 0:
		  i = 0x080000000;
	  break;
	  case 1:
		  i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
	  break;
	  case 2:
		  i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
	  break;
	  case 3:
		  i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8    | 0x80;
	  break;
  }
  word_array.push( i );
  while( (word_array.length % 16) != 14 ) word_array.push( 0 );
  word_array.push( msg_len>>>29 );
  word_array.push( (msg_len<<3)&0x0ffffffff );
  for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
	  for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
	  for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
	  A = H0;
	  B = H1;
	  C = H2;
	  D = H3;
	  E = H4;
	  for( i= 0; i<=19; i++ ) {
		  temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
		  E = D;
		  D = C;
		  C = rotate_left(B,30);
		  B = A;
		  A = temp;
	  }
	  for( i=20; i<=39; i++ ) {
		  temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
		  E = D;
		  D = C;
		  C = rotate_left(B,30);
		  B = A;
		  A = temp;
	  }
	  for( i=40; i<=59; i++ ) {
		  temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
		  E = D;
		  D = C;
		  C = rotate_left(B,30);
		  B = A;
		  A = temp;
	  }
	  for( i=60; i<=79; i++ ) {
		  temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
		  E = D;
		  D = C;
		  C = rotate_left(B,30);
		  B = A;
		  A = temp;
	  }
	  H0 = (H0 + A) & 0x0ffffffff;
	  H1 = (H1 + B) & 0x0ffffffff;
	  H2 = (H2 + C) & 0x0ffffffff;
	  H3 = (H3 + D) & 0x0ffffffff;
	  H4 = (H4 + E) & 0x0ffffffff;
  }
  var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
  return temp.toLowerCase();
}

// -------------------------------------------------

// --- Printing JSON in a file --- //

// Inside the Terminal, run:

// node decipher.js > answer.json => to Save the Output in a file named answer.json
// node decipher.js               => to just print on the Screen, not saving in a file

// -------------------------------------------------
  
// --- Execution of Procedures --- //

// Step 01: Getting the initial JSON String

const linkStart = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=";
const myToken = "428eb71b9c491557659061f1414b7a5cc72ec172";

let completeURL = linkStart + myToken;

let answerJSON = JSON.parse(requestJSON(urlCompleta));

// -------------------------------------------------

// Step 02: Decripting the message

let JSONcipheredText = answerJSON.cifrado;
let JSONnumber = answerJSON.numero_casas;
  
let deciphered = decript(JSONcipheredText, JSONnumber); 
  
answerJSON.decifrado = deciphered;
//console.log(answerJSON.decifrado) // => "fast, good, cheap. pick two. unknown"

// -------------------------------------------------

// Step 03: Evaluating the Decripted message's SHA-1

answerJSON.resumo_criptografico = SHA1(answerJSON.decifrado);

// -------------------------------------------------

// Step 04: Saving the final JSON into an answer.json File

// To save the console.log Output to a file, run:
// node decipher.js > answer.json (Inside the Terminal)

let fileJSON = JSON.stringify(answerJSON);
console.log(fileJSON);

// -------------------------------------------------
