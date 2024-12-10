TODO: Have a city page that displays insights about all stations in the city.
TODO: Have a rankings page that shows stations with highest ranking metrics from all cities.

### Single station questions

## Basic Station Information
City
Capacity
Highest in
Neighbour(s)
## Time-based queries
Busiest day of week
Busiest time of day
## Distance and duration queries
What is the total number of journeys starting from [station_name]?
How many journeys ended at [station_name]?
What is the total number of round trips (starting and ending at [station_name])?
What is the shortest outbound/inbound journey?
what is the longest outbound/inbound journey?
What is the most frequent destination for outbount journeys?
What is the most origin for inbound journeys?
How many journeys from [station_name] are shorter than [X] meters?
How many journeys from [station_name] are longer than [X] meters?
How many journeys from [station_name] lasted less than [X] minutes?
How many journeys ending at [station_name] lasted more than [X] minutes?


Here are over 100 questions that combine details from both the station and journey datasets, covering a variety of analysis perspectives:

### Basic Combined Questions
1. Which station in **[city]** has the most completed journeys?
2. What is the most common journey route in **[city]**?
3. What is the average journey distance between **[station_A]** and **[station_B]**?
4. How many journeys started from **[station_name]** and ended in **[city]**?
5. What is the average duration of journeys that start from **[station_name]**?
6. What percentage of journeys started and ended in **[city]**?

### Time-Based and Periodic Analysis
7. How many journeys started from **[station_name]** during peak hours (e.g., 7–9 AM and 4–6 PM)?
8. What is the average journey distance from **[station_name]** during peak times?
9. How many journeys were completed during weekends vs. weekdays in **[city]**?
10. What is the total journey distance recorded for **[station_name]** in the month of **[month]**?
11. Which day of the week has the highest journey frequency from **[station_name]**?
12. What is the average journey duration on holidays in **[city]**?
13. List journeys from **[station_name]** that start after **[time]** on weekdays.
14. How does journey distance vary by season for **[city]** stations?
15. What is the average journey time in **[city]** during winter vs. summer months?
16. Find the longest journey from **[station_name]** during non-peak hours.
17. Compare journey counts between morning and evening peak times for **[city]** stations.
18. What is the busiest time of day for **[station_name]**?

### Statistical Averages and Comparisons
19. What is the average journey distance across all stations in **[city]**?
20. How does the average journey time compare between **[station_A]** and **[station_B]**?
21. Which station has the highest average journey time?
22. Which station has the lowest average journey time in **[city]**?
23. What is the median journey distance in **[city]**?
24. Compare the average journey time between stations in **[city_1]** and **[city_2]**.
25. What is the standard deviation of journey distances from **[station_name]**?
26. Find the average number of daily journeys from stations in **[city]**.

### Distance and Radius-Based Questions
27. Which stations are within a **[X]** km radius of **[station_name]**?
28. List all journeys starting within **[X]** km of **[station_name]**.
29. What is the farthest journey recorded from **[station_name]**?
30. Which journey has the shortest distance between **[station_A]** and **[station_B]**?
31. What is the average journey distance for journeys ending within **[X]** km of **[station_name]**?
32. List all journeys between stations within a **[X]** km radius in **[city]**.

### Capacity and Station Utilization
33. Which station with a capacity of at least **[X]** bikes has the most journeys?
34. What is the average capacity utilization rate for **[station_name]**?
35. How many journeys per bike capacity unit does **[station_name]** have?
36. Which city’s stations have the highest journey count per capacity?
37. Which station has the highest journey volume relative to its capacity?
38. How does the capacity of **[station_name]** compare to other stations in **[city]**?

### Operator-Based and City Comparison Questions
39. Which operator's stations have the highest average journey time?
40. What is the journey distance average for stations managed by **[operator]**?
41. Which city’s stations managed by **[operator]** have the most journeys?
42. How many journeys started at stations managed by **[operator]** in **[city]**?
43. What is the busiest station operated by **[operator]** in **[city]**?

