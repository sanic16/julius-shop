import useModalContext from "../../hooks/useContextModal"
import ReactDOM from 'react-dom'
import './modal.css'

const Modal = (
    {
        children,
        className
    }:{
        children?: React.ReactNode,
        className?: string
    }
) => {
  const { isModalOpen, closeModalHandler } = useModalContext()  
  return (
    <>
        {
            isModalOpen && (ReactDOM.createPortal(
                <>
                    <div 
                        className="backdrop"
                        onClick={closeModalHandler}
                    >
                    </div>
                    <div className={className}>
                        {children}
                    </div>
                </>,
                document.getElementById('modal-root') as HTMLDivElement                
            ))
        }
    </>
  )
}

export default Modal