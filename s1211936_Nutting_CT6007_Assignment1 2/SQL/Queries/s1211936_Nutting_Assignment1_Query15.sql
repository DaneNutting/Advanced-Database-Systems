-- Query 15
-- how many Female students per campus? 
select sum(noOfStudents) as "Number of Students",
	dim.campus as "Campus"
from yr3admissionsfact fact
inner join yr3CourseDim dim on dim.courseID = fact.courseID
where fact.genderID = 1
group by dim.campus
order by dim.campus;
