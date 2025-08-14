function mapDatesToWeekdays(data) {
    const weekdayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dateWeekdayMap = {};
    const weekStarts = new Set();

    for (const [dateStr, value] of Object.entries(data)) {
        const dateObj = new Date(dateStr);
        
        const weekdayIndex = (dateObj.getDay() + 6) % 7; 
        const weekdayName = weekdayNames[weekdayIndex];

        dateWeekdayMap[dateStr] = [weekdayName, value];

        const weekStart = new Date(dateObj);
        weekStart.setDate(dateObj.getDate() - weekdayIndex);

        weekStarts.add(weekStart.toISOString().split("T")[0]);
    }

    const totalWeeks = weekStarts.size;
    return { dateWeekdayMap, totalWeeks };
}
const data = {
   "2025-08-11": 10,  
    "2025-08-12": 5,   
    "2025-08-15": 12,  
    "2025-08-17": 20,  
    "2025-08-18": 7,   
};

const { dateWeekdayMap, totalWeeks } = mapDatesToWeekdays(data);

console.log("Date to weekday mapping:", dateWeekdayMap);
console.log("Total weeks:", totalWeeks);

