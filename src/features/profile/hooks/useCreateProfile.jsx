import { useMutation } from "wagmi";
import { BASE_URL } from "../../../utils/Api"
import axios from "axios";
import { useQueryClient } from "react-query";


const useCreateProfile = () => {
  const url = `${BASE_URL}/create_profile`
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      // 'Access-Control-Allow-Origin': '*'
    
    },
  };
const queryClient = useQueryClient();
  const register = (data)=>{
    const formData = new FormData();
    formData.append("username", data.username)
    formData.append("avatar", data.avatar)
    formData.append("address", data.address)
    formData.append("skills", JSON.stringify(data.skills))
    formData.append("about", data.about)
    return axios.post(url, data, config);
  }
return useMutation(register,{
  onSuccess:()=>{
    queryClient.invalidateQueries("profile")
    }
})
}

export default useCreateProfile