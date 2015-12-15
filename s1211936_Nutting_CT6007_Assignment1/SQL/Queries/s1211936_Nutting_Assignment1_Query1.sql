-- Query 1
-- how many students on a course?
select sum(noOfStudents) as "Number of Students"
from yr3admissionsfact fact
where fact.courseID = 3;
