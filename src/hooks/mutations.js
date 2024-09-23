import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const postMutation = () => {
  const mutationFn = (form) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", form);
  };

  return useMutation({ mutationFn });
};

export { postMutation };
