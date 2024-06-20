const dayjs = require("dayjs")

const today = dayjs()
const dayAfterFiveDays = today.add(4, 'days')
const getDayAfterFiveDays = dayAfterFiveDays.format('dddd, MMM D')

const dayAfterTwoDays = today.add(2, 'days')
const getDayAfterTwoDays = dayAfterTwoDays.format('dddd, MMM D')

const dayAfterSevenDays = today.add(7, 'days')
const getDayAfterSevenDays = dayAfterSevenDays.format('dddd, MMM D')

export { getDayAfterFiveDays, getDayAfterTwoDays, getDayAfterSevenDays }