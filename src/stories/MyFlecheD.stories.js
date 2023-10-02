import MyFleche from '../components/elements/MyFlecheD.vue';

export default {
  title: 'Elements/MyFleche',
  component: MyFleche,
  argTypes: {
    back:{
        control:'select',
        options:['default','Orange','none']
    },
    shadow:{
        control:'select',
        options:['default','shadow']
    },
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MyFleche,
      },
      setup(){
        return {args}
      },
      template: `<MyFleche v-bind="args"/>`
    }
  },
  args: {
    back: 'default',
    shadow: 'default',
  }
}