import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Car Mania X | ${title}`;
    } , [title])
}

export default useTitle;