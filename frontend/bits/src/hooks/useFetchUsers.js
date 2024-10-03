import { useEffect, useState } from "react";
import { getEnvironmentVariable } from "../utils";

function useFetchUsers() {
  const [users, setUsers] = useState({
    users: [],
    loading: true,
    error: null,
  });

  const handleState = (key, value) => {
    setUsers((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const fetchUsers = async () => {
    try {
      handleState("loading", true);
      const response = await fetch(
        `${getEnvironmentVariable("BASE_URL")}users`
      );
      const users = await response.json();
      if (!response.ok || !users) {
        handleState("error", "Error fetching users");
        return;
      }
      handleState("users", users);
    } catch (error) {
      handleState("error", error);
    } finally {
      handleState("loading", false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return {
    users,
    fetchUsers,
    handleState,
  };
}

export default useFetchUsers;
