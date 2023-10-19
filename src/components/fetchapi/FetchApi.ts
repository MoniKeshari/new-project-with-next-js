import { getHomeCardApi } from "@/utils/constant"
import { useEffect, useState } from "react"
const useFetchApi=()=>{
    const [apiResponse, setapiResponse] = useState([])
    useEffect(() => {
      fetchData();
    }, [])
    const fetchData = async () => {
      const apiReq = await fetch(getHomeCardApi);
      const response = await apiReq.json();
      setapiResponse(response)
    }
    return apiResponse;
}
export default useFetchApi;