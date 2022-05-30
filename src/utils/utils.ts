import { useDark, useToggle } from "@vueuse/core";
export default {
  switchDark: () => {
    const toggleDark = useToggle(useDark());
    toggleDark();
  },
};
