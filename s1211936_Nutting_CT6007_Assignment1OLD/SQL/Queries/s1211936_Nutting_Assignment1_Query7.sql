-- Query 7
-- what percentage of students passed a course in a specific enrollment year were female?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Female Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14
and fact.genderID = 1;