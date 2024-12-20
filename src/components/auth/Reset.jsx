import "./Auth.scss";
import logo from "../../img/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../store/thunks/user";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input.jsx";

const Reset = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { id } = useParams();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) toast.warn("Passwords do not match");
    else dispatch(resetPassword({ id, password, passwordConfirm }));
  };

  return (
    <>
      {!user.auth ? (
        <div className="auth">
          <form className="auth__form" onSubmit={handleFormSubmit}>
            <img className="auth__form-logo" src={logo} alt="Spotify logo" />
            <Input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Button type="submit">
              {user.loading ? "Loading" : "Update password"}
            </Button>
          </form>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default Reset;
