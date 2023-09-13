import pets from "../configs/pets.js"
import {onMounted} from 'vue'

export default function usePets({api_key, api_url}) {

    const petsCount = pets.value
    // const petsCount = 8

    const getPetsImage = async (count) => {

        if (count === 0) {
            return
        }

        const pet = pets.value[petsCount.length-count]

        const response = await fetchPetsImage(`${api_url}${pet.species.toLowerCase()}s?name=${pet.breed}`)

        pet.url = response[0].image_link

        await getPetsImage(count-1)

    }

    const fetchPetsImage = async (url) => {

        return await fetch(url, {headers: {'X-Api-Key': api_key}})
            .then(response => response.json())
            .then(data => data)
    }

    onMounted(async () =>  {
        await getPetsImage(petsCount.length)
    })

    return {pets}
}