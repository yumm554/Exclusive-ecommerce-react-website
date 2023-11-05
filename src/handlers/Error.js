const Error = (props) => {
  const [error, setError] = useState();
  setError(props.data.response);
  return (
    <div>
      <p>{error ? error : <p>something went wrong</p>}</p>
    </div>
  );
};
export default Error;
