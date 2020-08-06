import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class ChampionStore {
  @observable champions = [];

  @action getChampion() {
    try {
      
      return new Promise((resolve, reject) => {
        resolve();
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
}

export default ChampionStore;