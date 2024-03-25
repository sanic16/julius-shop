import useContextTheme from "../../hooks/useContextTheme"

const Background = (
    {
        className
    }:{
        className: Background
    }
) => {
  const { setTheme } = useContextTheme()  
  
  return (
    <button 
        className={className}
        onClick={() => setTheme(className)}
    />
  )
}

export default Background