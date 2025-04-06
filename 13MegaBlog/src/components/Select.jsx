import React, { useId } from "react";

function Select(
    { options = [], label, className = "", ...props },
    ref
) {
    const id = useId;
    return (
        <>
            <div className="w-full">
                {label && <label className={`${className}`} htmlFor={id}></label>}
                {<select {...props} ref={ref} id={id} className={`${className}`}>
                        {/* {options.length > 0 ? (options.map((key)=>{
                            <option key={key}>{key}</option>
                        })) : (null)} */}

                    {options?.map((option)=>{
                        <option key={option} value={option}>{option}</option>
                    })}
                </select>}
            </div>
        </>
    );
};

export default React.forwardRef(Select);
