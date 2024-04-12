const allEvents = await fetch("/static/all-events.json").then((response) => response.json());

// Members ordered by position then seniority
const members = await fetch("/static/members.json").then((response) => response.json());

export { allEvents, members };
