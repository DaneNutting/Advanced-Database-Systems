-- Query 1
-- how many students on a course?
select sum(noOfStudents) as "Number of Students"
from yr3admissionsfact fact
where fact.courseID = 3;

-- Query 2
-- how many students on a course for a specific enrollment year?
select sum(noOfStudents) as "Number of Students"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14;

-- Query 3
-- how many students passed a course in a specific enrollment year?
select sum(noOfStudentsPassed) as "Number of Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14;

-- Query 4
-- what percentage of students passed a course in a specific enrollment year?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14;

-- Query 5
-- Of those students who passed students passed a course in a specific enrollment year how many are female?
select sum(noOfStudentsPassed) as "Number of Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14
and fact.genderID = 1;

-- Query 6
-- Of those students who passed students passed a course in a specific enrollment year how many are Male?
select sum(noOfStudentsPassed) as "Number of Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14
and fact.genderID = 2;

-- Query 7
-- what percentage of students passed a course in a specific enrollment year were female?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Female Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14
and fact.genderID = 1;

-- Query 8
-- what percentage of students passed a course in a specific enrollment year were male?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Male Students Who Passed"
from yr3admissionsfact fact
where fact.courseID = 3
and fact.dateID = 14
and fact.genderID = 2;

-- Query 9
-- how many students from all courses passed in a given year
select sum(noOfStudentsPassed) as "Number of Students Who Passed"
from yr3admissionsfact fact
where fact.dateID = 14;

-- Query 10
-- what percentage of students from all courses passed for a given year?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Students Who Passed"
from yr3admissionsfact fact
where fact.dateID = 14;

-- Query 11
-- what percentage of students from all courses passed for all years?
select round((sum(noOfStudentsPassed) / (sum(noOfStudents))) * 100) || '%' as "% of Students Who Passed",
	dim.calendarYear as "Calendar Year"
from yr3admissionsfact fact
inner join yr3CalendarYearDim dim on dim.dateid = fact.dateid
group by dim.calendaryear
order by dim.calendaryear;

-- Query 12
-- how many students from each country?
select sum(noOfStudents) as "Number of Students", 
	dim.countryName as "Country"
from yr3admissionsfact fact
right outer join yr3countrydim dim on dim.countryId = fact.countryID
group by dim.countryName
order by dim.countryName;

-- Query 13
-- how many students on a course from a country
select sum(noOfStudents) as "Number of Students"
from yr3admissionsfact fact
where fact.countryID = 5
and fact.courseID = 1;

-- Query 14
-- how many students per campus? 
select sum(noOfStudents) as "Number of Students",
	dim.campus as "Campus"
from yr3admissionsfact fact
inner join yr3CourseDim dim on dim.courseID = fact.courseID
group by dim.campus
order by dim.campus;

-- Query 15
-- how many Female students per campus? 
select sum(noOfStudents) as "Number of Students",
	dim.campus as "Campus"
from yr3admissionsfact fact
inner join yr3CourseDim dim on dim.courseID = fact.courseID
where fact.genderID = 1
group by dim.campus
order by dim.campus;
