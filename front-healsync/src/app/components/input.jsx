

export default function InputForm({
    label, type, placeholder}){

    let idLabel = label.replace(" ", "_").toLowerCase()

    return (
        <>
            <label className="w-[60%] text-xs block mb-1 text-white" htmlFor={idLabel}>
                {label}
                <input required placeholder={placeholder} className={`w-[100%] pl-2 block mb-1.5 text-black h-8 bg-white rounded-md`} id={idLabel} type={type} />
            </label>
        </>
    )
}