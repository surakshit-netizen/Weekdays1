function mapDatesToWeekdays(data) {
    const weekdayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dateWeekdayMap = {};
    const weekStarts = new Set();

    for (const [dateStr, value] of Object.entries(data)) {
        const dateObj = new Date(dateStr);

        // Get weekday index (Mon=0, Sun=6)
        const weekdayIndex = (dateObj.getDay() + 6) % 7; 
        const weekdayName = weekdayNames[weekdayIndex];

        // Store [weekday name, value] in result
        dateWeekdayMap[dateStr] = [weekdayName, value];

        // Find Monday of the current week
        const weekStart = new Date(dateObj);
        weekStart.setDate(dateObj.getDate() - weekdayIndex);

        // Use ISO string for consistent uniqueness
        weekStarts.add(weekStart.toISOString().split("T")[0]);
    }

    const totalWeeks = weekStarts.size;
    return { dateWeekdayMap, totalWeeks };
}
const data = {
   "2025-08-11": 10,  // Monday
    "2025-08-12": 5,   // Tuesday
    "2025-08-15": 12,  // Friday
    "2025-08-17": 20,  // Sunday
    "2025-08-18": 7,   // Next Monday
};

const { dateWeekdayMap, totalWeeks } = mapDatesToWeekdays(data);

console.log("Date to weekday mapping:", dateWeekdayMap);
console.log("Total weeks:", totalWeeks);
