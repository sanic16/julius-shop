import useContextTheme from "../../hooks/useContextTheme"

const Primary = (
    {
        className
    }:{
        className: Primary
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

export default Primary