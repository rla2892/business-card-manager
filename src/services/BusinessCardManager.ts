import { BusinessCard } from '../models/BusinessCard';
import * as fs from 'fs';


export class BusinessCardManager {
	private businessCards: BusinessCard[] = [];
	private filePath: string = './data.json';
	constructor() {
		this.businessCards = [];
	}
	public addCard(card: BusinessCard): void
	public addCard(card: string): void
	public addCard(card: BusinessCard | string ): void {
		let cardObj;
		if (typeof card === 'string') {
			const cardName = card;
			cardObj = new BusinessCard(cardName);
			return;
		} else {
			cardObj = card;
		} 
		this.businessCards.push(cardObj);
	}
	public listCards(): void {
		for (let card of this.businessCards) {
			card.printCard();
		}
	}
	public deleteCard(name: string): void {
		this.businessCards = this.businessCards.filter(card => card.name !== name);
	}
	public saveCards(): void {
		const data = this.businessCards;
		// Save to file
		// JSON 형태의 문자열로 변환
		const jsonData = JSON.stringify(data, null, 2);

		// 파일에 JSON 데이터 쓰기
		fs.writeFile(this.filePath, jsonData, (err) => {
			if (err) {
				console.error('Error writing file:', err);
				return;
			}
			console.log('File has been saved.');
		});
	}
	public loadCards(): void {
		// Load from file
		fs.readFile(this.filePath, 'utf-8', (err, data) => {
			if (err) {
				console.error('Error reading file:', err);
				return;
			}
			// JSON 형태의 문자열을 객체로 변환
			const jsonData = JSON.parse(data);
			const businessCards = jsonData.map((card: any) => {
				return new BusinessCard(card.name, card.email, card.phone, card.company);
			});
			this.businessCards = businessCards;
			console.log('File has been loaded.');
		});
	}
}
