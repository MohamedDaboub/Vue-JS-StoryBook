import MyCards from '../components/MyCards.vue';

export default {
  title: 'Elements/MyCards',
  component: MyCards,
  argTypes: {
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MyCards,
      },
      setup(){
        return {args}
      },
      template: `<MyCards v-bind="args"/>`
    }
  },
  args: {

  }
}