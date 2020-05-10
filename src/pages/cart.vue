<template>
    <div>
        cart
        <order-header></order-header>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from 'components/OrderHeader'
import NavFooter from 'components/NavFooter'
    export default {
        name: 'cart',
        data() {
            return {

            }
        },
        components: {
            OrderHeader,
            NavFooter
        }
    }
</script>

<style lang="scss" scoped>

</style>