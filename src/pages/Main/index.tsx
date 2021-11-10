import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";
import User from "../../components/User";
import Post from "../../components/Post";
import {
  Container,
  UserTable,
  PostHeader,
  PostHeaderUser,
} from "../../components/shared/ui";

const Main = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPosts, setCurrentPosts] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const postRef = useRef<any>();

  const onFetchUsers = useCallback(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    }).then((res) => {
      setUsers(res.data);
    });
  }, [setUsers]);

  const onClickUser = useCallback(
    (userId, name) => {
      setCurrentUser(name);
      axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
      }).then((res) => {
        setCurrentPosts(res.data);
      });
    },
    [setCurrentPosts, setCurrentUser]
  );

  useEffect(() => {
    onFetchUsers();
  });

  useEffect(() => {
  	if (currentPosts.length) {
	    setTimeout(function () {
        postRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }, 500);
    }
  }, [currentPosts]);

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

  const postList = useMemo(
    () =>
      currentPosts.map((post) => <Post title={post.title} body={post.body} />),
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

      <div ref={postRef}>
        {currentUser && (
          <>
            <hr />
            <PostHeader>
              Posts by <PostHeaderUser>{currentUser}</PostHeaderUser>
            </PostHeader>
            {postList}
          </>
        )}
      </div>
    </Container>
  );
};

export default Main;
