-- Query 8
-- what percentage of students passed a course in a specific enrollment year were male?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Male Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14
and fact.genderID = 2;