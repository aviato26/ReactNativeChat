
let today = new Date();
let yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

export default [
    {
        date: today,
        data: [ 
            {
                name: 'sam',
                description: 'something something something'
            },
            {
                name: 'ada',
                description: 'aaahahahahahah'
            },        
            {
                name: 'shay',
                description: 'blah blah blahg blah'
            }                
        ]
    },

    {
        date: yesterday,
        data: [
            {
                name: 'ted',
                description: 'aaaaaaaahhhhhhhahahahahahah'
            },

            {
                name: 'franklyn',
                description: 'okaleedokalee'
            }
        ]
    }
]