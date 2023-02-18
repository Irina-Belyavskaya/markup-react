import $api from "../api"

export const getCharacter = async () => {
    const {data} = await $api.get("character/")
    return data
}