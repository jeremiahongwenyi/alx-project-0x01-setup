// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";


const UserCard: React.FC<UserProps[]> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white mb-4">
      <h2 className="text-xl font-bold mb-1">{user.name}</h2>
      <p className="text-sm text-gray-600 mb-2">@{user.username}</p>
      <p className="mb-1">Email: {user.email}</p>
      <p className="mb-1">
        Address: {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
      </p>
      <p className="mb-1">Phone: {user.phone}</p>
      <p className="mb-1">Website: {user.website}</p>
      <p className="mb-1">Company: {user.company.name}</p>
      <p className="italic text-gray-500">{user.company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
