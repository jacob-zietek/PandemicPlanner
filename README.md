## PandemicPlanner

## Hackathon Submission for PennApps 2020

## Inspiration
Pandemic Planner is inspired by our needs as college students with the current pandemic affecting our daily lives. With all the necessary precautions that need to be taken with COVID-19, it can be difficult sometimes to see whether physical events can be feasible. As members of various organizations here on campus, we found ourselves struggling with event planning often missing social distancing guidelines and rules set by the state. Pandemic Planner is here to streamline that process. 

## What it does
In order to simplify the process, Pandemic Planner allows event handlers to enter details about a particular event and determine if such events can be held in a particular space.

With the simple user interface, event planners can immediately tell whether the venue can support the number of people while social distancing. 

Building on top of this, we created a graphical user interface through p5.js that helps event planners estimate the position of individuals in a specific room. Users can interact with the interface by clicking and dragging the grid to get a rough idea of how people will be able to fit in that room and where.

Another factor in reducing the spread of COVID-19 is making sure that those attending the event are sanitized as well as the physical venues themselves being clean. To tackle this, we implemented a cost breakdown of the bare minimum necessities for an event to reduce the spread of the virus. The cost breakdown includes an estimated amount of hand sanitizer per person at the event and deep cleaning services of the venue. 

Once the event planners proceed to run the event, there is a ticket feature in the “checklist” that ask attendees a series of COVID-19 symptom questions and provides a checklist on what to bring to the event such as a mask or face shield. We implemented this reminders area because, even with the pandemic spanning over 6 months, we often find ourselves forgetting to bring a mask when leaving the house. We also wanted this to be mobile friendly, so it’s fully compatible on phones and tablets.

## How we built it
To create Pandemic Planner, we used a combination of HTML and CSS to implement the frontend side of the webapp. With the backend side, we utilized javaScript, p5.js, jQuery, and HTML5 Canvas. 

Additionally we used GitHub for source control and Figma, a vector based graphical editing and prototyping tool, to visualize our user interface during pre-development.

We also used readily available information about additional costs event planners would have to take into account to create functions of cost based off of user input.

## Challenges we ran into
Some challenges we faced right off the bat were making sure we were accounting for all the COVID-19 guidelines in building our social distancing user interface as well as our cost breakdown for each event. We spent extra time brainstorming and implementing our low fidelity model to ensure that the web app is simple and concise for planners to use. 

We also learned to identify needlessly complicated implementations of problems. We originally wanted to use a combination of Google Map JS API commands and location services to automatically identify where an event handler was to pull up relevant info about covid restrictions in their state. We realized this was, to say the least, a horribly inefficient way of solving this problem for different reasons. This approach was narrow sighted, there were many problems with this such as:
- The venue could also be in a different state than the user 
- The user would have to agree to share their location before they could use the app
- A VPN or other IP maskers can mess up the geolocation data
- The development environment would have to be set up in such a way to be compatible with HTTPS
We instead opted to just allow the user to input what state they were from manually.

## Accomplishments that we're proud of
First off, we are proud of how simple and effective our web app is in aiding fellow event planners in planning in person events. As the United States begins to slowly reopen, this will surely be helpful in aiding users to keep themselves and their event attendees safe.

## What we learned
**Justin**: As this being my first Hackathon, I learned how to integrate HTML and CSS together in designing a user friendly web app.

**Jacob**: I learned a whole lot about the logistics of event planning in general and during a pandemic. Justin also taught me project managing skills and how to resource my time wisely. Lastly, I learned how to integrate Google Cloud resources into JavaScript, and more in depth things about firebase. 


## What's next for Pandemic Planner
What we plan on doing next is integrating and improving the user experience. 
We plan on making the app more dynamic and self sustaining in nature. A flaw with the app at the moment is that state data on the max amount of people in a gathering needs to be updated manually. Ideally, an AI or something of that nature can change a database in the background. We would also like users to be able to draw the area of their event room to accommodate custom sizes that don't fit a rectangular format. And we would also like to implement a system for event partners to generate unique links for attendees to check in through, and a system for event partners to manage those people.
