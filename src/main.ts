import * as readline from 'readline';
import { BusinessCardManager } from './services/BusinessCardManager';
import { BusinessCard } from './models/BusinessCard';

// readline 인터페이스 생성
const consoleReader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Business card service
const businessCardService = new BusinessCardManager(); 

function startQuestion() {
	consoleReader.question(`Press 'q' to exit, 'l' to list, 'n' to add. \nInput : `, (keyInput) => {
		keyInput = keyInput.toLowerCase();
		if (keyInput === 'q') {
			// If the key is 'q', exit the program
			console.log(`Exiting the program...`);
			consoleReader.close();
		} else if (keyInput === 'n') {
			// If the key is 'n', take input for the name
			consoleReader.question(`Enter business card name : `, (name) => {
				consoleReader.question(`Enter business card email : `, (email) => {
					consoleReader.question(`Enter business card phone : `, (phone) => {
						consoleReader.question(`Enter business card company : `, (company) => {
							// Create a new business card
							const businessCard = new BusinessCard(name, email, phone, company);
							// Add the business card
							businessCardService.addCard(businessCard);
							console.log(`Business card added!`);
							startQuestion();
						});
					});
				});
				startQuestion();
			});
		} else if (keyInput === 'l') {
			// If the key is 'l', list all business cards
			businessCardService.listCards();
			startQuestion();
		} else {
			startQuestion();
		}

	});
} 

startQuestion();
