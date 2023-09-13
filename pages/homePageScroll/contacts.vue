<script setup>
import {onMounted} from "vue";
import {useRouter} from "nuxt/app";

const router = useRouter()

onMounted(() => {
  router.push('/')
})
</script>