// InputField.tsx

import styles from "./InputField.module.scss";

type InputFieldProps = {
    type?: "checkbox" | "text";
    checked?: boolean;
    value?: string | number;
    label?: string;
    className?: string;
    id?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    reverseLabel?: boolean;
    placeHolder?: string;
};

const InputField: React.FC<InputFieldProps> = ({ type = "text", checked, value, label, className, id, onChange, reverseLabel = false, placeHolder }) => {
    return (
        <div className={`${styles.inputFieldContainer} ${className}`}>
            {label && reverseLabel && (<label htmlFor={id} className={styles.labelText}>{label}</label>)}
            {
                type === "checkbox" ? (
                    <input
                        className={styles.inputCheckbox}
                        type="checkbox"
                        checked={checked}
                        name={id}
                        id={id}
                        onChange={onChange}
                    />
                ) : (
                    <input
                        className={styles.inputText}
                        type="text"
                        value={value}
                        name={id}
                        id={id}
                        onChange={onChange}
                        placeholder={placeHolder}
                    />
                )
            }
            {label && !reverseLabel && (<label htmlFor={id} className={styles.labelText}>{label}</label>)}
        </div>
    );
};

export default InputField;