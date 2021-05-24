import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUser } from "../actions/userAction";

function UserList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    console.log(dispatch(getUsers()));
  }, []);
  const users = useSelector((state) => state.user.users);
  const displayUser = (userId) => {
    dispatch(setUser(userId));
  };
  const currentUser = useSelector((state) => state.user.userId?state.user.users.filter(user=>user.id===state.user.userId)[0]:null);
  console.log(currentUser,"currentUser")
  const userDetails=currentUser?`hi my name is ${currentUser.author}`:'sorry'
  
  return (
    <>
    <div>
      {users &&
        users.map((user) => (
          <div>
          
            <p>
              <a
                onClick={() => {
                  displayUser(user.id);
                }}
              >
                <h3>{user.author}</h3>

              </a>
             
            </p>
            {user.title}
         

         
          </div>
        ))}

    </div>
    <div>
             <p>{userDetails}</p>
            </div>
    </>
  );
}

export default UserList;
