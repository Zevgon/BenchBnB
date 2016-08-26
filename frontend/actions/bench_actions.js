const BenchConstants = {
  REQUEST_BENCHES: "REQUEST_BENCHES",
  RECEIVE_BENCHES: "RECEIVE_BENCHES"
};

const requestBenches = () => ({
  type: BenchConstants.REQUEST_BENCHES
});

const receiveBenches = (benches) => ({
  type: BenchConstants.RECEIVE_BENCHES,
  benches
});

window.requestBenches = requestBenches;

export {BenchConstants, requestBenches, receiveBenches};
