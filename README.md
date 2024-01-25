# Project Title

**The Official Website for the [Odd Man Rush Hockey League](https://www.facebook.com/profile.php?id=61550747964046)**

## Overview

I play in a recreational ice hockey league in St. John's, Newfoundland. As a new league (founded in 2023) it lacks some of the bells and whistles of some of the more established leagues in our city or anywhere else in the world for that matter. One of those things is its own official website. 

Furthermore, there may be an opportunity to expand this into a platform that services recreational sports league managers in a similar fashion to how Shopify helps small retailers implement an eCommerce store with minimal technical know-how. 

### Problem

Every major Canadian city (and many others globally) has dozens or even hundreds of recreational sports leagues. Many of these leagues are run off a combination of social media apps, messaging apps and spreadsheets to keep track of schedules, rosters, stats and league fees. This is confusing, inefficient, and does not present these leagues to the members in a professional manner. 

### User Profile

In most of these leagues, the people running them are doing so part-time on top of their full-time job and often it's in a volunteer capacity. These are usually not people with technical skills, and even if they do have them, they are not in a position to maintain a fully functional website. They need something plug and play to help organize their league while making it look organized and professional at the same time. 

### Features

- A homepage with some nice graphics, a summary of recent games, upcoming games and a feed of recent announcements. 
- A teams page for each team that shows off the roster of each team including names, positions, numbers and stats. It will also include a table summarizing previous game results as well as the upcoming schedule. 
- Certain logged in members will have the ability to add players to teams and add games results to populate the pages above. 

## Implementation

### Tech Stack

- React app
- Node.js as the backend 
- Knex.js for the database

### APIs

Nothing external for this phase. 

### Sitemap

- Homepage
- Teams Page x 4
- Backend login for league managers to enter data

### Mockups

**Homepage**

![Homepage mockup](./app/assets/images/OMRHL-homepage-mockup.png)

**Team Page**

![Team page mockup](./app/assets/images/OMRHL-team-page-mockup.png)

### Data

- Every league will require a list of teams. Those teams will need details such as the name, captain, colour, etc.
- Every league will require a schedule that utilizes the list of teams to figure out who plays who. 
- That schedule will get turned into a score when game results are inputted. Those scores will then influence the standings table. 
- The standings table will track datapoints such as wins, losses, ties, goals scored and goals again for each team and need to be sortable. 
- Each team will then need a stats table that tracks player names, numbers, etc but also summarizes their stats from each game result such as goals, assists, penalties, etc. 

### Endpoints

**GET /players**

The plan is to populate the stats portion of this table by summarizing rows from the GAMES table.

```
{
    "id": 1,
    "name": "Alex Smeall (C)",
    "number": 21,
    "position": "F",
    "games": 11,
    "goals": 9,
    "assists": 12,
    "points": 21,
    "penalties": 3
}
```

**POST /players**

The categories not shown here will all default to 0.

```
{
    "id": 2,
    "name": "New Guy",
    "number": 99,
    "position": "F",
}
```

**PUT /players/:id**

The statistics may only be editable via the games PUT

```
{
    "name": "New Guy",
    "number": 99,
    "position": "F",
    "games": 2,
    "goals": 3,
    "assists": 2,
    "points": 5,
    "penalties": 1
}
```

**DELETE /players/:id**

```
{
    "name": "Must match player name"
}
```

**GET /games**

```
{
    "id": 1,
    "date": "January 2, 2024",
    "team1": {
        "name": "Fogtown Leprechauns",
        "score": 8,
        "players": {
            "id": 1,
            "name": "Alex Smeall"
            "goals": 1,
            "assists": 1,
            "penalties": 1
        },
        {
            "id": 2,
            "name": "New Guy"
            "goals": 1,
            "assists": 0,
            "penalties": 0
        }
    },
    "team2": {
        "name": "Mighty Moose",
        "score": 8,
        "players": {
            "id": 55,
            "name": "Johnny Hockey"
            "goals": 0,
            "assists": 1,
            "penalties": 1
        },
        {
            "id": 56,
            "name": "Gordie Puck"
            "goals": 2,
            "assists": 1,
            "penalties": 0
        }
    }

}
```

**PUT /games**

```
{
    "date": "January 9, 2024",
    "team1": {
        "name": "Fogtown Leprechauns",
        "score": 7,
        "players": {
            "id": 1,
            "name": "Alex Smeall"
            "goals": 0,
            "assists": 2,
            "penalties": 0
        },
        {
            "id": 2,
            "name": "New Guy"
            "goals": 1,
            "assists": 1,
            "penalties": 1
        }
    },
    "team2": {
        "name": "Kraken Beers",
        "score": 9,
        "players": {
            "id": 22,
            "name": "Jimmy Dangles"
            "goals": 2,
            "assists": 2,
            "penalties": 0
        },
        {
            "id": 23,
            "name": "Donnie Shooter"
            "goals": 3,
            "assists": 1,
            "penalties": 1
        }
    }

}
```

**PUT /games/:id**

```
{
    "date": "January 9, 2024",
    "team1": {
        "name": "Fogtown Leprechauns",
        "score": 7,
        "players": {
            "id": 1,
            "name": "Alex Smeall"
            "goals": 0,
            "assists": 2,
            "penalties": 0
        },
        {
            "id": 2,
            "name": "New Guy"
            "goals": 1,
            "assists": 1,
            "penalties": 1
        }
    },
    "team2": {
        "name": "Kraken Beers",
        "score": 9,
        "players": {
            "id": 22,
            "name": "Jimmy Dangles"
            "goals": 2,
            "assists": 1,
            "penalties": 0
        },
        {
            "id": 23,
            "name": "Donnie Shooter"
            "goals": 3,
            "assists": 1,
            "penalties": 1
        }
    }

}
```

**PUT /games/:id**

**DELETE /players/:id**

```
{
    "date": "Must match date of the game"
}
```



### Auth

Yes, will implement via firebase. Two permission levels:

- League managers who can do almost anything
- Team captains who can add players and edit players within their own team

## Roadmap

1. Build out homepage layout with mock data
2. Build out team pages with static data
3. Build out schedule page with static data
4. Build out standings page with static data
5. Build out stats page with static data
6. Setup database to collect per game results
7. Configure database to dynamically populate the standings and stats pages

## Nice-to-haves

Initially this will focus on creating a website for my league specifically as proof of concept. Ideally, it will include the functionality so that someone who is non technical can load in game results and those will dynamically flow to the rest of the pages. If all goes very well, I can then start looking into if this has potential as a platform. 
