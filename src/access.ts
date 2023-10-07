/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { object } | undefined) {
  console.log(initialState);
  console.log(initialState.user.user_type === "0")

  return {
    isUser: initialState.user.user_type === "0",
    isAdmin: initialState.user.user_type === "1",
    isRoot: () => true
  };
}
