import dayjs from 'dayjs';
const dateFormat = 'HH.mm';
function normalDate(dateFrom) {
  return dateFrom ? new dayjs(dateFrom).format(dateFormat) : '';
}
export default normalDate;
