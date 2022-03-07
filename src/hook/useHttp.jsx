import { useCallback } from "react";

export const useHttp = (props) => {
    const request = useCallback(async (url) => {
        try{
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })

            if(!response.ok){
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }

            const data = await response.json()
            return data
        } catch (err) {
            console.log(err);
        }
    }, [])
    return { request }
}

export default useHttp