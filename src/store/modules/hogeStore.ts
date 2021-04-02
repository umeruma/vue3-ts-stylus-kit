import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from 'vuex-module-decorators'

import store from '@/store'

@Module({
  dynamic: true,
  store,
  name: 'hoge',
})
export default class Hoge extends VuexModule {
  private isHoge = false

  get getIsHoge(): boolean {
    return this.isHoge
  }
  @Mutation
  protected mUpdateHoge(value: boolean) {
    this.isHoge = value
  }

  @Action({commit: 'mUpdateHoge'})
  updateHoge(newValue: boolean) {
    return newValue
  }
}

export const hogeModule = getModule( Hoge )