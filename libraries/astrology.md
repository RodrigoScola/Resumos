#language 
there are 4 elements that encapsulate the signs 
     fire = ['aries','leo','sagittarius'];
     earth = ['taurus','virgo','capricorn'];
     air = ['gemini','libra','aquarius'];
     water = ['cancer','scorpio','pisces'];
they can be divided by 
     cardinal || mutable || fixed 
     feminine || masculine     
     ruling planet

ruling planets
     sun 
          rules the sign LEO;
          planet of vitality, life, ego, creativity and expression
     moon 
          rules the sign CANCER;
          planet of emotions, intuition, moods, mothers and children
     mercury
          rules GEMINI and VIRGO 
          planet of intellect, logic, perception, thinking and communication
     Venus 
          rules TAURUS and LIBRA 
          planet of pleasure romance love femininity, beauty and art 
     Mars 
          rules Aries and to a lesser extent SCORPIO 
          planet of aggression, Drive, Power, Instincts, Masculinity
     Jupiter
          rules SAGITTARIUS and to a lesser extent PISCES 
          planet of growth, abundance, luck, expansion, higher learning, travel, Religion
     Saturn
          Rules Capricorn and to a lesser extent AQUARIUS 
          planet of structure, restrictions, time, authority, discipline limitations
     Uranus 
          rules AQUARIUS
          planet of Rebellion, Revolution, Individualism, Eccentricity, Humanitarianism, Science, Inventions, 
     Neptune 
          rules the sign PISCES    
          planet of Dreams, Illusion, delusion, spirituality, oneness, addictions
     Pluto
          rules the sign scorpio
          planet of power transformation, obsession, alchemy, healing,life and death
     
class Planet {
     constructor(name,options = {
          rules = '',
          lesser = []
     }) {
          this.name;
          this.rules = {
               primary: sign,
               lesser: [],
          }
     }
}

const planets = [new Planet('sun', {rules: 'LEO'}), new Planet('moon'), new Planet('mercury'),new Planet('venus'),new Planet('mars'), new Planet('jupiter'), new Planet('saturn'), new Planet('uranus'),new Planet('neptune'),new Planet('pluto')];