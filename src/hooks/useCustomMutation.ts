import { useMutation } from "@apollo/client";

export const useCustomMutation = (mutation, options = {}) => {
    return useMutation(mutation, {
        context: {
          headers: {
            'apollo-require-preflight': true,
          },
        },
        ...options,
      });
}