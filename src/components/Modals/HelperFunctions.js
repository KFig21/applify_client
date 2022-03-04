export const closeAnimation = (modalHook) => {
  setTimeout(() => {
    modalHook(false);
  }, 1000);
};
