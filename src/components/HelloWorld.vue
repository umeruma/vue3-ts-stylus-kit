<template>
  <div class="hello">
  </div>
</template>

<script lang="ts">
import { Options, Vue, Watch } from 'vue-property-decorator'
import { hogeModule } from '@/store/modules/hogeStore'

@Options({})
export default class HelloWorld extends Vue {
  get isHoge() {
    return hogeModule.updateHoge
  }

  @Watch('isHoge')
  updateIsHoge() {
    console.log(this.isHoge)
  }
}
</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
