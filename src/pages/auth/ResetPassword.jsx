import "../../styles/pages/auth.css";

export const ResetPassword = () => {
  return (
    <div className="auth-container flex-row flex-center">
      <div className="auth-form flex-col flex-center">
        <h3>Reset Password</h3>
        <input
          type="password"
          autoComplete="new-password"
          className="input"
          placeholder="Enter New Password"
        />
        <input
          type="password"
          autoComplete="new-password"
          className="input"
          placeholder="Confirm New Password"
        />
        <button className="btn btn-info btn-block">Reset Password</button>
        <button className="btn btn-error btn-block">Cancel</button>
      </div>
    </div>
  );
};
