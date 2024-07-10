import { Dispatch, SetStateAction, useState } from 'react';

type InputProps = {
  formValue: string;

  setFormValue: Dispatch<SetStateAction<string>>;
};

const Input = ({ formValue, setFormValue }: InputProps) => {
  const [error, setError] = useState<string | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setFormValue(value);

    // E-posta adresi kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError('Valid email required');
    } else {
      setError(null);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between font-bold">
        <label>Email address</label>
        <span className="text-red-500">{error ? error : ''}</span>
      </div>
      <input
        className={` border px-4 py-3 w-full rounded-md text-[#9294a0] ${
          error ? 'outline-red-500' : ''
        }`}
        placeholder="email@company.com"
        type="email"
        value={formValue}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;
