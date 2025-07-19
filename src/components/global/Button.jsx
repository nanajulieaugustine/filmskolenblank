const Button = ({children, onClick}) => {
    return (
        <button className="border-1 border-(--yellow) text-(--yellow) rounded-full cursor-pointer hover:scale-103 transition-all duration-300 px-10 py-2 m-auto mt-5 uppercase"
         onClick={onClick}>{children}</button>
      );
}
 
export default Button;