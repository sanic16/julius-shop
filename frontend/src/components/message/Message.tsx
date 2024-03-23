import './message.css'

const Message = (
    {
        variant,
        text
    }:{
        variant: 'danger' | 'info' | 'success' | 'warning',
        text: string
    }
) => {
  return (
    <div>
        <div 
            className={`alert alert-${variant}`}
        >
            {text}
        </div>
    </div>
  )
}

Message.defaultProps = {
    variant: 'info',
    text: 'Mensaje'
}

export default Message
