import { defineComponent, ref } from 'vue'

export const AppHello = defineComponent({
  setup() {
    const msg = ref('sss')
    return {
      msg,
    }
  },
  render() {
    return (
      <div>
        <input type="text" v-model={this.msg} />
        <hr />
        <p>{this.msg}</p>
      </div>
    )
  },
})
