import React from "react";
const url = "https://api.github.com/users/nepidmobe";
const MultipleReturns = () => {
  const [isLoading, setisLoading] = React.useState(true);
  const [isError, setisError] = React.useState(false);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    fetch(url)
      .then(async (response) => {
        console.log(response);
        if (response.status < 200 || response.status > 299) {
          setisError(true);
        }
        const data = await response.json();

        setUser(data);

        setisLoading(false);
      })
      .catch((error) => setisError(true));
  }, []);

  if (isError) {
    return <h1>cannot fetch data...</h1>;
  } else if (isLoading) {
    return <h1>loadingSpinner....</h1>;
  }
  return (
    <>
      <h1>{user.login}</h1>
    </>
  );
};

export default MultipleReturns;
