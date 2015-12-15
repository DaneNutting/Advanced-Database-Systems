-- Query 3
-- how many students passed a course in a specific enrollment year?
select sum(noOfStudentsPassed) as "Number of Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14;