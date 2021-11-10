import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import User from "../../components/User";
import { Container, UserTable } from "../../components/shared/ui";

const Main = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPosts, setCurrentPosts] = useState<any[]>([]);

  const onFetchUsers = useCallback(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    }).then((res) => {
      setUsers(res.data);
    });
  }, [setUsers]);

  const onClickUser = useCallback(
    (userId) => {
      axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
      }).then((res) => {
        setCurrentPosts(res.data);
      });
    },
    [setCurrentPosts]
  );

  useEffect(() => {
    onFetchUsers();
  });

  const userList = useMemo(
    () =>
      users.map((user) => (
        <User
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          address={user.address}
          phone={user.phone}
          website={user.website}
          company={user.company}
          onClickUser={onClickUser}
        />
      )),
    [users]
  );

  return (
    <Container>
      <UserTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{userList}</tbody>
      </UserTable>
    </Container>
  );
};

export default Main;
