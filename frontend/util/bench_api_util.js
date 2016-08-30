export const fetchBenches = (success, filters) => {
  $.ajax({
    method: "GET",
    url: '/api/benches',
    data: {bounds: filters},
    success,
    error: () => console.log('error')
  });
};
