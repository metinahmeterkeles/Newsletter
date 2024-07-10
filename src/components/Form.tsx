import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../store/FormContext';

const Form = () => {
  const { formValue, setFormValue } = useFormContext();
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`/success-page/`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input formValue={formValue} setFormValue={setFormValue} />
      <Button />
    </form>
  );
};
export default Form;
