let boredArr = [
    '0',
    ' For the next 2 minutes, the only thought in your head is the phrase “I am a hypnotised plaything”, and you’ll quietly say it to yourself over and over again.',
    'The phrase “I am a hypnotised plaything” keeps popping into your head, and you get just a little bit tempted to say it quietly out loud.',
    'You now feel very aroused, or if you’re already aroused, you feel more aroused.',
    'You now feel very aroused, but you find that your body just doesn’t respond when you try to pleasure yourself. If you are already unable to pleasure yourself, you feel your desire to cum grow much stronger.',
    ' Until the next time you go into trance, you completely forget you’re playing this game. You’ll still be affected by it, but your conscious mind has completely forgotten about it for now.',
    'Your head fills with a pleasurable fog, that makes it just a little bit harder to put thoughts together, and adds a little temptation to stay in a blank foggy daze.',
    'You feel much more obedient and submissive.',
    'When you’re not paying attention to them, your hands start trying to find ways of putting yourself into trance. If they already are, they become much more insistent and hard to stop. Each time they do so you’ll feel compelled to say how they put you in trance.',
    'Your entire body starts feeling more sensitive to touch and pleasure and any other nice sensation.',
    'You find that you want to drop into trance more, but your mind will try to resist going into trance.',
    'You find that you don’t want to fall into trance, but it’s much harder for your mind to resist dropping.',
    'Your mind goes completely blank for 2 minutes.',
    'You’ll quietly stand up, find a clear spot in the room, and stand perfectly still and blank at attention for 30 seconds.',
    'Your body becomes completely frozen in place and unable to move for 30 seconds.',
    'Your mind starts to stick and fixate on things for a few seconds very easily. And this is even stronger when it comes to your own body.',
    'You begin to start saying your thoughts out loud, without realising you’re doing it, writing them out in brackets, (like this). If you already are, then you become aware that you’re saying your thoughts out loud as you still do so.',
    'When you’re not paying attention to them, your hands start to touch and play with your body on their own. If they already are, they become much more insistent and hard to stop.',
    ' You find yourself becomming more forgetful, things slip out of your head and memory much more easily.',
    'Nothing happens this time, but you feel certain that something has, you just don’t know what changed.',
    ' You feel much less obedient, and very resistant to being obedient, but you find the idea of being obedient very very hot and arousing deep down.',
    'For the next 5 minutes, you’ll be unable to resist anything that puts you into trance, or captures your attention, and then wake up normally after a few seconds. Any trances that result from this don’t count for this game.',   
];



module.exports = {
    name: 'imbored',
    description: 'Ping',
    execute (message,args) {
        
        function randomResult() {
         let result = Math.floor(Math.random() * boredArr.length);
        
         return result + '. ' + boredArr[result];
        
        }
        message.channel.send(randomResult());
    },
};