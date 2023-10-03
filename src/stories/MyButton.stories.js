import MyButton from '../components/elements/MyButton.vue';
export default{
    title: 'Elements/MyButton',
    component: MyButton,
    argTypes: {
        content: {
            control: 'text',
        },
        href: {
            control: 'text',
        
        },
        size:{
            control:'select',
            options:['small','regular']
        },
        variant:{
            control:'select',
            options:['default','rounded']
        },
        hasIcon:{
            control:'boolean',
        },
        
    },
}
export const PrimaryButton ={
    render: (args) => {
        return{
            components: {MyButton},
            setup() {
                return {args};
            },
            template: '<MyButton v-bind="args"></MyButton>',
        }
    },
    args: {
        size: 'regular',
        variant: 'default',
        href: 'about',
        content: 'Primary',
        hasIcon: true,
    }
};
export const SecondaryButton ={
    render: (args) => {
        return{
            components: {MyButton},
            setup() {
                return {args};
            },
            template: '<MyButton v-bind="args"></MyButton>',
        }
    },
    args: {
        size: 'regular',
        variant: 'rounded',
        href: 'about',
        content: 'Primary',
    }
};
export const SmallPrimaryButton ={
    ...PrimaryButton,
    args: {
        size: 'small',
        variant: 'default',
        href: 'about',
        content: 'Primary',
    }
};
export const SmallSecondaryButton ={
    render: (args) => {
        return{
            components: {MyButton},
            setup() {
                return {args};
            },
            template: '<MyButton v-bind="args"></MyButton>',
        }
    },
    args: {
        size: 'small',
        variant: 'rounded',
        href: 'about',
        content: 'Primary',
    }
};