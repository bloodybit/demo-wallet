
# considerations

* Implementing only the front end as the assignment is emphasizing data visualization and front end libraries.
* Login is simulated. For now it is pre loaded from dotenv. It could use a nodeJS server with simple api though. Also load bar is simulated.
* Used  functional components in react because is the new recommended way.
* Used typescript because I like to keep things in order
* There are only 3 screens so there is no need for a state management library (MobX, Redux)
* The application is stand alone. The file is imported as a js - json variable.
* In the lib folder there is an (incomplete) implementation of caching. It gives the idea on how I would implement it, but didn’t find enough time. It is included to evaluate the architecture choices.
* Header in the table is not needed, but in an orthodox  paradigm  should be included. I just commented it out for now
* I noticed that once I created the chart, it was quite complex to navigate the transaction. So I implemented an automatic scroller that, once is clicked on one day in the chart, it automatically navigates to the transactions of the day.
* Few basic tests are implemented.