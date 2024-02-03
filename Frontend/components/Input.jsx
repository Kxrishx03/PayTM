export  function Input({label,placeholder}){
    return(
          
        <div className="grid">
            <label className="text-sm font-semibold text-left py-2" htmlFor="text">{label}</label>
            <input className="w-full px-2 py-2 border border-sky-500" type="text" placeholder={placeholder} />
        </div>
    );
}