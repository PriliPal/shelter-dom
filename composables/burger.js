import {ref} from 'vue'

export default function useBurger() {

    const isBurgerOpened = ref(false)

    const hideOrOpenBurger = () => {
        isBurgerOpened.value = !isBurgerOpened.value
    }

    return {isBurgerOpened, hideOrOpenBurger}
}