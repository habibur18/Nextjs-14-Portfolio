export const EmailTemplate = ({ user_name, user_email, message }) => (
  <div>
    <div>
      <h2>New Message from {user_name}</h2>
      <p>
        <strong>Email:</strong> {user_name}
      </p>
      <p>
        <strong>Email:</strong> {user_email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  </div>
);
