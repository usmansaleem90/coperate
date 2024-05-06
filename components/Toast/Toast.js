import { toast } from 'react-toastify'

const Toast = (type, msg) => {
  // Close any existing toastsW

  // Show the new toast
 if(type === 'err') {
     toast.error(`${msg}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    if(type === 'sucess'){
      toast.success(`${msg}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
}

export default Toast
