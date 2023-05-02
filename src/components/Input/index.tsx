import { StyledInput } from "./style";

interface iInputProps {
  type: string;
  name: string;
  register: object;
  error: string | undefined;
  children?: React.ReactNode;
}

export const Input = ({
  children,
  type,
  name,
  register,
  error,
}: iInputProps) => {
  return (
    <StyledInput>
      {children}
      <input
        className={error && "input-error"}
        type={type}
        {...register}
        required={true}
      />
      <span>{name}</span>
      {error && (
        <p className="caption" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledInput>
  );
};
