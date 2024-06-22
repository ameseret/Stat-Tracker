//add more players to this and put this on the page Playere Stats which can be navigated to in the nav bar

const mockPlayerStats = [
    {
        id: 1,
        name: 'Luka Doncic',
        team: 'Dallas Mavericks',
        position: 'Guard',
        stats: {
            points: 33,
            rebounds: 11,
            assists: 10,
            blocks: 1,
            steals: 1,
            turnovers: 4,
            minutesPlayed: 32,
            fieldGoalPercentage: 42,
            threePointPercentage: 33,
            freeThrowPercentage: 74
        }
    },
    {
        id: 2,
        name: 'Kyrie Irving',
        team: 'Dallas Mavericks',
        position: 'Guard',
        stats: {
            points: 22,
            rebounds: 3,
            assists: 8,
            blocks: 0,
            steals: 1,
            turnovers: 0,
            minutesPlayed: 36,
            fieldGoalPercentage: 53,
            threePointPercentage: 44,
            freeThrowPercentage: 93
        }
    }
    
];

module.exports = mockPlayerStats;
