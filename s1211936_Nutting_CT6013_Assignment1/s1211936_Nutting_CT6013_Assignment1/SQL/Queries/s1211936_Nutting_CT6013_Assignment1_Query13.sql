-- Query 13
-- how many students on a course from a country
select sum(noOfStudents) as "Number of Students"
from yr3admissionsfact fact
where fact.countryID = 5
and fact.courseID = 1;