-- Query 2
-- how many students on a course for a specific enrollment year?
select sum(noOfStudents) as "Number of Students"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14;