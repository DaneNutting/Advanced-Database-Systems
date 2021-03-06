-- Query 14
-- how many students per campus? 
select sum(noOfStudents) as "Number of Students",
	dim.campus as "Campus"
from yr3admissionsfact fact
inner join yr3CourseDim dim on dim.courseID = fact.courseID
group by dim.campus
order by dim.campus;