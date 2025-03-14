// InputField.tsx
import styles from "./InputField.module.scss";

type InputFieldProps = {
    type?: "checkbox" | "text";
    checked?: boolean;
    value?: string | number;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
    type = "text",
    checked,
    value,
    label,
    onChange,
    className = ""
}) => (
    <div className={`${styles.fieldContainer} ${className}`}>
        {type === "checkbox" && (
            <>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className={styles.inputCheckbox}
                />
                <label className={styles.labelText}>{label}</label>
            </>
        )}

        {type === "text" && (
            <>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className={styles.inputText}
                    placeholder={label}
                />
                {label && <span className={styles.labelText}>{label}</span>}
            </>
        )}
    </div>
);

export default InputField;