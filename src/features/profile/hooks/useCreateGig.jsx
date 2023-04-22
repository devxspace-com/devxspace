import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "../../../utils/Api";
import axios from "axios";


const useCreateGig = () => {
    const url = `${BASE_URL}/register_service`
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        // 'Access-Control-Allow-Origin': '*'
      
      },
    };
    const queryClient = useQueryClient();
  
    const registerService = (data)=>{
      const formData = new FormData();
      formData.append(" service_name", data. service_name)
      formData.append("service_desc", data.service_desc)
      formData.append("address", data.address)
      formData.append("service_image", data.service_image)
     
      return axios.post(url, data, config);
    }
  return useMutation(registerService, {
onSuccess:()=>{
queryClient.invalidateQueries("tasks")
}
  })
}

export default useCreateGig