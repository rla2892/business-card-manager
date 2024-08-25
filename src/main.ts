import * as readline from 'readline';

// readline 인터페이스 생성
const consoleReader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function startQuestion() {
	consoleReader.question(`Press 'q' to exit. \nInput : `, (keyInput) => {
		// If the key is 'q', exit the program
		keyInput = keyInput.toLowerCase();
		if (keyInput === 'q') {
			console.log(`Exiting the program...`);
			consoleReader.close();
		} else {
			startQuestion();
		}

	});
} 

startQuestion();
