import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type FormContextType = {
  formValue: string;
  setFormValue: Dispatch<SetStateAction<string>>;
};

type FormContextProviderProps = {
  children: ReactNode;
};

const FormContext = createContext<FormContextType | null>(null);

export default function FormContextProvider({
  children,
}: FormContextProviderProps) {
  const [formValue, setFormValue] = useState<string>('');

  return (
    <FormContext.Provider value={{ formValue, setFormValue }}>
      {children}
    </FormContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFormContext() {
  const formContext = useContext(FormContext);

  if (formContext === null) throw new Error('TimersContext is null');

  return formContext;
}
