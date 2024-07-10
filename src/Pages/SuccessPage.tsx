import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../store/FormContext';

export default function SuccessPage() {
  const { formValue } = useFormContext();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div className=" bg-white max-w-[500px] w-[450px] p-8 flex flex-col gap-8 rounded-2xl">
      <img src="/icon-success.svg" alt="Success İcon" className="w-10 h-10" />
      <h1 className=" text-[56px] font-extrabold leading-[56px]">
        Thanks for subscribing!
      </h1>
      <p>
        A confirmation email has been sent to{' '}
        <span className=" font-bold">{formValue}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>

      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-[#ff6257] to-orange-600 text-white px-10 py-5 rounded-lg hover:shadow-lg hover:shadow-purple-600"
      >
        Dismiss message
      </button>
    </div>
  );
}
