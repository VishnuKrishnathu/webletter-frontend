import { useEffect } from 'react'
import { authAxios } from '@/constants/axios.config';
import { useRouter } from 'next/router';

export default function CheckAuth() {
  let router = useRouter()
  useEffect(()=> {
      authAxios.get("/get-user")
      .then(data => console.log(data))
      .catch(err => {
        if(err.response.status == 403){
          router.push('/login')
        }
      })
  }, [router])
    return (
        <>
        </>
    )
}
