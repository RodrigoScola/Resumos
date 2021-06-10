var charactersArr = ['1','2','3'];
var locationsArr = ['bathroom','room','outside'];
var timeOfDay = ['morning', 'afternoon', 'night', 'early morning']
randomOption = (arr) => arr[Math.floor(Math.random() * arr.length)];
let ideas = {
    characters:` ${randomOption(charactersArr)}`, 
    location: ` ${randomOption(locationsArr)}`,
    timeOfDay:` ${randomOption(timeOfDay)}`,
    mode: `${randomOption(charactersArr)}`,
    kinks: ` ${randomOption(charactersArr)}`,
}
module.exports = {
    name: 'idea',
    description: 'Ping',
    execute (message,args) {
        message.channel.send(JSON.stringify(ideas));
    },
};