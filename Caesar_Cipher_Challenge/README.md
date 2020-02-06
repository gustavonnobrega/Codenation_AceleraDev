# Caesar Cipher Challenge
Codenation AceleraDev Challenge: Solutions, Explanations &amp; References.

This repository includes some useful information about the latest Codenation AceleraDev Challenge: the Caesar Cipher Algorithm.
Solving this Challenge is the first step to apply to the Acceleration programs in C#, React, ReactNative, and others available between Feb 3rd and 10th, 2020.



## About the Algorithm:

The Caesar Cipher Algorithm is an example of a Substitution Cipher, in which each letter of a text is switched by another, located a designated number of steps downward the alphabet sequence.
This algorithm is named after Caesar because of its use in communications between the Roman Emperor and his Generals.

	**Examples:**

	Normal:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
	Ciphered: DEFGHIJKLMNOPQRSTUVWXYZABC, with a designated number of 3

	Normal:  a ligeira raposa marrom saltou sobre o cachorro cansado
	Ciphered: D OLJHLUD UDSRVD PDUURP VDOWRX VREUH R FDFKRUUR FDQVDGR, with a designated number of 3

### References on Wikipedia:
https://pt.wikipedia.org/wiki/Cifra_de_César



## About the Challenge:

The current Challenge requests the prospective student to perform three steps, described below:

1. 1st Step: Write a program, in any programming language, that performs an HTTP Request to the URL below and captures a JSON object to be processed further.

	URL: https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN
	
	Obs: You must personalize the URL with your TOKEN, available at the Codenation website's profile page.

2. 2nd Step: Decipher the ciphered text snippet and evaluate its Hash Value using any SHA-1 or library available in yout target programming language. Update the JSON object with the obtained results and save it in a file named "answer.json".

	**Example:** JSON object received on 1st Step

	{
		"numero_casas": 10,
		"token":"token_do_usuario",
		"cifrado": "texto criptografado",
		"decifrado": "aqui vai o texto decifrado",
		"resumo_criptografico": "aqui vai o resumo"
	}

3. 3rd Step: Submit your answer.json file to the Challenge API, located in a target URL, using a POST Request.  

	Target URL: https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN

	Obs: You must personalize the URL with your TOKEN, available at the Codenation website's profile page.

	**About the API:**

	The API is waiting for a file to be sent as a "multipart/form-data", as if it was sent by an "HTML form", with a "type file" field named "answer". Consider this while sending the file.

### References on Codenation Website:
https://www.codenation.dev/aceleradev/csharp-sp-2/challenge/dev-ps



## About my Solution:

My solution is divided in two parts:

* The first, written in JavaScript, obtains and processes the JSON object (by deciphering and evaluating the SHA-1 HASH) and saves the final file as answer.json.

* The second, written in HTML, sends the answer.json file to the Target URL, according to the restrictions defined by the listening API.

**1. Javascript - Functions Defined and Imported:** 
	
* Step 01: Getting the initial JSON String:
	
	The GET Request was made to the URL using the xmhlhttprequest module.
	
	If not previously installed, run prior to the code execution: npm install xmlhttprequest
	
    ```javascript xhttp.open("GET", url, false); // Select false for a synchronous request ```
	
* Step 02: Deciphering the Ciphered Message:
	
	
	The Deciphering function was based on the positions of the letters on the ASCII Table.
	
	Each letter of the Ciphered Text string is evaluated if it's a number or symbol first.
	
	If it's a letter, it's switched by the letter in Position[ ASCII(Original_Letter) - Cipher_Number ].
	
	Special attention is given when the Cipher_number causes the letter to cross from (a) to (z).
	
	
* Step 03: Evaluating the SHA-1 HASH function:
	
	The SHA-1 HASH function algorithm was imported from http://webtoolkit.info/ .
	
	The website also provides a service to evaluate the HASH after pasting the Text_To_Be_Hashed, useful to double check if your imported library is evaluating the HASH correctly.
	
	
* Step 04: Saving the final JSON into an answer.json File
	
	The Save_File functionality was achieved by the simplest form: by running the output of the code into an "answer.json" file. 
	
	To save the console.log Output to a file, run: node decipher.js > answer.json (Inside the Terminal).

	Final Aspect of "answer.json" file:

		{
			"numero_casas":7,
			"token":"428eb71b9c491557659061f1414b7a5cc72ec172",
			"cifrado":"mhza, nvvk, jolhw. wpjr adv. buruvdu",
			"decifrado":"fast, good, cheap. pick two. unknown",
			"resumo_criptografico":"b44d9fd29896496341095808017302be246f3c5f"
		}


**2. HTML - The Sending File Form:** 

In order to properly communicate with the API, the HTML form has to be configured in a specific manner, embracing all the guidelines priorly stated:

	(action: The Target URL)
	<form action=https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=428eb71b9c491557659061f1414b7a5cc72ec172
		method="post"
		enctype="multipart/form-data">

		<input type="file" name="answer" />
		<input type="submit" value="Send File" />
	</form>



## More Information:

## Target & Obtained Score:
Challenge Completion and Target Score of 100% are mandatory to proceed to the interviews.

My Obtained Score: 100%

## Contacts: 
Gustavo NNóbrega
[gustavonnobrega@gmail.com](mailto:gustavonnobrega@gmail.com)

### Codenation Website:
https://www.codenation.dev

### AceleraDev - Open Sessions:
https://www.codenation.dev/aceleradev

### Community:
https://comunidade.codenation.dev/

### Further Informations:
websitecontato@codenation.dev
