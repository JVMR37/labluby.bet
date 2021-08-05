import React from "react";
import { selectUserData } from "../store/authSlice";

import { useAppSelector } from "../hooks/hooks";

import {
  AccountCardStyledDiv,
  InfoTitleStyledSpan,
  InfoValueStyledSpan,
} from "../styles/account.style";

const AccountCard: React.FC = (props) => {
  const userData = useAppSelector(selectUserData);

  return (
    <AccountCardStyledDiv>
      <InfoTitleStyledSpan>Name:</InfoTitleStyledSpan>
      <InfoValueStyledSpan>{userData.name!}</InfoValueStyledSpan>

      <InfoTitleStyledSpan>Email:</InfoTitleStyledSpan>
      <InfoValueStyledSpan>{userData.email!}</InfoValueStyledSpan>
    </AccountCardStyledDiv>
  );
};

export default AccountCard;
