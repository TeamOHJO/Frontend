import { useState, FormEvent } from 'react';
import styled from '@emotion/styled';
import { validateField } from '../../utils/utils';
import { FormData, LoginSetProps } from '../../@types/interface';
import JoinInput from './JoinInput';
import JoinTabButton from './JoinTabButton';

const JoinTabContent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    name: false,
    phone: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
  });

  const handleJoinSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  const errorSetFunc = ({ e, key }: LoginSetProps) => {
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });
    const newErrors: { [key in keyof FormData]?: string } = {};
    const newIsError: { [key in keyof FormData]?: boolean } = {};

    const error = validateField({ key, value, formData });

    newErrors[key] = error;
    newIsError[key] = !!error;

    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    setIsError((prevIsError) => ({ ...prevIsError, ...newIsError }));
  };
  return (
    <StyledForm onSubmit={handleJoinSubmit}>
      <JoinInput
        isError={isError}
        errors={errors}
        errorSetFunc={errorSetFunc}
      />
      <JoinTabButton
        errors={errors}
        formData={formData}
        errorSetFunc={errorSetFunc}
      />
    </StyledForm>
  );
};
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default JoinTabContent;
