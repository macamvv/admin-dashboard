export const ManipulationHelper = {
  formatToLocalTime: (value: any) => new Date(value).toString().split(' ')[4],
};
