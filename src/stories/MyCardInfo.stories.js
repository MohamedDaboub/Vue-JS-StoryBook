import MyCardInfo from '../components/MyCardInfo.vue';

export default {
  title: 'Elements/MyCardInfo',
  component: MyCardInfo,
  argTypes: {
    title:{
      control:'text',
  },
  description:{
      control:'text',
  },   

  }
}

export const CardInfo = {
  render: (args) => {
    return {
      components: {
        MyCardInfo,
      },
      setup(){
        return {args}
      },
      template: `<MyCardInfo v-bind="args"/>`
    }
  },
  args: {
    title: 'Healthy Food',
    description: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',

  }
}