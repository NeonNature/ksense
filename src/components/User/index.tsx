import React from "react";

type AddressProps = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type CompanyProps = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
  onClickUser: (userId: number) => void;
};

const User = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
  onClickUser,
}: UserProps) => {
  return (
    <tr onClick={() => onClickUser(id)}>
      <td> {id}</td>
      <td> {name}</td>
      <td> {username}</td>
      <td> {email}</td>
      <td> {address.city}</td>
      <td> {phone}</td>
      <td> {website}</td>
      <td> {company.name}</td>
    </tr>
  );
};

export default User;
