import InputField, { InputFieldProps } from "~/components/InputField/InputField";

const Test: React.FC = () => {

    return (
        <div className="container">
            <InputField
                type="checkbox"
                checked={false}
                label="test"
                className="test"
                onChange={ }
            />
        </div>
    );
};

export default Test;