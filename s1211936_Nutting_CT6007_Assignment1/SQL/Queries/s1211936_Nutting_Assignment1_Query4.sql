-- Query 4
-- what percentage of students passed a course in a specific enrollment year?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14;