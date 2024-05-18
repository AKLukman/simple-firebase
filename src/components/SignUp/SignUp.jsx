const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("sdjskj");
  };
  return (
    <div className="border">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl">Register please</h2>
        <form onClick={handleSignUp}>
          <input
            className="mb-4 w-3/4 py-2 px-4"
            type="email"
            name="email"
            id=""
            placeholder="Email Adress"
          />
          <br />
          <input
            className="mb-4 w-3/4 py-2 px-4"
            type="password"
            name="password"
            id=""
            placeholder="password"
          />
          <br />
          <input
            className="mb-4 btn btn-secondary w-3/4"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
