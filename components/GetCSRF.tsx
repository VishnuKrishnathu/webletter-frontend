import { authAxios } from "@/constants/axios.config";
import React, { useLayoutEffect } from 'react';
export default function GetCSRF() {
    useLayoutEffect(function(){
        console.log("getting the csrf token ...")
        authAxios.get('/get-csrf')
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, [])
  return (
  <React.Fragment>
  </React.Fragment>
  );
}
