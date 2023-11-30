import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

interface CheckboxContextProps {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const CheckboxContext = createContext<CheckboxContextProps | undefined>(
  undefined,
);

interface CheckboxProviderProps {
  children: ReactNode;
}

export const CheckboxProvider: React.FC<CheckboxProviderProps> = ({
  children,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const contextValue = useMemo(
    () => ({ isChecked, setIsChecked }),
    [isChecked, setIsChecked],
  );

  return (
    <CheckboxContext.Provider value={contextValue}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckboxContext = (): CheckboxContextProps => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('에러발생');
  }
  return context;
};
