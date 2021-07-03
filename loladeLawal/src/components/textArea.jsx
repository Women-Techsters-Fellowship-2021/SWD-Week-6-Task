

const Textarea = ({cols, rows, placeholder, value, handleChange}) => {
    return (
        
            <textarea 
                cols={cols} 
                rows={rows} 
                placeholder={placeholder} 
                value={value}
                onChange={handleChange}
            ></textarea>
    
    )
}

export default Textarea;
