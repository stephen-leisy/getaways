export const setIndex = (currentPage, perPage, places) => {
  const lastPerPage = currentPage * perPage;
  const firstPerPage = lastPerPage - perPage;
  const result = places.slice(firstPerPage, lastPerPage);
  return result;
};
