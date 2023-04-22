import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { BASE_URL } from '../../../utils/Api';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useContractRead } from 'wagmi';
import escrowAbi from '../../../utils/escrowAbi.json'

const TaskInProgress = (props) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
      
        },
      };
    
      const {mutate: accept, isLoading:acceptLoading, isSuccess: acceptSuccess, isError:acceptIsError, error: acceptError, } = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/finalize`,data, config)
        },
        //  onSuccess:() =>{
        //   // queryClient.invalidateQueries("")
        // }
      })
      const {mutate: approve, isLoading:approveLoading, isSuccess: approveSuccess, isError:approveIsError, error: approveError, } = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/approve_abort`,data, config)
        },
        //  onSuccess:() =>{
        //   // queryClient.invalidateQueries("")
        // }
      })

      const Accept = (e) =>{
        e.preventDefault()
        
        accept({task_id:props.id, address:props.address, status:1})

    }
        const Reject =(e)=>{
            e.preventDefault();
            accept({task_id:props.id, address:props.address, status:0})

        }
        const Approve =(e)=>{
            e.preventDefault();
            approveCancel();
        }

        const { config : buyercancelConfig } = usePrepareContractWrite({
          address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
          abi: escrowAbi,
          functionName: 'approveCancel',
          args: [props.id]
        })
        const { data: ApproveCancelData, isLoading, isSuccess, write: approveCancel } = useContractWrite(buyercancelConfig);
        
        const {data: AppcancelWaitData, isLoading: AppcancelWaitLoading, isSuccess : AppcancelaSuccess} = useWaitForTransaction({
          hash: ApproveCancelData?.hash,
          onSuccess(data) {
            console.log(data);
            approve({task_id:props.id, address:props.address, developer_address:props.developer_address})
          },
          onError(error) {
            console.log(error);
          },
        }) 

    useEffect(()=>{
        if(acceptLoading){
            toast.info("submitting task",)
        }
        if(acceptSuccess){
          toast.success("task Accepted")
        }
        if(acceptIsError){
          toast.error(acceptError?.response?.data?.error)
        }
        if(approveLoading){
            toast.info("Approving Cancel",)
        }
        if(approveSuccess){
          toast.success("Canceled Approved")
        }
        if(approveIsError){
          toast.error(approveError?.response?.data?.error)
        }
    },[acceptLoading, acceptSuccess, acceptIsError, acceptError, approveLoading, approveSuccess, approveError, approveIsError])

  return (
    <section>

    <div className="bg-[#FFFFFF] w-[100%] rounded-lg ">
  
    <div className="mt-2 border-b-[1px] border-[#EFF2F9] mb-1 pb-2">
        <h5 className="text-[14px] pl-6  text-[#484679] font-semibold leading-4 ">{props.title}</h5>

    <p className="text-[12px] pl-6 pr-2 text-[#484679] font-normalmt-2">{props.description}</p>
    <div className="flex gap-2 justify-end mr-4">
{
props.completed &&
<div className="">

    <button onClick={Accept} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-2 rounded-lg border-[1px] bg-[#052C5B] '> Accept Submition</button>
    <button onClick={Reject} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-4 rounded-lg border-[1px] bg-red '> Reject Submition</button>
</div>
}

{
  props.aborted &&
  <button onClick={Approve} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-4 rounded-lg border-[1px] bg-red '> Aprove Cancel</button>
}
    </div>
    </div>

            </div>
    </section>
  )
}

export default TaskInProgress