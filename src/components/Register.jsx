import { useState } from "react";
import { Input } from "./Input.jsx";
import { Logo } from './Logo.jsx';
import { emailValidationMessage, passConfirmValidationMessage, passwordValidationMessage, usernameValidationMessage, validateEmail, validatePassConfirm, validatePassword, valideteUsername } from "../shared/validators/validator.js";
import { useRegister } from "../shared/hooks/useRegister.jsx";
import { FaUser, FaLock, FaLockOpen, FaUserTie } from "react-icons/fa";

export const Register = ({ switchAuthAndler }) => {
    const { register, isLoading } = useRegister()

    const [formData, setFormData] = useState(
        {
            email: {
                value: '',
                isValid: false,
                showError: false
            },
            username: {
                value: '',
                isValid: false,
                showError: false
            },
            password: {
                value: '',
                isValid: false,
                showError: false
            },
            passwordConfirm: {
                value: '',
                isValid: false,
                showError: false
            }
        }
    )

    const isSubmitButtonDisable = !formData.email.isValid ||
        !formData.username.isValid ||
        !formData.password.isValid ||
        !formData.passwordConfirm.isValid

    const handleValueChange = (value, field) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }

    const handleValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validateEmail(value)
                break
            case 'username':
                isValid = valideteUsername(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfirm':
                isValid = validatePassConfirm(formData.password.value, value)
                break
            default:
                break
        }
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        register(
            formData.email.value,
            formData.username.value,
            formData.password.value
        )
    }
    return (
        <div className="register-container">
            <Logo text={"Register Storage"} />
            <form
                className="auth-form"
                onSubmit={handleRegister}
            >
                <Input
                    field="email"
                    label={
                        <label
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                color: "#333",
                                textTransform: "uppercase",
                                letterSpacing: "0.1rem",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <FaUser style={{ marginRight: "0.5rem" }} /> Email
                        </label>
                    }
                    value={formData.email.value}
                    onChangeHandler={handleValueChange}
                    type="email"
                    placeholder="Email"
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.email.showError}
                    validationMessage={emailValidationMessage}
                    inputStyle={{
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        width: "100%",
                        boxSizing: "border-box",
                        '::placeholder': {
                            color: 'rgba(128, 128, 128, 0.5)',
                        },
                    }}
                />

                <Input
                    field='username'
                    label={
                        <label
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                color: "#333",
                                textTransform: "uppercase",
                                letterSpacing: "0.1rem",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <FaUserTie style={{ marginRight: "0.5rem" }} /> Username
                        </label>
                    }
                    value={formData.username.value}
                    onChangeHandler={handleValueChange}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.username.showError}
                    validationMessage={usernameValidationMessage}
                    inputStyle={{
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        width: "100%",
                        boxSizing: "border-box",
                        '::placeholder': {
                            color: 'rgba(128, 128, 128, 0.5)',
                        },
                    }}
                />


                <Input
                    field="password"
                    label={
                        <label
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                color: "#333",
                                textTransform: "uppercase",
                                letterSpacing: "0.1rem",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <FaLock style={{ marginRight: "0.5rem" }} /> Password
                        </label>
                    }
                    value={formData.password.value}
                    onChangeHandler={handleValueChange}
                    type="password"
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.password.showError}
                    validationMessage={passwordValidationMessage}
                    inputStyle={{
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        width: "100%",
                        boxSizing: "border-box",
                        '::placeholder': {
                            color: 'rgba(128, 128, 128, 0.5)',
                        },
                    }}
                />

                <Input
                    field='passwordConfirm'
                    label={
                        <label
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                color: "#333",
                                textTransform: "uppercase",
                                letterSpacing: "0.1rem",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <FaLockOpen style={{ marginRight: "0.5rem" }} /> Password Confirmation
                        </label>
                    }
                    value={formData.passwordConfirm.value}
                    onChangeHandler={handleValueChange}
                    type='password'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.passwordConfirm.showError}
                    validationMessage={passConfirmValidationMessage}
                    inputStyle={{
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        width: "100%",
                        boxSizing: "border-box",
                        '::placeholder': {
                            color: 'rgba(128, 128, 128, 0.5)',
                        },
                    }}
                />

                <button
                    disabled={isSubmitButtonDisable}
                    style={{ marginTop: '1rem' }}
                >
                    Register
                </button>
            </form>
            <span onClick={switchAuthAndler}>
                ¿Ya tienes una cuenta? ¡Inicia sesión acá!
            </span>
        </div>
    )
}
