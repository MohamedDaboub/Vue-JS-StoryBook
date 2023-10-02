import MyFlecheG from '../components/elements/MyFlecheG.vue';

export default {
  title: 'Elements/MyFlecheG',
  component: MyFlecheG,
  argTypes: {
    back:{
        control:'select',
        options:['default','Orange','none']
    },
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MyFlecheG,
      },
      setup(){
        return {args}
      },
      template: `<MyFlecheG v-bind="args"/>`
    }
  },
  args: {
    back: 'default',
  }
}