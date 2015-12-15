-- Query 11
-- what percentage of students from all courses passed for all years?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Students Who Passed",
	dim.calendarYear as "Calendar Year"
from yr3admissionsfact fact
inner join yr3CalendarYearDim dim on dim.dateid = fact.dateid
group by dim.calendaryear
order by dim.calendaryear;