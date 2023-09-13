import {ref} from "vue";

export default function useModal() {

    const visibility = ref(false)

    const show = () => {
        visibility.value = true
    }

    const hide = () => {
      visibility.value = false
    }

    return {visibility, show, hide}
}