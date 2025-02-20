export default function LoginInput({
  children,
  type,
  id,
  onChange,
  value,
  placeholder,
  ...props
}) {
  return (
    <div className="flex flex-col w-11/12 my-1">
      <label
        className="p-1 text-left text-sm font-medium text-stone-600"
        htmlFor={id}
      >
        {children}
      </label>
      <input
        className="p-2 rounded-md focus:outline-none"
        id={id}
        type={type}
        {...props}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
