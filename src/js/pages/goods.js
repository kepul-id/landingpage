export function goods() {
  return {
    activeCategory: "Plastik",
    resetScroll() {
      window.scrollTo({ top: 350, behavior: "smooth" });
      return false;
    },
  };
}
