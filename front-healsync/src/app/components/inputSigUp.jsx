

export default function InputForm({
    label, type, widthSize}){

    let idLabel = label.replace(" ", "_").toLowerCase()

    return (
        <>
            <label className="w-[60%] text-xs block mb-1 text-white" htmlFor={idLabel}>
                {label}
                <input className={`w-[100%] pl-2 block mb-1.5 text-black h-8 bg-white rounded-md`} id={idLabel} type={type} />
            </label>
        </>
    )
}