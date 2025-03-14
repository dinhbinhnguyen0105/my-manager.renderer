// components/InputField.tsx
import styles from "./InputField.module.scss";

export type InputFieldProps = {
    type?: "checkbox" | "text";
    checked?: boolean;
    value?: string | number;
    name: string;
    id: string | "",
    label?: string;
    placeholder?: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
    type = "text",
    checked,
    value,
    name,
    label,
    placeholder,
    className = "",
    id = "",
    onChange,
}) => {
    return (
        <div className={` ${styles.fieldContainer} ${className}`}>
            <input
                type={type}
                checked={checked}
                value={value}
                name={name}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.inputField}
            />
            {label && <label htmlFor={id} className={styles.labelText}>{label}</label>}
        </div>
    );
};

export default InputField;