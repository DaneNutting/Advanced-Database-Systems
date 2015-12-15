-- Query 5
-- Of those students who passed students passed a course in a specific enrollment year how many are female?
select sum(noOfStudentsPassed) as "Number of Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14
and fact.genderID = 1;