import {
  emailValidationMessage,
  validateEmail,
  validatePassword,
  passwordValidationMessage
} from '../shared/validators/validator.js';
import { Input } from './Input.jsx'
import { useState } from 'react';
import { Logo } from './Logo.jsx';
import { useLogin } from '../shared/hooks/useLogin.jsx'
import { FaUser, FaLock } from "react-icons/fa";

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin()
  const [formData, setFormData] = useState(
    {
      email: {
        value: "",
        isValid: false,
        showError: false,
      },
      password: {
        value: "",
        isValid: false,
        showError: false,
      },
    }
  );
  const isSubmitButtonDisable = !formData.email.isValid ||
    !formData.password.isValid

  const onValueChange = (value, field) => {
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
      case 'password':
        isValid = validatePassword(value)
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

  const handleLogin = (e) => {
    e.preventDefault()
    login(
      formData.email.value,
      formData.password.value
    )
  }
  return (
    <div className="login-container">
      <Logo text={"Login Storage"} />
      <form
        name='form1'
        className="auth-form"
        onSubmit={handleLogin}
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
          onChangeHandler={onValueChange}
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
          onChangeHandler={onValueChange}
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

        <button
          disabled={isSubmitButtonDisable}
        >
          LogIn
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Aún no tienes una cuenta? ¡Registrate...!
      </span>
    </div>
  )
}