### Departure and Return Station Analysis
44. Which station is the most common return station for journeys from **[station_name]**?
45. What is the most popular departure station for trips ending at **[station_name]**?
46. How often do journeys start and end at the same station in **[city]**?
47. Find the top five most frequent departure-return station pairs in **[city]**.
48. What percentage of journeys from **[station_name]** end at **[return_station]**?
49. Which station has the highest percentage of round-trip journeys?

### Peak and Off-Peak Analysis
50. What is the average journey time from **[station_name]** during peak hours?
51. List the top stations in **[city]** for off-peak journeys.
52. What is the peak time for journeys ending at **[station_name]**?
53. Which stations in **[city]** have the highest off-peak journey counts?
54. How many journeys start from **[station_name]** during off-peak hours?
55. What is the longest journey duration from **[station_name]** during peak times?

### Top-K and Ranking Insights
56. List the top 10 busiest stations in **[city]** based on journey count.
57. Which station has the longest average journey time?
58. Rank the top 5 stations in **[city]** by journey distance.
59. Which station has the highest average journey count per day?
60. List the top 5 most common routes in **[city]** by frequency.
61. What are the 5 stations with the shortest average journey times?

### Advanced Statistical Insights
62. What is the variance of journey distances from **[station_name]**?
63. Find the skewness of journey duration for **[city]**.
64. Calculate the median journey distance for trips in **[city]**.
65. What percentage of journeys in **[city]** exceed **[X]** km?
66. Find the 95th percentile of journey distance in **[city]**.
67. What is the interquartile range of journey times in **[city]**?
68. What is the mode of journey distances from **[station_name]**?

### Seasonal and Date-Specific Analysis
69. How many journeys were made from **[station_name]** in **[month]**?
70. Compare journey counts between summer and winter months in **[city]**.
71. Find the busiest month for **[station_name]**.
72. What is the average journey distance in **[city]** during spring?
73. How does journey duration differ between holidays and regular weekdays in **[city]**?
74. What is the longest journey recorded in December?

### Journey Purpose and Frequency Insights
75. What percentage of journeys are round-trips at **[station_name]**?
76. How many journeys are made from **[station_name]** per bike per day?
77. What is the most common journey duration from **[station_name]**?
78. List all stations in **[city]** with journey durations above **[X]** minutes.
79. How often does a journey end within 500 meters of **[station_name]**?
80. What is the average journey frequency per station in **[city]**?

### Spatial Patterns and Geographic Clusters
81. Find clusters of stations with high journey counts within **[X]** km of each other.
82. List journeys that occur between nearby stations (under **[X]** km).
83. What is the most popular journey within **[city]**’s downtown area?
84. How many journeys begin and end within **[X]** km of **[station_name]**?

### Cross-Station and Comparative Trends
85. Compare journey counts between the most and least used stations in **[city]**.
86. Which station sees more returns than departures in **[city]**?
87. How do journey counts vary between high-capacity and low-capacity stations?
88. Compare the average journey duration of **[station_A]** vs **[station_B]**.
89. Which stations are frequently used for short journeys (less than **[X]** km)?
90. What is the average journey count difference between weekdays and weekends in **[city]**?

### Rare and Edge Case Insights
91. List journeys that start and end at the same station with distances over **[X]** km.
92. Which station has the least variation in journey distances?
93. Which station has the lowest journey count in **[city]**?
94. Find journeys with the longest distance but shortest time.
95. How many stations in **[city]** have never recorded a journey?
96. Which station has the highest rate of journeys per bike capacity unit?

### Dynamic and Real-Time Oriented Questions
97. How many journeys are currently active from **[station_name]**?
98. List journeys starting in the last 10 minutes.
99. What is the average journey time for trips starting within the last hour?
100. Which station currently has the most bikes available for rent?
101. Which stations have recorded at least one journey in the past 24 hours?

Each of these questions provides valuable insights into the combined journey and station datasets for city bike rental and parking, covering distances, times, capacities, geographical spread, and comparative trends across various data points!