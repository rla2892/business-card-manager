import { BusinessCard } from '../models/BusinessCard';

export class BusinessCardManager {
	private businessCards: BusinessCard[] = [];
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
}
