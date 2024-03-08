type InputProps = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
}

export function InputPageLogin({ label, placeholder, type, name }: InputProps) {
  return (
    <div className="w-full justify-center items-center flex flex-col gap-2">
      <label className="w-full text-body font-workSans font-body leading-6 " htmlFor={name}>{label}</label>
      <input
        className="w-full h-12 border-[1px] border-gray-300 rounded-3xl px-6 py-4 font-workSans"
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </div>
  )

}