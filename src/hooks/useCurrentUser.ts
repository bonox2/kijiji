import { useQuery } from "@apollo/client";
import { TEMP_CURRENT_USER_Q } from "../graphql/queries/TEMP_CURRENT_USER_Q";
//NOTE: TEMP_USER_ID is a constant that we will use to query the user data (bonox user).
import { TEMP_USER_ID } from "../constants";

export const useCurrentUser = () => {
  const { data: userData, loading, error } = useQuery(TEMP_CURRENT_USER_Q, {
    variables:{
        userId: TEMP_USER_ID
    }
  });

  return { ...userData?.user, loading, error };
}