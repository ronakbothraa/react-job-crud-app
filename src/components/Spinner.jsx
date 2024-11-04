import ClipLoader from "react-spinners/ClipLoader";
import React from 'react'

const Override = {
    display : 'Block',
    margin: '100px auto'
};

const Spinner = ({ loader }) => {
  return (
    <ClipLoader 
        color="#4338ca"
        loader= {loader}
        cssOverride={Override}
        size={150}
    />
  )
}

export default Spinner