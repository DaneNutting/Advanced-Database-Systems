-- Query 10
-- what percentage of students from all courses passed for a given year?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Students Who Passed"
from yr3admissionsfact fact
where fact.dateID = 14;
