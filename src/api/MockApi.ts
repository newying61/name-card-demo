import { NameCard } from '../types/NameCardType';

let nameCards: NameCard[] = [
  {
    id: '123',
    firstName: 'testFirstName',
    lastName: 'Test',
    dateOfBirth: '2019-01-01'
  },
  {
    id: '456',
    firstName: 'Abc',
    lastName: 'Def',
    dateOfBirth: '2019-01-02'
  }
];

// TODO: Setup a JSON server to mock api
export interface NameCardsApiInterface {
  getNameCards(): Promise<NameCard[]>;
  createNameCard(card: NameCard): Promise<NameCard>;
  updateNameCard(cardId: string, card: NameCard): Promise<NameCard>;
  deleteNameCard(cardId: string): Promise<NameCard>;
}

// interface NameCardsResponse {
//   nameCards: NameCard[];
// }

// const handleError = (error: Error) => Promise.reject(error.message);

class MockNameCardsApi implements NameCardsApiInterface {
  getNameCards(): Promise<NameCard[]> {
    return new Promise<NameCard[]>(resolve => {
      resolve(nameCards);
    });

    // return axios.get<NameCardsResponse>(process.env.REACT_APP_MINI_APP_LIST_API)
    //     .then(rsp => rsp.data.nameCards)
    //     .catch(handleError);
  }

  createNameCard(card: NameCard) {
    return new Promise<NameCard>(resolve => {
      card.id = Math.random().toString(36).substr(2, 6);
      nameCards.push(card);
      nameCards = [].concat(nameCards);
      resolve(card);
    });
  }

  updateNameCard(cardId: string, card: NameCard) {
    return new Promise<NameCard>(resolve => {
      const target = nameCards.find((card) => card.id === cardId);
      Object.assign(target, card);
      nameCards = [].concat(nameCards);
      resolve(card);
    });
  }

  deleteNameCard(cardId: string) {
    return new Promise<NameCard>(resolve => {
      const index = nameCards.findIndex((card) => card.id === cardId);
      if (index < 0) {
        resolve();
      }

      const card = nameCards[index];
      nameCards.splice(index, 1);
      nameCards = [].concat(nameCards);
      resolve(card);
    });
  }

}

// Single instance for the api
export default new MockNameCardsApi();
