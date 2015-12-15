-- Query 12
-- how many students from each country?
select sum(noOfStudents) as "Number of Students", 
	dim.countryName as "Country"
from yr3admissionsfact fact
right outer join yr3countrydim dim on dim.countryId = fact.countryID
group by dim.countryName
order by dim.countryName;
