-- Query 9
-- how many students from all courses passed in a given year
select sum(noOfStudentsPassed) as "Number of Students Who Passed"
from yr3admissionsfact fact
where fact.dateID = 14;