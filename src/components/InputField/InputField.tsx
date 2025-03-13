// components/InputField.tsx
import styles from "./InputField.module.scss";

export type InputFieldProps = {
    type?: "checkbox" | "text";
    checked?: boolean;
    value?: string | number;
    name: string;
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
    onChange,
}) => {
    return (
        <div className={`${styles.fieldContainer} ${className}`}>
            {label && <span className={styles.labelText}>{label}</span>}
            <input
                type={type}
                checked={checked}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.inputField}
            />
        </div>
    );
};

export default InputField;