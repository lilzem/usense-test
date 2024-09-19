import axios from "./axios";

export async function getRates(currency: string) {
    return await (
        await axios.get(`/latest/${currency}`)
    ).data;
}
